import { html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { PermutationsPageBase } from '../base.js';
import '../../../src/tag-editor/index.js';
import type { TagEditorProps } from '../../../src/tag-editor/interfaces.js';

@customElement('tag-editor-permutations-page')
export class TagEditorPermutationsPage extends PermutationsPageBase {

  @state() private _tags: TagEditorProps.Tag[] = [
    { key: 'Environment', value: 'Production', existing: true },
    { key: 'Team', value: 'Platform', existing: true },
    { key: 'CostCenter', value: '12345', existing: false },
  ];

  private _onChange(e: CustomEvent<TagEditorProps.ChangeDetail>) {
    this._tags = [...e.detail.tags];
  }

  override render() {
    return html`
      <h2>Tag Editor — Permutations</h2>

      <section>
        <h3>Default with tags</h3>
        <cs-tag-editor
          .tags=${this._tags}
          add-button-text="Add tag"
          remove-button-text="Remove"
          undo-button-text="Undo"
          key-placeholder="Enter key"
          value-placeholder="Enter value"
          @change=${(e: CustomEvent) => this._onChange(e)}
        ></cs-tag-editor>
      </section>

      <section>
        <h3>Empty state</h3>
        <cs-tag-editor
          .tags=${[]}
          add-button-text="Add tag"
        ></cs-tag-editor>
      </section>

      <section>
        <h3>Loading</h3>
        <cs-tag-editor
          .tags=${this._tags}
          loading
          add-button-text="Add tag"
        ></cs-tag-editor>
      </section>

      <section>
        <h3>With tag limit (3)</h3>
        <cs-tag-editor
          .tags=${this._tags}
          .tagLimit=${3}
          add-button-text="Add tag"
          @change=${(e: CustomEvent) => this._onChange(e)}
        ></cs-tag-editor>
      </section>
    `;
  }
}

export const tagName = 'tag-editor-permutations-page';
