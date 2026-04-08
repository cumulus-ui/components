import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../../../src/column-layout/index.js';

@customElement('column-layout-permutations-page')
export class ColumnLayoutPermutationsPage extends LitElement {
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
    .box {
      background: #f2f3f3;
      border: 1px solid #d1d5db;
      border-radius: 4px;
      padding: 12px 16px;
      text-align: center;
      font-size: 13px;
    }
  `;

  override render() {
    return html`
      <h2>Column Layout — Permutations</h2>

      <section>
        <h3>1 Column</h3>
        <cs-column-layout columns="1">
          <div class="box">Full width</div>
        </cs-column-layout>
      </section>

      <section>
        <h3>2 Columns</h3>
        <cs-column-layout columns="2">
          <div class="box">Column 1</div>
          <div class="box">Column 2</div>
        </cs-column-layout>
      </section>

      <section>
        <h3>3 Columns</h3>
        <cs-column-layout columns="3">
          <div class="box">Column 1</div>
          <div class="box">Column 2</div>
          <div class="box">Column 3</div>
        </cs-column-layout>
      </section>

      <section>
        <h3>4 Columns</h3>
        <cs-column-layout columns="4">
          <div class="box">Column 1</div>
          <div class="box">Column 2</div>
          <div class="box">Column 3</div>
          <div class="box">Column 4</div>
        </cs-column-layout>
      </section>

      <section>
        <h3>Text Grid Variant</h3>
        <cs-column-layout columns="3" variant="text-grid">
          <div class="box">Item 1</div>
          <div class="box">Item 2</div>
          <div class="box">Item 3</div>
        </cs-column-layout>
      </section>

      <section>
        <h3>With Borders (All)</h3>
        <cs-column-layout columns="3" borders="all">
          <div class="box">Item 1</div>
          <div class="box">Item 2</div>
          <div class="box">Item 3</div>
        </cs-column-layout>
      </section>

      <section>
        <h3>Disabled Gutters</h3>
        <cs-column-layout columns="3" disable-gutters>
          <div class="box">No gap 1</div>
          <div class="box">No gap 2</div>
          <div class="box">No gap 3</div>
        </cs-column-layout>
      </section>
    `;
  }
}

export const tagName = 'column-layout-permutations-page';
