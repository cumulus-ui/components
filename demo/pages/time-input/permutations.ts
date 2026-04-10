import { html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { PermutationsPageBase } from '../base.js';
import '../../../src/time-input/index.js';

@customElement('time-input-permutations-page')
export class TimeInputPermutationsPage extends PermutationsPageBase {
  static override styles = [...PermutationsPageBase.styles, css`
    .row { display: flex; flex-wrap: wrap; gap: 12px; align-items: center; }
    cs-time-input { min-width: 150px; }
    `];

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
