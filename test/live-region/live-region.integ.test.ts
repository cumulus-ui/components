import { test, expect } from '@playwright/test';

test.describe('Live Region — Integration', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#/light/live-region/permutations');
    await page.waitForSelector('live-region-permutations-page');
  });

  test('renders polite live region', async ({ page }) => {
    const region = page.locator('cs-live-region').first();
    await expect(region).toBeVisible();
  });

  test('polite region has aria-live="polite"', async ({ page }) => {
    const region = page.locator('cs-live-region').first();
    const ariaLive = region.locator('[aria-live="polite"]');
    await expect(ariaLive).toBeAttached();
  });

  test('assertive region has aria-live="assertive"', async ({ page }) => {
    const region = page.locator('cs-live-region[assertive]').first();
    const ariaLive = region.locator('[aria-live="assertive"]');
    await expect(ariaLive).toBeAttached();
  });

  test('hidden region is visually hidden but in DOM', async ({ page }) => {
    const region = page.locator('cs-live-region[hidden]').first();
    const hiddenEl = region.locator('.announcer');
    await expect(hiddenEl).toBeAttached();

    const isOffscreen = await region.evaluate((el) => {
      const inner = el.shadowRoot?.querySelector('.announcer');
      if (!inner) return false;
      const style = getComputedStyle(inner);
      return style.position === 'absolute';
    });
    expect(isOffscreen).toBe(true);
  });

  test('updates content dynamically', async ({ page }) => {
    const politeRegion = page.locator('cs-live-region').first();
    await expect(politeRegion).toContainText('Polite announcement');

    await page.locator('button', { hasText: 'Update polite' }).click();
    await expect(politeRegion).toContainText('Polite update #1');
  });

  test('span tag renders span element', async ({ page }) => {
    const region = page.locator('cs-live-region[tag-name="span"]').first();
    const span = region.locator('span[aria-live]');
    await expect(span).toBeAttached();
  });

  test('has aria-atomic="true"', async ({ page }) => {
    const region = page.locator('cs-live-region').first();
    const atomic = region.locator('[aria-atomic="true"]');
    await expect(atomic).toBeAttached();
  });
});
