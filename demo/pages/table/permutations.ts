import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import '../../../src/table/index.js';
import '../../../src/header/index.js';

interface Instance {
  id: string;
  name: string;
  type: string;
  state: string;
  az: string;
}

const ITEMS: Instance[] = [
  { id: '1', name: 'web-server-01', type: 't3.micro', state: 'Running', az: 'us-east-1a' },
  { id: '2', name: 'api-gateway', type: 't3.small', state: 'Stopped', az: 'us-east-1b' },
  { id: '3', name: 'db-primary', type: 'm5.large', state: 'Running', az: 'us-east-1a' },
  { id: '4', name: 'worker-node', type: 'c5.xlarge', state: 'Pending', az: 'us-west-2a' },
  { id: '5', name: 'cache-layer', type: 'r5.large', state: 'Running', az: 'us-east-1c' },
];

const COLUMNS = [
  { id: 'name', header: 'Instance name', cell: (item: Instance) => item.name, sortingField: 'name' },
  { id: 'type', header: 'Type', cell: (item: Instance) => item.type },
  { id: 'state', header: 'State', cell: (item: Instance) => item.state, sortingField: 'state' },
  { id: 'az', header: 'Availability zone', cell: (item: Instance) => item.az },
];

@customElement('table-permutations-page')
export class TablePermutationsPage extends LitElement {
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
      margin-top: 0;
      margin-bottom: 1em;
      font-size: 14px;
      line-height: 1.15;
      color: #687078;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
  `;

  @state() private _sortingColumn?: { sortingField?: string };
  @state() private _sortingDescending = false;
  @state() private _selectedMulti: Instance[] = [];
  @state() private _selectedSingle: Instance[] = [];

  private get _sortedItems(): Instance[] {
    if (!this._sortingColumn?.sortingField) return [...ITEMS];
    const field = this._sortingColumn.sortingField as keyof Instance;
    const sorted = [...ITEMS].sort((a, b) => String(a[field]).localeCompare(String(b[field])));
    return this._sortingDescending ? sorted.reverse() : sorted;
  }

  private _onSortingChange(e: CustomEvent): void {
    this._sortingColumn = e.detail.sortingColumn;
    this._sortingDescending = !!e.detail.isDescending;
  }

  private _onMultiSelectionChange(e: CustomEvent): void {
    this._selectedMulti = e.detail.selectedItems;
  }

  private _onSingleSelectionChange(e: CustomEvent): void {
    this._selectedSingle = e.detail.selectedItems;
  }

  override render() {
    return html`
      <h2>Table — Permutations</h2>

      <section>
        <h3>Basic table</h3>
        <cs-table
          .items=${ITEMS}
          .columnDefinitions=${COLUMNS}
        >
          <cs-header slot="header" counter="(${ITEMS.length})">Instances</cs-header>
        </cs-table>
      </section>

      <section>
        <h3>With sorting</h3>
        <cs-table
          .items=${this._sortedItems}
          .columnDefinitions=${COLUMNS}
          .sortingColumn=${this._sortingColumn}
          .sortingDescending=${this._sortingDescending}
          @sortingChange=${this._onSortingChange}
        >
          <cs-header slot="header">Sortable instances</cs-header>
        </cs-table>
      </section>

      <section>
        <h3>Multi-selection</h3>
        <cs-table
          .items=${ITEMS}
          .columnDefinitions=${COLUMNS}
          selection-type="multi"
          track-by="id"
          .selectedItems=${this._selectedMulti}
          @selectionChange=${this._onMultiSelectionChange}
        >
          <cs-header slot="header" counter="(${this._selectedMulti.length}/${ITEMS.length})">
            Multi-select instances
          </cs-header>
        </cs-table>
      </section>

      <section>
        <h3>Single selection</h3>
        <cs-table
          .items=${ITEMS}
          .columnDefinitions=${COLUMNS}
          selection-type="single"
          track-by="id"
          .selectedItems=${this._selectedSingle}
          @selectionChange=${this._onSingleSelectionChange}
        >
          <cs-header slot="header">Single-select instances</cs-header>
        </cs-table>
      </section>

      <section>
        <h3>Loading state</h3>
        <cs-table
          .items=${[]}
          .columnDefinitions=${COLUMNS}
          loading
          loading-text="Loading instances…"
        >
          <cs-header slot="header">Loading instances</cs-header>
        </cs-table>
      </section>

      <section>
        <h3>Empty state</h3>
        <cs-table
          .items=${[]}
          .columnDefinitions=${COLUMNS}
        >
          <cs-header slot="header">No instances</cs-header>
          <div slot="empty">No instances found. Create one to get started.</div>
        </cs-table>
      </section>

      <section>
        <h3>Striped rows</h3>
        <cs-table
          .items=${ITEMS}
          .columnDefinitions=${COLUMNS}
          striped-rows
        >
          <cs-header slot="header">Striped instances</cs-header>
        </cs-table>
      </section>

      <section>
        <h3>Wrap lines</h3>
        <cs-table
          .items=${ITEMS}
          .columnDefinitions=${COLUMNS}
          wrap-lines
        >
          <cs-header slot="header">Wrapped instances</cs-header>
        </cs-table>
      </section>

      <section>
        <h3>Compact density</h3>
        <cs-table
          .items=${ITEMS}
          .columnDefinitions=${COLUMNS}
          content-density="compact"
        >
          <cs-header slot="header">Compact instances</cs-header>
        </cs-table>
      </section>
    `;
  }
}

export const tagName = 'table-permutations-page';
