import { css, html, nothing, type PropertyValues, type TemplateResult } from 'lit';
import { property, state, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { CsBaseElement } from '../internal/base-element.js';
import { FormAssociatedMixin } from '../internal/mixins/form-associated.js';
import { fireNonCancelableEvent } from '../internal/events.js';
import { computePosition, flip, offset, shift } from '@floating-ui/dom';
import { componentStyles, sharedStyles } from './styles.js';
import { dateRangePickerRelativeRangeStyles } from '../internal/styles/date-range-picker-relative-range.js';
import type { DateRangePickerProps } from './interfaces.js';
import '../button/index.js';
import '../icon/index.js';

const Base = FormAssociatedMixin(CsBaseElement);

const hostStyles = css`:host { display: block; }`;

// ── Calendar helpers ────────────────────────────────────────────────────

function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

function getStartDayOfMonth(year: number, month: number, startOfWeek: number): number {
  const day = new Date(year, month, 1).getDay();
  return (day - startOfWeek + 7) % 7;
}

function getMonthName(year: number, month: number, locale?: string): string {
  const date = new Date(year, month, 1);
  try {
    return date.toLocaleDateString(locale || undefined, { month: 'long', year: 'numeric' });
  } catch {
    return date.toLocaleDateString(undefined, { month: 'long', year: 'numeric' });
  }
}

function toDateString(year: number, month: number, day: number): string {
  const m = String(month + 1).padStart(2, '0');
  const d = String(day).padStart(2, '0');
  return `${year}-${m}-${d}`;
}

function parseDateString(str: string): { year: number; month: number; day: number } | null {
  const parts = str.split('T')[0].split('-');
  if (parts.length < 3) return null;
  const year = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10) - 1;
  const day = parseInt(parts[2], 10);
  if (isNaN(year) || isNaN(month) || isNaN(day)) return null;
  return { year, month, day };
}

function formatDisplayValue(
  value: DateRangePickerProps.Value | null,
  relativeOptions: ReadonlyArray<DateRangePickerProps.RelativeOption>,
  formatRelativeRange?: (value: DateRangePickerProps.RelativeValue) => string,
): string {
  if (!value) return '';
  if (value.type === 'absolute') {
    const start = value.startDate.split('T')[0];
    const end = value.endDate.split('T')[0];
    return `${start} — ${end}`;
  }
  if (formatRelativeRange) {
    return formatRelativeRange(value);
  }
  const match = relativeOptions.find(
    o => o.key === (value as DateRangePickerProps.RelativeValue).key
  );
  if (match) {
    return `Last ${match.amount} ${match.unit}${match.amount !== 1 ? 's' : ''}`;
  }
  return `Last ${value.amount} ${value.unit}${value.amount !== 1 ? 's' : ''}`;
}

const DAY_LABELS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

type Mode = 'absolute' | 'relative';

// ── Component ───────────────────────────────────────────────────────────

export class CsDateRangePickerInternal extends Base {
  static override styles = [
    sharedStyles,
    componentStyles,
    dateRangePickerRelativeRangeStyles,
    hostStyles,
  ];

  // ── Public properties ───────────────────────────────────────────────

  @property({ attribute: false })
  override value: string = '';

  @property({ attribute: false })
  rangeValue: DateRangePickerProps.Value | null = null;

  @property({ attribute: false })
  relativeOptions: ReadonlyArray<DateRangePickerProps.RelativeOption> = [];

  @property({ attribute: false })
  isDateEnabled?: DateRangePickerProps.IsDateEnabledFunction;

  @property({ type: String })
  locale?: string;

  @property({ type: Number })
  startOfWeek = 0;

  @property({ type: String })
  placeholder = '';

  @property({ type: Boolean })
  invalid = false;

  @property({ type: String })
  rangeSelectorMode: DateRangePickerProps.RangeSelectorMode = 'default';

  @property({ type: String })
  override ariaLabel: string | null = null;

  @property({ attribute: false })
  isValidRange?: DateRangePickerProps.ValidationFunction;

  @property({ attribute: false })
  i18nStrings?: DateRangePickerProps.I18nStrings;

  // ── Internal state ──────────────────────────────────────────────────

  @state() private _open = false;
  @state() private _mode: Mode = 'absolute';
  @state() private _errorMessage = '';

  @state() private _leftYear = new Date().getFullYear();
  @state() private _leftMonth = new Date().getMonth();
  @state() private _rangeStart: string | null = null;
  @state() private _rangeEnd: string | null = null;
  @state() private _hoverDate: string | null = null;

  @state() private _selectedRelativeKey: string | null = null;

  @query('.trigger-button')
  private _triggerEl!: HTMLElement;

  @query('.dropdown')
  private _dropdownEl!: HTMLElement;

  private _cleanupOutsideClick: (() => void) | null = null;

  // ── Computed ────────────────────────────────────────────────────────

  private get _rightYear(): number {
    return this._leftMonth === 11 ? this._leftYear + 1 : this._leftYear;
  }

  private get _rightMonth(): number {
    return (this._leftMonth + 1) % 12;
  }

  private get _showModeSwitch(): boolean {
    return this.rangeSelectorMode === 'default';
  }

  private get _isAbsoluteOnly(): boolean {
    return this.rangeSelectorMode === 'absolute-only';
  }

  private get _isRelativeOnly(): boolean {
    return this.rangeSelectorMode === 'relative-only';
  }

  private get _effectiveMode(): Mode {
    if (this._isAbsoluteOnly) return 'absolute';
    if (this._isRelativeOnly) return 'relative';
    return this._mode;
  }

  // ── Lifecycle ───────────────────────────────────────────────────────

  override connectedCallback(): void {
    super.connectedCallback();
    this.addEventListener('keydown', this._onKeyDown);
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.removeEventListener('keydown', this._onKeyDown);
    this._removeOutsideClickListener();
  }

  override updated(changed: PropertyValues): void {
    super.updated(changed);
    if (changed.has('_open')) {
      if (this._open) {
        this._updatePosition();
        this._addOutsideClickListener();
      } else {
        this._removeOutsideClickListener();
      }
    }
  }

  override willUpdate(changed: PropertyValues): void {
    super.willUpdate(changed);
    if (changed.has('rangeValue') && this.rangeValue) {
      this._syncFromValue();
    }
  }

  focus(options?: FocusOptions): void {
    this._triggerEl?.focus(options);
  }

  // ── Sync value to internal state ────────────────────────────────────

  private _syncFromValue(): void {
    const v = this.rangeValue;
    if (!v) return;

    if (v.type === 'absolute') {
      this._mode = 'absolute';
      this._rangeStart = v.startDate.split('T')[0];
      this._rangeEnd = v.endDate.split('T')[0];
      const parsed = parseDateString(v.startDate);
      if (parsed) {
        this._leftYear = parsed.year;
        this._leftMonth = parsed.month;
      }
    } else {
      this._mode = 'relative';
      this._selectedRelativeKey = v.key ?? null;
    }
  }

  // ── Event handlers ──────────────────────────────────────────────────

  private _onTriggerClick = (): void => {
    if (this.disabled) return;
    this._open = !this._open;
    if (this._open) {
      this._errorMessage = '';
      this._syncFromValue();
      if (!this.rangeValue) {
        const now = new Date();
        this._leftYear = now.getFullYear();
        this._leftMonth = now.getMonth();
        this._rangeStart = null;
        this._rangeEnd = null;
        this._selectedRelativeKey = null;
      }
    }
  };

  private _onKeyDown = (e: KeyboardEvent): void => {
    if (e.key === 'Escape' && this._open) {
      e.stopPropagation();
      this._open = false;
      this._triggerEl?.focus();
    }
  };

  private _onModeSwitch(mode: Mode): void {
    this._mode = mode;
    this._errorMessage = '';
  }

  private _onPrevMonth = (): void => {
    if (this._leftMonth === 0) {
      this._leftMonth = 11;
      this._leftYear--;
    } else {
      this._leftMonth--;
    }
  };

  private _onNextMonth = (): void => {
    if (this._leftMonth === 11) {
      this._leftMonth = 0;
      this._leftYear++;
    } else {
      this._leftMonth++;
    }
  };

  private _onDayClick(dateStr: string): void {
    if (!this._rangeStart || this._rangeEnd) {
      this._rangeStart = dateStr;
      this._rangeEnd = null;
      this._hoverDate = null;
    } else {
      if (dateStr < this._rangeStart) {
        this._rangeEnd = this._rangeStart;
        this._rangeStart = dateStr;
      } else {
        this._rangeEnd = dateStr;
      }
      this._hoverDate = null;
    }
  }

  private _onDayHover(dateStr: string): void {
    if (this._rangeStart && !this._rangeEnd) {
      this._hoverDate = dateStr;
    }
  }

  private _onRelativeSelect(key: string): void {
    this._selectedRelativeKey = key;
    this._errorMessage = '';
  }

  private _onApply = (): void => {
    let newValue: DateRangePickerProps.Value | null = null;

    if (this._effectiveMode === 'absolute') {
      if (!this._rangeStart || !this._rangeEnd) {
        this._errorMessage = 'Please select both start and end dates.';
        return;
      }
      newValue = {
        type: 'absolute',
        startDate: this._rangeStart,
        endDate: this._rangeEnd,
      };
    } else {
      const option = this.relativeOptions.find(o => o.key === this._selectedRelativeKey);
      if (!option) {
        this._errorMessage = 'Please select a relative range.';
        return;
      }
      newValue = {
        type: 'relative',
        key: option.key,
        amount: option.amount,
        unit: option.unit,
      };
    }

    if (this.isValidRange) {
      const result = this.isValidRange(newValue);
      if (!result.valid) {
        this._errorMessage = result.errorMessage;
        return;
      }
    }

    this.rangeValue = newValue;
    this.value = JSON.stringify(newValue);
    fireNonCancelableEvent(
      this as unknown as HTMLElement,
      'change',
      { value: newValue } as DateRangePickerProps.ChangeDetail,
    );
    this._open = false;
    this._triggerEl?.focus();
  };

  private _onCancel = (): void => {
    this._open = false;
    this._errorMessage = '';
    this._triggerEl?.focus();
  };

  // ── Positioning ─────────────────────────────────────────────────────

  private async _updatePosition(): Promise<void> {
    await this.updateComplete;
    if (!this._triggerEl || !this._dropdownEl) return;

    const { x, y } = await computePosition(
      this._triggerEl,
      this._dropdownEl,
      {
        placement: 'bottom-start',
        strategy: 'fixed',
        middleware: [
          offset(4),
          flip({ padding: 8 }),
          shift({ padding: 8 }),
        ],
      }
    );

    Object.assign(this._dropdownEl.style, {
      left: `${x}px`,
      top: `${y}px`,
    });
  }

  private _addOutsideClickListener(): void {
    this._removeOutsideClickListener();
    const handler = (e: MouseEvent) => {
      const path = e.composedPath();
      if (!path.includes(this)) {
        this._open = false;
      }
    };
    requestAnimationFrame(() => {
      document.addEventListener('click', handler, true);
      this._cleanupOutsideClick = () => {
        document.removeEventListener('click', handler, true);
      };
    });
  }

  private _removeOutsideClickListener(): void {
    this._cleanupOutsideClick?.();
    this._cleanupOutsideClick = null;
  }

  // ── Calendar grid rendering ─────────────────────────────────────────

  private _isInRange(dateStr: string): boolean {
    const start = this._rangeStart;
    const end = this._rangeEnd || this._hoverDate;
    if (!start || !end) return false;

    const lo = start < end ? start : end;
    const hi = start < end ? end : start;
    return dateStr >= lo && dateStr <= hi;
  }

  private _isRangeEdge(dateStr: string): boolean {
    return dateStr === this._rangeStart || dateStr === this._rangeEnd;
  }

  private _isDayEnabled(year: number, month: number, day: number): boolean {
    if (!this.isDateEnabled) return true;
    return this.isDateEnabled(new Date(year, month, day));
  }

  private _renderCalendarGrid(year: number, month: number): TemplateResult {
    const startDay = getStartDayOfMonth(year, month, this.startOfWeek);
    const daysInMonth = getDaysInMonth(year, month);
    const monthLabel = getMonthName(year, month, this.locale);
    const reorderedDays = [
      ...DAY_LABELS.slice(this.startOfWeek),
      ...DAY_LABELS.slice(0, this.startOfWeek),
    ];

    const weeks: TemplateResult[] = [];
    let currentDay = 1;
    let weekCells: TemplateResult[] = [];

    for (let i = 0; i < startDay; i++) {
      weekCells.push(html`<td class="calendar-day calendar-day-empty"></td>`);
    }

    while (currentDay <= daysInMonth) {
      const dateStr = toDateString(year, month, currentDay);
      const inRange = this._isInRange(dateStr);
      const isEdge = this._isRangeEdge(dateStr);
      const enabled = this._isDayEnabled(year, month, currentDay);
      const isToday = this._isToday(year, month, currentDay);
      const day = currentDay;

      const dayClasses = {
        'calendar-day': true,
        'calendar-day-in-range': inRange,
        'calendar-day-range-edge': isEdge,
        'calendar-day-disabled': !enabled,
        'calendar-day-today': isToday,
      };

      weekCells.push(html`
        <td
          class=${classMap(dayClasses)}
          role="gridcell"
          aria-selected=${isEdge ? 'true' : 'false'}
          aria-disabled=${!enabled ? 'true' : 'false'}
          @click=${enabled ? () => this._onDayClick(dateStr) : undefined}
          @mouseenter=${() => this._onDayHover(dateStr)}
        >
          <span class="calendar-day-number">${day}</span>
        </td>
      `);

      if (weekCells.length === 7) {
        weeks.push(html`<tr class="calendar-week">${weekCells}</tr>`);
        weekCells = [];
      }

      currentDay++;
    }

    if (weekCells.length > 0) {
      while (weekCells.length < 7) {
        weekCells.push(html`<td class="calendar-day calendar-day-empty"></td>`);
      }
      weeks.push(html`<tr class="calendar-week">${weekCells}</tr>`);
    }

    return html`
      <div class="calendar-grid-wrapper">
        <div class="calendar-grid-header" aria-live="polite">
          ${monthLabel}
        </div>
        <table class="calendar-grid" role="grid" aria-label=${monthLabel}>
          <thead>
            <tr>
              ${reorderedDays.map(d => html`<th class="calendar-day-header" scope="col">${d}</th>`)}
            </tr>
          </thead>
          <tbody>
            ${weeks}
          </tbody>
        </table>
      </div>
    `;
  }

  private _isToday(year: number, month: number, day: number): boolean {
    const now = new Date();
    return now.getFullYear() === year && now.getMonth() === month && now.getDate() === day;
  }

  // ── Render ──────────────────────────────────────────────────────────

  private _renderModeSwitch(): TemplateResult | typeof nothing {
    if (!this._showModeSwitch) return nothing;

    const absLabel = this.i18nStrings?.absoluteModeTitle ?? 'Absolute';
    const relLabel = this.i18nStrings?.relativeModeTitle ?? 'Relative';

    return html`
      <div class="mode-switch" role="tablist"
        aria-label=${this.i18nStrings?.modeSelectionLabel ?? 'Date range mode'}>
        <button
          class=${classMap({ 'mode-tab': true, 'mode-tab-active': this._effectiveMode === 'absolute' })}
          role="tab"
          aria-selected=${this._effectiveMode === 'absolute' ? 'true' : 'false'}
          @click=${() => this._onModeSwitch('absolute')}
        >${absLabel}</button>
        <button
          class=${classMap({ 'mode-tab': true, 'mode-tab-active': this._effectiveMode === 'relative' })}
          role="tab"
          aria-selected=${this._effectiveMode === 'relative' ? 'true' : 'false'}
          @click=${() => this._onModeSwitch('relative')}
        >${relLabel}</button>
      </div>
    `;
  }

  private _renderAbsoluteMode(): TemplateResult {
    return html`
      <div class="absolute-mode" role="tabpanel">
        <div class="calendar-container">
          <div class="calendar-header">
            <cs-button variant="icon" icon-name="angle-left"
              aria-label=${this.i18nStrings?.previousMonthAriaLabel ?? 'Previous month'}
              @click=${this._onPrevMonth}></cs-button>
            <div class="calendar-header-pages-wrapper">
              <div class="calendar-header-page">
                ${getMonthName(this._leftYear, this._leftMonth, this.locale)}
              </div>
              <div class="calendar-header-page">
                ${getMonthName(this._rightYear, this._rightMonth, this.locale)}
              </div>
            </div>
            <cs-button variant="icon" icon-name="angle-right"
              aria-label=${this.i18nStrings?.nextMonthAriaLabel ?? 'Next month'}
              @click=${this._onNextMonth}></cs-button>
          </div>
          <div class="calendar-grids">
            ${this._renderCalendarGrid(this._leftYear, this._leftMonth)}
            ${this._renderCalendarGrid(this._rightYear, this._rightMonth)}
          </div>
        </div>
      </div>
    `;
  }

  private _renderRelativeMode(): TemplateResult {
    const heading = this.i18nStrings?.relativeRangeSelectionHeading ?? 'Choose a range';

    return html`
      <div class="relative-mode" role="tabpanel">
        <div class="relative-heading">${heading}</div>
        <div class="relative-options" role="radiogroup" aria-label=${heading}>
          ${this.relativeOptions.map(option => {
            const isSelected = this._selectedRelativeKey === option.key;
            const label = this.i18nStrings?.formatRelativeRange
              ? this.i18nStrings.formatRelativeRange(option)
              : `Last ${option.amount} ${option.unit}${option.amount !== 1 ? 's' : ''}`;

            return html`
              <label class=${classMap({
                'relative-option': true,
                'relative-option-selected': isSelected,
              })}>
                <input
                  type="radio"
                  name="relative-range"
                  class="relative-radio"
                  .checked=${isSelected}
                  @change=${() => this._onRelativeSelect(option.key)}
                />
                <span class="relative-option-label">${label}</span>
              </label>
            `;
          })}
        </div>
      </div>
    `;
  }

  private _renderFooter(): TemplateResult {
    const cancelLabel = this.i18nStrings?.cancelButtonLabel ?? 'Cancel';
    const applyLabel = this.i18nStrings?.applyButtonLabel ?? 'Apply';

    return html`
      <div class="footer">
        ${this._errorMessage ? html`
          <div class="error-message" role="alert">
            <cs-icon name="status-negative" size="small"></cs-icon>
            <span>${this._errorMessage}</span>
          </div>
        ` : nothing}
        <div class="footer-button-wrapper">
          <cs-button variant="link" @click=${this._onCancel}>${cancelLabel}</cs-button>
        </div>
        <div class="footer-button-wrapper">
          <cs-button variant="primary" @click=${this._onApply}>${applyLabel}</cs-button>
        </div>
      </div>
    `;
  }

  override render(): TemplateResult {
    const displayText = formatDisplayValue(
      this.rangeValue,
      this.relativeOptions,
      this.i18nStrings?.formatRelativeRange,
    );
    const showPlaceholder = !displayText;

    const triggerClasses = {
      'trigger-button': true,
      'trigger-disabled': this.disabled,
      'trigger-invalid': this.invalid,
    };

    const dropdownClasses = {
      'dropdown': true,
      'dropdown-content': true,
    };

    return html`
      <div class="root">
        <div class="label ${this.disabled ? '' : 'label-enabled'}">
          <button
            class=${classMap(triggerClasses)}
            type="button"
            aria-haspopup="dialog"
            aria-expanded=${this._open ? 'true' : 'false'}
            aria-label=${ifDefined(this.ariaLabel || undefined)}
            aria-disabled=${ifDefined(this.disabled ? 'true' : undefined)}
            ?disabled=${false}
            tabindex=${this.disabled ? -1 : 0}
            @click=${this._onTriggerClick}
          >
            <span class="trigger-flexbox">
              <span class="icon-wrapper">
                <cs-icon name="calendar"></cs-icon>
              </span>
              <span class="label-text ${showPlaceholder ? '' : 'label-token-nowrap'}">
                ${showPlaceholder ? (this.placeholder || '\u00a0') : displayText}
              </span>
            </span>
          </button>
        </div>
        ${this._open ? html`
          <div class=${classMap(dropdownClasses)} role="dialog"
            aria-label=${ifDefined(this.ariaLabel || 'Date range picker')}
            aria-modal="true">
            ${this._renderModeSwitch()}
            <div class="dropdown-body">
              ${this._effectiveMode === 'absolute'
                ? this._renderAbsoluteMode()
                : this._renderRelativeMode()
              }
            </div>
            ${this._renderFooter()}
          </div>
        ` : nothing}
      </div>
    `;
  }
}
