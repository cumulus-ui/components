import { test, expect } from '@playwright/test';

test.describe('Badge — Integration', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#/light/badge/permutations');
    await page.waitForSelector('badge-permutations-page');
  });

  test('renders with default color (blue)', async ({ page }) => {
    const badge = page.locator('cs-badge').first();
    await expect(badge).toBeVisible();
  });

  test('renders all four base colors', async ({ page }) => {
    for (const color of ['blue', 'grey', 'green', 'red']) {
      const badge = page.locator(`cs-badge[color="${color}"]`).first();
      await expect(badge).toBeVisible();
    }
  });

  test('renders severity colors', async ({ page }) => {
    for (const severity of ['severity-critical', 'severity-high', 'severity-medium', 'severity-low', 'severity-neutral']) {
      const badge = page.locator(`cs-badge[color="${severity}"]`).first();
      await expect(badge).toBeVisible();
    }
  });

  test('displays slotted text content', async ({ page }) => {
    const badge = page.locator('cs-badge[color="blue"]').first();
    await expect(badge).toContainText('Blue');
  });

  test('badge pill has correct class', async ({ page }) => {
    const badge = page.locator('cs-badge[color="green"]').first();
    const pill = badge.locator('.badge-color-green');
    await expect(pill).toBeAttached();
  });

  test('badge has background color applied', async ({ page }) => {
    const badge = page.locator('cs-badge[color="red"]').first();
    const hasBg = await badge.evaluate((el) => {
      const pill = el.shadowRoot?.querySelector('.badge');
      if (!pill) return false;
      const bg = getComputedStyle(pill).backgroundColor;
      return bg !== '' && bg !== 'rgba(0, 0, 0, 0)';
    });
    expect(hasBg).toBe(true);
  });
});
