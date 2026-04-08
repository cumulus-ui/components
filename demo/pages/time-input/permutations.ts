import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import '../../../src/time-input/index.js';

@customElement('time-input-permutations-page')
export class TimeInputPermutationsPage extends LitElement {
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
    cs-time-input { min-width: 150px; }
  `;

  @state() private _value = '14:30';

  override render() {
    return html`
      <h2>TimeInput — Permutations</h2>

      <section>
        <h3>Default (hh:mm)</h3>
        <div class="row">
          <cs-time-input aria-label="Time input hh:mm" format="hh:mm"></cs-time-input>
        </div>
      </section>

      <section>
        <h3>With seconds (hh:mm:ss)</h3>
        <div class="row">
          <cs-time-input aria-label="Time input hh:mm:ss" format="hh:mm:ss"></cs-time-input>
        </div>
      </section>

      <section>
        <h3>With value</h3>
        <div class="row">
          <cs-time-input
            aria-label="Time input with value"
            .value=${this._value}
            @change=${(e: CustomEvent<{ value: string }>) => { this._value = e.detail.value; }}
          ></cs-time-input>
        </div>
      </section>

      <section>
        <h3>Disabled</h3>
        <div class="row">
          <cs-time-input aria-label="Disabled time input" value="09:00" disabled></cs-time-input>
        </div>
      </section>

      <section>
        <h3>Read-only</h3>
        <div class="row">
          <cs-time-input aria-label="Read-only time input" value="17:45" read-only></cs-time-input>
        </div>
      </section>

      <section>
        <h3>Invalid</h3>
        <div class="row">
          <cs-time-input aria-label="Invalid time input" value="99:99" invalid></cs-time-input>
        </div>
      </section>

      <section>
        <h3>Warning</h3>
        <div class="row">
          <cs-time-input aria-label="Warning time input" value="23:59" warning></cs-time-input>
        </div>
      </section>
    `;
  }
}

export const tagName = 'time-input-permutations-page';
