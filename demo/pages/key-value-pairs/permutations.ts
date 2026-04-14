// AUTO-GENERATED from vendor/cloudscape-source — do not edit manually
// Source: vendor/cloudscape-source/pages/key-value-pairs/permutations.page.tsx
// Regenerate: npx tsx scripts/generate-permutations.ts --component key-value-pairs
import { html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { PermutationsPageBase } from '../base.js';
import { createPermutations } from '../../utils/create-permutations.js';
import { renderPermutations } from '../../utils/permutations-view.js';
import type { KeyValuePairsProps } from '../../../src/key-value-pairs/interfaces.js';
import '../../../src/key-value-pairs/index.js';
import '../../../src/copy-to-clipboard/index.js';
import '../../../src/status-indicator/index.js';
import '../../../src/progress-bar/index.js';
import '../../../src/link/index.js';
import '../../../src/space-between/index.js';
import '../../../src/icon/index.js';

const permutations = createPermutations<Partial<KeyValuePairsProps> & Record<string, unknown>>([
  {
    columns: [1],
    items: [[{ label: 'Distribution ID', value: 'E1WG1ZNPRXT0D4' }]],
  },
  {
    columns: [3],
    items: [[
        { label: 'Distribution ID', value: 'E1WG1ZNPRXT0D4' },
        {
        label: 'ARN',
        value: html`<cs-copy-to-clipboard copyButtonAriaLabel="Copy ARN" copyErrorText="ARN failed to copy" copySuccessText="ARN copied" textToCopy="arn:service23G24::111122223333:distribution/23E1WG1ZNPRXT0D4" variant="inline"></cs-copy-to-clipboard>`,
      },
        { label: 'Status', value: html`<cs-status-indicator>Available</cs-status-indicator>` },
        {
        label: 'SSL Certificate',
        value: html`<cs-progress-bar value="30" additionalInfo="Additional information" description="Progress bar label"></cs-progress-bar>`,
      },
        { label: 'Price class', value: 'Use only US, Canada, Europe,' },
        { label: 'CNAMEs', value: html`<cs-link external href="#"> abc.service23G24.xyz </cs-link>` },
      ]],
  },
  {
    columns: [1],
    items: [[{ label: 'Distribution ID', value: 'E1WG1ZNPRXT0D4', info: html`<cs-link variant="info" href="#"> Info </cs-link>` }]],
  },
  {
    columns: [2],
    items: [[
        {
        type: 'group',
        title: 'Column Title 1',
        items: [
        { label: 'Label for key 1.1', value: 'Value 1' },
        { label: 'Label for key 1.2', value: html`<cs-status-indicator>Value for positive status</cs-status-indicator>` },
      ],
      },
        {
        type: 'group',
        title: 'Column Title 2',
        items: [
        { label: 'Label for key 2.1', value: 'Value' },
        { label: 'Label for key 2.2', value: html`<cs-link external href="#"> Value with external link </cs-link>` },
      ],
      },
        {
        type: 'group',
        title: 'Column Title 3',
        items: [
        { label: 'Label for key 3.1', value: 'Value' },
        { label: 'Label for key 3.2', value: html`<cs-status-indicator>Value for positive status</cs-status-indicator>` },
      ],
      },
        {
        type: 'group',
        title: 'Column Title 4',
        items: [
        { label: 'Label for key 4.1', value: 'Value' },
        { label: 'Label for key 4.2', value: html`<cs-link external href="#"> Value with external link </cs-link>` },
      ],
      },
      ]],
  },
  {
    columns: [4],
    items: [[
        { label: 'Label for key 1', value: 'Value' },
        { label: 'Label for key 2', value: html`<cs-link external href="#"> Value with external link </cs-link>` },
        { label: 'Label for key 3', value: 'Value' },
        { label: 'Label for key 4', value: html`<cs-link external href="#"> Value with external link </cs-link>` },
        { label: 'Label for key 5', value: 'Value' },
        { label: 'Label for key 6', value: html`<cs-link external href="#"> Value with external link </cs-link>` },
        { label: 'Label for key 7', value: 'Value' },
        { label: 'Label for key 8', value: html`<cs-link external href="#"> Value with external link </cs-link>` },
        { label: 'Label for key 9', value: 'Value' },
        { label: 'Label for key 10', value: html`<cs-link external href="#"> Value with external link </cs-link>` },
        { label: 'Label for key 11', value: 'Value' },
        { label: 'Label for key 12', value: html`<cs-link external href="#"> Value with external link </cs-link>` },
        { label: 'Label for key 13', value: 'Value' },
        { label: 'Label for key 14', value: html`<cs-link external href="#"> Value with external link </cs-link>` },
      ]],
  },
  {
    columns: [4],
    minColumnWidth: [undefined, 500],
    items: [[
        { label: 'Label for key 1', value: html`<cs-link external href="#"> Value with external link </cs-link>` },
        {
        type: 'group',
        title: 'Title for the column 2',
        items: [
        { label: 'Label for key (belongs to column) 2.1', value: 'Value' },
        { label: 'Label for key (belongs to column) 2.2', value: 'Value' },
      ],
      },
        { label: 'Label for key 3', value: 'Value' },
        { label: 'Label for key 4', value: html`<cs-link external href="#"> Value with external link </cs-link>` },
        { label: 'Label for key 5', value: 'Value' },
        { label: 'Label for key 6', value: html`<cs-link external href="#"> Value with external link </cs-link>` },
        {
        type: 'group',
        title: 'Title for the column 7',
        items: [
        { label: 'Label for key (belongs to column) 7.1', value: 'Value' },
        { label: 'Label for key (belongs to column) 7.2', value: 'Value' },
      ],
      },
        { label: 'Label for key 8', value: html`<cs-link external href="#"> Value with external link </cs-link>` },
        { label: 'Label for key 9', value: 'Value' },
        { label: 'Label for key 10', value: html`<cs-link external href="#"> Value with external link </cs-link>` },
        { label: 'Label for key 11', value: 'Value' },
        { label: 'Label for key 12', value: html`<cs-link external href="#"> Value with external link </cs-link>` },
        { label: 'Label for key 13', value: 'Value' },
        { label: 'Label for key 14', value: html`<cs-link external href="#"> Value with external link </cs-link>` },
      ]],
  },
  {
    columns: [3],
    items: [[
        {
        label: html`<cs-space-between size="xxs" direction="horizontal" alignItems="center"><cs-icon name="status-info"></cs-icon> <div>Label for key</div> </cs-space-between>`,
        value: 'Info icon at the start',
      },
        {
        label: html`<cs-space-between size="xxs" direction="horizontal" alignItems="center"><div>Label for key</div> <cs-icon name="external"></cs-icon> </cs-space-between>`,
        value: 'External icon at the end',
      },
        {
        label: html`<cs-space-between size="xxs" direction="horizontal" alignItems="center"><div>Label for key</div> <cs-icon name="external"></cs-icon> </cs-space-between>`,
        value: 'External icon at the end with info link',
        info: html`<cs-link>Info</cs-link>`,
      },
      ]],
  },
] as any);

@customElement('key-value-pairs-permutations-page')
export class KeyValuePairsPermutationsPage extends PermutationsPageBase {
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
      <h2>Key Value Pairs — Permutations</h2>

      <section>
        <h3>All permutations</h3>
        <div class="permutation-grid">
          ${renderPermutations(permutations, p => html`<cs-key-value-pairs .columns=${p.columns} .items=${p.items} .minColumnWidth=${p.minColumnWidth}></cs-key-value-pairs>`)}
        </div>
      </section>
    `;
  }
}

export const tagName = 'key-value-pairs-permutations-page';
