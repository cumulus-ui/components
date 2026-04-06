import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import '../../../src/file-dropzone/index.js';

@customElement('file-dropzone-permutations-page')
export class FileDropzonePermutationsPage extends LitElement {
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
    .result {
      margin-top: 8px;
      padding: 8px;
      background: #f2f3f3;
      border-radius: 4px;
      font-size: 13px;
      font-family: monospace;
    }
  `;

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
