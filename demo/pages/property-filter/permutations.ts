import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import '../../../src/property-filter/index.js';
import type { SimpleQuery } from '../../../src/property-filter/index.js';

@customElement('property-filter-permutations-page')
export class PropertyFilterPermutationsPage extends LitElement {
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
    .output {
      margin-top: 8px;
      padding: 8px;
      background: #f8f8f8;
      border-radius: 4px;
      font-size: 12px;
      font-family: monospace;
    }
  `;

  @state() private _query: SimpleQuery = {
    tokens: [
      { value: 'running' },
      { propertyKey: 'type', operator: '=', value: 't3.micro' },
    ],
    operation: 'and',
  };

  @state() private _emptyQuery: SimpleQuery = {
    tokens: [],
    operation: 'and',
  };

  private _onChange(e: CustomEvent) {
    this._query = e.detail.query;
  }

  private _onEmptyChange(e: CustomEvent) {
    this._emptyQuery = e.detail.query;
  }

  override render() {
    return html`
      <h2>Property Filter — Permutations</h2>

      <section>
        <h3>With Tokens</h3>
        <cs-property-filter
          .query=${this._query}
          filtering-placeholder="Filter instances"
          count-text="5 matches"
          @change=${this._onChange}
        ></cs-property-filter>
        <div class="output">${JSON.stringify(this._query)}</div>
      </section>

      <section>
        <h3>Empty (type + Enter to add tokens)</h3>
        <cs-property-filter
          .query=${this._emptyQuery}
          filtering-placeholder="Type and press Enter"
          @change=${this._onEmptyChange}
        ></cs-property-filter>
        <div class="output">${JSON.stringify(this._emptyQuery)}</div>
      </section>

      <section>
        <h3>Disabled</h3>
        <cs-property-filter
          disabled
          .query=${{ tokens: [{ value: 'locked filter' }], operation: 'and' } as SimpleQuery}
        ></cs-property-filter>
      </section>
    `;
  }
}

export const tagName = 'property-filter-permutations-page';
