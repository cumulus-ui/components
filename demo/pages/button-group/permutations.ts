import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../../../src/button-group/index.js';

@customElement('button-group-permutations-page')
export class ButtonGroupPermutationsPage extends LitElement {
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
    { type: 'icon-button' as const, id: 'copy', text: 'Copy', iconName: 'copy' },
    { type: 'icon-button' as const, id: 'edit', text: 'Edit', iconName: 'edit' },
    { type: 'icon-button' as const, id: 'delete', text: 'Delete', iconName: 'remove' },
    { type: 'icon-button' as const, id: 'disabled-btn', text: 'Disabled', iconName: 'settings', disabled: true },
  ];

  private _toggleItems = [
    { type: 'icon-toggle-button' as const, id: 'like', text: 'Like', iconName: 'thumbs-up', pressed: false },
    { type: 'icon-toggle-button' as const, id: 'star', text: 'Favorite', iconName: 'star-filled', pressed: true },
  ];

  private _groupedItems = [
    {
      type: 'group' as const,
      text: 'Editing',
      items: [
        { type: 'icon-button' as const, id: 'cut', text: 'Cut', iconName: 'edit' },
        { type: 'icon-button' as const, id: 'paste', text: 'Paste', iconName: 'add-plus' },
      ],
    },
    {
      type: 'group' as const,
      text: 'Actions',
      items: [
        { type: 'icon-button' as const, id: 'share', text: 'Share', iconName: 'share' },
        { type: 'icon-toggle-button' as const, id: 'fav', text: 'Favorite', iconName: 'star-filled', pressed: false },
      ],
    },
  ];

  override render() {
    return html`
      <h2>ButtonGroup — Permutations</h2>

      <section>
        <h3>Icon Buttons</h3>
        <div class="row">
          <cs-button-group variant="icon" .items=${this._items} aria-label="Actions"></cs-button-group>
        </div>
      </section>

      <section>
        <h3>Toggle Buttons</h3>
        <div class="row">
          <cs-button-group variant="icon" .items=${this._toggleItems} aria-label="Toggle actions"></cs-button-group>
        </div>
      </section>

      <section>
        <h3>Grouped</h3>
        <div class="row">
          <cs-button-group variant="icon" .items=${this._groupedItems} aria-label="Grouped actions"></cs-button-group>
        </div>
      </section>
    `;
  }
}

export const tagName = 'button-group-permutations-page';
