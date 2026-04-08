import { test, expect } from '@playwright/test';
import type { ReactiveControllerHost } from 'lit';
import { CollectionController } from '../../src/internal/collection-controller.js';

interface TestItem {
  id: number;
  name: string;
  age: number;
}

const ITEMS: TestItem[] = [
  { id: 1, name: 'Alice', age: 30 },
  { id: 2, name: 'Bob', age: 25 },
  { id: 3, name: 'Charlie', age: 35 },
  { id: 4, name: 'Diana', age: 28 },
  { id: 5, name: 'Eve', age: 22 },
];

function createMockHost(): ReactiveControllerHost & { updateCount: number } {
  const controllers: { hostConnected?(): void; hostDisconnected?(): void }[] = [];
  return {
    updateCount: 0,
    addController(c) { controllers.push(c); },
    removeController() { },
    requestUpdate() { this.updateCount++; },
    get updateComplete() { return Promise.resolve(true); },
  };
}

function make(
  overrides: Partial<ConstructorParameters<typeof CollectionController<TestItem>>[1]> = {},
) {
  const host = createMockHost();
  const ctrl = new CollectionController<TestItem>(host, { items: ITEMS, ...overrides });
  return { host, ctrl };
}

test.describe('CollectionController — Filtering', () => {
  test('returns all items when no filter text is set', () => {
    const { ctrl } = make();
    expect(ctrl.filteredItemsCount).toBe(5);
    expect(ctrl.items.length).toBe(5);
  });

  test('filters items by default function (case-insensitive substring)', () => {
    const { ctrl } = make();
    ctrl.setFilterText('ali');
    expect(ctrl.filteredItemsCount).toBe(1);
    expect(ctrl.items[0].name).toBe('Alice');
  });

  test('uses custom filtering function when provided', () => {
    const { ctrl } = make({
      filtering: {
        filteringFunction: (item, text) => item.age > Number(text),
      },
    });
    ctrl.setFilterText('28');
    expect(ctrl.filteredItemsCount).toBe(2);
    expect(ctrl.items.map(i => i.name).sort()).toEqual(['Alice', 'Charlie']);
  });

  test('respects defaultFilteringText', () => {
    const { ctrl } = make({
      filtering: { defaultFilteringText: 'bob' },
    });
    expect(ctrl.filteredItemsCount).toBe(1);
    expect(ctrl.items[0].name).toBe('Bob');
  });

  test('resets to page 1 when filter changes', () => {
    const { ctrl } = make({ pagination: { pageSize: 2 } });
    ctrl.setCurrentPage(3);
    expect(ctrl.currentPage).toBe(3);
    ctrl.setFilterText('a');
    expect(ctrl.currentPage).toBe(1);
  });

  test('returns zero items when filter matches nothing', () => {
    const { ctrl } = make();
    ctrl.setFilterText('zzzzz');
    expect(ctrl.filteredItemsCount).toBe(0);
    expect(ctrl.items.length).toBe(0);
  });

  test('skips object-valued properties in default filter', () => {
    type ComplexItem = { id: number; name: string; meta: { x: number } };
    const host = createMockHost();
    const items: ComplexItem[] = [
      { id: 1, name: 'Alpha', meta: { x: 1 } },
      { id: 2, name: 'Beta', meta: { x: 2 } },
    ];
    const ctrl = new CollectionController<ComplexItem>(host, { items });
    ctrl.setFilterText('object');
    expect(ctrl.filteredItemsCount).toBe(0);
  });
});

test.describe('CollectionController — Sorting', () => {
  test('sorts ascending by field', () => {
    const { ctrl } = make();
    ctrl.setSorting({ sortingField: 'age' });
    expect(ctrl.items.map(i => i.age)).toEqual([22, 25, 28, 30, 35]);
  });

  test('sorts descending by field', () => {
    const { ctrl } = make();
    ctrl.setSorting({ sortingField: 'age' }, true);
    expect(ctrl.items.map(i => i.age)).toEqual([35, 30, 28, 25, 22]);
  });

  test('sorts with custom comparator', () => {
    const { ctrl } = make();
    ctrl.setSorting({ sortingComparator: (a, b) => a.name.length - b.name.length });
    expect(ctrl.items[0].name).toBe('Bob');
    expect(ctrl.items[ctrl.items.length - 1].name).toBe('Charlie');
  });

  test('sorts with defaultState from options', () => {
    const { ctrl } = make({
      sorting: { defaultState: { sortingColumn: { sortingField: 'name' }, isDescending: true } },
    });
    expect(ctrl.items[0].name).toBe('Eve');
  });

  test('uses localeCompare for string fields', () => {
    const { ctrl } = make();
    ctrl.setSorting({ sortingField: 'name' });
    expect(ctrl.items.map(i => i.name)).toEqual(['Alice', 'Bob', 'Charlie', 'Diana', 'Eve']);
  });

  test('exposes sortingColumn and sortingDescending', () => {
    const { ctrl } = make();
    expect(ctrl.sortingColumn).toBeUndefined();
    expect(ctrl.sortingDescending).toBe(false);
    const col = { sortingField: 'age' };
    ctrl.setSorting(col, true);
    expect(ctrl.sortingColumn).toBe(col);
    expect(ctrl.sortingDescending).toBe(true);
  });
});

test.describe('CollectionController — Pagination', () => {
  test('paginates items with default page size of 10', () => {
    const { ctrl } = make();
    expect(ctrl.items.length).toBe(5);
    expect(ctrl.pagesCount).toBe(1);
    expect(ctrl.currentPage).toBe(1);
  });

  test('paginates items with custom page size', () => {
    const { ctrl } = make({ pagination: { pageSize: 2 } });
    expect(ctrl.items.length).toBe(2);
    expect(ctrl.pagesCount).toBe(3);
    expect(ctrl.currentPage).toBe(1);
  });

  test('navigates to specific page', () => {
    const { ctrl } = make({ pagination: { pageSize: 2 } });
    ctrl.setCurrentPage(2);
    expect(ctrl.items.map(i => i.name)).toEqual(['Charlie', 'Diana']);
    expect(ctrl.currentPage).toBe(2);
  });

  test('last page contains remaining items', () => {
    const { ctrl } = make({ pagination: { pageSize: 2 } });
    ctrl.setCurrentPage(3);
    expect(ctrl.items.length).toBe(1);
    expect(ctrl.items[0].name).toBe('Eve');
  });

  test('clamps page to 1 when beyond range', () => {
    const { ctrl } = make({ pagination: { pageSize: 2 } });
    ctrl.setCurrentPage(99);
    expect(ctrl.currentPage).toBe(1);
  });

  test('respects defaultPage from options', () => {
    const { ctrl } = make({ pagination: { pageSize: 2, defaultPage: 2 } });
    expect(ctrl.currentPage).toBe(2);
    expect(ctrl.items.map(i => i.name)).toEqual(['Charlie', 'Diana']);
  });

  test('allItems returns unpaginated results', () => {
    const { ctrl } = make({ pagination: { pageSize: 2 } });
    expect(ctrl.items.length).toBe(2);
    expect(ctrl.allItems.length).toBe(5);
  });
});

test.describe('CollectionController — Selection', () => {
  test('starts with no selection by default', () => {
    const { ctrl } = make();
    expect(ctrl.selectedItems.length).toBe(0);
  });

  test('respects defaultSelectedItems', () => {
    const { ctrl } = make({
      selection: { defaultSelectedItems: [ITEMS[0], ITEMS[2]] },
    });
    expect(ctrl.selectedItems.length).toBe(2);
    expect(ctrl.isSelected(ITEMS[0])).toBe(true);
    expect(ctrl.isSelected(ITEMS[1])).toBe(false);
  });

  test('toggleItem adds unselected item', () => {
    const { ctrl } = make();
    ctrl.toggleItem(ITEMS[1]);
    expect(ctrl.selectedItems.length).toBe(1);
    expect(ctrl.isSelected(ITEMS[1])).toBe(true);
  });

  test('toggleItem removes selected item', () => {
    const { ctrl } = make({ selection: { defaultSelectedItems: [ITEMS[0]] } });
    ctrl.toggleItem(ITEMS[0]);
    expect(ctrl.selectedItems.length).toBe(0);
    expect(ctrl.isSelected(ITEMS[0])).toBe(false);
  });

  test('selectAll selects all filtered items', () => {
    const { ctrl } = make();
    ctrl.setFilterText('bob');
    ctrl.selectAll();
    expect(ctrl.selectedItems.length).toBe(1);
    expect(ctrl.selectedItems[0].name).toBe('Bob');
  });

  test('clearSelection empties selection', () => {
    const { ctrl } = make({ selection: { defaultSelectedItems: ITEMS.slice() } });
    expect(ctrl.selectedItems.length).toBe(5);
    ctrl.clearSelection();
    expect(ctrl.selectedItems.length).toBe(0);
  });

  test('setSelectedItems replaces selection', () => {
    const { ctrl } = make();
    ctrl.setSelectedItems([ITEMS[3]]);
    expect(ctrl.selectedItems.length).toBe(1);
    expect(ctrl.isSelected(ITEMS[3])).toBe(true);
  });

  test('trackBy string uses field for identity', () => {
    const { ctrl } = make({ selection: { trackBy: 'id' } });
    ctrl.toggleItem({ id: 1, name: 'Alice-clone', age: 99 });
    expect(ctrl.isSelected(ITEMS[0])).toBe(true);
  });

  test('trackBy function uses custom identity', () => {
    const { ctrl } = make({ selection: { trackBy: (item) => `${item.id}` } });
    ctrl.toggleItem({ id: 2, name: 'Bob-clone', age: 99 });
    expect(ctrl.isSelected(ITEMS[1])).toBe(true);
  });
});

test.describe('CollectionController — Combined operations', () => {
  test('filter + sort + paginate in sequence', () => {
    const { ctrl } = make({ pagination: { pageSize: 2 } });

    ctrl.setFilterText('bob');
    expect(ctrl.filteredItemsCount).toBe(1);

    ctrl.setSorting({ sortingField: 'name' });
    expect(ctrl.allItems.map(i => i.name)).toEqual(['Bob']);

    expect(ctrl.items.length).toBe(1);
    expect(ctrl.pagesCount).toBe(1);
  });

  test('changing filter while sorted preserves sort order', () => {
    const { ctrl } = make();
    ctrl.setSorting({ sortingField: 'age' }, true);
    ctrl.setFilterText('e');
    expect(ctrl.items.map(i => i.name)).toEqual(['Charlie', 'Alice', 'Eve']);
    expect(ctrl.items.map(i => i.age)).toEqual([35, 30, 22]);
    ctrl.setFilterText('ev');
    expect(ctrl.items.length).toBe(1);
    expect(ctrl.items[0].name).toBe('Eve');
  });
});

test.describe('CollectionController — setItems', () => {
  test('resets pagination to page 1', () => {
    const { ctrl } = make({ pagination: { pageSize: 2 } });
    ctrl.setCurrentPage(3);
    ctrl.setItems(ITEMS.slice(0, 3));
    expect(ctrl.currentPage).toBe(1);
  });

  test('prunes selection when keepSelection is false', () => {
    const { ctrl } = make({ selection: { trackBy: 'id' } });
    ctrl.setSelectedItems([ITEMS[0], ITEMS[4]]);
    ctrl.setItems(ITEMS.slice(0, 3));
    expect(ctrl.selectedItems.length).toBe(1);
    expect(ctrl.isSelected(ITEMS[0])).toBe(true);
    expect(ctrl.isSelected(ITEMS[4])).toBe(false);
  });

  test('preserves all selection when keepSelection is true', () => {
    const { ctrl } = make({ selection: { trackBy: 'id', keepSelection: true } });
    ctrl.setSelectedItems([ITEMS[0], ITEMS[4]]);
    ctrl.setItems(ITEMS.slice(0, 3));
    expect(ctrl.selectedItems.length).toBe(2);
  });
});

test.describe('CollectionController — Edge cases', () => {
  test('empty items array', () => {
    const host = createMockHost();
    const ctrl = new CollectionController<TestItem>(host, { items: [] });
    expect(ctrl.items.length).toBe(0);
    expect(ctrl.filteredItemsCount).toBe(0);
    expect(ctrl.pagesCount).toBe(1);
    expect(ctrl.currentPage).toBe(1);
  });

  test('no-op when setting same filter text', () => {
    const { host, ctrl } = make();
    ctrl.setFilterText('x');
    const count = host.updateCount;
    ctrl.setFilterText('x');
    expect(host.updateCount).toBe(count);
  });

  test('no-op when setting same page', () => {
    const { host, ctrl } = make({ pagination: { pageSize: 2 } });
    ctrl.setCurrentPage(2);
    const count = host.updateCount;
    ctrl.setCurrentPage(2);
    expect(host.updateCount).toBe(count);
  });

  test('clearSelection is no-op when already empty', () => {
    const { host, ctrl } = make();
    const count = host.updateCount;
    ctrl.clearSelection();
    expect(host.updateCount).toBe(count);
  });

  test('requestUpdate is called on every state mutation', () => {
    const { host, ctrl } = make();
    const before = host.updateCount;
    ctrl.setFilterText('a');
    ctrl.setSorting({ sortingField: 'age' });
    ctrl.setCurrentPage(1);
    ctrl.toggleItem(ITEMS[0]);
    ctrl.selectAll();
    ctrl.clearSelection();
    ctrl.setSelectedItems([ITEMS[0]]);
    ctrl.setItems(ITEMS);
    expect(host.updateCount).toBe(before + 7);
  });

  test('sorting with no sortingField and no comparator preserves order', () => {
    const { ctrl } = make();
    ctrl.setSorting({});
    expect(ctrl.items.map(i => i.id)).toEqual([1, 2, 3, 4, 5]);
  });

  test('filter text cleared restores all items', () => {
    const { ctrl } = make();
    ctrl.setFilterText('alice');
    expect(ctrl.filteredItemsCount).toBe(1);
    ctrl.setFilterText('');
    expect(ctrl.filteredItemsCount).toBe(5);
  });
});
