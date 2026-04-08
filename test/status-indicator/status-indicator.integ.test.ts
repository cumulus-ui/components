import { test, expect } from '@playwright/test';

test.describe('StatusIndicator — Integration', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#/light/status-indicator/permutations');
    await page.waitForSelector('status-indicator-permutations-page');
  });

  test('type classes apply correctly', async ({ page }) => {
    const indicator = page.locator('cs-status-indicator[type="success"]').first();

    const hasClass = await indicator.evaluate((el) => {
      const root = el.shadowRoot?.querySelector('.root');
      return root?.classList.contains('status-success');
    });

    expect(hasClass).toBe(true);
  });

  test('error type has correct class', async ({ page }) => {
    const indicator = page.locator('cs-status-indicator[type="error"]');

    const hasClass = await indicator.evaluate((el) => {
      const root = el.shadowRoot?.querySelector('.root');
      return root?.classList.contains('status-error');
    });

    expect(hasClass).toBe(true);
  });

  test('loading type shows spinner instead of icon', async ({ page }) => {
    const indicator = page.locator('cs-status-indicator[type="loading"]');

    const result = await indicator.evaluate((el) => {
      const spinner = el.shadowRoot?.querySelector('cs-spinner');
      const icon = el.shadowRoot?.querySelector('.icon cs-icon');
      return { hasSpinner: spinner !== null, hasIcon: icon !== null };
    });

    expect(result.hasSpinner).toBe(true);
    expect(result.hasIcon).toBe(false);
  });

  test('icon matches type mapping', async ({ page }) => {
    const indicator = page.locator('cs-status-indicator[type="warning"]');

    const iconName = await indicator.evaluate((el) => {
      const icon = el.shadowRoot?.querySelector('cs-icon');
      return icon?.getAttribute('name');
    });

    expect(iconName).toBe('status-warning');
  });

  test('color override class applies', async ({ page }) => {
    const indicator = page.locator('cs-status-indicator[color-override="red"]');

    const hasClass = await indicator.evaluate((el) => {
      const root = el.shadowRoot?.querySelector('.root');
      return root?.classList.contains('color-override-red');
    });

    expect(hasClass).toBe(true);
  });

  test('success type uses status-positive icon', async ({ page }) => {
    const indicator = page.locator('cs-status-indicator[type="success"]').first();

    const iconName = await indicator.evaluate((el) => {
      const icon = el.shadowRoot?.querySelector('cs-icon');
      return icon?.getAttribute('name');
    });

    expect(iconName).toBe('status-positive');
  });
});
