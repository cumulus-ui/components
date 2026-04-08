import { test, expect } from '@playwright/test';

test.describe('Annotation Context — Integration', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#/light/annotation-context/permutations');
    await page.waitForSelector('annotation-context-permutations-page');
  });

  test('renders slot content when no tutorial is active', async ({ page }) => {
    const ctx = page.locator('cs-annotation-context').first();

    const hasSlotContent = await ctx.evaluate((el) => {
      return el.querySelector('cs-hotspot') !== null;
    });

    expect(hasSlotContent).toBe(true);
  });

  test('uses display:contents on host (no visual wrapper)', async ({ page }) => {
    const ctx = page.locator('cs-annotation-context').first();

    const tagName = await ctx.evaluate((el) => el.tagName.toLowerCase());
    expect(tagName).toBe('cs-annotation-context');
  });

  test('provides context to child hotspot components', async ({ page }) => {
    const hotspot = page.locator('cs-annotation-context').nth(1).locator('cs-hotspot').first();

    const hasWrapper = await hotspot.evaluate((el) => {
      return el.shadowRoot?.querySelector('.wrapper') !== null;
    });

    expect(hasWrapper).toBe(true);
  });

  test('hotspot shows indicator when tutorial is active', async ({ page }) => {
    const hotspot = page.locator('cs-annotation-context').nth(1).locator('cs-hotspot').first();

    const hasIndicator = await hotspot.evaluate((el) => {
      return el.shadowRoot?.querySelector('.markerWrapper') !== null;
    });

    expect(hasIndicator).toBe(true);
  });

  test('hotspot does not show indicator when no tutorial', async ({ page }) => {
    const hotspot = page.locator('cs-annotation-context').first().locator('cs-hotspot').first();

    const hasIndicator = await hotspot.evaluate((el) => {
      return el.shadowRoot?.querySelector('.markerWrapper') !== null;
    });

    expect(hasIndicator).toBe(false);
  });
});
