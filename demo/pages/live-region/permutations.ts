import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import '../../../src/live-region/index.js';

@customElement('live-region-permutations-page')
export class LiveRegionPermutationsPage extends LitElement {
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
  `;

  @state() private _politeMessage = 'Polite announcement';
  @state() private _assertiveMessage = 'Assertive announcement';
  private _counter = 0;

  private _updatePolite(): void {
    this._counter++;
    this._politeMessage = `Polite update #${this._counter}`;
  }

  private _updateAssertive(): void {
    this._counter++;
    this._assertiveMessage = `Assertive update #${this._counter}`;
  }

  override render() {
    return html`
      <h2>Live Region — Permutations</h2>

      <section>
        <h3>Polite (visible)</h3>
        <cs-live-region>
          ${this._politeMessage}
        </cs-live-region>
        <br />
        <button @click=${this._updatePolite}>Update polite</button>
      </section>

      <section>
        <h3>Assertive (visible)</h3>
        <cs-live-region assertive>
          ${this._assertiveMessage}
        </cs-live-region>
        <br />
        <button @click=${this._updateAssertive}>Update assertive</button>
      </section>

      <section>
        <h3>Hidden (screen reader only)</h3>
        <cs-live-region hidden>
          Hidden announcement for screen readers
        </cs-live-region>
        <p>The live region above is visually hidden but available to screen readers.</p>
      </section>

      <section>
        <h3>Span tag</h3>
        <cs-live-region tag-name="span">
          Inline live region with span tag
        </cs-live-region>
      </section>
    `;
  }
}

export const tagName = 'live-region-permutations-page';
