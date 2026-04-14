// AUTO-GENERATED from vendor/cloudscape-source — do not edit manually
// Source: vendor/cloudscape-source/pages/tiles/permutations.page.tsx
// Regenerate: npx tsx scripts/generate-permutations.ts --component tiles
import { html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { PermutationsPageBase } from '../base.js';
import { createPermutations } from '../../utils/create-permutations.js';
import { renderPermutations } from '../../utils/permutations-view.js';
import type { TilesProps } from '../../../src/tiles/interfaces.js';
import '../../../src/tiles/index.js';

const permutations = createPermutations<Partial<TilesProps> & Record<string, unknown>>([
  {
    value: ['first'],
    readOnly: [false, true],
    items: [[
        { value: 'first', description: 'Short description', label: 'First Button', disabled: true },
        { value: 'second', description: 'Short description', label: 'Second Button' },
        { value: 'third', description: 'Short description', label: 'Third Button' },
        { value: 'fourth', description: 'Short description', label: 'Fourth Button' },
        { value: 'fifth', description: 'Short description', label: 'Fifth Button' },
        { value: 'sixth', description: 'Short description', label: 'Sixth Button' },
      ], [
        { value: 'first', description: 'Long description describes long', label: 'First Button' },
        {
        value: 'second',
        description: 'Short description',
        label: 'Label Label Label Label Label Label Label Label Label Label',
        disabled: true,
      },
        {
        value: 'third',
        description: 'ContinuouslyLongDescriptionContinuouslyLongDescriptionContinuouslyLongDescription',
        label: 'Third Button',
      },
        {
        value: 'fourth',
        description: 'Short description',
        label: 'LabelLabelLabelLabelLabelLabelLabelLabelLabelLabelLabelLabelLabelLabel',
      },
        {
        value: 'fifth',
        description: 'Long description describes long description describes long description describes long description describes long description describes long description describes long description describes long',
        label: 'Fourth Button',
      },
        { value: 'sixth', description: 'Short description', label: 'Sixth Button' },
      ], [
        { value: 'seventh', description: 'Short Description', label: 'First Button', disabled: true },
        { value: 'second', description: 'Short description', label: 'Second Button' },
        { value: 'ninth', description: '', label: 'Label' },
        {
        value: 'first',
        description: 'Short description',
        label: 'Third Button',
        image: html`<img src="[dynamic]" alt="Amazon">`,
      },
        { value: 'third', description: 'Short description', label: 'Third Button' },
        {
        value: 'fourth',
        description: 'Short description',
        label: 'LabelLabelLabelLabelLabelLabelLabelLabelLabelLabelLabelLabelLabelLabel',
      },
        {
        value: 'fifth',
        description: 'Long description describes long description describes long description describes long description describes long description describes long description describes long description describes long',
        label: 'Fourth Button',
      },
        {
        value: 'sixth',
        description: 'Short description',
        label: 'Third Button',
        image: html`<img src="[dynamic]" alt="Amazon">`,
      },
      ], [
        { value: 'first', description: 'Short description', label: 'First Button', disabled: true },
        { value: 'second', description: 'Short description', label: 'Second Button' },
        {
        value: 'third',
        description: 'Short description',
        label: 'Third Button',
        image: html`<img src="[dynamic]" alt="Amazon">`,
      },
        { value: 'fourth', description: 'Short description', label: 'Fourth Button' },
        { value: 'fifth', description: 'Short description', label: 'Fifth Button' },
        {
        value: 'sixth',
        description: 'Short description',
        label: 'Sixth Button Sixth Button Sixth Button Sixth Button Sixth Button',
        image: html`<img src="[dynamic]" alt="Amazon">`,
      },
      ]],
  },
  {
    value: ['first'],
    columns: [undefined, 4],
    items: [[
        {
        value: 'first',
        label: 'First Button',
        description: 'Short description',
        disabled: true,
        image: html`<img src="[dynamic]" alt="Amazon">`,
      },
        {
        value: 'second',
        label: 'Second Button',
        description: 'Short description',
        image: html`<img src="[dynamic]" alt="Amazon">`,
      },
        {
        value: 'third',
        label: 'Third Button',
        description: 'Long text, long enough to wrap.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Whatever.',
        image: html`<img src="[dynamic]" alt="Amazon">`,
      },
        {
        value: 'fourth',
        label: 'Fourth Button',
        description: 'Short description',
        image: html`<img src="[dynamic]" alt="Amazon">`,
      },
        {
        value: 'fifth',
        label: 'Fourth Button',
        description: 'Short description',
        image: html`<img src="[dynamic]" alt="Amazon">`,
      },
      ]],
  },
] as any);

@customElement('tiles-permutations-page')
export class TilesPermutationsPage extends PermutationsPageBase {
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
      <h2>Tiles — Permutations</h2>

      <section>
        <h3>All permutations</h3>
        <div class="permutation-grid">
          ${renderPermutations(permutations, p => html`<cs-tiles .value=${p.value} .readOnly=${p.readOnly} .items=${p.items} .columns=${p.columns}></cs-tiles>`)}
        </div>
      </section>
    `;
  }
}

export const tagName = 'tiles-permutations-page';
