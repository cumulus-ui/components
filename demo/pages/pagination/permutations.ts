import { html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { PermutationsPageBase } from '../base.js';
import '../../../src/pagination/index.js';

@customElement('pagination-permutations-page')
export class PaginationPermutationsPage extends PermutationsPageBase {
  static override styles = [...PermutationsPageBase.styles, css`
    .row {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    `];

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
