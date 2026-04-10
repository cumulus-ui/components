import { html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { PermutationsPageBase } from '../base.js';
import '../../../src/file-dropzone/index.js';

@customElement('file-dropzone-permutations-page')
export class FileDropzonePermutationsPage extends PermutationsPageBase {
  static override styles = [...PermutationsPageBase.styles, css`
    .result {
      margin-top: 8px;
      padding: 8px;
      background: #f2f3f3;
      border-radius: 4px;
      font-size: 13px;
      font-family: monospace;
    }
    `];

  @state()
  private _droppedFiles: string[] = [];

  private _onFilesChanged(e: CustomEvent<{ value: File[] }>): void {
    this._droppedFiles = e.detail.value.map(
      (f) => `${f.name} (${(f.size / 1024).toFixed(1)} KB)`
    );
  }

  override render() {
    return html`
      <h2>FileDropzone — Permutations</h2>

      <section>
        <h3>Default</h3>
        <cs-file-dropzone @change=${this._onFilesChanged}>
          Drop files here
        </cs-file-dropzone>
        ${this._droppedFiles.length > 0
          ? html`<div class="result" id="drop-result">
              Dropped: ${this._droppedFiles.join(', ')}
            </div>`
          : ''}
      </section>

      <section>
        <h3>With Custom Content</h3>
        <cs-file-dropzone>
          <div style="padding: 20px;">
            <strong>Drag &amp; drop your documents</strong>
            <br />
            <small>Supports PDF, DOCX, and images</small>
          </div>
        </cs-file-dropzone>
      </section>
    `;
  }
}

export const tagName = 'file-dropzone-permutations-page';
