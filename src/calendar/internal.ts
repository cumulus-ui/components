import { css, html, nothing, type PropertyValues, type TemplateResult } from 'lit';
import { property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { CsBaseElement } from '../internal/base-element.js';
import { fireNonCancelableEvent } from '../internal/events.js';
import { componentStyles, sharedStyles } from './styles.js';
import type { CalendarProps } from './interfaces.js';
import '../button/index.js';

const hostStyles = css`:host { display: block; }`;

interface CalendarDay {
  date: string;
  day: number;
  currentMonth: boolean;
  today: boolean;
}

function pad2(n: number): string {
  return String(n).padStart(2, '0');
}

function toISODate(d: Date): string {
  return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
}

function todayISO(): string {
  return toISODate(new Date());
}

export class CsCalendarInternal extends CsBaseElement {
  static override styles = [sharedStyles, componentStyles, hostStyles];

  @property({ type: String })
  value = '';

  @property({ type: String })
  locale = 'en-US';

  @property({ type: Number })
  startOfWeek = 0;

  @property({ type: String })
  granularity = 'day';

  @property({ attribute: false })
  isDateEnabled?: CalendarProps.IsDateEnabledFunction;

  @property({ attribute: false })
  dateDisabledReason?: CalendarProps.DateDisabledReasonFunction;

  @property({ type: String })
  override ariaLabel: string | null = null;

  @property({ type: String })
  ariaLabelledby: string | null = null;

  @property({ type: String })
  ariaDescribedby: string | null = null;

  @property({ attribute: false })
  i18nStrings?: CalendarProps.I18nStrings;

  @state()
  private _displayedMonth: number = new Date().getMonth();

  @state()
  private _displayedYear: number = new Date().getFullYear();

  @state()
  private _focusedDate = '';

  override willUpdate(changed: PropertyValues): void {
    super.willUpdate(changed);
    if (changed.has('value') && this.value) {
      const parts = this.value.split('-');
      if (parts.length >= 2) {
        const year = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10) - 1;
        if (!isNaN(year) && !isNaN(month)) {
          this._displayedYear = year;
          this._displayedMonth = month;
        }
      }
    }
  }

  private _getMonthTitle(): string {
    const date = new Date(this._displayedYear, this._displayedMonth, 1);
    return new Intl.DateTimeFormat(this.locale, {
      month: 'long',
      year: 'numeric',
    }).format(date);
  }

  private _getDayNames(): string[] {
    const formatter = new Intl.DateTimeFormat(this.locale, { weekday: 'short' });
    const names: string[] = [];
    for (let i = 0; i < 7; i++) {
      const dayIndex = (this.startOfWeek + i) % 7;
      // Jan 1 2017 is a Sunday (day 0)
      const date = new Date(2017, 0, 1 + dayIndex);
      names.push(formatter.format(date));
    }
    return names;
  }

  private _getCalendarWeeks(): CalendarDay[][] {
    const year = this._displayedYear;
    const month = this._displayedMonth;
    const firstOfMonth = new Date(year, month, 1);
    const today = todayISO();

    let startOffset = firstOfMonth.getDay() - this.startOfWeek;
    if (startOffset < 0) startOffset += 7;

    const weeks: CalendarDay[][] = [];
    const cursor = new Date(year, month, 1 - startOffset);

    for (let w = 0; w < 6; w++) {
      const days: CalendarDay[] = [];
      for (let d = 0; d < 7; d++) {
        const dateStr = toISODate(cursor);
        days.push({
          date: dateStr,
          day: cursor.getDate(),
          currentMonth: cursor.getMonth() === month,
          today: dateStr === today,
        });
        cursor.setDate(cursor.getDate() + 1);
      }
      weeks.push(days);
    }
    return weeks;
  }

  private _isEnabled(dateStr: string): boolean {
    if (!this.isDateEnabled) return true;
    const [y, m, d] = dateStr.split('-').map(Number);
    return this.isDateEnabled(new Date(y, m - 1, d));
  }

  private _onPrevClick = (e: Event): void => {
    if (!(e instanceof CustomEvent)) return;
    this._onPrevMonth();
  };

  private _onPrevMonth(): void {
    if (this._displayedMonth === 0) {
      this._displayedMonth = 11;
      this._displayedYear--;
    } else {
      this._displayedMonth--;
    }
  }

  private _onNextClick = (e: Event): void => {
    if (!(e instanceof CustomEvent)) return;
    this._onNextMonth();
  };

  private _onNextMonth(): void {
    if (this._displayedMonth === 11) {
      this._displayedMonth = 0;
      this._displayedYear++;
    } else {
      this._displayedMonth++;
    }
  }

  private _selectDate(dateStr: string): void {
    if (!this._isEnabled(dateStr)) return;
    this.value = dateStr;
    fireNonCancelableEvent<CalendarProps.ChangeDetail>(
      this as unknown as HTMLElement,
      'change',
      { value: dateStr },
    );
  }

  private _onDateClick(dateStr: string): void {
    this._selectDate(dateStr);
  }

  private _onGridKeyDown = (e: KeyboardEvent): void => {
    let focused = this._focusedDate || this.value;
    if (!focused) {
      focused = `${this._displayedYear}-${pad2(this._displayedMonth + 1)}-01`;
    }

    const [y, m, d] = focused.split('-').map(Number);
    const date = new Date(y, m - 1, d);
    let handled = true;

    switch (e.key) {
      case 'ArrowLeft':
        date.setDate(date.getDate() - 1);
        break;
      case 'ArrowRight':
        date.setDate(date.getDate() + 1);
        break;
      case 'ArrowUp':
        date.setDate(date.getDate() - 7);
        break;
      case 'ArrowDown':
        date.setDate(date.getDate() + 7);
        break;
      case 'PageUp':
        if (e.shiftKey) {
          date.setFullYear(date.getFullYear() - 1);
        } else {
          date.setMonth(date.getMonth() - 1);
        }
        break;
      case 'PageDown':
        if (e.shiftKey) {
          date.setFullYear(date.getFullYear() + 1);
        } else {
          date.setMonth(date.getMonth() + 1);
        }
        break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        this._selectDate(focused);
        return;
      default:
        handled = false;
    }

    if (handled) {
      e.preventDefault();
      const newDate = toISODate(date);
      this._focusedDate = newDate;
      this._displayedMonth = date.getMonth();
      this._displayedYear = date.getFullYear();

      this.updateComplete.then(() => {
        const cell = this.shadowRoot?.querySelector(
          `[data-date="${newDate}"]`,
        ) as HTMLElement | null;
        cell?.focus();
      });
    }
  };

  private _getTabIndex(day: CalendarDay): number {
    if (day.date === this.value) return 0;
    if (day.date === this._focusedDate) return 0;
    if (!this.value && !this._focusedDate && day.today && day.currentMonth)
      return 0;
    return -1;
  }

  override render(): TemplateResult {
    const weeks = this._getCalendarWeeks();
    const dayNames = this._getDayNames();
    const monthTitle = this._getMonthTitle();

    const prevLabel =
      this.i18nStrings?.previousMonthAriaLabel ?? 'Previous month';
    const nextLabel = this.i18nStrings?.nextMonthAriaLabel ?? 'Next month';

    return html`
      <div
        class="calendar"
        role="group"
        aria-label=${ifDefined(this.ariaLabel || undefined)}
        aria-labelledby=${ifDefined(
          !this.ariaLabel ? (this.ariaLabelledby || undefined) : undefined,
        )}
        aria-describedby=${ifDefined(this.ariaDescribedby || undefined)}
      >
        <div class="calendar-inner">
          <div class="calendar-header">
            <cs-button
              class="calendar-prev-btn"
              variant="icon"
              icon-name="angle-left"
              aria-label=${prevLabel}
              @click=${this._onPrevClick}
            ></cs-button>
            <span class="calendar-header-title">${monthTitle}</span>
            <cs-button
              class="calendar-next-btn"
              variant="icon"
              icon-name="angle-right"
              aria-label=${nextLabel}
              @click=${this._onNextClick}
            ></cs-button>
          </div>
          <table
            class="calendar-grid"
            role="grid"
            @keydown=${this._onGridKeyDown}
          >
            <thead>
              <tr>
                ${dayNames.map(
                  (name) => html`
                    <th class="calendar-grid-cell calendar-date-header" scope="col">
                      ${name}
                    </th>
                  `,
                )}
              </tr>
            </thead>
            <tbody>
              ${weeks.map(
                (week) => html`
                  <tr class="calendar-row">
                    ${week.map((day) => {
                      const isSelected = day.date === this.value;
                      const isEnabled =
                        day.currentMonth && this._isEnabled(day.date);
                      const classes = {
                        'calendar-date': true,
                        'calendar-date-current-page': day.currentMonth,
                        'calendar-date-current': day.today,
                        'calendar-date-selected': isSelected,
                        'calendar-date-enabled': isEnabled,
                      };

                      return html`
                        <td
                          class=${classMap(classes)}
                          role="gridcell"
                          tabindex=${this._getTabIndex(day)}
                          aria-selected=${isSelected ? 'true' : 'false'}
                          aria-disabled=${!isEnabled ? 'true' : nothing}
                          data-date=${day.date}
                          @click=${() => this._onDateClick(day.date)}
                        >
                          <span class="date-inner">${day.day}</span>
                        </td>
                      `;
                    })}
                  </tr>
                `,
              )}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }
}
