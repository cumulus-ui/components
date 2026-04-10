import { html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { PermutationsPageBase } from '../base.js';
import '../../../src/date-input/index.js';

@customElement('date-input-permutations-page')
export class DateInputPermutationsPage extends PermutationsPageBase {
  static override styles = [...PermutationsPageBase.styles, css`
    .row { display: flex; flex-wrap: wrap; gap: 12px; align-items: center; }
    cs-date-input { min-width: 200px; }
    .output { font-size: 13px; color: #687078; margin-top: 8px; }
    `];

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
