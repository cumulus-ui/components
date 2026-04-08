import { test, expect } from '@playwright/test';

test.describe('Popover — Integration', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#/light/popover/permutations');
    await page.waitForSelector('popover-permutations-page');
  });

  test('click trigger opens popover', async ({ page }) => {
    const popover = page.locator('cs-popover').first();

    const isOpen = await popover.evaluate(async (el: any) => {
      const trigger = el.shadowRoot?.querySelector('.trigger');
      trigger?.click();
      await el.updateComplete;
      return el.shadowRoot?.querySelector('.container') !== null;
    });

    expect(isOpen).toBe(true);
  });

  test('click dismiss closes popover', async ({ page }) => {
    const popover = page.locator('cs-popover').first();

    const isOpen = await popover.evaluate(async (el: any) => {
      const trigger = el.shadowRoot?.querySelector('.trigger');
      trigger?.click();
      await el.updateComplete;

      const dismissBtn = el.shadowRoot?.querySelector('.dismiss cs-button');
      dismissBtn?.click();
      await el.updateComplete;

      return el.shadowRoot?.querySelector('.container') !== null;
    });

    expect(isOpen).toBe(false);
  });

  test('escape closes popover', async ({ page }) => {
    const popover = page.locator('cs-popover').first();

    const isOpen = await popover.evaluate(async (el: any) => {
      const trigger = el.shadowRoot?.querySelector('.trigger');
      trigger?.click();
      await el.updateComplete;

      el.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
      await el.updateComplete;

      return el.shadowRoot?.querySelector('.container') !== null;
    });

    expect(isOpen).toBe(false);
  });

  test('click outside closes popover', async ({ page }) => {
    const popover = page.locator('cs-popover').first();

    await popover.evaluate(async (el: any) => {
      const trigger = el.shadowRoot?.querySelector('.trigger');
      trigger?.click();
      await el.updateComplete;
    });

    // rAF-based outside click listener needs a frame to register
    await page.waitForTimeout(100);

    await page.locator('h2').click();
    await page.waitForTimeout(50);

    const isOpen = await popover.evaluate((el: any) => {
      return el.shadowRoot?.querySelector('.container') !== null;
    });

    expect(isOpen).toBe(false);
  });

  test('header renders when provided', async ({ page }) => {
    const popover = page.locator('cs-popover').first();

    const headerText = await popover.evaluate(async (el: any) => {
      const trigger = el.shadowRoot?.querySelector('.trigger');
      trigger?.click();
      await el.updateComplete;
      return el.shadowRoot?.querySelector('.header')?.textContent?.trim();
    });

    expect(headerText).toBe('Popover header');
  });

  test('different sizes apply correct classes', async ({ page }) => {
    const sizes = ['small', 'medium', 'large'];

    for (const size of sizes) {
      const popover = page.locator(`cs-popover[size="${size}"]`).first();

      const hasClass = await popover.evaluate(async (el: any, s: string) => {
        const trigger = el.shadowRoot?.querySelector('.trigger');
        trigger?.click();
        await el.updateComplete;
        const body = el.shadowRoot?.querySelector('.container-body');
        return body?.classList.contains(`container-body-size-${s}`);
      }, size);

      expect(hasClass).toBe(true);

      await popover.evaluate(async (el: any) => {
        const trigger = el.shadowRoot?.querySelector('.trigger');
        trigger?.click();
        await el.updateComplete;
      });
    }
  });

  test('trigger has aria-expanded attribute', async ({ page }) => {
    const popover = page.locator('cs-popover').first();

    const expandedClosed = await popover.evaluate((el: any) => {
      const trigger = el.shadowRoot?.querySelector('.trigger');
      return trigger?.getAttribute('aria-expanded');
    });
    expect(expandedClosed).toBe('false');

    const expandedOpen = await popover.evaluate(async (el: any) => {
      const trigger = el.shadowRoot?.querySelector('.trigger');
      trigger?.click();
      await el.updateComplete;
      return trigger?.getAttribute('aria-expanded');
    });
    expect(expandedOpen).toBe('true');
  });
});
