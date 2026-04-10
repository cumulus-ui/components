import { html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { PermutationsPageBase } from '../base.js';
import '../../../src/select/index.js';
import type { SelectProps } from '../../../src/select/interfaces.js';

const SIMPLE_OPTIONS: SelectProps.Options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
  { label: 'Option 4', value: '4', disabled: true },
  { label: 'Option 5', value: '5', description: 'With description' },
];

const GROUPED_OPTIONS: SelectProps.Options = [
  {
    label: 'Group A',
    options: [
      { label: 'Alpha 1', value: 'a1' },
      { label: 'Alpha 2', value: 'a2' },
    ],
  },
  {
    label: 'Group B',
    options: [
      { label: 'Beta 1', value: 'b1' },
      { label: 'Beta 2', value: 'b2', description: 'Beta two description' },
    ],
  },
];

const FILTER_OPTIONS: SelectProps.Options = [
  { label: 'Apple', value: 'apple', labelTag: 'fruit' },
  { label: 'Banana', value: 'banana', labelTag: 'fruit' },
  { label: 'Carrot', value: 'carrot', labelTag: 'vegetable' },
  { label: 'Date', value: 'date', labelTag: 'fruit' },
  { label: 'Eggplant', value: 'eggplant', labelTag: 'vegetable' },
];

@customElement('select-permutations-page')
export class SelectPermutationsPage extends PermutationsPageBase {
  static override styles = [...PermutationsPageBase.styles, css`
    .row {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
    }
    cs-select {
      width: 300px;
    }
    `];

  @state()
  private _selectedBasic: SelectProps.Option | null = null;

  @state()
  private _selectedGrouped: SelectProps.Option | null = null;

  @state()
  private _selectedFilter: SelectProps.Option | null = null;

  private _onBasicChange(e: CustomEvent<SelectProps.ChangeDetail>) {
    this._selectedBasic = e.detail.selectedOption;
  }

  private _onGroupedChange(e: CustomEvent<SelectProps.ChangeDetail>) {
    this._selectedGrouped = e.detail.selectedOption;
  }

  private _onFilterChange(e: CustomEvent<SelectProps.ChangeDetail>) {
    this._selectedFilter = e.detail.selectedOption;
  }

  override render() {
    return html`
      <h2>Select — Permutations</h2>

      <section>
        <h3>Basic</h3>
        <cs-select
          placeholder="Choose an option"
          .options=${SIMPLE_OPTIONS}
          .selectedOption=${this._selectedBasic}
          aria-label="Basic select"
          @change=${this._onBasicChange}
        ></cs-select>
      </section>

      <section>
        <h3>With Groups</h3>
        <cs-select
          placeholder="Choose from groups"
          .options=${GROUPED_OPTIONS}
          .selectedOption=${this._selectedGrouped}
          aria-label="Grouped select"
          @change=${this._onGroupedChange}
        ></cs-select>
      </section>

      <section>
        <h3>With Filtering</h3>
        <cs-select
          placeholder="Search options"
          filtering-type="auto"
          filtering-placeholder="Type to filter"
          .options=${FILTER_OPTIONS}
          .selectedOption=${this._selectedFilter}
          aria-label="Filterable select"
          @change=${this._onFilterChange}
        ></cs-select>
      </section>

      <section>
        <h3>Disabled</h3>
        <cs-select
          placeholder="Disabled select"
          disabled
          .options=${SIMPLE_OPTIONS}
          .selectedOption=${null}
          aria-label="Disabled select"
        ></cs-select>
      </section>

      <section>
        <h3>Invalid</h3>
        <cs-select
          placeholder="Invalid select"
          invalid
          .options=${SIMPLE_OPTIONS}
          .selectedOption=${null}
          aria-label="Invalid select"
        ></cs-select>
      </section>

      <section>
        <h3>Pre-selected</h3>
        <cs-select
          .options=${SIMPLE_OPTIONS}
          .selectedOption=${{ label: 'Option 2', value: '2' }}
          aria-label="Pre-selected"
        ></cs-select>
      </section>
    `;
  }
}

export const tagName = 'select-permutations-page';
