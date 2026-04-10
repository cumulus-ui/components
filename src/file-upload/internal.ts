import { css, html, nothing, type TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { CsBaseElement } from '../internal/base-element.js';
import { fireNonCancelableEvent } from '../internal/events.js';
import { consume } from '@lit/context';
import {
  formFieldContext,
  defaultFormFieldContext,
  type FormFieldContext,
} from '../internal/context/form-field-context.js';
import { componentStyles, sharedStyles } from './styles.js';
import type { FileUploadProps } from './interfaces.js';
import '../file-input/index.js';
import '../button/index.js';
import '../icon/index.js';

const hostStyles = css`:host { display: block; }`;

const fileListStyles = css`
.file-upload-root {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs, 8px);
}
.label {
  font-weight: 700;
  font-size: var(--font-size-body-m, 14px);
  line-height: var(--line-height-body-m, 20px);
  color: var(--color-text-form-label, #0f141a);
  margin-block-end: var(--space-xxs, 4px);
}
.file-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs, 8px);
  list-style: none;
  margin: 0;
  padding: 0;
}
.file-list-horizontal {
  flex-direction: row;
  flex-wrap: wrap;
}
.file-item {
  display: flex;
  align-items: center;
  gap: var(--space-xs, 8px);
  padding: var(--space-xxs, 4px) var(--space-xs, 8px);
  border: 1px solid var(--color-border-input-default, #c6c6cd);
  border-radius: var(--border-radius-item, 8px);
  background: var(--color-background-container-content, #ffffff);
  min-width: 0;
}
.file-item-error {
  border-color: var(--color-text-status-error, #db0000);
}
.file-info {
  flex: 1;
  min-width: 0;
  overflow: hidden;
}
.file-name {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: var(--font-size-body-m, 14px);
  line-height: var(--line-height-body-m, 20px);
}
.file-metadata {
  font-size: var(--font-size-body-s, 12px);
  color: var(--color-text-body-secondary, #687078);
  line-height: var(--line-height-body-s, 16px);
}
.file-error {
  font-size: var(--font-size-body-s, 12px);
  color: var(--color-text-status-error, #db0000);
  line-height: var(--line-height-body-s, 16px);
}
.file-thumbnail {
  width: 32px;
  height: 32px;
  object-fit: cover;
  border-radius: 4px;
}
.dismiss-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: 2px;
  color: var(--color-text-body-secondary, #687078);
  border-radius: 4px;
  flex-shrink: 0;
}
.dismiss-button:hover {
  color: var(--color-text-body-default, #0f141a);
  background: var(--color-background-button-normal-hover, rgba(0, 7, 22, 0.05));
}
.constraint-text {
  font-size: var(--font-size-body-s, 12px);
  color: var(--color-text-body-secondary, #687078);
  line-height: var(--line-height-body-s, 16px);
}
.error-text {
  font-size: var(--font-size-body-s, 12px);
  color: var(--color-text-status-error, #db0000);
  line-height: var(--line-height-body-s, 16px);
}
`;

export class CsFileUploadInternal extends CsBaseElement {
  static override styles = [sharedStyles, componentStyles, fileListStyles, hostStyles];

  @consume({ context: formFieldContext, subscribe: true })
  private _formFieldCtx: FormFieldContext = defaultFormFieldContext;

  @property({ attribute: false })
  value: ReadonlyArray<File> = [];

  @property({ type: String })
  accept?: string;

  @property({ type: Boolean })
  multiple = false;

  @property({ type: Boolean })
  disabled = false;

  @property({ type: Boolean, attribute: 'show-file-last-modified' })
  showFileLastModified = false;

  @property({ type: Boolean, attribute: 'show-file-size' })
  showFileSize = false;

  @property({ type: Boolean, attribute: 'show-file-thumbnail' })
  showFileThumbnail = false;

  @property({ attribute: false })
  fileErrors?: ReadonlyArray<null | string>;

  @property({ type: String, attribute: 'error-text' })
  errorText = '';

  @property({ type: String, attribute: 'constraint-text' })
  constraintText = '';

  @property({ type: String, attribute: 'aria-label' })
  override ariaLabel: string | null = null;

  @property({ type: Boolean, attribute: 'aria-required' })
  override ariaRequired: string | null = null;

  @property({ type: String })
  label = '';

  @property({ attribute: false })
  i18nStrings?: FileUploadProps.I18nStrings;

  @property({ type: String, attribute: 'file-token-alignment' })
  fileTokenAlignment: FileUploadProps.FileTokenAlignment = 'vertical';

  private _thumbnailUrls = new Map<File, string>();

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    for (const url of this._thumbnailUrls.values()) {
      URL.revokeObjectURL(url);
    }
    this._thumbnailUrls.clear();
  }

  focus(options?: FocusOptions): void {
    const fileInput = this.shadowRoot?.querySelector<HTMLElement>('cs-file-input');
    fileInput?.focus(options);
  }

  private _onFileInputChange = (e: Event): void => {
    const detail = (e as CustomEvent).detail;
    if (detail?.value) {
      const newFiles = this.multiple
        ? [...this.value, ...detail.value]
        : [...detail.value];
      fireNonCancelableEvent(
        this,
        'change',
        { value: newFiles } as FileUploadProps.ChangeDetail
      );
    }
  };

  private _onRemoveFile(index: number): void {
    const removedFile = this.value[index];
    const newFiles = this.value.filter((_, i) => i !== index);

    if (removedFile && this._thumbnailUrls.has(removedFile)) {
      URL.revokeObjectURL(this._thumbnailUrls.get(removedFile)!);
      this._thumbnailUrls.delete(removedFile);
    }

    fireNonCancelableEvent(
      this,
      'change',
      { value: newFiles } as FileUploadProps.ChangeDetail
    );
  }

  private _getThumbnailUrl(file: File): string {
    if (!this._thumbnailUrls.has(file)) {
      this._thumbnailUrls.set(file, URL.createObjectURL(file));
    }
    return this._thumbnailUrls.get(file)!;
  }

  private _formatFileSize(bytes: number): string {
    if (this.i18nStrings?.formatFileSize) {
      return this.i18nStrings.formatFileSize(bytes);
    }
    if (bytes < 1024) return `${bytes} bytes`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  }

  private _formatLastModified(date: Date): string {
    if (this.i18nStrings?.formatFileLastModified) {
      return this.i18nStrings.formatFileLastModified(date);
    }
    return date.toLocaleDateString();
  }

  private _getRemoveAriaLabel(index: number, fileName: string): string {
    if (this.i18nStrings?.removeFileAriaLabel) {
      return this.i18nStrings.removeFileAriaLabel(index, fileName);
    }
    return `Remove ${fileName}`;
  }

  private _renderFileItem(file: File, index: number): TemplateResult {
    const error = this.fileErrors?.[index] ?? null;
    const isImage = file.type.startsWith('image/');

    const itemClasses = {
      'file-item': true,
      'file-item-error': !!error,
    };

    return html`
      <li class=${classMap(itemClasses)}>
        ${this.showFileThumbnail && isImage
          ? html`<img class="file-thumbnail" src=${this._getThumbnailUrl(file)} alt="" />`
          : nothing}
        <div class="file-info">
          <div class="file-name">${file.name}</div>
          <div class="file-metadata">
            ${this.showFileSize ? html`<span>${this._formatFileSize(file.size)}</span>` : nothing}
            ${this.showFileSize && this.showFileLastModified ? html`<span> · </span>` : nothing}
            ${this.showFileLastModified
              ? html`<span>${this._formatLastModified(new Date(file.lastModified))}</span>`
              : nothing}
          </div>
          ${error ? html`<div class="file-error">${error}</div>` : nothing}
        </div>
        <button
          class="dismiss-button"
          type="button"
          aria-label=${this._getRemoveAriaLabel(index, file.name)}
          @click=${() => this._onRemoveFile(index)}
        >
          <cs-icon name="close" size="small"></cs-icon>
        </button>
      </li>
    `;
  }

  override render(): TemplateResult {
    const hasFiles = this.value.length > 0;
    const uploadButtonText = this.i18nStrings?.uploadButtonText
      ? this.i18nStrings.uploadButtonText(this.multiple)
      : this.multiple ? 'Choose files' : 'Choose file';

    const listClasses = {
      'file-list': true,
      'file-list-horizontal': this.fileTokenAlignment === 'horizontal',
    };

    return html`
      <div class="file-upload-root">
        ${this.label
          ? html`<label class="label">${this.label}</label>`
          : nothing}

        <cs-file-input
          variant="button"
          accept=${ifDefined(this.accept || undefined)}
          ?multiple=${this.multiple}
          ?disabled=${this.disabled}
          id=${ifDefined(this._formFieldCtx.controlId || undefined)}
          aria-label=${this.ariaLabel || uploadButtonText}
          aria-describedby=${ifDefined(this._formFieldCtx.ariaDescribedby || undefined)}
          aria-required=${ifDefined(this.ariaRequired || undefined)}
          @change=${this._onFileInputChange}
        >${uploadButtonText}</cs-file-input>

        ${this.constraintText
          ? html`<div class="constraint-text hints">${this.constraintText}</div>`
          : nothing}

        ${this.errorText
          ? html`<div class="error-text">${this.errorText}</div>`
          : nothing}

        ${hasFiles
          ? html`
            <ul class=${classMap(listClasses)} role="list">
              ${this.value.map((file, i) => this._renderFileItem(file, i))}
            </ul>
          `
          : nothing}
      </div>
    `;
  }
}
