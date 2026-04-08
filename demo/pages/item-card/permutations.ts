import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../../../src/item-card/index.js';

@customElement('item-card-permutations-page')
export class ItemCardPermutationsPage extends LitElement {
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
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 16px;
    }
  `;

  override render() {
    return html`
      <h2>Item Card — Permutations</h2>

      <section>
        <h3>Default variant</h3>
        <div class="grid">
          <cs-item-card>
            <span slot="header">Card Title</span>
            <span slot="description">A brief description</span>
            <p>This is the main card content area.</p>
            <span slot="footer">Footer info</span>
          </cs-item-card>

          <cs-item-card>
            <span slot="header">No Footer</span>
            <p>Card with header and body only.</p>
          </cs-item-card>

          <cs-item-card>
            <span slot="header">With Actions</span>
            <span slot="actions">
              <button>Edit</button>
            </span>
            <p>Card with actions slot.</p>
          </cs-item-card>
        </div>
      </section>

      <section>
        <h3>Embedded variant</h3>
        <div class="grid">
          <cs-item-card variant="embedded">
            <span slot="header">Embedded Card</span>
            <p>Compact card with smaller border radius.</p>
          </cs-item-card>

          <cs-item-card variant="embedded">
            <span slot="header">Embedded with Footer</span>
            <p>Content area</p>
            <span slot="footer">Footer</span>
          </cs-item-card>
        </div>
      </section>

      <section>
        <h3>Highlighted</h3>
        <div class="grid">
          <cs-item-card highlighted>
            <span slot="header">Highlighted Card</span>
            <p>This card is in highlighted state.</p>
          </cs-item-card>
        </div>
      </section>

      <section>
        <h3>Disabled paddings</h3>
        <div class="grid">
          <cs-item-card disable-header-paddings>
            <span slot="header">No Header Padding</span>
            <p>Normal content padding.</p>
          </cs-item-card>

          <cs-item-card disable-content-paddings>
            <span slot="header">Normal Header</span>
            <p>No content padding.</p>
          </cs-item-card>
        </div>
      </section>
    `;
  }
}

export const tagName = 'item-card-permutations-page';
