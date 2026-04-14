// AUTO-GENERATED from vendor/cloudscape-source — do not edit manually
// Source: vendor/cloudscape-source/pages/table/permutations.page.tsx
// Regenerate: npx tsx scripts/generate-permutations.ts --component table
import { html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { PermutationsPageBase } from '../base.js';
import { createPermutations } from '../../utils/create-permutations.js';
import { renderPermutations } from '../../utils/permutations-view.js';
import type { TableProps } from '../../../src/table/interfaces.js';
import '../../../src/table/index.js';
import '../../../src/header/index.js';
import '../../../src/property-filter/index.js';

const permutations = createPermutations<Partial<TableProps> & Record<string, unknown>>([
  {
    wrapLines: [true, false],
    columnDefinitions: [undefined /* PROPERTY_COLUMNS.map(column => ({ ...... */],
    items: [[
        {
        name: 'Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color',
        value: '#000000',
        type: 'String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String',
      },
        {
        name: 'Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width',
        value: '100',
        type: 'Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer',
      },
        {
        name: 'Height Height Height Height Height Height Height Height Height Height Height Height Height Height Height Height Height Height Height Height Height Height Height Height Height Height Height Height',
        value: '200',
        type: 'Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer',
      },
      ]],
  },
  {
    wrapLines: [true],
    columnDefinitions: [undefined /* PROPERTY_COLUMNS.map((column, index) ... */],
    items: [[
        {
        name: 'Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color',
        value: '#000000',
        type: 'String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String',
      },
        {
        name: 'Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width',
        value: '100',
        type: 'Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer',
      },
        {
        name: 'Height Height Height Height Height Height Height Height Height Height Height Height Height Height Height Height Height Height Height Height Height Height Height Height Height Height Height Height',
        value: '200',
        type: 'Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer',
      },
      ]],
  },
  {
    columnDefinitions: [undefined /* PROPERTY_COLUMNS */],
    items: [[
        { name: 'Color', value: '#000000', type: 'String' },
        { name: 'Width', value: '100', type: 'Integer' },
        { name: 'Height', value: '200', type: 'Integer' },
      ]],
  },
  {
    columnDefinitions: [[
        { id: 'variable', header: 'Property', cell: '[function]', width: 100, minWidth: '300px' },
        { id: 'type', header: 'Type', cell: '[function]', width: 300, minWidth: '100px' },
        { id: 'value', header: 'Value', cell: '[function]', width: 300, minWidth: '300px' },
        { id: 'updatedDate', header: 'Updated date', cell: '[function]', width: 150 },
        { id: 'description', header: 'Description', cell: '[function]', minWidth: '100px', width: 150 },
      ]],
    items: [[
        { name: 'Color', value: '#000000', type: 'String', updatedDate: '03.12.2018', description: 'First' },
        { name: 'Width', value: '100', type: 'Integer', updatedDate: '05.02.2019', description: 'Second' },
        { name: 'Height', value: '200', type: 'Integer', updatedDate: '01.10.2019', description: 'Third' },
      ]],
  },
  {
    columnDefinitions: [undefined /* SORTABLE_COLUMNS */],
    items: [undefined /* createSimpleItems(3) */],
    sortingColumn: [undefined /* SORTABLE_COLUMNS[0] */, undefined],
    sortingDisabled: [true, false],
  },
  {
    columnDefinitions: [undefined /* SORTABLE_COLUMNS */],
    items: [undefined /* createSimpleItems(3) */],
    sortingColumn: [undefined /* SORTABLE_COLUMNS[0] */],
    sortingDescending: [true],
  },
  {
    columnDefinitions: [undefined /* SORTABLE_COLUMNS */],
    items: [undefined /* createSimpleItems(3) */],
    variant: [undefined, 'full-page'],
    pagination: [undefined, 'pagination'],
    footer: [undefined, 'footer'],
  },
  {
    columnDefinitions: [undefined /* SORTABLE_COLUMNS */],
    header: [html`<cs-header variant="h2">Table Header</cs-header>`],
    pagination: ['pagination'],
    filter: [html`<cs-property-filter .filteringProperties=${[{ key: 'text', operators: ['=', '!=', ':', '!:'], propertyLabel: 'Text', groupValuesLabel: 'Text values' }, { key: 'number', operators: ['=', '!=', ':', '!:'], propertyLabel: 'Number', groupValuesLabel: 'Number values' }]} i18nStrings="[dynamic]" onChange="[expr]"></cs-property-filter>`],
    preferences: ['preferences'],
    items: [undefined /* createSimpleItems(3) */],
  },
  {
    header: ['Vertical align'],
    columnDefinitions: [undefined /* VERTICAL_ALIGN_COLUMNS */],
    cellVerticalAlign: ['top'],
    items: [undefined /* createSimpleItems(3) */],
    variant: [undefined, 'full-page'],
    selectionType: ['multi'],
  },
  {
    columnDefinitions: [[
        { id: 'variable', header: 'Property', cell: '[function]', isRowHeader: true, width: 150 },
        { id: 'type', header: 'Type', cell: '[function]', width: 150 },
        { id: 'value', header: 'Value', cell: '[function]' },
      ]],
    items: [[{ name: 'Color', value: '#000000', type: 'String' }]],
    stickyHeader: [true],
  },
] as any);

@customElement('table-permutations-page')
export class TablePermutationsPage extends PermutationsPageBase {
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
      <h2>Table — Permutations</h2>

      <section>
        <h3>All permutations</h3>
        <div class="permutation-grid">
          ${renderPermutations(permutations, p => html`<cs-table .wrapLines=${p.wrapLines} .columnDefinitions=${p.columnDefinitions} .items=${p.items} .sortingColumn=${p.sortingColumn} .sortingDisabled=${p.sortingDisabled} .sortingDescending=${p.sortingDescending} .variant=${p.variant} .pagination=${p.pagination} .footer=${p.footer} .header=${p.header} .filter=${p.filter} .preferences=${p.preferences} .cellVerticalAlign=${p.cellVerticalAlign} .selectionType=${p.selectionType} .stickyHeader=${p.stickyHeader}></cs-table>`)}
        </div>
      </section>
    `;
  }
}

export const tagName = 'table-permutations-page';
