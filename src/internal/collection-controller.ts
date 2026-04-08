// SPDX-License-Identifier: Apache-2.0
import type { ReactiveController, ReactiveControllerHost } from 'lit';

// ── Types ───────────────────────────────────────────────────────────────────

export interface SortingColumn<T> {
  sortingField?: string;
  sortingComparator?: (a: T, b: T) => number;
}

export interface SortingState<T> {
  sortingColumn: SortingColumn<T>;
  isDescending?: boolean;
}

export interface CollectionControllerOptions<T> {
  items: T[];
  filtering?: {
    filteringFunction?: (item: T, filterText: string) => boolean;
    defaultFilteringText?: string;
  };
  sorting?: {
    defaultState?: SortingState<T>;
  };
  pagination?: {
    defaultPage?: number;
    pageSize?: number;
  };
  selection?: {
    defaultSelectedItems?: T[];
    trackBy?: string | ((item: T) => string);
    keepSelection?: boolean;
  };
}

// ── Constants ───────────────────────────────────────────────────────────────

const DEFAULT_PAGE_SIZE = 10;

// ── Pure operations (ported from @cloudscape-design/collection-hooks) ───────

function defaultFilteringFunction<T>(item: T, filterText: string): boolean {
  if (filterText.length === 0) return true;
  const lowText = filterText.toLowerCase();
  const record = item as Record<string, unknown>;
  return Object.keys(record).some(key => {
    const value = record[key];
    if (value && typeof value === 'object') return false;
    return String(value).toLowerCase().indexOf(lowText) > -1;
  });
}

function createFieldSorter<T>(sortingField: string): (a: T, b: T) => number {
  return (row1: T, row2: T): number => {
    const r1 = row1 as Record<string, unknown>;
    const r2 = row2 as Record<string, unknown>;
    const value1 = r1[sortingField] ?? '';
    const value2 = r2[sortingField] ?? '';
    if (typeof value1 === 'string' && typeof value2 === 'string') {
      return value1.localeCompare(value2);
    }
    return value1 < value2 ? -1 : value1 === value2 ? 0 : 1;
  };
}

function getTrackableValue<T>(trackBy: string | ((item: T) => string) | undefined, item: T): string {
  if (typeof trackBy === 'function') return trackBy(item);
  if (typeof trackBy === 'string') return String((item as Record<string, unknown>)[trackBy]);
  // Fallback: use JSON for identity (works for simple objects)
  return JSON.stringify(item);
}

// ── Controller ──────────────────────────────────────────────────────────────

export class CollectionController<T> implements ReactiveController {
  private readonly _host: ReactiveControllerHost;

  private _items: T[];
  private _filterFn: (item: T, text: string) => boolean;
  private _pageSize: number;
  private _trackBy: string | ((item: T) => string) | undefined;
  private _keepSelection: boolean;
  private _filterText: string;
  private _sortingColumn: SortingColumn<T> | undefined;
  private _sortingDescending: boolean;
  private _currentPage: number;
  private _selectedItems: T[];
  private _dirty = true;
  private _cachedFiltered: T[] = [];
  private _cachedSorted: T[] = [];
  private _cachedPaginated: T[] = [];

  constructor(host: ReactiveControllerHost, options: CollectionControllerOptions<T>) {
    this._host = host;
    this._items = options.items;
    this._filterFn = options.filtering?.filteringFunction ?? defaultFilteringFunction;
    this._filterText = options.filtering?.defaultFilteringText ?? '';
    this._sortingColumn = options.sorting?.defaultState?.sortingColumn;
    this._sortingDescending = options.sorting?.defaultState?.isDescending ?? false;
    this._pageSize = options.pagination?.pageSize ?? DEFAULT_PAGE_SIZE;
    this._currentPage = options.pagination?.defaultPage ?? 1;
    this._trackBy = options.selection?.trackBy;
    this._keepSelection = options.selection?.keepSelection ?? false;
    this._selectedItems = options.selection?.defaultSelectedItems ?? [];

    host.addController(this);
  }

  // ── Lifecycle ───────────────────────────────────────────────────────────

  hostConnected(): void { }

  hostDisconnected(): void { }

  // ── Pipeline ────────────────────────────────────────────────────────────

  private _recompute(): void {
    if (!this._dirty) return;

    if (this._filterText.length > 0) {
      this._cachedFiltered = this._items.filter(item =>
        this._filterFn(item, this._filterText),
      );
    } else {
      this._cachedFiltered = this._items.slice();
    }

    if (this._sortingColumn) {
      const comparator =
        this._sortingColumn.sortingComparator ??
        (this._sortingColumn.sortingField
          ? createFieldSorter<T>(this._sortingColumn.sortingField)
          : null);

      if (comparator) {
        const direction = this._sortingDescending ? -1 : 1;
        this._cachedSorted = this._cachedFiltered
          .slice()
          .sort((a, b) => comparator(a, b) * direction);
      } else {
        this._cachedSorted = this._cachedFiltered;
      }
    } else {
      this._cachedSorted = this._cachedFiltered;
    }

    if (this._pageSize > 0) {
      const pagesCount = Math.ceil(this._cachedSorted.length / this._pageSize);
      if (this._currentPage < 1 || this._currentPage > pagesCount || Number.isNaN(this._currentPage)) {
        this._currentPage = 1;
      }
      const start = (this._currentPage - 1) * this._pageSize;
      this._cachedPaginated = this._cachedSorted.slice(start, start + this._pageSize);
    } else {
      this._cachedPaginated = this._cachedSorted;
    }

    this._dirty = false;
  }

  private _invalidate(): void {
    this._dirty = true;
    this._host.requestUpdate();
  }

  // ── Read-only computed state ────────────────────────────────────────────

  /** Processed items: filtered, sorted, and paginated. */
  get items(): T[] {
    this._recompute();
    return this._cachedPaginated;
  }

  /** Filtered and sorted items (before pagination). */
  get allItems(): T[] {
    this._recompute();
    return this._cachedSorted;
  }

  /** Number of items after filtering (before pagination). */
  get filteredItemsCount(): number {
    this._recompute();
    return this._cachedFiltered.length;
  }

  // ── Filter state ────────────────────────────────────────────────────────

  get filterText(): string {
    return this._filterText;
  }

  setFilterText(text: string): void {
    if (this._filterText === text) return;
    this._filterText = text;
    this._currentPage = 1;
    this._invalidate();
  }

  // ── Sort state ──────────────────────────────────────────────────────────

  get sortingColumn(): SortingColumn<T> | undefined {
    return this._sortingColumn;
  }

  get sortingDescending(): boolean {
    return this._sortingDescending;
  }

  setSorting(column: SortingColumn<T>, descending?: boolean): void {
    this._sortingColumn = column;
    this._sortingDescending = descending ?? false;
    this._invalidate();
  }

  // ── Pagination state ────────────────────────────────────────────────────

  get currentPage(): number {
    this._recompute();
    return this._currentPage;
  }

  get pagesCount(): number {
    this._recompute();
    return this._cachedSorted.length > 0
      ? Math.ceil(this._cachedSorted.length / this._pageSize)
      : 1;
  }

  setCurrentPage(page: number): void {
    if (this._currentPage === page) return;
    this._currentPage = page;
    this._invalidate();
  }

  // ── Selection state ─────────────────────────────────────────────────────

  get selectedItems(): T[] {
    return this._selectedItems;
  }

  setSelectedItems(items: T[]): void {
    this._selectedItems = items;
    this._invalidate();
  }

  isSelected(item: T): boolean {
    const key = getTrackableValue(this._trackBy, item);
    return this._selectedItems.some(
      selected => getTrackableValue(this._trackBy, selected) === key,
    );
  }

  toggleItem(item: T): void {
    if (this.isSelected(item)) {
      const key = getTrackableValue(this._trackBy, item);
      this._selectedItems = this._selectedItems.filter(
        selected => getTrackableValue(this._trackBy, selected) !== key,
      );
    } else {
      this._selectedItems = [...this._selectedItems, item];
    }
    this._invalidate();
  }

  selectAll(): void {
    this._recompute();
    this._selectedItems = this._cachedFiltered.slice();
    this._invalidate();
  }

  clearSelection(): void {
    if (this._selectedItems.length === 0) return;
    this._selectedItems = [];
    this._invalidate();
  }

  // ── Update source data ──────────────────────────────────────────────────

  setItems(items: T[]): void {
    this._items = items;
    this._currentPage = 1;

    if (!this._keepSelection) {
      if (this._selectedItems.length > 0) {
        const newKeys = new Set(items.map(i => getTrackableValue(this._trackBy, i)));
        this._selectedItems = this._selectedItems.filter(
          selected => newKeys.has(getTrackableValue(this._trackBy, selected)),
        );
      }
    }

    this._invalidate();
  }
}
