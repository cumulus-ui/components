import { test, expect } from '@playwright/test';

test.describe('List — Integration', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#/light/list/permutations');
    await page.waitForSelector('list-permutations-page');
  });

  test('renders list items', async ({ page }) => {
    const list = page.locator('cs-list').first();
    const items = list.locator('.item');
    await expect(items).toHaveCount(5);
  });

  test('renders item primary content', async ({ page }) => {
    const firstItem = page.locator('cs-list').first().locator('.item').first();
    const primary = firstItem.locator('.item-primary');
    await expect(primary).toHaveText('report-2024.pdf');
  });

  test('renders item secondary content', async ({ page }) => {
    const firstItem = page.locator('cs-list').first().locator('.item').first();
    const secondary = firstItem.locator('.item-secondary');
    await expect(secondary).toHaveText('2.4 MB · PDF');
  });

  test('renders icons when provided', async ({ page }) => {
    const listWithIcons = page.locator('cs-list').nth(1);
    const icon = listWithIcons.locator('.item-icon').first();
    await expect(icon).toBeVisible();
  });

  test('uses ul tag by default', async ({ page }) => {
    const list = page.locator('cs-list').first();
    const ul = list.locator('ul');
    await expect(ul).toHaveCount(1);
  });

  test('uses ol tag when tagOverride is set', async ({ page }) => {
    const orderedList = page.locator('cs-list[tagOverride="ol"]');
    const ol = orderedList.locator('ol');
    await expect(ol).toHaveCount(1);
  });

  test('has aria-label attribute', async ({ page }) => {
    const list = page.locator('cs-list').first();
    const ul = list.locator('ul');
    await expect(ul).toHaveAttribute('aria-label', 'Files');
  });

  test('empty list renders no items', async ({ page }) => {
    const emptyList = page.locator('cs-list').last();
    const items = emptyList.locator('.item');
    await expect(items).toHaveCount(0);
  });

  test('disablePaddings removes list padding', async ({ page }) => {
    const noPaddingList = page.locator('cs-list[disablePaddings]').first();
    const listEl = noPaddingList.locator('.root');
    await expect(listEl).toHaveClass(/disable-paddings/);
  });
});
