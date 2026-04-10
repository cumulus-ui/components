import { html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { PermutationsPageBase } from '../base.js';
import '../../../src/file-input/index.js';

@customElement('file-input-permutations-page')
export class FileInputPermutationsPage extends PermutationsPageBase {
  static override styles = [...PermutationsPageBase.styles, css`
    .row { display: flex; flex-wrap: wrap; gap: 12px; align-items: center; }
    `];

  override render() {
    return html`
      <h2>File Input — Permutations</h2>

      <section>
        <h3>Button variant</h3>
        <div class="row">
          <cs-file-input variant="button" aria-label="Choose file">Choose file</cs-file-input>
          <cs-file-input variant="button" multiple aria-label="Choose files">Choose files</cs-file-input>
        </div>
      </section>

      <section>
        <h3>Icon variant</h3>
        <div class="row">
          <cs-file-input variant="icon" aria-label="Upload file"></cs-file-input>
        </div>
      </section>

      <section>
        <h3>With accept filter</h3>
        <div class="row">
          <cs-file-input variant="button" accept=".png,.jpg,.jpeg" aria-label="Choose image">Choose image</cs-file-input>
        </div>
      </section>

      <section>
        <h3>Disabled</h3>
        <div class="row">
          <cs-file-input variant="button" disabled aria-label="Disabled file input">Choose file</cs-file-input>
        </div>
      </section>
    `;
  }
}

export const tagName = 'file-input-permutations-page';
