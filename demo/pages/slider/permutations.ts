import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import '../../../src/slider/index.js';

@customElement('slider-permutations-page')
export class SliderPermutationsPage extends LitElement {
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
      margin-top: 0; margin-bottom: 1em; font-size: 14px; line-height: 1.15;
      color: #687078; text-transform: uppercase; letter-spacing: 0.5px;
    }
    .row { display: flex; flex-direction: column; gap: 12px; max-width: 400px; }
    .value { font-size: 14px; color: #424650; }
  `;

  @state() private _value1 = 50;
  @state() private _value2 = 25;

  override render() {
    return html`
      <h2>Slider — Permutations</h2>

      <section>
        <h3>Default (0–100)</h3>
        <div class="row">
          <cs-slider
            .value=${this._value1}
            min="0"
            max="100"
            step="1"
            aria-label="Volume"
            @change=${(e: CustomEvent) => { this._value1 = e.detail.value; }}
          ></cs-slider>
          <span class="value">Value: ${this._value1}</span>
        </div>
      </section>

      <section>
        <h3>Custom range (0–50, step 5)</h3>
        <div class="row">
          <cs-slider
            .value=${this._value2}
            min="0"
            max="50"
            step="5"
            aria-label="Brightness"
            @change=${(e: CustomEvent) => { this._value2 = e.detail.value; }}
          ></cs-slider>
          <span class="value">Value: ${this._value2}</span>
        </div>
      </section>

      <section>
        <h3>Disabled</h3>
        <div class="row">
          <cs-slider value="30" min="0" max="100" disabled aria-label="Disabled slider"></cs-slider>
        </div>
      </section>
    `;
  }
}

export const tagName = 'slider-permutations-page';
