// AUTO-GENERATED from vendor/cloudscape-source — do not edit manually
// Source: vendor/cloudscape-source/pages/list/permutations.page.tsx
// Regenerate: npx tsx scripts/generate-permutations.ts --component list
import { html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { PermutationsPageBase } from '../base.js';
import { createPermutations } from '../../utils/create-permutations.js';
import { renderPermutations } from '../../utils/permutations-view.js';
import type { ListProps } from '../../../src/list/interfaces.js';
import '../../../src/list/index.js';

const permutations = createPermutations<Partial<ListProps> & Record<string, unknown>>([
  {
    viewportWidth: [200, 400],
    items: [undefined /* items */],
    _disablePaddings: [false, true, 'item'],
    renderItem: ['[function]', '[function]', '[function]', '[function]', '[function]'],
  },
] as any);

@customElement('list-permutations-page')
export class ListPermutationsPage extends PermutationsPageBase {
  static override styles = [...PermutationsPageBase.styles, css`
    .permutation-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      align-items: flex-start;
    }
  `];

  override render() {
    return html`
      <h2>List — Permutations</h2>

      <section>
        <h3>All permutations</h3>
        <div class="permutation-grid">
          ${renderPermutations(permutations, p => html`<cs-list .viewportWidth=${p.viewportWidth} .items=${p.items} ._disablePaddings=${p._disablePaddings} .renderItem=${p.renderItem}></cs-list>`)}
        </div>
      </section>
    `;
  }
}

export const tagName = 'list-permutations-page';
