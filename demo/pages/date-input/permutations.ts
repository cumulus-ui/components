import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import '../../../src/date-input/index.js';

@customElement('date-input-permutations-page')
export class DateInputPermutationsPage extends LitElement {
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
    .row { display: flex; flex-wrap: wrap; gap: 12px; align-items: center; }
    cs-date-input { min-width: 200px; }
    .output { font-size: 13px; color: #687078; margin-top: 8px; }
  `;

  @state() private _value = '2025-06-15';

  override render() {
    return html`
      <h2>Date Input — Permutations</h2>

      <section>
        <h3>Default</h3>
        <div class="row">
          <cs-date-input aria-label="Default date input" placeholder="YYYY/MM/DD"></cs-date-input>
        </div>
      </section>

      <section>
        <h3>With value</h3>
        <div class="row">
          <cs-date-input
            aria-label="Date input with value"
            .value=${this._value}
            @change=${(e: CustomEvent<{ value: string }>) => { this._value = e.detail.value; }}
          ></cs-date-input>
        </div>
        <div class="output">Value: ${this._value}</div>
      </section>

      <section>
        <h3>Disabled</h3>
        <div class="row">
          <cs-date-input aria-label="Disabled date input" value="2025-01-01" disabled></cs-date-input>
        </div>
      </section>

      <section>
        <h3>Read-only</h3>
        <div class="row">
          <cs-date-input aria-label="Read-only date input" value="2025-01-01" read-only></cs-date-input>
        </div>
      </section>

      <section>
        <h3>Invalid</h3>
        <div class="row">
          <cs-date-input aria-label="Invalid date input" value="not-a-date" invalid></cs-date-input>
        </div>
      </section>

      <section>
        <h3>Warning</h3>
        <div class="row">
          <cs-date-input aria-label="Warning date input" value="2025-01-01" warning></cs-date-input>
        </div>
      </section>
    `;
  }
}

export const tagName = 'date-input-permutations-page';
