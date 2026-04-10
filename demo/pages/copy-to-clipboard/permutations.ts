import { html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { PermutationsPageBase } from '../base.js';
import '../../../src/copy-to-clipboard/index.js';

@customElement('copy-to-clipboard-permutations-page')
export class CopyToClipboardPermutationsPage extends PermutationsPageBase {
  static override styles = [...PermutationsPageBase.styles, css`
    .row { display: flex; flex-wrap: wrap; gap: 12px; align-items: center; }
    `];

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
