import { css, html, nothing, type TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { CsBaseElement } from '../internal/base-element.js';
import { fireNonCancelableEvent } from '../internal/events.js';
import { componentStyles, sharedStyles } from './styles.js';
import type { TagEditorProps } from './interfaces.js';
import '../input/index.js';
import '../button/index.js';
import '../form-field/index.js';

const hostStyles = css`
  :host { display: block; }
  .tag-row {
    display: grid;
    grid-template-columns: 1fr 1fr auto;
    gap: var(--space-grid-gutter, 20px);
    align-items: start;
    padding-block: var(--space-xs, 8px);
  }
  .tag-row-removed {
    opacity: 0.5;
  }
  .tag-list {
    display: flex;
    flex-direction: column;
  }
  .add-section {
    margin-block-start: var(--space-s, 12px);
  }
  .action-cell {
    padding-block-start: calc(var(--space-xxs, 4px) + var(--line-height-body-m, 20px));
  }
`;

export class CsTagEditorInternal extends CsBaseElement {
  static override styles = [sharedStyles, componentStyles, hostStyles];

  @property({ attribute: false })
  tags: ReadonlyArray<TagEditorProps.Tag> = [];

  @property({ attribute: false })
  keysRequest?: (key: string) => Promise<ReadonlyArray<string>>;

  @property({ attribute: false })
  valuesRequest?: (key: string, value: string) => Promise<ReadonlyArray<string>>;

  @property({ type: String })
  allowedCharacterPattern = '';

  @property({ type: String })
  keyPlaceholder = '';

  @property({ type: String })
  valuePlaceholder = '';

  @property({ type: String })
  addButtonText = 'Add tag';

  @property({ type: String })
  removeButtonText = 'Remove';

  @property({ type: String })
  undoButtonText = 'Undo';

  @property({ type: Boolean })
  loading = false;

  @property({ type: Number })
  tagLimit?: number;

  @property({ attribute: false })
  i18nStrings?: TagEditorProps.I18nStrings;

  private _emitChange(updatedTags: ReadonlyArray<TagEditorProps.Tag>): void {
    const detail: TagEditorProps.ChangeDetail = { tags: updatedTags, valid: true };
    fireNonCancelableEvent(this, 'change', detail);
  }

  private _onAdd(): void {
    const updatedTags: TagEditorProps.Tag[] = [
      ...this.tags,
      { key: '', value: '', existing: false },
    ];
    this._emitChange(updatedTags);
  }

  private _onRemove(index: number): void {
    const tag = this.tags[index];
    if (tag.existing) {
      const updatedTags = this.tags.map((t, i) =>
        i === index ? { ...t, markedForRemoval: true } : t,
      );
      this._emitChange(updatedTags);
    } else {
      const updatedTags = this.tags.filter((_, i) => i !== index);
      this._emitChange(updatedTags);
    }
  }

  private _onUndo(index: number): void {
    const updatedTags = this.tags.map((t, i) =>
      i === index ? { ...t, markedForRemoval: false } : t,
    );
    this._emitChange(updatedTags);
  }

  private _onKeyChange(index: number, newKey: string): void {
    const updatedTags = this.tags.map((t, i) =>
      i === index ? { ...t, key: newKey } : t,
    );
    this._emitChange(updatedTags);
  }

  private _onValueChange(index: number, newValue: string): void {
    const updatedTags = this.tags.map((t, i) =>
      i === index ? { ...t, value: newValue } : t,
    );
    this._emitChange(updatedTags);
  }

  private _handleAdd = (e: Event): void => {
    if (!(e instanceof CustomEvent)) return;
    this._onAdd();
  };

  private _handleAction(index: number, action: 'remove' | 'undo'): (e: Event) => void {
    return (e: Event) => {
      if (!(e instanceof CustomEvent)) return;
      if (action === 'undo') this._onUndo(index);
      else this._onRemove(index);
    };
  }

  private _renderTagRow(tag: TagEditorProps.Tag, index: number): TemplateResult {
    const isMarked = !!tag.markedForRemoval;
    const rowClasses = { 'tag-row': true, 'tag-row-removed': isMarked };
    const keyLabel = this.i18nStrings?.keyHeader ?? 'Key';
    const valueLabel = this.i18nStrings?.valueHeader ?? 'Value';

    return html`
      <div class=${classMap(rowClasses)} data-row-index="${index}">
        <cs-form-field .label=${keyLabel}>
          <cs-input
            .value=${tag.key}
            .placeholder=${this.keyPlaceholder}
            .ariaLabel=${keyLabel}
            ?disabled=${isMarked}
            @change=${(e: CustomEvent<{ value: string }>) => this._onKeyChange(index, e.detail.value)}
          ></cs-input>
        </cs-form-field>
        <cs-form-field .label=${valueLabel}>
          <cs-input
            .value=${tag.value}
            .placeholder=${this.valuePlaceholder}
            .ariaLabel=${valueLabel}
            ?disabled=${isMarked}
            @change=${(e: CustomEvent<{ value: string }>) => this._onValueChange(index, e.detail.value)}
          ></cs-input>
        </cs-form-field>
        <div class="action-cell">
          ${isMarked
            ? html`
                <cs-button
                  variant="normal"
                  @click=${this._handleAction(index, 'undo')}
                >${this.undoButtonText}</cs-button>
              `
            : html`
                <cs-button
                  variant="normal"
                  @click=${this._handleAction(index, 'remove')}
                >${this.removeButtonText}</cs-button>
              `}
        </div>
      </div>
    `;
  }

  override render(): TemplateResult {
    const limitReached = this.tagLimit != null && this.tags.length >= this.tagLimit;

    return html`
      <div class="root">
        ${this.loading
          ? html`<div class="loading">Loading...</div>`
          : nothing}
        <div class="tag-list">
          ${this.tags.length === 0 && !this.loading
            ? html`<div>${this.i18nStrings?.emptyTags ?? 'No tags'}</div>`
            : nothing}
          ${this.tags.map((tag, idx) => this._renderTagRow(tag, idx))}
        </div>
        <div class="add-section">
          <cs-button
            variant="normal"
            icon-name="add-plus"
            ?disabled=${limitReached}
            @click=${this._handleAdd}
          >${this.addButtonText}</cs-button>
        </div>
      </div>
    `;
  }
}
