// AUTO-GENERATED from vendor/cloudscape-source — do not edit manually
// Source: vendor/cloudscape-source/pages/tabs/permutations.page.tsx
// Regenerate: npx tsx scripts/generate-permutations.ts --component tabs
import { html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { PermutationsPageBase } from '../base.js';
import { createPermutations } from '../../utils/create-permutations.js';
import { renderPermutations } from '../../utils/permutations-view.js';
import type { TabsProps } from '../../../src/tabs/interfaces.js';
import '../../../src/tabs/index.js';
import '../../../src/button/index.js';
import '../../../src/space-between/index.js';
import '../../../src/button-dropdown/index.js';

const permutations1 = createPermutations<Partial<TabsProps> & Record<string, unknown>>([
  {
    activeTabId: ['first', 'second'],
    variant: ['default', 'container'],
    tabs: [[
        { label: 'First tab', id: 'first', content: 'First content', href: '#first' },
        { label: 'Second tab', id: 'second', href: '#second' },
      ], [
        {
        label: 'First tab',
        id: 'first',
        content: html`<p> Long text, long enough to wrap. Shoulder tail brisket sausage, shank biltong pork fatback chicken hamburger doner andouille ham hock. Picanha meatball leberkas, turkey andouille boudin tongue frankfurter. Fatback tenderloin brisket cow leberkas. Ball tip short loin brisket andouille. Flank turkey drumstick cow, prosciutto hamburger bresaola pork. </p>`,
      },
        { label: 'Second tab', id: 'second', disabled: true },
        { label: 'Third tab', id: 'third', content: 'Third tab\'s content' },
      ]],
  },
  {
    variant: ['default', 'container', 'stacked'],
    tabs: [undefined /* ['first', 'second', 'third', 'fourth'... */],
    disableContentPaddings: [false, true],
  },
  {
    variant: ['default'],
    tabs: [[
        { label: html` First tab <i>new</i> `, id: 'first', content: 'First content', href: '#first' },
        { label: html` Second tab <i>new</i> `, id: 'second', href: '#second' },
      ]],
  },
] as any);

const permutations2 = createPermutations<Partial<TabsProps> & Record<string, unknown>>([
  {
    activeTabId: ['first', 'second'],
    variant: ['default', 'container'],
    fitHeight: [true],
    tabs: [[
        { label: 'First tab', id: 'first', content: undefined /* new Array(10).fill('').map((_, index)... */ },
        { label: 'Second tab', id: 'second', content: html`<div>Second content</div>` },
      ]],
  },
] as any);

const permutations3 = createPermutations<Partial<TabsProps> & Record<string, unknown>>([
  {
    activeTabId: ['first', 'second'],
    variant: ['default', 'container'],
    actions: [undefined, html`<cs-button>Add</cs-button>`, html`<cs-space-between size="s" direction="horizontal"><cs-button>Add</cs-button> <cs-button>Add2</cs-button> </cs-space-between>`],
    tabs: [[
        {
        label: 'First tab',
        id: 'first',
        content: 'First content',
        href: '#first',
        dismissible: true,
        dismissLabel: 'Dismiss first tab',
      },
        { label: 'Second tab', id: 'second', href: '#second' },
      ], [
        {
        label: 'First tab',
        id: 'first',
        content: html`<p> Long text, long enough to wrap. Shoulder tail brisket sausage, shank biltong pork fatback chicken hamburger doner andouille ham hock. Picanha meatball leberkas, turkey andouille boudin tongue frankfurter. Fatback tenderloin brisket cow leberkas. Ball tip short loin brisket andouille. Flank turkey drumstick cow, prosciutto hamburger bresaola pork. </p>`,
        action: html`<cs-button-dropdown variant="icon" ariaLabel="Query actions for first tab" .items=${[{ id: 'save', text: 'Save', disabled: true }, { id: 'saveAs', text: 'Save as' }, { id: 'rename', text: 'Rename', disabled: true }, { id: 'delete', text: 'Delete', disabled: true }]} expandToViewport></cs-button-dropdown>`,
      },
        { label: 'Second tab', id: 'second', disabled: true },
        {
        label: 'Third tab',
        id: 'third',
        content: 'Third tab\'s content',
        action: html`<cs-button-dropdown variant="icon" ariaLabel="Query actions for third tab" .items=${[{ id: 'save', text: 'Save', disabled: true }, { id: 'saveAs', text: 'Save as' }, { id: 'rename', text: 'Rename', disabled: true }, { id: 'delete', text: 'Delete', disabled: true }]} expandToViewport></cs-button-dropdown>`,
        dismissible: true,
        dismissLabel: 'Dismiss third tab',
      },
        { label: 'fourth tab', id: 'fourth', dismissible: true, dismissLabel: 'Dismiss fourth tab' },
      ]],
  },
  {
    variant: ['default', 'container', 'stacked'],
    tabs: [undefined /* ['first', 'second', 'third', 'fourth'... */],
    disableContentPaddings: [false, true],
  },
] as any);

const permutations4 = createPermutations<Partial<TabsProps> & Record<string, unknown>>([
  {
    activeTabId: ['first', 'second'],
    variant: ['default', 'container'],
    fitHeight: [true],
    tabs: [[
        {
        label: 'First tab',
        id: 'first',
        dismissible: true,
        dismissLabel: 'Dismiss first tab',
        content: undefined /* new Array(10).fill('').map((_, index)... */,
      },
        {
        label: 'Second tab',
        id: 'second',
        action: html`<cs-button-dropdown variant="icon" ariaLabel="Query actions for second tab" .items=${[{ id: 'save', text: 'Save', disabled: true }, { id: 'saveAs', text: 'Save as' }, { id: 'rename', text: 'Rename', disabled: true }, { id: 'delete', text: 'Delete', disabled: true }]} expandToViewport></cs-button-dropdown>`,
        content: html`<div>Second content</div>`,
      },
      ]],
  },
] as any);

@customElement('tabs-permutations-page')
export class TabsPermutationsPage extends PermutationsPageBase {
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
      <h2>Tabs — Permutations</h2>

      <section>
        <h3>Set 1</h3>
        <div class="permutation-grid">
          ${renderPermutations(permutations1, p => html`<cs-tabs .activeTabId=${p.activeTabId} .variant=${p.variant} .tabs=${p.tabs} .disableContentPaddings=${p.disableContentPaddings} .fitHeight=${p.fitHeight} .actions=${p.actions}></cs-tabs>`)}
        </div>
      </section>

      <section>
        <h3>Set 2</h3>
        <div class="permutation-grid">
          ${renderPermutations(permutations2, p => html`<cs-tabs .activeTabId=${p.activeTabId} .variant=${p.variant} .tabs=${p.tabs} .disableContentPaddings=${p.disableContentPaddings} .fitHeight=${p.fitHeight} .actions=${p.actions}></cs-tabs>`)}
        </div>
      </section>

      <section>
        <h3>Set 3</h3>
        <div class="permutation-grid">
          ${renderPermutations(permutations3, p => html`<cs-tabs .activeTabId=${p.activeTabId} .variant=${p.variant} .tabs=${p.tabs} .disableContentPaddings=${p.disableContentPaddings} .fitHeight=${p.fitHeight} .actions=${p.actions}></cs-tabs>`)}
        </div>
      </section>

      <section>
        <h3>Set 4</h3>
        <div class="permutation-grid">
          ${renderPermutations(permutations4, p => html`<cs-tabs .activeTabId=${p.activeTabId} .variant=${p.variant} .tabs=${p.tabs} .disableContentPaddings=${p.disableContentPaddings} .fitHeight=${p.fitHeight} .actions=${p.actions}></cs-tabs>`)}
        </div>
      </section>
    `;
  }
}

export const tagName = 'tabs-permutations-page';
