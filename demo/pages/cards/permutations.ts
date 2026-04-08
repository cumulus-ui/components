import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import '../../../src/cards/index.js';
import '../../../src/container/index.js';
import '../../../src/header/index.js';
import '../../../src/button/index.js';

interface DemoItem {
  id: string;
  name: string;
  description: string;
  status: string;
}

const ITEMS: DemoItem[] = [
  { id: '1', name: 'Instance A', description: 'Running web server', status: 'Running' },
  { id: '2', name: 'Instance B', description: 'Database server', status: 'Stopped' },
  { id: '3', name: 'Instance C', description: 'Cache server', status: 'Running' },
  { id: '4', name: 'Instance D', description: 'Worker node', status: 'Pending' },
  { id: '5', name: 'Instance E', description: 'API gateway', status: 'Running' },
  { id: '6', name: 'Instance F', description: 'Load balancer', status: 'Running' },
];

@customElement('cards-permutations-page')
export class CardsPermutationsPage extends LitElement {
  static override styles = css`
    :host {
      display: block;
      padding: 24px;
      font-family: system-ui, sans-serif;
      line-height: 1.15;
    }
    h2 {
      margin-top: 0;
      margin-bottom: 0.83em;
      line-height: 1.15;
    }
    section {
      margin-bottom: 24px;
      padding: 16px;
      border: 1px solid #e9ebed;
      border-radius: 8px;
    }
    section h3 {
      margin-top: 0;
      margin-bottom: 1em;
      font-size: 14px;
      line-height: 1.15;
      color: #687078;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .selection-info {
      margin-top: 8px;
      font-size: 13px;
      color: #687078;
    }
  `;

  @state()
  private _selectedItems: DemoItem[] = [];

  private _cardDefinition = {
    header: (item: DemoItem) => item.name,
    sections: [
      { id: 'description', header: 'Description', content: (item: DemoItem) => item.description },
      { id: 'status', header: 'Status', content: (item: DemoItem) => item.status },
    ],
  };

  private _onSelectionChange = (e: CustomEvent) => {
    this._selectedItems = e.detail.selectedItems;
  };

  override render() {
    return html`
      <h2>Cards — Permutations</h2>

      <section>
        <h3>Basic Grid</h3>
        <cs-cards
          .items=${ITEMS}
          .cardDefinition=${this._cardDefinition}
          .cardsPerRow=${[{ cards: 1 }, { minWidth: 400, cards: 2 }, { minWidth: 700, cards: 3 }]}
        >
          <cs-header slot="header" variant="h2">Instances</cs-header>
        </cs-cards>
      </section>

      <section>
        <h3>Multi Selection</h3>
        <cs-cards
          .items=${ITEMS}
          .cardDefinition=${this._cardDefinition}
          selection-type="multi"
          .selectedItems=${this._selectedItems}
          track-by="id"
          .cardsPerRow=${[{ cards: 1 }, { minWidth: 400, cards: 2 }, { minWidth: 700, cards: 3 }]}
          @selectionChange=${this._onSelectionChange}
        >
          <cs-header slot="header" variant="h2">Select instances</cs-header>
        </cs-cards>
        <div class="selection-info">
          Selected: ${this._selectedItems.length} item(s)
        </div>
      </section>

      <section>
        <h3>Loading State</h3>
        <cs-cards
          .items=${[]}
          .cardDefinition=${this._cardDefinition}
          loading
          loading-text="Loading instances..."
        >
          <cs-header slot="header" variant="h2">Instances</cs-header>
        </cs-cards>
      </section>

      <section>
        <h3>Empty State</h3>
        <cs-cards
          .items=${[]}
          .cardDefinition=${this._cardDefinition}
        >
          <cs-header slot="header" variant="h2">Instances</cs-header>
          <div slot="empty">No instances found</div>
        </cs-cards>
      </section>
    `;
  }
}

export const tagName = 'cards-permutations-page';
