import { test, expect } from '@playwright/test';

test.describe('Modal — Integration', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#/light/modal/permutations');
    await page.waitForSelector('modal-permutations-page');
  });

  test('static modal is visible with dialog role', async ({ page }) => {
    const modal = page.locator('cs-modal[header="Static modal"]');

    const hasDialog = await modal.evaluate((el) => {
      const dialog = el.shadowRoot?.querySelector('[role="dialog"]');
      return dialog !== null;
    });

    expect(hasDialog).toBe(true);
  });

  test('dialog has aria-modal attribute', async ({ page }) => {
    const modal = page.locator('cs-modal[header="Static modal"]');

    const ariaModal = await modal.evaluate((el) => {
      const dialog = el.shadowRoot?.querySelector('[role="dialog"]');
      return dialog?.getAttribute('aria-modal');
    });

    expect(ariaModal).toBe('true');
  });

  test('close button fires dismiss event', async ({ page }) => {
    const modal = page.locator('cs-modal[header="Static modal"]');

    const fired = await modal.evaluate((el) => {
      return new Promise<boolean>((resolve) => {
        el.addEventListener('dismiss', () => resolve(true), { once: true });
        const closeBtn = el.shadowRoot?.querySelector('cs-button[icon-name="close"]');
        (closeBtn as HTMLElement)?.click();
      });
    });

    expect(fired).toBe(true);
  });

  test('dismiss event has reason for close button', async ({ page }) => {
    const modal = page.locator('cs-modal[header="Static modal"]');

    const reason = await modal.evaluate((el) => {
      return new Promise<string>((resolve) => {
        el.addEventListener('dismiss', ((e: Event) => {
          resolve((e as CustomEvent).detail.reason);
        }) as EventListener, { once: true });
        const closeBtn = el.shadowRoot?.querySelector('cs-button[icon-name="close"]');
        (closeBtn as HTMLElement)?.click();
      });
    });

    expect(reason).toBe('closeButton');
  });

  test('Escape key fires dismiss with keyboard reason', async ({ page }) => {
    const modal = page.locator('cs-modal[header="Static modal"]');

    const reason = await modal.evaluate((el) => {
      return new Promise<string>((resolve) => {
        el.addEventListener('dismiss', ((e: Event) => {
          resolve((e as CustomEvent).detail.reason);
        }) as EventListener, { once: true });
        el.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
      });
    });

    expect(reason).toBe('keyboard');
  });

  test('hidden modal has hidden class', async ({ page }) => {
    const modal = page.locator('cs-modal[header="Small modal"]');

    const hasHidden = await modal.evaluate((el) => {
      return el.shadowRoot?.querySelector('.root')?.classList.contains('hidden');
    });

    expect(hasHidden).toBe(true);
  });

  test('size class is applied to dialog', async ({ page }) => {
    const modal = page.locator('cs-modal[header="Static modal"]');

    const hasMedium = await modal.evaluate((el) => {
      return el.shadowRoot?.querySelector('.dialog')?.classList.contains('medium');
    });

    expect(hasMedium).toBe(true);
  });

  test('close button has aria-label', async ({ page }) => {
    const modal = page.locator('cs-modal[header="Static modal"]');

    const ariaLabel = await modal.evaluate((el) => {
      const closeBtn = el.shadowRoot?.querySelector('cs-button[icon-name="close"]');
      return closeBtn?.getAttribute('aria-label');
    });

    expect(ariaLabel).toBe('Close dialog');
  });

  test('footer slot renders content', async ({ page }) => {
    const modal = page.locator('cs-modal[header="Static modal"]');

    const hasFooterSlot = await modal.evaluate((el) => {
      const slot = el.shadowRoot?.querySelector('slot[name="footer"]');
      return slot !== null;
    });

    expect(hasFooterSlot).toBe(true);
  });

  test('backdrop click fires dismiss with overlay reason', async ({ page }) => {
    const modal = page.locator('cs-modal[header="Static modal"]');

    const reason = await modal.evaluate((el) => {
      return new Promise<string>((resolve) => {
        el.addEventListener('dismiss', ((e: Event) => {
          resolve((e as CustomEvent).detail.reason);
        }) as EventListener, { once: true });
        const root = el.shadowRoot?.querySelector('.root') as HTMLElement;
        root?.click();
      });
    });

    expect(reason).toBe('overlay');
  });
});
