import { test, expect } from '@playwright/test';

test.describe('Drawer — Integration', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#/light/drawer/permutations');
    await page.waitForSelector('drawer-permutations-page');
  });

  test('renders drawer with correct structure', async ({ page }) => {
    const drawer = page.locator('cs-drawer').first();

    const hasDrawerClass = await drawer.evaluate((el) => {
      return el.shadowRoot?.querySelector('.drawer') !== null;
    });

    expect(hasDrawerClass).toBe(true);
  });

  test('has region role', async ({ page }) => {
    const drawer = page.locator('cs-drawer').first();

    const role = await drawer.evaluate((el) => {
      return el.shadowRoot?.querySelector('.drawer')?.getAttribute('role');
    });

    expect(role).toBe('region');
  });

  test('header slot renders content', async ({ page }) => {
    const drawer = page.locator('cs-drawer').first();

    const hasHeaderSlot = await drawer.evaluate((el) => {
      const slot = el.shadowRoot?.querySelector('slot[name="header"]');
      return slot !== null;
    });

    expect(hasHeaderSlot).toBe(true);
  });

  test('default slot renders content', async ({ page }) => {
    const drawer = page.locator('cs-drawer').first();

    const hasDefaultSlot = await drawer.evaluate((el) => {
      const slot = el.shadowRoot?.querySelector('slot:not([name])');
      return slot !== null;
    });

    expect(hasDefaultSlot).toBe(true);
  });

  test('loading state renders spinner', async ({ page }) => {
    const drawer = page.locator('cs-drawer[loading]').first();

    const hasSpinner = await drawer.evaluate((el) => {
      return el.shadowRoot?.querySelector('cs-spinner') !== null;
    });

    expect(hasSpinner).toBe(true);
  });

  test('loading state hides content slot', async ({ page }) => {
    const drawer = page.locator('cs-drawer[loading]').first();

    const hasContentSlot = await drawer.evaluate((el) => {
      const content = el.shadowRoot?.querySelector('.content');
      const defaultSlot = content?.querySelector('slot:not([name])');
      return defaultSlot !== null;
    });

    expect(hasContentSlot).toBe(false);
  });

  test('footer slot renders when content provided', async ({ page }) => {
    const drawer = page.locator('cs-drawer').nth(2);

    const hasFooterSlot = await drawer.evaluate((el) => {
      const slot = el.shadowRoot?.querySelector('slot[name="footer"]');
      return slot !== null;
    });

    expect(hasFooterSlot).toBe(true);
  });

  test('disable-content-paddings removes padding class', async ({ page }) => {
    const drawer = page.locator('cs-drawer[disable-content-paddings]').first();

    const hasPaddings = await drawer.evaluate((el) => {
      return el.shadowRoot?.querySelector('.content')?.classList.contains('content-with-paddings');
    });

    expect(hasPaddings).toBe(false);
  });
});
