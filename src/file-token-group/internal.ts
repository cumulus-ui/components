import { css, html, nothing, type TemplateResult } from 'lit';
import { property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { CsBaseElement } from '../internal/base-element.js';
import { fireNonCancelableEvent } from '../internal/events.js';
import { componentStyles, sharedStyles } from './styles.js';
import type { FileTokenGroupProps } from './interfaces.js';
import '../icon/index.js';
import '../spinner/index.js';

const hostStyles = css`:host { display: block; }`;

const tokenListStyles = css`
.list {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs, 8px);
  list-style: none;
  margin: 0;
  padding: 0;
}
.list-vertical {
  flex-direction: column;
  align-items: flex-start;
}
.toggle {
  display: inline-flex;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--color-text-button-inline-icon-default, #006ce0);
  font-size: var(--font-size-body-m, 14px);
  line-height: var(--line-height-body-m, 20px);
  padding: 0;
  margin-block-start: var(--space-xs, 8px);
}
.toggle:hover {
  color: var(--color-text-button-inline-icon-hover, #002b66);
  text-decoration: underline;
}
.dismiss-button {
  all: unset;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
  color: var(--color-text-button-inline-icon-default, #006ce0);
  padding: var(--space-static-xxs, 4px);
}
.dismiss-button:hover {
  color: var(--color-text-button-inline-icon-hover, #002b66);
}
.file-error-text,
.file-warning-text {
  font-size: var(--font-size-body-s, 12px);
  line-height: var(--line-height-body-s, 16px);
  display: flex;
  align-items: center;
  gap: var(--space-xxs, 4px);
}
.file-error-text {
  color: var(--color-text-status-error, #db0000);
}
.file-warning-text {
  color: var(--color-text-status-warning, #855900);
}
`;

function defaultFormatFileSize(sizeInBytes: number): string {
  if (sizeInBytes < 1024) return `${sizeInBytes} bytes`;
  if (sizeInBytes < 1024 * 1024) return `${(sizeInBytes / 1024).toFixed(1)} KB`;
  if (sizeInBytes < 1024 * 1024 * 1024) return `${(sizeInBytes / (1024 * 1024)).toFixed(1)} MB`;
  return `${(sizeInBytes / (1024 * 1024 * 1024)).toFixed(1)} GB`;
}

function defaultFormatFileLastModified(date: Date): string {
  return date.toLocaleDateString();
}

export class CsFileTokenGroupInternal extends CsBaseElement {
  static override styles = [sharedStyles, componentStyles, tokenListStyles, hostStyles];

  @property({ attribute: false })
  items: ReadonlyArray<FileTokenGroupProps.Item> = [];

  @property({ type: String })
  alignment: FileTokenGroupProps.Alignment = 'horizontal';

  @property({ type: Boolean, attribute: 'show-file-size' })
  showFileSize = false;

  @property({ type: Boolean, attribute: 'show-file-last-modified' })
  showFileLastModified = false;

  @property({ type: Boolean, attribute: 'show-file-thumbnail' })
  showFileThumbnail = false;

  @property({ type: Boolean, attribute: 'read-only' })
  readOnly = false;

  @property({ type: Number })
  limit?: number;

  @property({ attribute: false })
  i18nStrings?: FileTokenGroupProps.I18nStrings;

  @property({ type: String, attribute: 'limit-show-fewer-aria-label' })
  limitShowFewerAriaLabel = '';

  @property({ type: String, attribute: 'limit-show-more-aria-label' })
  limitShowMoreAriaLabel = '';

  @state()
  private _expanded = false;

  private _onDismiss(fileIndex: number): void {
    if (this.readOnly) return;
    fireNonCancelableEvent(
      this,
      'dismiss',
      { fileIndex } as FileTokenGroupProps.DismissDetail
    );
  }

  private _toggleExpand(): void {
    this._expanded = !this._expanded;
  }

  private _formatSize(sizeInBytes: number): string {
    return this.i18nStrings?.formatFileSize
      ? this.i18nStrings.formatFileSize(sizeInBytes)
      : defaultFormatFileSize(sizeInBytes);
  }

  private _formatLastModified(date: Date): string {
    return this.i18nStrings?.formatFileLastModified
      ? this.i18nStrings.formatFileLastModified(date)
      : defaultFormatFileLastModified(date);
  }

  private _isImageFile(file: File): boolean {
    return file.type.startsWith('image/');
  }

  private _renderThumbnail(file: File): TemplateResult | typeof nothing {
    if (!this.showFileThumbnail || !this._isImageFile(file)) return nothing;
    const url = URL.createObjectURL(file);
    return html`
      <div class="file-option-thumbnail">
        <img
          class="file-option-thumbnail-image"
          src=${url}
          alt=${file.name}
          @load=${() => URL.revokeObjectURL(url)}
        />
      </div>
    `;
  }

  private _renderFileToken(item: FileTokenGroupProps.Item, index: number): TemplateResult {
    const { file, loading, errorText, warningText } = item;
    const showDismiss = !this.readOnly && !loading;
    const isHorizontal = this.alignment === 'horizontal';
    const hasThumbnail = this.showFileThumbnail && this._isImageFile(file);

    const boxClasses = {
      'token-box': true,
      'horizontal': isHorizontal,
      'error': !!errorText,
      'warning': !errorText && !!warningText,
      'read-only': this.readOnly,
      'loading': !!loading,
    };

    const tokenClasses = {
      'token': true,
      'token-grid': hasThumbnail,
      'token-contains-image': hasThumbnail,
    };

    const metadataClasses = {
      'file-option-metadata': true,
      'with-image': hasThumbnail,
      'single-row-loading': !!loading && !hasThumbnail,
    };

    const removeAriaLabel = this.i18nStrings?.removeFileAriaLabel
      ? this.i18nStrings.removeFileAriaLabel(index, file.name)
      : `Remove ${file.name}`;

    return html`
      <li class=${classMap(tokenClasses)}>
        <div
          class=${classMap(boxClasses)}
          role="group"
          aria-label=${file.name}
        >
          <div class="file-option">
            ${this._renderThumbnail(file)}
            <div class=${classMap(metadataClasses)}>
              <div class="file-name-container" tabindex="0">
                <div class="file-option-name">${file.name}</div>
                ${this.showFileSize && file.size != null
                  ? html`<div class="file-option-size">${this._formatSize(file.size)}</div>`
                  : nothing}
                ${this.showFileLastModified && file.lastModified
                  ? html`<div class="file-option-last-modified">${this._formatLastModified(new Date(file.lastModified))}</div>`
                  : nothing}
              </div>
            </div>
          </div>
          ${loading
            ? html`<div class="file-loading-overlay${!hasThumbnail ? ' file-loading-overlay-single-row' : ''}"><cs-spinner size="normal"></cs-spinner></div>`
            : nothing}
          ${showDismiss
            ? html`
              <button
                class="dismiss-button"
                type="button"
                aria-label=${removeAriaLabel}
                @click=${() => this._onDismiss(index)}
              >
                <cs-icon name="close" size="small"></cs-icon>
              </button>
            `
            : nothing}
        </div>
        ${errorText
          ? html`<div class="file-error-text">
              <cs-icon name="status-negative" size="small"></cs-icon>
              <span>${errorText}</span>
            </div>`
          : nothing}
        ${!errorText && warningText
          ? html`<div class="file-warning-text">
              <cs-icon name="status-warning" size="small"></cs-icon>
              <span>${warningText}</span>
            </div>`
          : nothing}
      </li>
    `;
  }

  override render(): TemplateResult {
    const hasItems = this.items.length > 0;
    const isLimited = this.limit != null && this.limit < this.items.length && !this._expanded;
    const visibleItems = isLimited ? this.items.slice(0, this.limit) : this.items;
    const hiddenCount = this.items.length - visibleItems.length;

    const showMoreLabel = this.i18nStrings?.limitShowMore || `Show more (+${hiddenCount})`;
    const showFewerLabel = this.i18nStrings?.limitShowFewer || 'Show fewer';

    const rootClasses = {
      'root': true,
      'has-items': hasItems,
    };

    const listClasses = {
      'list': true,
      'list-vertical': this.alignment === 'vertical',
    };

    return html`
      <div class=${classMap(rootClasses)}>
        <ul class=${classMap(listClasses)} role="list" aria-label="File tokens">
          ${visibleItems.map((item, i) => this._renderFileToken(item, i))}
        </ul>
        ${this.limit != null && this.items.length > this.limit
          ? html`
            <button
              class="toggle"
              type="button"
              aria-label=${this._expanded
                ? this.limitShowFewerAriaLabel || showFewerLabel
                : this.limitShowMoreAriaLabel || showMoreLabel}
              @click=${this._toggleExpand}
            >
              ${this._expanded ? showFewerLabel : showMoreLabel}
            </button>
          `
          : nothing}
      </div>
    `;
  }
}
