import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import '../../../src/toggle-button/index.js';

@customElement('toggle-button-permutations-page')
export class ToggleButtonPermutationsPage extends LitElement {
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
    .row { display: flex; flex-wrap: wrap; gap: 12px; align-items: center; }
  `;

  @state() private _pressed1 = false;
  @state() private _pressed2 = true;
  @state() private _pressed3 = false;

  override render() {
    return html`
      <h2>Toggle Button — Permutations</h2>

      <section>
        <h3>Normal variant</h3>
        <div class="row">
          <cs-toggle-button
            variant="normal"
            icon-name="thumbs-up"
            pressed-icon-name="thumbs-up-filled"
            .pressed=${this._pressed1}
            @change=${(e: CustomEvent) => { this._pressed1 = e.detail.pressed; }}
          >Like</cs-toggle-button>
          <cs-toggle-button
            variant="normal"
            icon-name="star"
            pressed-icon-name="star-filled"
            .pressed=${this._pressed2}
            @change=${(e: CustomEvent) => { this._pressed2 = e.detail.pressed; }}
          >Favorite</cs-toggle-button>
        </div>
      </section>

      <section>
        <h3>Icon variant</h3>
        <div class="row">
          <cs-toggle-button
            variant="icon"
            icon-name="thumbs-up"
            pressed-icon-name="thumbs-up-filled"
            .pressed=${this._pressed3}
            aria-label="Like"
            @change=${(e: CustomEvent) => { this._pressed3 = e.detail.pressed; }}
          ></cs-toggle-button>
        </div>
      </section>

      <section>
        <h3>Disabled</h3>
        <div class="row">
          <cs-toggle-button variant="normal" disabled icon-name="star">Disabled unpressed</cs-toggle-button>
          <cs-toggle-button variant="normal" disabled pressed icon-name="star-filled">Disabled pressed</cs-toggle-button>
        </div>
      </section>
    `;
  }
}

export const tagName = 'toggle-button-permutations-page';
