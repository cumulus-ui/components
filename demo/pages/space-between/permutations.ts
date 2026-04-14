// AUTO-GENERATED from vendor/cloudscape-source — do not edit manually
// Source: vendor/cloudscape-source/pages/space-between/permutations.page.tsx
// Regenerate: npx tsx scripts/generate-permutations.ts --component space-between
import { html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { PermutationsPageBase } from '../base.js';
import { createPermutations } from '../../utils/create-permutations.js';
import { renderPermutations } from '../../utils/permutations-view.js';
import type { SpaceBetweenProps } from '../../../src/space-between/interfaces.js';
import '../../../src/space-between/index.js';

const permutations = createPermutations<Partial<SpaceBetweenProps> & Record<string, unknown>>([
  {
    size: ['xxxs', 'xs', 's', 'm', 'l', 'xl', 'xxl'],
    direction: ['vertical', 'horizontal'],
    children: [[
        html`<cs-example-content renderNull></cs-example-content>`,
        html`<cs-example-content></cs-example-content>`,
        html`<cs-example-content renderNull></cs-example-content>`,
        html`<cs-example-content></cs-example-content>`,
        html`<cs-example-content></cs-example-content>`,
        html`<cs-example-content renderNull></cs-example-content>`,
      ]],
  },
  {
    size: ['xs', 'xl'],
    direction: ['horizontal', 'vertical'],
    children: [[
        html`<cs-example-content renderNull></cs-example-content>`,
        html`<cs-space-between size="s"><cs-example-content renderNull></cs-example-content> <cs-example-content></cs-example-content> <cs-example-content renderNull></cs-example-content> <cs-example-content></cs-example-content> <cs-example-content></cs-example-content> <cs-example-content renderNull></cs-example-content> </cs-space-between>`,
        html`<cs-example-content renderNull></cs-example-content>`,
        html`<cs-space-between size="l"><cs-example-content renderNull></cs-example-content> <cs-example-content></cs-example-content> <cs-example-content></cs-example-content> <cs-example-content></cs-example-content> <cs-example-content renderNull></cs-example-content> </cs-space-between>`,
        html`<cs-space-between size="xxl"><cs-example-content renderNull></cs-example-content> <cs-example-content></cs-example-content> <cs-example-content></cs-example-content> <cs-example-content></cs-example-content> <cs-example-content renderNull></cs-example-content> </cs-space-between>`,
        html`<cs-example-content renderNull></cs-example-content>`,
      ]],
    note: ['nested vertical'],
  },
  {
    size: ['xs', 'xl'],
    direction: ['horizontal', 'vertical'],
    children: [[
        html`<cs-example-content renderNull></cs-example-content>`,
        html`<cs-space-between size="s" direction="horizontal"><cs-example-content renderNull></cs-example-content> <cs-example-content></cs-example-content> <cs-example-content renderNull></cs-example-content> <cs-example-content></cs-example-content> <cs-example-content></cs-example-content> <cs-example-content renderNull></cs-example-content> </cs-space-between>`,
        html`<cs-example-content renderNull></cs-example-content>`,
        html`<cs-space-between size="l" direction="horizontal"><cs-example-content renderNull></cs-example-content> <cs-example-content></cs-example-content> <cs-example-content></cs-example-content> <cs-example-content></cs-example-content> <cs-example-content renderNull></cs-example-content> </cs-space-between>`,
        html`<cs-space-between size="xxl" direction="horizontal"><cs-example-content renderNull></cs-example-content> <cs-example-content></cs-example-content> <cs-example-content></cs-example-content> <cs-example-content></cs-example-content> <cs-example-content renderNull></cs-example-content> </cs-space-between>`,
        html`<cs-example-content renderNull></cs-example-content>`,
      ]],
    note: ['nested horizontal'],
  },
  {
    size: ['xxl'],
    direction: ['vertical', 'horizontal'],
    children: [html`<cs-example-content></cs-example-content>`],
    note: ['single child'],
  },
] as any);

@customElement('space-between-permutations-page')
export class SpaceBetweenPermutationsPage extends PermutationsPageBase {
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
      <h2>Space Between — Permutations</h2>

      <section>
        <h3>All permutations</h3>
        <div class="permutation-grid">
          ${renderPermutations(permutations, p => html`<cs-space-between .size=${p.size} .direction=${p.direction} .note=${p.note}>${p.children}</cs-space-between>`)}
        </div>
      </section>
    `;
  }
}

export const tagName = 'space-between-permutations-page';
