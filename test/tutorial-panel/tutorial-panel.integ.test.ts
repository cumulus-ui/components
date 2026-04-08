import { test, expect } from '@playwright/test';

test.describe('Tutorial Panel — Integration', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#/light/tutorial-panel/permutations');
    await page.waitForSelector('tutorial-panel-permutations-page');
  });

  test('loading state shows spinner', async ({ page }) => {
    const panel = page.locator('cs-tutorial-panel[loading]');

    const hasSpinner = await panel.evaluate((el) => {
      return el.shadowRoot?.querySelector('cs-spinner') !== null;
    });

    expect(hasSpinner).toBe(true);
  });

  test('loading state shows loading text', async ({ page }) => {
    const panel = page.locator('cs-tutorial-panel[loading]');

    const loadingText = await panel.evaluate((el) => {
      return el.shadowRoot?.querySelector('.loading-state')?.textContent?.trim();
    });

    expect(loadingText).toContain('Loading tutorials');
  });

  test('tutorial list renders tutorial items', async ({ page }) => {
    const panel = page.locator('cs-tutorial-panel').nth(1);

    const itemCount = await panel.evaluate((el) => {
      return el.shadowRoot?.querySelectorAll('.tutorial-item').length ?? 0;
    });

    expect(itemCount).toBe(3);
  });

  test('tutorial list shows title', async ({ page }) => {
    const panel = page.locator('cs-tutorial-panel').nth(1);

    const title = await panel.evaluate((el) => {
      return el.shadowRoot?.querySelector('.tutorial-list-title')?.textContent?.trim();
    });

    expect(title).toBe('Tutorials');
  });

  test('completed tutorial shows status indicator', async ({ page }) => {
    const panel = page.locator('cs-tutorial-panel').nth(1);

    const hasStatus = await panel.evaluate((el) => {
      const items = el.shadowRoot?.querySelectorAll('.tutorial-item');
      if (!items || items.length < 2) return false;
      return items[1].querySelector('cs-status-indicator') !== null;
    });

    expect(hasStatus).toBe(true);
  });

  test('prerequisite tutorial has disabled button', async ({ page }) => {
    const panel = page.locator('cs-tutorial-panel').nth(1);

    const isDisabled = await panel.evaluate((el) => {
      const items = el.shadowRoot?.querySelectorAll('.tutorial-item');
      if (!items || items.length < 3) return false;
      const btn = items[2].querySelector('cs-button');
      return btn?.hasAttribute('disabled') ?? false;
    });

    expect(isDisabled).toBe(true);
  });

  test('download link renders when URL provided', async ({ page }) => {
    const panel = page.locator('cs-tutorial-panel').nth(1);

    const hasDownloadLink = await panel.evaluate((el) => {
      return el.shadowRoot?.querySelector('.download-link') !== null;
    });

    expect(hasDownloadLink).toBe(true);
  });

  test('panel has region role', async ({ page }) => {
    const panel = page.locator('cs-tutorial-panel').nth(1);

    const hasRole = await panel.evaluate((el) => {
      return el.shadowRoot?.querySelector('[role="region"]') !== null;
    });

    expect(hasRole).toBe(true);
  });
});
