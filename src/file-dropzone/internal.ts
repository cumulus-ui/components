import { css, html } from 'lit';
import { CsBaseElement } from '../internal/base-element.js';
import { state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { fireNonCancelableEvent } from '../internal/events.js';
import { sharedStyles, componentStyles } from './styles.js';
import type { FileDropzoneProps } from './interfaces.js';

const hostStyles = css`:host { display: block; }`;

export class CsFileDropzoneInternal extends CsBaseElement {
  static override styles = [sharedStyles, componentStyles, hostStyles];

  @state()
  private _isDragging = false;

  private _dragCounter = 0;

  override connectedCallback(): void {
    super.connectedCallback();
  }

  private _onDragEnter = (e: DragEvent): void => {
    e.preventDefault();
    e.stopPropagation();
    this._dragCounter++;
    if (this._hasDragFiles(e)) {
      this._isDragging = true;
    }
  };

  private _onDragOver = (e: DragEvent): void => {
    e.preventDefault();
    e.stopPropagation();
  };

  private _onDragLeave = (e: DragEvent): void => {
    e.preventDefault();
    e.stopPropagation();
    this._dragCounter--;
    if (this._dragCounter <= 0) {
      this._dragCounter = 0;
      this._isDragging = false;
    }
  };

  private _onDrop = (e: DragEvent): void => {
    e.preventDefault();
    e.stopPropagation();
    this._dragCounter = 0;
    this._isDragging = false;

    const files = Array.from(e.dataTransfer?.files ?? []);
    if (files.length > 0) {
      const detail: FileDropzoneProps.ChangeDetail = { value: files };
      fireNonCancelableEvent(this, 'change', detail);
    }
  };

  private _hasDragFiles(e: DragEvent): boolean {
    if (!e.dataTransfer) return false;
    return Array.from(e.dataTransfer.types).includes('Files');
  }

  override render() {
    const classes = {
      'root': true,
      'hovered': this._isDragging,
    };

    return html`
      <div
        class=${classMap(classes)}
        role="button"
        tabindex="0"
        aria-label="Drop files here"
        @dragenter=${this._onDragEnter}
        @dragover=${this._onDragOver}
        @dragleave=${this._onDragLeave}
        @drop=${this._onDrop}
      >
        <div class="content">
          <slot></slot>
        </div>
      </div>
    `;
  }
}
