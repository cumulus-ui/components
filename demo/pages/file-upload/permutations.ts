import { html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { PermutationsPageBase } from '../base.js';
import '../../../src/file-upload/index.js';
import '../../../src/button/index.js';

@customElement('file-upload-permutations-page')
export class FileUploadPermutationsPage extends PermutationsPageBase {
  static override styles = [...PermutationsPageBase.styles, css`
    .row { display: flex; flex-direction: column; gap: 12px; }
    `];

  @state() private _files: File[] = [];
  @state() private _multiFiles: File[] = [];

  override render() {
    return html`
      <h2>File Upload — Permutations</h2>

      <section>
        <h3>Single file upload</h3>
        <div class="row">
          <cs-file-upload
            label="Upload document"
            constraint-text="Max file size: 10MB"
            .value=${this._files}
            @change=${(e: CustomEvent) => { this._files = e.detail.value; }}
          ></cs-file-upload>
        </div>
      </section>

      <section>
        <h3>Multiple file upload with metadata</h3>
        <div class="row">
          <cs-file-upload
            label="Upload images"
            multiple
            accept="image/*"
            show-file-size
            show-file-last-modified
            show-file-thumbnail
            constraint-text="Only image files are accepted"
            .value=${this._multiFiles}
            @change=${(e: CustomEvent) => { this._multiFiles = e.detail.value; }}
          ></cs-file-upload>
        </div>
      </section>

      <section>
        <h3>With error</h3>
        <div class="row">
          <cs-file-upload
            label="Upload file"
            error-text="File is required"
            .value=${[]}
          ></cs-file-upload>
        </div>
      </section>

      <section>
        <h3>With file errors</h3>
        <div class="row">
          <cs-file-upload
            label="Upload documents"
            multiple
            show-file-size
            .value=${this._multiFiles}
            .fileErrors=${this._multiFiles.map((_, i) => i === 0 ? 'File too large' : null)}
            @change=${(e: CustomEvent) => { this._multiFiles = e.detail.value; }}
          ></cs-file-upload>
        </div>
      </section>

      <section>
        <h3>Disabled</h3>
        <div class="row">
          <cs-file-upload
            label="Disabled upload"
            disabled
            .value=${[]}
          ></cs-file-upload>
        </div>
      </section>
    `;
  }
}

export const tagName = 'file-upload-permutations-page';
