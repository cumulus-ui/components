import { css, html, nothing, type TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import { CsBaseElement } from '../internal/base-element.js';
import { fireNonCancelableEvent } from '../internal/events.js';
import { componentStyles, sharedStyles } from './styles.js';
import type { AttributeEditorProps } from './interfaces.js';
import '../input/index.js';
import '../button/index.js';
import '../form-field/index.js';

const hostStyles = css`:host { display: block; }`;

type Item = Record<string, string>;

/**
 * Resolves a definition field value that is either a static string or a
 * `(item, itemIndex) => string | null | undefined` callback — the dual
 * shape comes from Cloudscape's FieldDefinition interface.
 */
function resolveText(
  value: unknown,
  item: Item,
  itemIndex: number,
): string {
  if (typeof value === 'function') {
    const result = (value as (i: Item, idx: number) => unknown)(item, itemIndex);
    return result != null ? String(result) : '';
  }
  return value != null ? String(value) : '';
}

export class CsAttributeEditorInternal extends CsBaseElement {
  static override styles = [sharedStyles, componentStyles, hostStyles];

  @property({ attribute: false })
  items: ReadonlyArray<Item> = [];

  @property({ attribute: false })
  definition: ReadonlyArray<AttributeEditorProps.FieldDefinition<Item>> = [];

  @property({ type: String })
  addButtonText = 'Add attribute';

  @property({ type: String })
  removeButtonText = 'Remove';

  @property({ type: String })
  empty = '';

  @property({ attribute: false })
  isItemRemovable?: AttributeEditorProps.IsItemRemovableFunction<Item>;

  @property({ type: Boolean })
  disableAddButton = false;

  private _handleAddClick = (e: Event): void => {
    if (!(e instanceof CustomEvent)) return;
    fireNonCancelableEvent(this as unknown as HTMLElement, 'addButtonClick', {});
  };

  private _handleRemoveClick(itemIndex: number): (e: Event) => void {
    return (e: Event) => {
      if (!(e instanceof CustomEvent)) return;
      const detail: AttributeEditorProps.RemoveButtonClickDetail = { itemIndex };
      fireNonCancelableEvent(this as unknown as HTMLElement, 'removeButtonClick', detail);
    };
  }

  private _renderRow(item: Item, itemIndex: number): TemplateResult {
    const removable = this.isItemRemovable ? this.isItemRemovable(item) : true;

    return html`
      <div class="row" data-row-index="${itemIndex}">
        ${this.definition.map((def) => {
          const label = resolveText(def.label, item, itemIndex);
          const errorText = resolveText(def.errorText, item, itemIndex);
          const constraintText = resolveText(def.constraintText, item, itemIndex);

          return html`
            <div class="field">
              <cs-form-field
                .label=${label}
                .errorText=${errorText}
                .constraintText=${constraintText}
              >
                <cs-input .ariaLabel=${label}></cs-input>
              </cs-form-field>
            </div>
          `;
        })}
        ${removable
          ? html`
              <div class="remove-button-container remove-button-field-padding">
                <cs-button
                  variant="normal"
                  .ariaLabel=${this.removeButtonText}
                  @click=${this._handleRemoveClick(itemIndex)}
                >${this.removeButtonText}</cs-button>
              </div>
            `
          : nothing}
      </div>
    `;
  }

  override render(): TemplateResult {
    const hasItems = this.items.length > 0;
    const cols = this.definition.length;
    const gridCols = cols > 0
      ? `repeat(${cols}, 1fr) auto`
      : '1fr';

    return html`
      <div class="root" style="grid-template-columns: ${gridCols}">
        ${!hasItems && this.empty
          ? html`<div class="empty empty-appear">${this.empty}</div>`
          : nothing}
        ${this.items.map((item, idx) => html`
          ${idx > 0 ? html`<div class="divider"></div>` : nothing}
          ${this._renderRow(item, idx)}
        `)}
        <div class="add-row">
          <cs-button
            variant="normal"
            icon-name="add-plus"
            ?disabled=${this.disableAddButton}
            @click=${this._handleAddClick}
          >${this.addButtonText}</cs-button>
        </div>
      </div>
    `;
  }
}
