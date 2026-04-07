import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import '../../../src/grid/index.js';

@customElement('grid-permutations-page')
export class GridPermutationsPage extends LitElement {
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
    .cell {
      background: #f2f3f3;
      border: 1px solid #d1d5db;
      border-radius: 4px;
      padding: 8px 12px;
      text-align: center;
      font-size: 13px;
    }
  `;

  @state()
  private _equalCols = [
    { colspan: 4 }, { colspan: 4 }, { colspan: 4 },
  ];

  @state()
  private _unevenCols = [
    { colspan: 8 }, { colspan: 4 },
  ];

  @state()
  private _offsetCols = [
    { colspan: 4, offset: 4 }, { colspan: 4 },
  ];

  @state()
  private _singleCol = [
    { colspan: 12 },
  ];

  @state()
  private _fourCols = [
    { colspan: 3 }, { colspan: 3 }, { colspan: 3 }, { colspan: 3 },
  ];

  override render() {
    return html`
      <h2>Grid — Permutations</h2>

      <section>
        <h3>Equal 3 Columns (4+4+4)</h3>
        <cs-grid .gridDefinition=${this._equalCols}>
          <div class="cell">Column 1</div>
          <div class="cell">Column 2</div>
          <div class="cell">Column 3</div>
        </cs-grid>
      </section>

      <section>
        <h3>Uneven Columns (8+4)</h3>
        <cs-grid .gridDefinition=${this._unevenCols}>
          <div class="cell">Main content (8)</div>
          <div class="cell">Sidebar (4)</div>
        </cs-grid>
      </section>

      <section>
        <h3>With Offset (offset 4, colspan 4+4)</h3>
        <cs-grid .gridDefinition=${this._offsetCols}>
          <div class="cell">Offset column</div>
          <div class="cell">Normal column</div>
        </cs-grid>
      </section>

      <section>
        <h3>Full Width Single Column</h3>
        <cs-grid .gridDefinition=${this._singleCol}>
          <div class="cell">Full width</div>
        </cs-grid>
      </section>

      <section>
        <h3>Four Equal Columns</h3>
        <cs-grid .gridDefinition=${this._fourCols}>
          <div class="cell">Col 1</div>
          <div class="cell">Col 2</div>
          <div class="cell">Col 3</div>
          <div class="cell">Col 4</div>
        </cs-grid>
      </section>

      <section>
        <h3>Disabled Gutters</h3>
        <cs-grid .gridDefinition=${this._equalCols} disable-gutters>
          <div class="cell">No gap 1</div>
          <div class="cell">No gap 2</div>
          <div class="cell">No gap 3</div>
        </cs-grid>
      </section>
    `;
  }
}

export const tagName = 'grid-permutations-page';
