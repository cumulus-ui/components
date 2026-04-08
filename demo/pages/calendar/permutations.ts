import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import '../../../src/calendar/index.js';

@customElement('calendar-permutations-page')
export class CalendarPermutationsPage extends LitElement {
  static override styles = css`
    :host {
      display: block;
      padding: 24px;
      font-family: system-ui, sans-serif;
      line-height: 1.15;
    }
    h2 { margin-top: 0; margin-bottom: 0.83em; line-height: 1.15; }
    section {
      margin-bottom: 24px;
      padding: 16px;
      border: 1px solid #e9ebed;
      border-radius: 8px;
    }
    section h3 {
      margin-top: 0; margin-bottom: 1em;
      font-size: 14px; line-height: 1.15;
      color: #687078; text-transform: uppercase; letter-spacing: 0.5px;
    }
    .row { display: flex; flex-wrap: wrap; gap: 24px; align-items: flex-start; }
    .output { font-size: 13px; color: #687078; margin-top: 8px; }
  `;

  @state() private _value = '2025-06-15';
  @state() private _lastChange = '';

  private _isWeekday = (date: Date): boolean => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };

  override render() {
    return html`
      <h2>Calendar — Permutations</h2>

      <section>
        <h3>Default</h3>
        <div class="row">
          <cs-calendar
            aria-label="Default calendar"
            .value=${this._value}
            @change=${(e: CustomEvent<{ value: string }>) => {
              this._value = e.detail.value;
              this._lastChange = e.detail.value;
            }}
          ></cs-calendar>
        </div>
        <div class="output">Selected: ${this._value} | Last change: ${this._lastChange}</div>
      </section>

      <section>
        <h3>No selection</h3>
        <div class="row">
          <cs-calendar aria-label="No selection calendar"></cs-calendar>
        </div>
      </section>

      <section>
        <h3>Weekdays only (isDateEnabled)</h3>
        <div class="row">
          <cs-calendar
            aria-label="Weekdays only calendar"
            value="2025-06-10"
            .isDateEnabled=${this._isWeekday}
          ></cs-calendar>
        </div>
      </section>

      <section>
        <h3>Custom locale (de-DE)</h3>
        <div class="row">
          <cs-calendar
            aria-label="German calendar"
            locale="de-DE"
            start-of-week=${1}
            value="2025-06-15"
          ></cs-calendar>
        </div>
      </section>

      <section>
        <h3>i18n strings</h3>
        <div class="row">
          <cs-calendar
            aria-label="Calendar with i18n"
            value="2025-06-15"
            .i18nStrings=${{
              previousMonthAriaLabel: 'Go to previous month',
              nextMonthAriaLabel: 'Go to next month',
            }}
          ></cs-calendar>
        </div>
      </section>
    `;
  }
}

export const tagName = 'calendar-permutations-page';
