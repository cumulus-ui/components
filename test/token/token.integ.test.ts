import { test, expect } from '@playwright/test';

test.describe('Token — Integration', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#/light/token/permutations');
    await page.waitForSelector('token-permutations-page');
  });

  test('renders basic token with label', async ({ page }) => {
    const token = page.locator('cs-token').first();

    const hasRoot = await token.evaluate((el) => {
      return el.shadowRoot?.querySelector('.root') !== null;
    });

    expect(hasRoot).toBe(true);
  });

  test('dismiss button fires dismiss event', async ({ page }) => {
    const token = page.locator('cs-token[dismissible]').first();

    const fired = await token.evaluate((el) => {
      return new Promise<boolean>((resolve) => {
        el.addEventListener('dismiss', () => resolve(true), { once: true });
        const dismissBtn = el.shadowRoot?.querySelector('.dismiss-button');
        (dismissBtn as HTMLElement)?.click();
      });
    });

    expect(fired).toBe(true);
  });

  test('disabled token does not show dismiss button', async ({ page }) => {
    const token = page.locator('cs-token[disabled]').first();

    const hasDismiss = await token.evaluate((el) => {
      return el.shadowRoot?.querySelector('.dismiss-button') !== null;
    });

    expect(hasDismiss).toBe(false);
  });

  test('disabled token has disabled class on box', async ({ page }) => {
    const token = page.locator('cs-token[disabled]').first();

    const hasClass = await token.evaluate((el) => {
      return el.shadowRoot?.querySelector('.token-box-disabled') !== null;
    });

    expect(hasClass).toBe(true);
  });

  test('read-only token does not show dismiss button', async ({ page }) => {
    const token = page.locator('cs-token[read-only]').first();

    const hasDismiss = await token.evaluate((el) => {
      return el.shadowRoot?.querySelector('.dismiss-button') !== null;
    });

    expect(hasDismiss).toBe(false);
  });

  test('inline variant renders inline box', async ({ page }) => {
    const token = page.locator('cs-token[variant="inline"]').first();

    const hasInlineBox = await token.evaluate((el) => {
      return el.shadowRoot?.querySelector('.token-box-inline') !== null;
    });

    expect(hasInlineBox).toBe(true);
  });

  test('token with description renders description', async ({ page }) => {
    const token = page.locator('cs-token[description]').first();

    const hasDescription = await token.evaluate((el) => {
      return el.shadowRoot?.querySelector('.description') !== null;
    });

    expect(hasDescription).toBe(true);
  });

  test('non-dismissible token does not show dismiss button', async ({ page }) => {
    const token = page.locator('cs-token:not([dismissible]):not([disabled]):not([read-only]):not([variant="inline"])').first();

    const hasDismiss = await token.evaluate((el) => {
      return el.shadowRoot?.querySelector('.dismiss-button') !== null;
    });

    expect(hasDismiss).toBe(false);
  });

  test('dismiss button has correct aria-label', async ({ page }) => {
    const token = page.locator('cs-token[dismissible][dismiss-label="Remove option A"]');

    const ariaLabel = await token.evaluate((el) => {
      const btn = el.shadowRoot?.querySelector('.dismiss-button');
      return btn?.getAttribute('aria-label');
    });

    expect(ariaLabel).toBe('Remove option A');
  });
});
