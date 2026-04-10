import { html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { PermutationsPageBase } from '../base.js';
import '../../../src/file-token-group/index.js';
import type { FileTokenGroupProps } from '../../../src/file-token-group/interfaces.js';

function makeFile(name: string, size: number, type = 'application/octet-stream'): File {
  const blob = new Blob([new ArrayBuffer(size)], { type });
  return new File([blob], name, { type, lastModified: Date.now() - Math.random() * 86400000 * 30 });
}

@customElement('file-token-group-permutations-page')
export class FileTokenGroupPermutationsPage extends PermutationsPageBase {

  @state()
  private _basicItems: FileTokenGroupProps.Item[] = [
    { file: makeFile('report.pdf', 1024 * 512) },
    { file: makeFile('data.csv', 2048) },
    { file: makeFile('notes.txt', 128) },
  ];

  @state()
  private _errorItems: FileTokenGroupProps.Item[] = [
    { file: makeFile('valid.pdf', 1024), errorText: null },
    { file: makeFile('bad.exe', 4096), errorText: 'File type not allowed' },
    { file: makeFile('warn.doc', 2048), warningText: 'File may be too large' },
  ];

  private _loadingItems: ReadonlyArray<FileTokenGroupProps.Item> = [
    { file: makeFile('uploading.zip', 10240), loading: true },
    { file: makeFile('done.pdf', 512) },
  ];

  private _readOnlyItems: ReadonlyArray<FileTokenGroupProps.Item> = [
    { file: makeFile('locked.pdf', 1024) },
    { file: makeFile('sealed.docx', 2048) },
  ];

  private _limitItems: ReadonlyArray<FileTokenGroupProps.Item> = [
    { file: makeFile('file1.txt', 100) },
    { file: makeFile('file2.txt', 200) },
    { file: makeFile('file3.txt', 300) },
    { file: makeFile('file4.txt', 400) },
    { file: makeFile('file5.txt', 500) },
  ];

  private _onBasicDismiss(e: CustomEvent<FileTokenGroupProps.DismissDetail>) {
    this._basicItems = this._basicItems.filter((_, i) => i !== e.detail.fileIndex);
  }

  private _onErrorDismiss(e: CustomEvent<FileTokenGroupProps.DismissDetail>) {
    this._errorItems = this._errorItems.filter((_, i) => i !== e.detail.fileIndex);
  }

  override render() {
    return html`
      <h2>File Token Group — Permutations</h2>

      <section>
        <h3>Horizontal (default) with file size</h3>
        <cs-file-token-group
          show-file-size
          .items=${this._basicItems}
          @dismiss=${this._onBasicDismiss}
        ></cs-file-token-group>
      </section>

      <section>
        <h3>Vertical with file size + last modified</h3>
        <cs-file-token-group
          alignment="vertical"
          show-file-size
          show-file-last-modified
          .items=${this._basicItems}
          @dismiss=${this._onBasicDismiss}
        ></cs-file-token-group>
      </section>

      <section>
        <h3>Error and Warning states</h3>
        <cs-file-token-group
          alignment="vertical"
          .items=${this._errorItems}
          @dismiss=${this._onErrorDismiss}
        ></cs-file-token-group>
      </section>

      <section>
        <h3>Loading</h3>
        <cs-file-token-group
          alignment="vertical"
          .items=${this._loadingItems}
        ></cs-file-token-group>
      </section>

      <section>
        <h3>Read-only</h3>
        <cs-file-token-group
          read-only
          show-file-size
          .items=${this._readOnlyItems}
        ></cs-file-token-group>
      </section>

      <section>
        <h3>With Limit (2)</h3>
        <cs-file-token-group
          .items=${this._limitItems}
          .limit=${2}
          show-file-size
        ></cs-file-token-group>
      </section>
    `;
  }
}

export const tagName = 'file-token-group-permutations-page';
