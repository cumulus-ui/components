import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../../../src/copy-to-clipboard/index.js';

@customElement('copy-to-clipboard-permutations-page')
export class CopyToClipboardPermutationsPage extends LitElement {
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

  override render() {
    return html`
      <h2>Copy to Clipboard — Permutations</h2>

      <section>
        <h3>Button variant</h3>
        <div class="row">
          <cs-copy-to-clipboard
            variant="button"
            text-to-copy="Hello, world!"
            copy-button-text="Copy text"
            copy-success-text="Copied!"
            copy-error-text="Failed"
          ></cs-copy-to-clipboard>
        </div>
      </section>

      <section>
        <h3>Icon variant</h3>
        <div class="row">
          <cs-copy-to-clipboard
            variant="icon"
            text-to-copy="Secret value"
            copy-button-text="Copy"
            copy-success-text="Copied!"
            copy-error-text="Failed"
          ></cs-copy-to-clipboard>
        </div>
      </section>

      <section>
        <h3>Disabled</h3>
        <div class="row">
          <cs-copy-to-clipboard
            variant="button"
            text-to-copy="Can't copy this"
            copy-button-text="Copy"
            copy-success-text="Copied!"
            copy-error-text="Failed"
            disabled
          ></cs-copy-to-clipboard>
        </div>
      </section>
    `;
  }
}

export const tagName = 'copy-to-clipboard-permutations-page';
