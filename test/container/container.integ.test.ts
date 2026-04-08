import { test, expect } from '@playwright/test';

test.describe('Container — Integration', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#/light/container/permutations');
    await page.waitForSelector('container-permutations-page');
  });

  test('renders default variant with correct class', async ({ page }) => {
    const container = page.locator('cs-container').first();

    const hasClass = await container.evaluate((el) => {
      return el.shadowRoot?.querySelector('.root')?.classList.contains('variant-default');
    });

    expect(hasClass).toBe(true);
  });

  test('renders stacked variant with correct class', async ({ page }) => {
    const container = page.locator('cs-container[variant="stacked"]').first();

    const hasClass = await container.evaluate((el) => {
      return el.shadowRoot?.querySelector('.root')?.classList.contains('variant-stacked');
    });

    expect(hasClass).toBe(true);
  });

  test('header slot renders content', async ({ page }) => {
    const container = page.locator('cs-container').first();

    const hasHeaderSlot = await container.evaluate((el) => {
      const headerSlot = el.shadowRoot?.querySelector('slot[name="header"]');
      return headerSlot !== null;
    });

    expect(hasHeaderSlot).toBe(true);
  });

  test('footer slot renders when content provided', async ({ page }) => {
    const container = page.locator('cs-container').nth(1);

    const hasFooterSlot = await container.evaluate((el) => {
      const footerSlot = el.shadowRoot?.querySelector('slot[name="footer"]');
      return footerSlot !== null;
    });

    expect(hasFooterSlot).toBe(true);
  });

  test('disable-content-paddings removes content padding class', async ({ page }) => {
    const container = page.locator('cs-container[disable-content-paddings]').first();

    const hasPaddings = await container.evaluate((el) => {
      return el.shadowRoot?.querySelector('.content-inner')?.classList.contains('with-paddings');
    });

    expect(hasPaddings).toBe(false);
  });

  test('disable-header-paddings removes header padding class', async ({ page }) => {
    const container = page.locator('cs-container[disable-header-paddings]').first();

    const hasPaddings = await container.evaluate((el) => {
      return el.shadowRoot?.querySelector('.header')?.classList.contains('with-paddings');
    });

    expect(hasPaddings).toBe(false);
  });

  test('fit-height applies fit-height class', async ({ page }) => {
    const container = page.locator('cs-container[fit-height]').first();

    const hasClass = await container.evaluate((el) => {
      return el.shadowRoot?.querySelector('.root')?.classList.contains('fit-height');
    });

    expect(hasClass).toBe(true);
  });

  test('default slot renders content', async ({ page }) => {
    const container = page.locator('cs-container').first();

    const hasDefaultSlot = await container.evaluate((el) => {
      const slot = el.shadowRoot?.querySelector('slot:not([name])');
      return slot !== null;
    });

    expect(hasDefaultSlot).toBe(true);
  });
});
