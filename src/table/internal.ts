import { css, html, nothing, type TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { CsBaseElement } from '../internal/base-element.js';
import { fireNonCancelableEvent } from '../internal/events.js';
import { componentStyles, sharedStyles } from './styles.js';
import type { TableProps } from './interfaces.js';

import '../checkbox/index.js';
import '../spinner/index.js';
import '../icon/index.js';

const hostStyles = css`:host { display: block; }`;

const tableElementStyles = css`
  .header-cell {
    padding-block: var(--space-scaled-xs-xwoogq, 8px);
    padding-inline: var(--space-l-2ud1p3, 20px);
    border-block-end: var(--border-divider-section-width-uwo8my, 1px) solid
      var(--color-border-divider-default-nr68jt, #c6c6cd);
    font-weight: 700;
    font-size: var(--font-size-body-s-3sui0u, 12px);
    line-height: var(--line-height-body-s-yzq0ol, 16px);
    color: var(--color-text-column-header-huer4g, #0f141a);
    text-align: start;
    white-space: nowrap;
    box-sizing: border-box;
    background: var(--color-background-table-header-hdjxos, #ffffff);
    vertical-align: middle;
  }
  .header-cell-sortable {
    cursor: pointer;
    user-select: none;
  }
  .header-cell-sortable:hover {
    color: var(--color-text-interactive-hover-awk0mg, #002b66);
  }
  .header-cell-sorted {
    color: var(--color-text-interactive-active-vol84d, #002b66);
  }

  .sorting-icon {
    display: inline-block;
    margin-inline-start: var(--space-xxs-ysj0na, 4px);
    vertical-align: middle;
    transition: transform 0.135s ease-in-out;
  }
  .sorting-icon-ascending {
    transform: rotate(180deg);
  }

  .body-cell {
    padding-block: var(--space-scaled-xs-xwoogq, 8px);
    padding-inline: var(--space-l-2ud1p3, 20px);
    border-block-end: var(--border-divider-list-width-tdfx1x, 1px) solid
      var(--color-border-divider-default-nr68jt, #c6c6cd);
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: middle;
  }
  .body-cell-wrap {
    white-space: normal;
    word-break: break-word;
  }

  .row {
    background: var(--color-background-container-content-vp98t4, #ffffff);
  }
  .row:hover {
    background: var(--color-background-dropdown-item-hover-b9eaac, #f0f0f0);
  }
  .row-selected {
    background: var(--color-background-item-selected-y06wdv, #f0f4ff);
  }
  .row-selected:hover {
    background: var(--color-background-item-selected-y06wdv, #f0f4ff);
  }
  .row-striped:not(.row-selected) {
    background: var(--color-background-striped-rows-khb4zg, #fafafa);
  }

  .selection-cell {
    box-sizing: border-box;
    inline-size: var(--size-table-selection-horizontal-qqiajd, 40px);
    min-inline-size: var(--size-table-selection-horizontal-qqiajd, 40px);
    max-inline-size: var(--size-table-selection-horizontal-qqiajd, 40px);
    padding-block: var(--space-scaled-xs-xwoogq, 8px);
    padding-inline-start: var(--space-scaled-l-sej05l, 20px);
    padding-inline-end: var(--space-xs-ymlm0b, 8px);
    vertical-align: middle;
  }

  .table-loading {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-xs-ymlm0b, 8px);
    padding-block: var(--space-scaled-l-sej05l, 20px);
    padding-inline: var(--space-l-2ud1p3, 20px);
    color: var(--color-text-body-secondary-vxiqkp, #656871);
  }

  .table-empty {
    padding-block-start: var(--space-scaled-m-m892r9, 16px);
    padding-block-end: var(--space-scaled-l-sej05l, 20px);
    padding-inline: var(--space-l-2ud1p3, 20px);
    text-align: center;
  }

  .content-density-compact .header-cell {
    padding-block: var(--space-scaled-xxs-95dhkm, 4px);
  }
  .content-density-compact .body-cell {
    padding-block: var(--space-scaled-xxs-95dhkm, 4px);
  }

  input[type="radio"] {
    cursor: pointer;
    margin: 0;
    inline-size: 16px;
    block-size: 16px;
    accent-color: var(--color-border-control-checked-hzwbsk, #006ce0);
  }

  .screenreader-only {
    position: absolute;
    inline-size: 1px;
    block-size: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`;

export class CsTableInternal extends CsBaseElement {
  static override styles = [sharedStyles, componentStyles, hostStyles, tableElementStyles];

  @property({ attribute: false })
  items: ReadonlyArray<any> = [];

  @property({ attribute: false })
  columnDefinitions: ReadonlyArray<TableProps.ColumnDefinition<any>> = [];

  @property({ attribute: false })
  sortingColumn?: TableProps.SortingColumn<any>;

  @property({ type: Boolean })
  sortingDescending = false;

  @property({ type: Boolean })
  sortingDisabled = false;

  @property({ attribute: false })
  selectedItems: ReadonlyArray<any> = [];

  @property({ type: String })
  selectionType?: TableProps.SelectionType;

  @property({ attribute: false })
  trackBy?: TableProps.TrackBy<any>;

  @property({ type: Boolean, reflect: true })
  loading = false;

  @property({ type: String })
  loadingText = '';

  @property({ type: String, reflect: true })
  variant: TableProps.Variant = 'container';

  @property({ type: Boolean })
  stripedRows = false;

  @property({ type: Boolean })
  wrapLines = false;

  @property({ type: Boolean })
  stickyHeader = false;

  @property({ type: String })
  contentDensity: 'comfortable' | 'compact' = 'comfortable';

  @property({ attribute: false })
  ariaLabels?: TableProps.AriaLabels<any>;

  private _hasHeader = false;
  private _hasFilter = false;
  private _hasPagination = false;

  private _onHeaderSlotChange = (e: Event): void => {
    const slot = e.target as HTMLSlotElement;
    this._hasHeader = slot.assignedNodes({ flatten: true }).length > 0;
    this.requestUpdate();
  };

  private _onFilterSlotChange = (e: Event): void => {
    const slot = e.target as HTMLSlotElement;
    this._hasFilter = slot.assignedNodes({ flatten: true }).length > 0;
    this.requestUpdate();
  };

  private _onPaginationSlotChange = (e: Event): void => {
    const slot = e.target as HTMLSlotElement;
    this._hasPagination = slot.assignedNodes({ flatten: true }).length > 0;
    this.requestUpdate();
  };

  private get _hasSelection(): boolean {
    return this.selectionType === 'single' || this.selectionType === 'multi';
  }

  private get _hasTools(): boolean {
    return this._hasFilter || this._hasPagination;
  }

  private get _allSelected(): boolean {
    if (!this.items.length) return false;
    return this.items.every(item => this._isSelected(item));
  }

  private get _someSelected(): boolean {
    if (!this.items.length) return false;
    const count = this.items.filter(item => this._isSelected(item)).length;
    return count > 0 && count < this.items.length;
  }

  private _getItemKey(item: any): string {
    if (!this.trackBy) return '';
    if (typeof this.trackBy === 'function') return this.trackBy(item);
    return String(item[this.trackBy as string]);
  }

  private _isSelected(item: any): boolean {
    if (!this.selectedItems?.length) return false;
    if (this.trackBy) {
      const key = this._getItemKey(item);
      return this.selectedItems.some(s => this._getItemKey(s) === key);
    }
    return this.selectedItems.includes(item);
  }

  private _isSameColumn(
    a: TableProps.SortingColumn<any>,
    b: TableProps.SortingColumn<any>,
  ): boolean {
    if (a.sortingComparator && b.sortingComparator) {
      return a.sortingComparator === b.sortingComparator;
    }
    return !!a.sortingField && a.sortingField === b.sortingField;
  }

  private _getAriaSort(col: TableProps.ColumnDefinition<any>): string | typeof nothing {
    const isSortable = !!(col.sortingField || col.sortingComparator);
    if (!isSortable) return nothing;
    if (!this.sortingColumn) return 'none';
    if (!this._isSameColumn(col, this.sortingColumn)) return 'none';
    return this.sortingDescending ? 'descending' : 'ascending';
  }

  private _onSort(col: TableProps.ColumnDefinition<any>): void {
    if (!col.sortingField && !col.sortingComparator) return;
    if (this.sortingDisabled) return;

    const isSame = this.sortingColumn && this._isSameColumn(col, this.sortingColumn);
    const isDescending = isSame ? !this.sortingDescending : false;

    fireNonCancelableEvent(this, 'sortingChange', {
      sortingColumn: { sortingField: col.sortingField, sortingComparator: col.sortingComparator },
      isDescending,
    });
  }

  private _toggleSelection(item: any): void {
    const selected = this.selectedItems ? [...this.selectedItems] : [];
    const idx = this.trackBy
      ? selected.findIndex(s => this._getItemKey(s) === this._getItemKey(item))
      : selected.indexOf(item);

    if (idx >= 0) {
      selected.splice(idx, 1);
    } else {
      selected.push(item);
    }

    fireNonCancelableEvent(this, 'selectionChange', { selectedItems: selected });
  }

  private _selectSingle(item: any): void {
    fireNonCancelableEvent(this, 'selectionChange', { selectedItems: [item] });
  }

  private _toggleAll(): void {
    const selectedItems = this._allSelected ? [] : [...this.items];
    fireNonCancelableEvent(this, 'selectionChange', { selectedItems });
  }

  private _onRowClick(item: any, rowIndex: number): void {
    fireNonCancelableEvent(this, 'rowClick', { item, rowIndex });
  }

  /** Stops selection-cell clicks from triggering the row click handler. */
  private _onSelectionCellClick = (e: Event): void => {
    e.stopPropagation();
  };

  override render(): TemplateResult {
    const rootClasses = {
      'root': true,
      'is-visual-refresh': true,
      [`content-density-${this.contentDensity}`]: true,
    };

    const headerSecondaryClasses = {
      'header-secondary': true,
      [`variant-${this.variant}`]: true,
      'table-has-header': this._hasHeader,
    };

    const headerControlsClasses = {
      'header-controls': true,
      [`variant-${this.variant}`]: true,
    };

    return html`
      <div class=${classMap(rootClasses)}>
        <div class=${classMap(headerSecondaryClasses)} style=${this._hasHeader || this._hasTools ? nothing : 'display:none'}>
          <div class=${classMap(headerControlsClasses)}>
            <slot name="header" @slotchange=${this._onHeaderSlotChange}></slot>
            ${this._hasTools ? html`
              <div class="tools">
                <div class="tools-filtering">
                  <slot name="filter" @slotchange=${this._onFilterSlotChange}></slot>
                </div>
                <div class="tools-align-right">
                  <div class="tools-pagination">
                    <slot name="pagination" @slotchange=${this._onPaginationSlotChange}></slot>
                  </div>
                </div>
              </div>
            ` : html`
              <slot name="filter" @slotchange=${this._onFilterSlotChange} style="display:none"></slot>
              <slot name="pagination" @slotchange=${this._onPaginationSlotChange} style="display:none"></slot>
            `}
          </div>
        </div>
        ${this.loading
          ? this._renderLoading()
          : this.items.length === 0
            ? this._renderEmpty()
            : this._renderTable()
        }
      </div>
    `;
  }

  private _renderLoading(): TemplateResult {
    return html`
      <div class="table-loading" role="status">
        <cs-spinner size="normal"></cs-spinner>
        ${this.loadingText ? html`<span>${this.loadingText}</span>` : nothing}
      </div>
    `;
  }

  private _renderEmpty(): TemplateResult {
    return html`
      <div class="table-empty empty">
        <slot name="empty"></slot>
      </div>
    `;
  }

  private _renderTable(): TemplateResult {
    const wrapperClasses = {
      'wrapper': true,
      [`variant-${this.variant}`]: true,
    };

    return html`
      <div class=${classMap(wrapperClasses)}>
        <table class="table" role="table">
          <thead>
            <tr>
              ${this._hasSelection ? this._renderSelectionHeader() : nothing}
              ${this.columnDefinitions.map(col => this._renderHeaderCell(col))}
            </tr>
          </thead>
          <tbody>
            ${this.items.map((item, i) => this._renderRow(item, i))}
          </tbody>
        </table>
      </div>
    `;
  }

  private _renderSelectionHeader(): TemplateResult {
    const label = this.ariaLabels?.selectionGroupLabel || 'Selection';
    return html`
      <th class="header-cell selection-cell" aria-label=${label} @click=${this._onSelectionCellClick}>
        ${this.selectionType === 'multi'
          ? html`
            <cs-checkbox
              .checked=${this._allSelected}
              .indeterminate=${this._someSelected}
              @change=${(e: Event) => { e.stopPropagation(); this._toggleAll(); }}
              aria-label=${label}
            ></cs-checkbox>`
          : html`<span class="screenreader-only">${label}</span>`
        }
      </th>
    `;
  }

  private _renderHeaderCell(col: TableProps.ColumnDefinition<any>): TemplateResult {
    const isSortable = !!(col.sortingField || col.sortingComparator);
    const isSorted = isSortable && this.sortingColumn && this._isSameColumn(col, this.sortingColumn);
    const ariaSort = this._getAriaSort(col);

    const cellClasses = {
      'header-cell': true,
      'header-cell-sortable': isSortable,
      'header-cell-sorted': !!isSorted,
    };

    const iconClasses = {
      'sorting-icon': true,
      'sorting-icon-ascending': !!isSorted && !this.sortingDescending,
    };

    const widthStyle = col.width
      ? `width: ${typeof col.width === 'number' ? `${col.width}px` : col.width}`
      : undefined;

    return html`
      <th
        class=${classMap(cellClasses)}
        aria-sort=${ariaSort}
        style=${widthStyle ?? nothing}
        @click=${() => this._onSort(col)}
      >
        <span class="header-cell-text">${col.header}</span>
        ${isSortable
          ? html`<span class=${classMap(iconClasses)}><cs-icon name="caret-down-filled" size="small"></cs-icon></span>`
          : nothing
        }
      </th>
    `;
  }

  private _renderRow(item: any, index: number): TemplateResult {
    const selected = this._isSelected(item);
    const rowClasses = {
      'row': true,
      'row-selected': selected,
      'row-striped': this.stripedRows && index % 2 === 1,
    };

    return html`
      <tr class=${classMap(rowClasses)} @click=${() => this._onRowClick(item, index)}>
        ${this._hasSelection ? this._renderSelectionCell(item) : nothing}
        ${this.columnDefinitions.map(col => this._renderBodyCell(item, col, index))}
      </tr>
    `;
  }

  private _renderSelectionCell(item: any): TemplateResult {
    const selected = this._isSelected(item);

    return html`
      <td class="body-cell selection-cell" @click=${this._onSelectionCellClick}>
        ${this.selectionType === 'multi'
          ? html`
            <cs-checkbox
              .checked=${selected}
              @change=${(e: Event) => { e.stopPropagation(); this._toggleSelection(item); }}
              aria-label="Select row"
            ></cs-checkbox>`
          : html`
            <input
              type="radio"
              name="table-selection"
              .checked=${selected}
              @change=${() => this._selectSingle(item)}
              aria-label="Select row"
            />`
        }
      </td>
    `;
  }

  private _renderBodyCell(item: any, col: TableProps.ColumnDefinition<any>, rowIndex: number): TemplateResult {
    const cellClasses = {
      'body-cell': true,
      'body-cell-wrap': this.wrapLines,
      'body-cell-first-row': rowIndex === 0,
      'body-cell-last-row': rowIndex === this.items.length - 1,
    };

    const widthStyle = col.width
      ? `width: ${typeof col.width === 'number' ? `${col.width}px` : col.width}`
      : undefined;

    return html`
      <td class=${classMap(cellClasses)} style=${widthStyle ?? nothing}>
        <span class="body-cell-content">${col.cell(item)}</span>
      </td>
    `;
  }
}
