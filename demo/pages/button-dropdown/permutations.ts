import { html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { PermutationsPageBase } from '../base.js';
import '../../../src/button-dropdown/index.js';

@customElement('button-dropdown-permutations-page')
export class ButtonDropdownPermutationsPage extends PermutationsPageBase {
  static override styles = [...PermutationsPageBase.styles, css`
    .row { display: flex; flex-wrap: wrap; gap: 12px; align-items: center; }
    `];

  private _items = [
    { id: 'edit', text: 'Edit', iconName: 'edit' },
    { id: 'delete', text: 'Delete', iconName: 'remove' },
    { id: 'duplicate', text: 'Duplicate' },
    { id: 'disabled-item', text: 'Disabled action', disabled: true },
    { id: 'link-item', text: 'External link', href: 'https://example.com' },
  ];

  override render() {
    return html`
      <h2>ButtonDropdown — Permutations</h2>

      <section>
        <h3>Variants</h3>
        <div class="row">
          <cs-button-dropdown .items=${this._items} variant="normal">Actions</cs-button-dropdown>
          <cs-button-dropdown .items=${this._items} variant="primary">Actions</cs-button-dropdown>
          <cs-button-dropdown .items=${this._items} variant="icon" aria-label="More actions"></cs-button-dropdown>
        </div>
      </section>

      <section>
        <h3>Disabled</h3>
        <div class="row">
          <cs-button-dropdown .items=${this._items} disabled>Disabled</cs-button-dropdown>
        </div>
      </section>

      <section>
        <h3>Loading</h3>
        <div class="row">
          <cs-button-dropdown .items=${this._items} loading>Loading</cs-button-dropdown>
        </div>
      </section>
    `;
  }
}

export const tagName = 'button-dropdown-permutations-page';
