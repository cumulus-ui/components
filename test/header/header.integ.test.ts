import { test, expect } from '@playwright/test';

test.describe('Header — Integration', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#/light/header/permutations');
    await page.waitForSelector('header-permutations-page');
  });

  test('renders h1 variant with correct heading tag', async ({ page }) => {
    const header = page.locator('cs-header[variant="h1"]').first();

    const tagName = await header.evaluate((el) => {
      return el.shadowRoot?.querySelector('.heading')?.tagName;
    });

    expect(tagName).toBe('H1');
  });

  test('renders h2 variant with correct heading tag', async ({ page }) => {
    const header = page.locator('cs-header[variant="h2"]').first();

    const tagName = await header.evaluate((el) => {
      return el.shadowRoot?.querySelector('.heading')?.tagName;
    });

    expect(tagName).toBe('H2');
  });

  test('renders h3 variant with correct heading tag', async ({ page }) => {
    const header = page.locator('cs-header[variant="h3"]').first();

    const tagName = await header.evaluate((el) => {
      return el.shadowRoot?.querySelector('.heading')?.tagName;
    });

    expect(tagName).toBe('H3');
  });

  test('variant class is applied to root', async ({ page }) => {
    const header = page.locator('cs-header[variant="h1"]').first();

    const hasClass = await header.evaluate((el) => {
      return el.shadowRoot?.querySelector('.root')?.classList.contains('root-variant-h1');
    });

    expect(hasClass).toBe(true);
  });

  test('counter renders correctly', async ({ page }) => {
    const header = page.locator('cs-header[counter="(10)"]').first();

    const counterText = await header.evaluate((el) => {
      return el.shadowRoot?.querySelector('.counter')?.textContent?.trim();
    });

    expect(counterText).toContain('(10)');
  });

  test('description renders correctly', async ({ page }) => {
    const header = page.locator('cs-header[description]').first();

    const descText = await header.evaluate((el) => {
      return el.shadowRoot?.querySelector('.description')?.textContent?.trim();
    });

    expect(descText).toBeTruthy();
  });

  test('actions slot is present', async ({ page }) => {
    const header = page.locator('cs-header[variant="h1"]').nth(2);

    const hasActionsSlot = await header.evaluate((el) => {
      const slot = el.shadowRoot?.querySelector('slot[name="actions"]');
      return slot !== null;
    });

    expect(hasActionsSlot).toBe(true);
  });

  test('heading tag override works', async ({ page }) => {
    const header = page.locator('cs-header[heading-tag-override="h3"]').first();

    const tagName = await header.evaluate((el) => {
      return el.shadowRoot?.querySelector('.heading')?.tagName;
    });

    expect(tagName).toBe('H3');
  });

  test('root-no-actions class when no actions', async ({ page }) => {
    const header = page.locator('cs-header[variant="h1"]').first();

    const hasClass = await header.evaluate((el) => {
      return el.shadowRoot?.querySelector('.root')?.classList.contains('root-no-actions');
    });

    expect(hasClass).toBe(true);
  });
});
