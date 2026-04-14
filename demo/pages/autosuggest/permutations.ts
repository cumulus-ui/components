// AUTO-GENERATED from vendor/cloudscape-source — do not edit manually
// Source: vendor/cloudscape-source/pages/autosuggest/permutations.page.tsx
// Regenerate: npx tsx scripts/generate-permutations.ts --component autosuggest
import { html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { PermutationsPageBase } from '../base.js';
import { createPermutations } from '../../utils/create-permutations.js';
import { renderPermutations } from '../../utils/permutations-view.js';
import type { AutosuggestProps } from '../../../src/autosuggest/interfaces.js';
import '../../../src/autosuggest/index.js';

const permutations = createPermutations<Partial<AutosuggestProps> & Record<string, unknown>>([
  {
    ariaLabel: ['some label'],
    placeholder: [undefined, 'Enter some data'],
    invalid: [false, true],
    value: ['', 'op', 'Option 2', 'Other Option'],
    options: [[{ value: 'option1', label: 'Option 1' }, { value: 'option2', label: 'Option 2' }], undefined],
    enteredTextLabel: [undefined /* enteredTextLabel */],
  },
  {
    ariaLabel: ['some label'],
    placeholder: ['Enter some data'],
    warning: [true],
    value: ['op'],
    options: [[{ value: 'option1', label: 'Option 1' }, { value: 'option2', label: 'Option 2' }], undefined],
    enteredTextLabel: [undefined /* enteredTextLabel */],
  },
  {
    ariaLabel: ['some label'],
    placeholder: ['Enter some data'],
    invalid: [true],
    warning: [true],
    value: ['op'],
    options: [[{ value: 'option1', label: 'Option 1' }, { value: 'option2', label: 'Option 2' }]],
    enteredTextLabel: [undefined /* enteredTextLabel */],
  },
  {
    ariaLabel: ['some label'],
    options: [undefined],
    value: ['', 'Some value'],
    empty: [undefined, 'No options', html` No options, but <a>a link</a> `],
    enteredTextLabel: [undefined /* enteredTextLabel */],
  },
  {
    ariaLabel: ['some label'],
    disabled: [true, false],
    invalid: [true, false],
    value: ['', 'Some option'],
    placeholder: ['Enter some data'],
    enteredTextLabel: [undefined /* enteredTextLabel */],
  },
  {
    ariaLabel: ['some label'],
    disabled: [true, false],
    warning: [true],
    value: ['', 'Some option'],
    placeholder: ['Enter some data'],
    enteredTextLabel: [undefined /* enteredTextLabel */],
  },
  {
    ariaLabel: ['some label'],
    readOnly: [true],
    value: ['', 'Some option'],
    placeholder: ['Enter some data'],
    enteredTextLabel: [undefined /* enteredTextLabel */],
  },
  {
    value: [''],
    ariaLabel: ['some label'],
    statusType: ['loading'],
    loadingText: ['Loading more items', undefined],
    enteredTextLabel: [undefined /* enteredTextLabel */],
  },
  {
    value: [''],
    ariaLabel: ['some label'],
    statusType: ['error'],
    errorText: ['Error while loading', undefined],
    enteredTextLabel: [undefined /* enteredTextLabel */],
  },
  {
    value: ['', 'op', 'Option 2', 'tag1', 'this is a label tag', 'thisisafilteringtag'],
    options: [[
        { value: 'option1', label: 'Option 1', tags: ['tag1', 'tag2'] },
        { value: 'option2', label: 'Option 2', filteringTags: ['thisisafilteringtag'] },
      ], [{ value: 'option1', label: 'Option 1', labelTag: 'this is a label tag' }, { value: 'option2', label: 'Option 2' }], [
        { value: 'option1', label: 'Option 1', tags: ['tag1', 'tag2'], labelTag: 'this is a label tag' },
        { value: 'option2', label: 'Option 2' },
      ], [
        { value: 'option1', label: 'Option 1', tags: ['tag1', 'tag2'], description: 'Description1' },
        { value: 'option2', label: 'Option 2' },
      ], [
        { value: 'option1', label: 'Option 1', iconAriaLabel: 'amazon-logo', iconUrl: undefined /* img */ },
        {
        value: 'option2',
        label: 'Option 2',
        iconSvg: html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" focusable="false"><circle cx="8" cy="8" r="7"> <circle cx="8" cy="8" r="3"> </svg>`,
      },
      ], [
        {
        value: 'option1',
        label: 'Option 1',
        tags: ['tag1', 'tag2'],
        iconSvg: html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" focusable="false"><circle cx="8" cy="8" r="7"> <circle cx="8" cy="8" r="3"> </svg>`,
      },
        { value: 'option2', label: 'Option 2' },
      ]],
    enteredTextLabel: [undefined /* enteredTextLabel */],
  },
  {
    value: [''],
    enteredTextLabel: [undefined /* enteredTextLabel */],
    options: [undefined /* range(20).map(i => ({ value: `option$... */],
    virtualScroll: [true, false],
  },
  {
    value: ['some value'],
    enteredTextLabel: [undefined /* enteredTextLabel */],
    options: [[]],
    virtualScroll: [true, false],
  },
] as any);

@customElement('autosuggest-permutations-page')
export class AutosuggestPermutationsPage extends PermutationsPageBase {
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
      <h2>Autosuggest — Permutations</h2>

      <section>
        <h3>All permutations</h3>
        <div class="permutation-grid">
          ${renderPermutations(permutations, p => html`<cs-autosuggest .ariaLabel=${p.ariaLabel} .placeholder=${p.placeholder} .invalid=${p.invalid} .value=${p.value} .options=${p.options} .enteredTextLabel=${p.enteredTextLabel} .warning=${p.warning} .empty=${p.empty} .disabled=${p.disabled} .readOnly=${p.readOnly} .statusType=${p.statusType} .loadingText=${p.loadingText} .errorText=${p.errorText} .virtualScroll=${p.virtualScroll}></cs-autosuggest>`)}
        </div>
      </section>
    `;
  }
}

export const tagName = 'autosuggest-permutations-page';
