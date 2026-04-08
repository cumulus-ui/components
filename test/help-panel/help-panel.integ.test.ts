import { test, expect } from '@playwright/test';

test.describe('HelpPanel — Integration', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#/light/help-panel/permutations');
    await page.waitForSelector('help-panel-permutations-page');
  });

  test('renders help-panel container', async ({ page }) => {
    const panel = page.locator('cs-help-panel').first();

    const hasPanel = await panel.evaluate((el) => {
      return !!el.shadowRoot?.querySelector('.help-panel');
    });
    expect(hasPanel).toBe(true);
  });

  test('renders header slot', async ({ page }) => {
    const panel = page.locator('cs-help-panel').first();

    const hasHeaderSlot = await panel.evaluate((el) => {
      const slot = el.shadowRoot?.querySelector('slot[name="header"]');
      return !!slot;
    });
    expect(hasHeaderSlot).toBe(true);
  });

  test('renders default slot for content', async ({ page }) => {
    const panel = page.locator('cs-help-panel').first();

    const hasDefaultSlot = await panel.evaluate((el) => {
      const slots = el.shadowRoot?.querySelectorAll('slot:not([name])');
      return (slots?.length ?? 0) > 0;
    });
    expect(hasDefaultSlot).toBe(true);
  });

  test('renders footer slot', async ({ page }) => {
    const panel = page.locator('cs-help-panel').first();

    const hasFooterSlot = await panel.evaluate((el) => {
      const slot = el.shadowRoot?.querySelector('slot[name="footer"]');
      return !!slot;
    });
    expect(hasFooterSlot).toBe(true);
  });

  test('loading state shows spinner', async ({ page }) => {
    const panel = page.locator('cs-help-panel[loading]').first();

    const hasSpinner = await panel.evaluate((el) => {
      return !!el.shadowRoot?.querySelector('cs-spinner');
    });
    expect(hasSpinner).toBe(true);
  });

  test('loading state shows loading text', async ({ page }) => {
    const panel = page.locator('cs-help-panel[loading]').first();

    const text = await panel.evaluate((el) => {
      return el.shadowRoot?.querySelector('.loading')?.textContent?.trim();
    });
    expect(text).toContain('Loading help content');
  });

  test('loading state hides content slots', async ({ page }) => {
    const panel = page.locator('cs-help-panel[loading]').first();

    const hasContentSlot = await panel.evaluate((el) => {
      return !!el.shadowRoot?.querySelector('.content');
    });
    expect(hasContentSlot).toBe(false);
  });

  test('header section has correct class', async ({ page }) => {
    const panel = page.locator('cs-help-panel').first();

    const hasHeaderClass = await panel.evaluate((el) => {
      return !!el.shadowRoot?.querySelector('.header');
    });
    expect(hasHeaderClass).toBe(true);
  });

  test('content section has correct class', async ({ page }) => {
    const panel = page.locator('cs-help-panel').first();

    const hasContentClass = await panel.evaluate((el) => {
      return !!el.shadowRoot?.querySelector('.content');
    });
    expect(hasContentClass).toBe(true);
  });

  test('footer section has correct class', async ({ page }) => {
    const panel = page.locator('cs-help-panel').first();

    const hasFooterClass = await panel.evaluate((el) => {
      return !!el.shadowRoot?.querySelector('.footer');
    });
    expect(hasFooterClass).toBe(true);
  });
});
