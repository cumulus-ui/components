import { html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { PermutationsPageBase } from '../base.js';
import '../../../src/attribute-editor/index.js';

interface AttrItem { key: string; value: string }

@customElement('attribute-editor-permutations-page')
export class AttributeEditorPermutationsPage extends PermutationsPageBase {

  @state() private _items: AttrItem[] = [
    { key: 'Name', value: 'my-resource' },
    { key: 'Env', value: 'production' },
  ];

  private _definition = [
    { label: 'Key' },
    { label: 'Value' },
  ];

  private _onAdd() {
    this._items = [...this._items, { key: '', value: '' }];
  }

  private _onRemove(e: CustomEvent<{ itemIndex: number }>) {
    this._items = this._items.filter((_, i) => i !== e.detail.itemIndex);
  }

  override render() {
    return html`
      <h2>Attribute Editor — Permutations</h2>

      <section>
        <h3>Default with items</h3>
        <cs-attribute-editor
          .items=${this._items}
          .definition=${this._definition}
          add-button-text="Add attribute"
          remove-button-text="Remove"
          @addButtonClick=${() => this._onAdd()}
          @removeButtonClick=${(e: CustomEvent) => this._onRemove(e)}
        ></cs-attribute-editor>
      </section>

      <section>
        <h3>Empty state</h3>
        <cs-attribute-editor
          .items=${[]}
          .definition=${this._definition}
          empty="No attributes defined"
          add-button-text="Add attribute"
        ></cs-attribute-editor>
      </section>

      <section>
        <h3>Disabled add button</h3>
        <cs-attribute-editor
          .items=${this._items}
          .definition=${this._definition}
          add-button-text="Add attribute"
          disable-add-button
        ></cs-attribute-editor>
      </section>

      <section>
        <h3>Non-removable items</h3>
        <cs-attribute-editor
          .items=${this._items}
          .definition=${this._definition}
          add-button-text="Add attribute"
          .isItemRemovable=${() => false}
        ></cs-attribute-editor>
      </section>
    `;
  }
}

export const tagName = 'attribute-editor-permutations-page';
