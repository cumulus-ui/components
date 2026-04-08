import { test, expect } from '@playwright/test';

test.describe('Flashbar — Integration', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#/light/flashbar/permutations');
    await page.waitForSelector('flashbar-permutations-page');
  });

  test('renders flash items', async ({ page }) => {
    const flashbar = page.locator('cs-flashbar').first();

    const itemCount = await flashbar.evaluate((el) => {
      return el.shadowRoot?.querySelectorAll('.flash').length;
    });

    expect(itemCount).toBe(4);
  });

  test('applies correct type class for success', async ({ page }) => {
    const flashbar = page.locator('cs-flashbar').first();

    const hasClass = await flashbar.evaluate((el) => {
      const flashes = el.shadowRoot?.querySelectorAll('.flash');
      return flashes?.[1]?.classList.contains('flash-type-success');
    });

    expect(hasClass).toBe(true);
  });

  test('applies correct type class for error', async ({ page }) => {
    const flashbar = page.locator('cs-flashbar').first();

    const hasClass = await flashbar.evaluate((el) => {
      const flashes = el.shadowRoot?.querySelectorAll('.flash');
      return flashes?.[3]?.classList.contains('flash-type-error');
    });

    expect(hasClass).toBe(true);
  });

  test('applies correct type class for warning', async ({ page }) => {
    const flashbar = page.locator('cs-flashbar').first();

    const hasClass = await flashbar.evaluate((el) => {
      const flashes = el.shadowRoot?.querySelectorAll('.flash');
      return flashes?.[2]?.classList.contains('flash-type-warning');
    });

    expect(hasClass).toBe(true);
  });

  test('renders flash header when provided', async ({ page }) => {
    const flashbar = page.locator('cs-flashbar').nth(1);

    const headerText = await flashbar.evaluate((el) => {
      return el.shadowRoot?.querySelector('.flash-header')?.textContent?.trim();
    });

    expect(headerText).toBe('Info Header');
  });

  test('renders dismiss button when dismissible', async ({ page }) => {
    const flashbar = page.locator('cs-flashbar').nth(2);

    const hasDismiss = await flashbar.evaluate((el) => {
      return el.shadowRoot?.querySelectorAll('.dismiss-button-wrapper').length;
    });

    expect(hasDismiss).toBeGreaterThan(0);
  });

  test('dismiss button fires dismiss event', async ({ page }) => {
    const flashbar = page.locator('cs-flashbar').nth(2);

    const fired = await flashbar.evaluate((el) => {
      return new Promise<boolean>((resolve) => {
        el.addEventListener('dismiss', () => resolve(true), { once: true });
        const dismissBtn = el.shadowRoot?.querySelector('.dismiss-button-wrapper cs-button');
        (dismissBtn as HTMLElement)?.click();
      });
    });

    expect(fired).toBe(true);
  });

  test('has aria-label on flashbar', async ({ page }) => {
    const flashbar = page.locator('cs-flashbar').first();

    const ariaLabel = await flashbar.evaluate((el) => {
      return el.shadowRoot?.querySelector('.flashbar')?.getAttribute('aria-label');
    });

    expect(ariaLabel).toBe('Notifications');
  });

  test('renders flash list as ul', async ({ page }) => {
    const flashbar = page.locator('cs-flashbar').first();

    const tag = await flashbar.evaluate((el) => {
      const list = el.shadowRoot?.querySelector('.flash-list');
      return list?.tagName;
    });

    expect(tag).toBe('UL');
  });

  test('loading item uses in-progress icon', async ({ page }) => {
    const flashbar = page.locator('cs-flashbar').last();

    const iconName = await flashbar.evaluate((el) => {
      const icon = el.shadowRoot?.querySelector('.flash-icon cs-icon');
      return icon?.getAttribute('name');
    });

    expect(iconName).toBe('status-in-progress');
  });
});
