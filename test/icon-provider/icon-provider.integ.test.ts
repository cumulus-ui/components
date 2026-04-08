import { test, expect } from '@playwright/test';

const url = 'http://localhost:4174/#/light/icon-provider/permutations';

test.describe('icon-provider', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(url);
    await page.waitForSelector('cs-icon-provider');
  });

  test('renders as light DOM (no shadow root)', async ({ page }) => {
    const hasShadow = await page.evaluate(() => {
      return document.querySelector('cs-icon-provider')?.shadowRoot !== null;
    });
    expect(hasShadow).toBe(false);
  });

  test('children render inside provider', async ({ page }) => {
    const iconCount = await page.locator('cs-icon-provider cs-icon').count();
    expect(iconCount).toBeGreaterThanOrEqual(1);
  });

  test('passes slot content through', async ({ page }) => {
    const providerText = await page.locator('cs-icon-provider').first().innerHTML();
    expect(providerText).toContain('cs-icon');
  });

  test('multiple providers can coexist', async ({ page }) => {
    const providerCount = await page.locator('cs-icon-provider').count();
    expect(providerCount).toBeGreaterThanOrEqual(2);
  });
});
