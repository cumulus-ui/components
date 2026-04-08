import { test, expect } from '@playwright/test';

test.describe('Table — Integration', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#/light/table/permutations');
    await page.waitForSelector('table-permutations-page');
  });

  test('renders rows matching items', async ({ page }) => {
    const table = page.locator('cs-table').first();
    const rows = table.locator('tbody tr');
    await expect(rows).toHaveCount(5);
  });

  test('renders column headers', async ({ page }) => {
    const table = page.locator('cs-table').first();
    const headers = table.locator('thead th');
    const count = await headers.count();
    expect(count).toBeGreaterThanOrEqual(4);
  });

  test('sorting click fires sortingChange event', async ({ page }) => {
    const sortTable = page.locator('cs-table').nth(1);

    const detail = await sortTable.evaluate((el) => {
      return new Promise<{ isDescending: boolean; sortingColumn: { sortingField: string } }>((resolve) => {
        el.addEventListener('sortingChange', ((e: Event) => {
          resolve((e as CustomEvent).detail);
        }) as EventListener, { once: true });
        const th = el.shadowRoot!.querySelector('th.header-cell-sortable') as HTMLElement;
        th.click();
      });
    });

    expect(detail.sortingColumn.sortingField).toBeTruthy();
    expect(typeof detail.isDescending).toBe('boolean');
  });

  test('sorting toggles direction on same column', async ({ page }) => {
    const sortTable = page.locator('cs-table').nth(1);

    const firstField = await sortTable.evaluate((el) => {
      return new Promise<string>((resolve) => {
        el.addEventListener('sortingChange', ((e: Event) => {
          resolve((e as CustomEvent).detail.sortingColumn.sortingField);
        }) as EventListener, { once: true });
        const th = el.shadowRoot!.querySelector('th.header-cell-sortable') as HTMLElement;
        th.click();
      });
    });

    expect(firstField).toBeTruthy();

    await page.waitForTimeout(100);

    const secondDetail = await sortTable.evaluate((el) => {
      return new Promise<{ isDescending: boolean }>((resolve) => {
        el.addEventListener('sortingChange', ((e: Event) => {
          resolve((e as CustomEvent).detail);
        }) as EventListener, { once: true });
        const th = el.shadowRoot!.querySelector('th.header-cell-sortable') as HTMLElement;
        th.click();
      });
    });

    expect(secondDetail.isDescending).toBe(true);
  });

  test('multi-selection checkbox fires selectionChange', async ({ page }) => {
    const multiTable = page.locator('cs-table[selection-type="multi"]');

    const detail = await multiTable.evaluate((el) => {
      return new Promise<{ selectedItems: any[] }>((resolve) => {
        el.addEventListener('selectionChange', ((e: Event) => {
          resolve((e as CustomEvent).detail);
        }) as EventListener, { once: true });
        const checkbox = el.shadowRoot!.querySelector('tbody cs-checkbox') as HTMLElement;
        checkbox.click();
      });
    });

    expect(detail.selectedItems).toHaveLength(1);
  });

  test('multi-selection select-all checkbox works', async ({ page }) => {
    const multiTable = page.locator('cs-table[selection-type="multi"]');

    const detail = await multiTable.evaluate((el) => {
      return new Promise<{ selectedItems: any[] }>((resolve) => {
        el.addEventListener('selectionChange', ((e: Event) => {
          resolve((e as CustomEvent).detail);
        }) as EventListener, { once: true });
        const headerCheckbox = el.shadowRoot!.querySelector('thead cs-checkbox') as HTMLElement;
        headerCheckbox.click();
      });
    });

    expect(detail.selectedItems).toHaveLength(5);
  });

  test('single selection radio fires selectionChange', async ({ page }) => {
    const singleTable = page.locator('cs-table[selection-type="single"]');

    const detail = await singleTable.evaluate((el) => {
      return new Promise<{ selectedItems: any[] }>((resolve) => {
        el.addEventListener('selectionChange', ((e: Event) => {
          resolve((e as CustomEvent).detail);
        }) as EventListener, { once: true });
        const radio = el.shadowRoot!.querySelector('tbody input[type="radio"]') as HTMLInputElement;
        radio.click();
      });
    });

    expect(detail.selectedItems).toHaveLength(1);
  });

  test('loading state shows spinner', async ({ page }) => {
    const loadingTable = page.locator('cs-table[loading]');
    const spinner = loadingTable.locator('cs-spinner');
    await expect(spinner).toBeVisible();
  });

  test('loading state shows loading text', async ({ page }) => {
    const loadingTable = page.locator('cs-table[loading]');

    const text = await loadingTable.evaluate((el) => {
      return el.shadowRoot!.querySelector('.table-loading')?.textContent?.trim();
    });

    expect(text).toContain('Loading instances');
  });

  test('empty state renders slot content', async ({ page }) => {
    const tables = page.locator('cs-table');
    const emptyTable = tables.nth(5);

    const slottedText = await emptyTable.evaluate((el) => {
      const slot = el.shadowRoot!.querySelector('slot[name="empty"]') as HTMLSlotElement;
      if (!slot) return '';
      const nodes = slot.assignedNodes({ flatten: true });
      return nodes.map(n => n.textContent).join('').trim();
    });

    expect(slottedText).toContain('No instances found');
  });

  test('row click fires rowClick event', async ({ page }) => {
    const table = page.locator('cs-table').first();

    const detail = await table.evaluate((el) => {
      return new Promise<{ rowIndex: number; item: any }>((resolve) => {
        el.addEventListener('rowClick', ((e: Event) => {
          resolve((e as CustomEvent).detail);
        }) as EventListener, { once: true });
        const row = el.shadowRoot!.querySelector('tbody tr') as HTMLElement;
        row.click();
      });
    });

    expect(detail.rowIndex).toBe(0);
    expect(detail.item).toBeTruthy();
  });

  test('striped rows apply alternating class', async ({ page }) => {
    const stripedTable = page.locator('cs-table[striped-rows]');

    const hasStriped = await stripedTable.evaluate((el) => {
      const rows = el.shadowRoot!.querySelectorAll('tbody tr');
      return rows.length > 1 && rows[1].classList.contains('row-striped');
    });

    expect(hasStriped).toBe(true);
  });
});
