import { html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { PermutationsPageBase } from '../base.js';
import '../../../src/multiselect/index.js';
import type { MultiselectProps } from '../../../src/multiselect/interfaces.js';

const SIMPLE_OPTIONS: MultiselectProps.Options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
  { label: 'Option 4', value: '4', disabled: true },
  { label: 'Option 5', value: '5', description: 'With description' },
];

const GROUPED_OPTIONS: MultiselectProps.Options = [
  {
    label: 'Fruits',
    options: [
      { label: 'Apple', value: 'apple' },
      { label: 'Banana', value: 'banana' },
    ],
  },
  {
    label: 'Vegetables',
    options: [
      { label: 'Carrot', value: 'carrot' },
      { label: 'Potato', value: 'potato' },
    ],
  },
];

@customElement('multiselect-permutations-page')
export class MultiselectPermutationsPage extends PermutationsPageBase {
  static override styles = [...PermutationsPageBase.styles, css`
    cs-multiselect {
      width: 300px;
    }
    `];

  @state()
  private _selectedBasic: ReadonlyArray<MultiselectProps.Option> = [];

  @state()
  private _selectedTokens: ReadonlyArray<MultiselectProps.Option> = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ];

  @state()
  private _selectedKeepOpen: ReadonlyArray<MultiselectProps.Option> = [];

  @state()
  private _selectedGrouped: ReadonlyArray<MultiselectProps.Option> = [];

  private _onBasicChange(e: CustomEvent<MultiselectProps.MultiselectChangeDetail>) {
    this._selectedBasic = e.detail.selectedOptions;
  }

  private _onTokensChange(e: CustomEvent<MultiselectProps.MultiselectChangeDetail>) {
    this._selectedTokens = e.detail.selectedOptions;
  }

  private _onKeepOpenChange(e: CustomEvent<MultiselectProps.MultiselectChangeDetail>) {
    this._selectedKeepOpen = e.detail.selectedOptions;
  }

  private _onGroupedChange(e: CustomEvent<MultiselectProps.MultiselectChangeDetail>) {
    this._selectedGrouped = e.detail.selectedOptions;
  }

  override render() {
    return html`
      <h2>Multiselect — Permutations</h2>

      <section>
        <h3>Basic</h3>
        <cs-multiselect
          placeholder="Choose options"
          .options=${SIMPLE_OPTIONS}
          .selectedOptions=${this._selectedBasic}
          aria-label="Basic multiselect"
          @change=${this._onBasicChange}
        ></cs-multiselect>
      </section>

      <section>
        <h3>With Tokens (pre-selected)</h3>
        <cs-multiselect
          placeholder="Choose options"
          .options=${SIMPLE_OPTIONS}
          .selectedOptions=${this._selectedTokens}
          aria-label="Tokens multiselect"
          @change=${this._onTokensChange}
        ></cs-multiselect>
      </section>

      <section>
        <h3>Token Limit (2)</h3>
        <cs-multiselect
          placeholder="Choose options"
          .options=${SIMPLE_OPTIONS}
          .selectedOptions=${this._selectedTokens}
          .tokenLimit=${2}
          aria-label="Token limit multiselect"
          @change=${this._onTokensChange}
        ></cs-multiselect>
      </section>

      <section>
        <h3>Hide Tokens</h3>
        <cs-multiselect
          placeholder="Choose options"
          hide-tokens
          .options=${SIMPLE_OPTIONS}
          .selectedOptions=${this._selectedTokens}
          aria-label="Hidden tokens multiselect"
          @change=${this._onTokensChange}
        ></cs-multiselect>
      </section>

      <section>
        <h3>Keep Open</h3>
        <cs-multiselect
          placeholder="Keep open on select"
          keep-open
          .options=${SIMPLE_OPTIONS}
          .selectedOptions=${this._selectedKeepOpen}
          aria-label="Keep open multiselect"
          @change=${this._onKeepOpenChange}
        ></cs-multiselect>
      </section>

      <section>
        <h3>With Groups</h3>
        <cs-multiselect
          placeholder="Choose from groups"
          keep-open
          .options=${GROUPED_OPTIONS}
          .selectedOptions=${this._selectedGrouped}
          aria-label="Grouped multiselect"
          @change=${this._onGroupedChange}
        ></cs-multiselect>
      </section>

      <section>
        <h3>Disabled</h3>
        <cs-multiselect
          placeholder="Disabled"
          disabled
          .options=${SIMPLE_OPTIONS}
          .selectedOptions=${[]}
          aria-label="Disabled multiselect"
        ></cs-multiselect>
      </section>

      <section>
        <h3>Invalid</h3>
        <cs-multiselect
          placeholder="Invalid"
          invalid
          .options=${SIMPLE_OPTIONS}
          .selectedOptions=${[]}
          aria-label="Invalid multiselect"
        ></cs-multiselect>
      </section>
    `;
  }
}

export const tagName = 'multiselect-permutations-page';
