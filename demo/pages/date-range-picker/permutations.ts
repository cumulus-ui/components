import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import '../../../src/date-range-picker/index.js';
import type { DateRangePickerProps } from '../../../src/date-range-picker/interfaces.js';

const RELATIVE_OPTIONS: ReadonlyArray<DateRangePickerProps.RelativeOption> = [
  { key: 'last-5-min', amount: 5, unit: 'minute', type: 'relative' },
  { key: 'last-30-min', amount: 30, unit: 'minute', type: 'relative' },
  { key: 'last-1-hour', amount: 1, unit: 'hour', type: 'relative' },
  { key: 'last-6-hours', amount: 6, unit: 'hour', type: 'relative' },
  { key: 'last-1-day', amount: 1, unit: 'day', type: 'relative' },
  { key: 'last-7-days', amount: 7, unit: 'day', type: 'relative' },
  { key: 'last-30-days', amount: 30, unit: 'day', type: 'relative' },
];

function validateRange(value: DateRangePickerProps.Value | null): DateRangePickerProps.ValidationResult {
  if (!value) return { valid: false, errorMessage: 'No range selected.' };
  if (value.type === 'absolute') {
    if (!value.startDate || !value.endDate) {
      return { valid: false, errorMessage: 'Start and end dates are required.' };
    }
    if (value.startDate > value.endDate) {
      return { valid: false, errorMessage: 'Start date must be before end date.' };
    }
  }
  return { valid: true };
}

@customElement('date-range-picker-permutations-page')
export class DateRangePickerPermutationsPage extends LitElement {
  static override styles = css`
    :host {
      display: block;
      padding: 24px;
      font-family: system-ui, sans-serif;
      line-height: 1.15;
    }
    h2 {
      margin-top: 0;
      margin-bottom: 0.83em;
      line-height: 1.15;
    }
    section {
      margin-bottom: 24px;
      padding: 16px;
      border: 1px solid #e9ebed;
      border-radius: 8px;
    }
    section h3 {
      margin-top: 0;
      margin-bottom: 1em;
      font-size: 14px;
      line-height: 1.15;
      color: #687078;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .status {
      margin-top: 8px;
      font-size: 13px;
      color: #687078;
    }
  `;

  @state()
  private _defaultValue: DateRangePickerProps.Value | null = null;

  @state()
  private _absoluteValue: DateRangePickerProps.Value | null = {
    type: 'absolute',
    startDate: '2025-01-01',
    endDate: '2025-01-31',
  };

  @state()
  private _relativeValue: DateRangePickerProps.Value | null = null;

  @state()
  private _dateOnlyValue: DateRangePickerProps.Value | null = null;

  private _onDefaultChange(e: CustomEvent<DateRangePickerProps.ChangeDetail>) {
    this._defaultValue = e.detail.value;
  }

  private _onAbsoluteChange(e: CustomEvent<DateRangePickerProps.ChangeDetail>) {
    this._absoluteValue = e.detail.value;
  }

  private _onRelativeChange(e: CustomEvent<DateRangePickerProps.ChangeDetail>) {
    this._relativeValue = e.detail.value;
  }

  private _onDateOnlyChange(e: CustomEvent<DateRangePickerProps.ChangeDetail>) {
    this._dateOnlyValue = e.detail.value;
  }

  override render() {
    return html`
      <h2>DateRangePicker — Permutations</h2>

      <section>
        <h3>Default (Absolute + Relative)</h3>
        <cs-date-range-picker
          placeholder="Filter by date range"
          .rangeValue=${this._defaultValue}
          .relativeOptions=${RELATIVE_OPTIONS}
          .isValidRange=${validateRange}
          aria-label="Default date range"
          @change=${this._onDefaultChange}
        ></cs-date-range-picker>
        <div class="status">Value: ${this._defaultValue ? JSON.stringify(this._defaultValue) : 'null'}</div>
      </section>

      <section>
        <h3>Absolute Only (Pre-selected)</h3>
        <cs-date-range-picker
          placeholder="Select date range"
          range-selector-mode="absolute-only"
          .rangeValue=${this._absoluteValue}
          .relativeOptions=${[]}
          .isValidRange=${validateRange}
          aria-label="Absolute date range"
          @change=${this._onAbsoluteChange}
        ></cs-date-range-picker>
        <div class="status">Value: ${this._absoluteValue ? JSON.stringify(this._absoluteValue) : 'null'}</div>
      </section>

      <section>
        <h3>Relative Only</h3>
        <cs-date-range-picker
          placeholder="Choose relative range"
          range-selector-mode="relative-only"
          .rangeValue=${this._relativeValue}
          .relativeOptions=${RELATIVE_OPTIONS}
          .isValidRange=${validateRange}
          aria-label="Relative date range"
          @change=${this._onRelativeChange}
        ></cs-date-range-picker>
        <div class="status">Value: ${this._relativeValue ? JSON.stringify(this._relativeValue) : 'null'}</div>
      </section>

      <section>
        <h3>Disabled</h3>
        <cs-date-range-picker
          placeholder="Disabled picker"
          disabled
          .rangeValue=${null}
          .relativeOptions=${RELATIVE_OPTIONS}
          .isValidRange=${validateRange}
          aria-label="Disabled date range"
        ></cs-date-range-picker>
      </section>

      <section>
        <h3>Invalid</h3>
        <cs-date-range-picker
          placeholder="Invalid picker"
          invalid
          .rangeValue=${null}
          .relativeOptions=${RELATIVE_OPTIONS}
          .isValidRange=${validateRange}
          aria-label="Invalid date range"
        ></cs-date-range-picker>
      </section>

      <section>
        <h3>Date Only Mode</h3>
        <cs-date-range-picker
          placeholder="Date only range"
          range-selector-mode="absolute-only"
          .rangeValue=${this._dateOnlyValue}
          .relativeOptions=${[]}
          .isValidRange=${validateRange}
          aria-label="Date only range"
          @change=${this._onDateOnlyChange}
        ></cs-date-range-picker>
        <div class="status">Value: ${this._dateOnlyValue ? JSON.stringify(this._dateOnlyValue) : 'null'}</div>
      </section>
    `;
  }
}

export const tagName = 'date-range-picker-permutations-page';
