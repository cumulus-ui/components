import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const EXCLUDED_RULES = ['landmark-one-main', 'page-has-heading-one', 'region'];

test.describe('Table — Accessibility', () => {
  test('permutations page has no axe violations', async ({ page }) => {
    await page.goto('/#/light/table/permutations');
    await page.waitForSelector('table-permutations-page');

    const results = await new AxeBuilder({ page })
      .disableRules(EXCLUDED_RULES)
      .analyze();
    expect(results.violations).toHaveLength(0);
  });

  test('table has role="table"', async ({ page }) => {
    await page.goto('/#/light/table/permutations');
    await page.waitForSelector('table-permutations-page');

    const table = page.locator('cs-table').first();
    const hasRole = await table.evaluate((el) => {
      const t = el.shadowRoot!.querySelector('table');
      return t?.getAttribute('role');
    });

    expect(hasRole).toBe('table');
  });

  test('sortable columns have aria-sort attribute', async ({ page }) => {
    await page.goto('/#/light/table/permutations');
    await page.waitForSelector('table-permutations-page');

    const sortTable = page.locator('cs-table').nth(1);
    const ariaSorts = await sortTable.evaluate((el) => {
      const headers = el.shadowRoot!.querySelectorAll('th[aria-sort]');
      return Array.from(headers).map(h => h.getAttribute('aria-sort'));
    });

    expect(ariaSorts.length).toBeGreaterThan(0);
    expect(ariaSorts.every(s => ['none', 'ascending', 'descending'].includes(s!))).toBe(true);
  });

  test('loading state has role="status"', async ({ page }) => {
    await page.goto('/#/light/table/permutations');
    await page.waitForSelector('table-permutations-page');

    const loadingTable = page.locator('cs-table[loading]');
    const hasStatus = await loadingTable.evaluate((el) => {
      return !!el.shadowRoot!.querySelector('[role="status"]');
    });

    expect(hasStatus).toBe(true);
  });
});
