import { test, expect } from '@playwright/test';

test.describe('Copy to Clipboard — Integration', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#/light/copy-to-clipboard/permutations');
    await page.waitForSelector('copy-to-clipboard-permutations-page');
    await page.context().grantPermissions(['clipboard-read', 'clipboard-write']);
  });

  test('click copies text and fires copy event', async ({ page }) => {
    const copyBtn = page.locator('cs-copy-to-clipboard[variant="button"]').first();

    const detail = await copyBtn.evaluate((el) => {
      return new Promise<{ successful: boolean }>((resolve) => {
        el.addEventListener('copy', ((e: Event) => {
          resolve((e as CustomEvent).detail);
        }) as EventListener, { once: true });

        const btn = el.shadowRoot?.querySelector('cs-button') as HTMLElement;
        btn.click();
      });
    });

    expect(detail.successful).toBe(true);
  });

  test('shows success text after copy', async ({ page }) => {
    const copyBtn = page.locator('cs-copy-to-clipboard[variant="button"]').first();

    await copyBtn.evaluate((el) => {
      const btn = el.shadowRoot?.querySelector('cs-button') as HTMLElement;
      btn.click();
    });

    await page.waitForTimeout(100);

    const text = await copyBtn.evaluate((el) => {
      const btn = el.shadowRoot?.querySelector('cs-button');
      return btn?.textContent?.trim();
    });

    expect(text).toBe('Copied!');
  });

  test('disabled button prevents copy', async ({ page }) => {
    const copyBtn = page.locator('cs-copy-to-clipboard[disabled]').first();

    const fired = await copyBtn.evaluate((el) => {
      return new Promise<boolean>((resolve) => {
        let copied = false;
        el.addEventListener('copy', () => { copied = true; }, { once: true });
        const btn = el.shadowRoot?.querySelector('cs-button') as HTMLElement;
        btn.click();
        setTimeout(() => resolve(copied), 50);
      });
    });

    expect(fired).toBe(false);
  });

  test('icon variant renders icon-only button', async ({ page }) => {
    const copyBtn = page.locator('cs-copy-to-clipboard[variant="icon"]').first();

    const variant = await copyBtn.evaluate((el) => {
      const btn = el.shadowRoot?.querySelector('cs-button');
      return btn?.getAttribute('variant');
    });

    expect(variant).toBe('icon');
  });
});
