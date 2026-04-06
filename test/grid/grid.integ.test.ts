import { test, expect } from '@playwright/test';

test.describe('Grid — Integration', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#/light/grid/permutations');
    await page.waitForSelector('grid-permutations-page');
  });

  test('renders grid container with flex display', async ({ page }) => {
    const grid = page.locator('cs-grid').first();
    const display = await grid.evaluate((el) => {
      const inner = el.shadowRoot?.querySelector('.grid');
      return inner ? getComputedStyle(inner).display : '';
    });
    expect(display).toBe('flex');
  });

  test('renders flex-wrap grid container', async ({ page }) => {
    const grid = page.locator('cs-grid').first();
    const wrap = await grid.evaluate((el) => {
      const inner = el.shadowRoot?.querySelector('.grid');
      return inner ? getComputedStyle(inner).flexWrap : '';
    });
    expect(wrap).toBe('wrap');
  });

  test('children receive correct grid-column styles', async ({ page }) => {
    const firstGrid = page.locator('cs-grid').first();
    const children = firstGrid.locator(':scope > div.cell');
    const firstColStyle = await children.first().evaluate((el) => el.style.gridColumn);
    expect(firstColStyle).toContain('span 4');
  });

  test('disableGutters removes gap', async ({ page }) => {
    const noGutterGrid = page.locator('cs-grid[disablegutters]').first();
    const inner = noGutterGrid.locator('.grid');
    await expect(inner).toHaveClass(/no-gutters/);
  });

  test('offset column starts at correct grid position', async ({ page }) => {
    const grids = page.locator('cs-grid');
    const offsetGrid = grids.nth(2);
    const firstChild = offsetGrid.locator(':scope > div.cell').first();
    const colStyle = await firstChild.evaluate((el) => el.style.gridColumn);
    expect(colStyle).toBe('5 / span 4');
  });

  test('slotted children are visible', async ({ page }) => {
    const grid = page.locator('cs-grid').first();
    const child = grid.locator(':scope > div.cell').first();
    await expect(child).toBeVisible();
    await expect(child).toContainText('Column 1');
  });
});
