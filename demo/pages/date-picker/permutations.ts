import { html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { PermutationsPageBase } from '../base.js';
import '../../../src/date-picker/index.js';

@customElement('date-picker-permutations-page')
export class DatePickerPermutationsPage extends PermutationsPageBase {
  static override styles = [...PermutationsPageBase.styles, css`
    .row { display: flex; flex-wrap: wrap; gap: 12px; align-items: center; }
    .output { font-size: 13px; color: #687078; margin-top: 8px; }
    `];

  @state() private _value = '2025-06-15';

  private _isWeekday = (date: Date): boolean => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };

  override render() {
    return html`
      <h2>Date Picker — Permutations</h2>

      <section>
        <h3>Default</h3>
        <div class="row">
          <cs-date-picker
            aria-label="Default date picker"
            .value=${this._value}
            @change=${(e: CustomEvent<{ value: string }>) => { this._value = e.detail.value; }}
          ></cs-date-picker>
        </div>
        <div class="output">Value: ${this._value}</div>
      </section>

      <section>
        <h3>Empty</h3>
        <div class="row">
          <cs-date-picker
            aria-label="Empty date picker"
            placeholder="Pick a date"
          ></cs-date-picker>
        </div>
      </section>

      <section>
        <h3>Disabled</h3>
        <div class="row">
          <cs-date-picker
            aria-label="Disabled date picker"
            value="2025-01-01"
            disabled
          ></cs-date-picker>
        </div>
      </section>

      <section>
        <h3>Read-only</h3>
        <div class="row">
          <cs-date-picker
            aria-label="Read-only date picker"
            value="2025-01-01"
            read-only
          ></cs-date-picker>
        </div>
      </section>

      <section>
        <h3>Invalid</h3>
        <div class="row">
          <cs-date-picker
            aria-label="Invalid date picker"
            value="invalid"
            invalid
          ></cs-date-picker>
        </div>
      </section>

      <section>
        <h3>Weekdays only</h3>
        <div class="row">
          <cs-date-picker
            aria-label="Weekdays only date picker"
            value="2025-06-10"
            .isDateEnabled=${this._isWeekday}
          ></cs-date-picker>
        </div>
      </section>

      <section>
        <h3>Custom locale (ja-JP)</h3>
        <div class="row">
          <cs-date-picker
            aria-label="Japanese date picker"
            value="2025-06-15"
            locale="ja-JP"
          ></cs-date-picker>
        </div>
      </section>
    `;
  }
}

export const tagName = 'date-picker-permutations-page';
