import { html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { PermutationsPageBase } from '../base.js';
import '../../../src/column-layout/index.js';

@customElement('column-layout-permutations-page')
export class ColumnLayoutPermutationsPage extends PermutationsPageBase {
  static override styles = [...PermutationsPageBase.styles, css`
    .box {
      background: #f2f3f3;
      border: 1px solid #d1d5db;
      border-radius: 4px;
      padding: 12px 16px;
      text-align: center;
      font-size: 13px;
    }
    `];

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
