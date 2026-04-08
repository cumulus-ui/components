import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../../../src/button-dropdown/index.js';

@customElement('button-dropdown-permutations-page')
export class ButtonDropdownPermutationsPage extends LitElement {
  static override styles = css`
    :host {
      display: block;
      padding: 24px;
      font-family: system-ui, sans-serif;
      line-height: 1.15;
    }
    h2 { margin-top: 0; margin-bottom: 0.83em; line-height: 1.15; }
    section {
      margin-bottom: 24px;
      padding: 16px;
      border: 1px solid #e9ebed;
      border-radius: 8px;
    }
    section h3 {
      margin-top: 0; margin-bottom: 1em;
      font-size: 14px; line-height: 1.15;
      color: #687078; text-transform: uppercase; letter-spacing: 0.5px;
    }
    .row { display: flex; flex-wrap: wrap; gap: 12px; align-items: center; }
  `;

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
