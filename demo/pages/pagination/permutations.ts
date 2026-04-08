import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../../../src/pagination/index.js';

@customElement('pagination-permutations-page')
export class PaginationPermutationsPage extends LitElement {
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
    .row {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
  `;

  override render() {
    return html`
      <h2>Pagination — Permutations</h2>

      <section>
        <h3>Basic (10 pages, page 1)</h3>
        <div class="row">
          <cs-pagination current-page-index="1" pages-count="10"></cs-pagination>
        </div>
      </section>

      <section>
        <h3>Middle page (page 5 of 10)</h3>
        <div class="row">
          <cs-pagination current-page-index="5" pages-count="10"></cs-pagination>
        </div>
      </section>

      <section>
        <h3>Few pages (3 pages)</h3>
        <div class="row">
          <cs-pagination current-page-index="1" pages-count="3"></cs-pagination>
        </div>
      </section>

      <section>
        <h3>Many pages (page 50 of 100)</h3>
        <div class="row">
          <cs-pagination current-page-index="50" pages-count="100"></cs-pagination>
        </div>
      </section>

      <section>
        <h3>Disabled</h3>
        <div class="row">
          <cs-pagination current-page-index="3" pages-count="10" disabled></cs-pagination>
        </div>
      </section>

      <section>
        <h3>Open End</h3>
        <div class="row">
          <cs-pagination current-page-index="1" pages-count="5" open-end></cs-pagination>
        </div>
      </section>
    `;
  }
}

export const tagName = 'pagination-permutations-page';
