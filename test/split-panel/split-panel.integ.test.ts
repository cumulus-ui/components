import { test, expect } from '@playwright/test';

test.describe('SplitPanel — Integration', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#/light/split-panel/permutations');
    await page.waitForSelector('split-panel-permutations-page');
  });

  test('renders split panel with drawer class', async ({ page }) => {
    const panel = page.locator('cs-split-panel').first();

    const hasDrawerClass = await panel.evaluate((el) => {
      return el.shadowRoot?.querySelector('.drawer') !== null;
    });

    expect(hasDrawerClass).toBe(true);
  });

  test('has region role', async ({ page }) => {
    const panel = page.locator('cs-split-panel').first();

    const role = await panel.evaluate((el) => {
      return el.shadowRoot?.querySelector('[role="region"]') !== null;
    });

    expect(role).toBe(true);
  });

  test('displays header text', async ({ page }) => {
    const panel = page.locator('cs-split-panel').first();

    const headerText = await panel.evaluate((el) => {
      return el.shadowRoot?.querySelector('.header-text')?.textContent?.trim();
    });

    expect(headerText).toBe('Details');
  });

  test('default slot renders content', async ({ page }) => {
    const panel = page.locator('cs-split-panel').first();

    const hasDefaultSlot = await panel.evaluate((el) => {
      const slot = el.shadowRoot?.querySelector('slot:not([name])');
      return slot !== null;
    });

    expect(hasDefaultSlot).toBe(true);
  });

  test('close button collapses panel', async ({ page }) => {
    const panel = page.locator('cs-split-panel').first();

    await panel.evaluate((el) => {
      const closeBtn = el.shadowRoot?.querySelector('cs-button[aria-label="Close"]');
      (closeBtn as HTMLElement)?.click();
    });

    const isClosed = await panel.evaluate((el) => {
      return el.shadowRoot?.querySelector('.drawer-closed') !== null;
    });

    expect(isClosed).toBe(true);
  });

  test('hide-preferences-button hides preferences button', async ({ page }) => {
    const panel = page.locator('cs-split-panel[hide-preferences-button]').first();

    const hasPrefsBtn = await panel.evaluate((el) => {
      return el.shadowRoot?.querySelector('cs-button[aria-label="Preferences"]') !== null;
    });

    expect(hasPrefsBtn).toBe(false);
  });

  test('preferences button is visible by default', async ({ page }) => {
    const panel = page.locator('cs-split-panel').first();

    const hasPrefsBtn = await panel.evaluate((el) => {
      return el.shadowRoot?.querySelector('cs-button[aria-label="Preferences"]') !== null;
    });

    expect(hasPrefsBtn).toBe(true);
  });

  test('close behavior hide renders empty when closed', async ({ page }) => {
    const panel = page.locator('cs-split-panel[close-behavior="hide"]').first();

    await panel.evaluate((el) => {
      const closeBtn = el.shadowRoot?.querySelector('cs-button[aria-label="Close"]');
      (closeBtn as HTMLElement)?.click();
    });

    const isEmpty = await panel.evaluate((el) => {
      return el.shadowRoot?.children.length === 0 || el.shadowRoot?.innerHTML.trim() === '';
    });

    expect(isEmpty).toBe(true);
  });
});
