import { test, expect } from '@playwright/test';

test.describe('CollectionPreferences — Integration', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#/light/collection-preferences/permutations');
    await page.waitForSelector('collection-preferences-permutations-page');
  });

  test('renders trigger button', async ({ page }) => {
    const pref = page.locator('cs-collection-preferences').first();
    const hasTrigger = await pref.evaluate((el: any) => {
      return !!el.shadowRoot?.querySelector('cs-button[icon-name="settings"]');
    });
    expect(hasTrigger).toBe(true);
  });

  test('clicking trigger opens panel', async ({ page }) => {
    const pref = page.locator('cs-collection-preferences').first();
    await pref.evaluate(async (el: any) => {
      el.shadowRoot?.querySelector('cs-button')?.click();
      await el.updateComplete;
    });

    const hasPanel = await pref.evaluate((el: any) => {
      return !!el.shadowRoot?.querySelector('.panel');
    });
    expect(hasPanel).toBe(true);
  });

  test('panel shows title', async ({ page }) => {
    const pref = page.locator('cs-collection-preferences').first();
    await pref.evaluate(async (el: any) => {
      el.shadowRoot?.querySelector('cs-button')?.click();
      await el.updateComplete;
    });

    const title = await pref.evaluate((el: any) => {
      return el.shadowRoot?.querySelector('.panel-title')?.textContent?.trim();
    });
    expect(title).toBe('Preferences');
  });

  test('panel shows page size options', async ({ page }) => {
    const pref = page.locator('cs-collection-preferences').first();
    await pref.evaluate(async (el: any) => {
      el.shadowRoot?.querySelector('cs-button')?.click();
      await el.updateComplete;
    });

    const optionCount = await pref.evaluate((el: any) => {
      return el.shadowRoot?.querySelectorAll('.page-size-option')?.length ?? 0;
    });
    expect(optionCount).toBe(3);
  });

  test('confirm fires event with preferences', async ({ page }) => {
    const pref = page.locator('cs-collection-preferences').first();

    await pref.evaluate(async (el: any) => {
      el.shadowRoot?.querySelector('cs-button')?.click();
      await el.updateComplete;
    });

    const detail = await pref.evaluate((el: any) => {
      return new Promise<Record<string, unknown>>((resolve) => {
        el.addEventListener('confirm', ((e: CustomEvent) => {
          resolve(e.detail);
        }) as EventListener, { once: true });

        const buttons = el.shadowRoot?.querySelectorAll('.panel-footer cs-button');
        const confirmBtn = buttons?.[buttons.length - 1];
        confirmBtn?.click();
      });
    });

    expect(detail).toHaveProperty('pageSize');
  });

  test('cancel closes panel', async ({ page }) => {
    const pref = page.locator('cs-collection-preferences').first();

    await pref.evaluate(async (el: any) => {
      el.shadowRoot?.querySelector('cs-button')?.click();
      await el.updateComplete;
    });

    await pref.evaluate(async (el: any) => {
      const buttons = el.shadowRoot?.querySelectorAll('.panel-footer cs-button');
      buttons?.[0]?.click();
      await el.updateComplete;
    });

    const hasPanel = await pref.evaluate((el: any) => {
      return !!el.shadowRoot?.querySelector('.panel');
    });
    expect(hasPanel).toBe(false);
  });

  test('disabled trigger cannot open panel', async ({ page }) => {
    const pref = page.locator('cs-collection-preferences[disabled]');
    await pref.evaluate(async (el: any) => {
      el.shadowRoot?.querySelector('cs-button')?.click();
      await el.updateComplete;
    });

    const hasPanel = await pref.evaluate((el: any) => {
      return !!el.shadowRoot?.querySelector('.panel');
    });
    expect(hasPanel).toBe(false);
  });

  test('Escape key closes panel', async ({ page }) => {
    const pref = page.locator('cs-collection-preferences').first();

    await pref.evaluate(async (el: any) => {
      el.shadowRoot?.querySelector('cs-button')?.click();
      await el.updateComplete;
    });

    let hasPanel = await pref.evaluate((el: any) => {
      return !!el.shadowRoot?.querySelector('.panel');
    });
    expect(hasPanel).toBe(true);

    await pref.evaluate(async (el: any) => {
      el.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true, composed: true }));
      await el.updateComplete;
    });

    hasPanel = await pref.evaluate((el: any) => {
      return !!el.shadowRoot?.querySelector('.panel');
    });
    expect(hasPanel).toBe(false);
  });
});
