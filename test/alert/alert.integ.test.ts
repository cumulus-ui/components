import { test, expect } from '@playwright/test';

test.describe('Alert — Integration', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#/light/alert/permutations');
    await page.waitForSelector('alert-permutations-page');
  });

  test('renders info type with correct CSS class', async ({ page }) => {
    const alert = page.locator('cs-alert[type="info"]').first();

    const hasClass = await alert.evaluate((el) => {
      return el.shadowRoot?.querySelector('.alert')?.classList.contains('type-info');
    });

    expect(hasClass).toBe(true);
  });

  test('renders success type with correct CSS class', async ({ page }) => {
    const alert = page.locator('cs-alert[type="success"]').first();

    const hasClass = await alert.evaluate((el) => {
      return el.shadowRoot?.querySelector('.alert')?.classList.contains('type-success');
    });

    expect(hasClass).toBe(true);
  });

  test('renders warning type with correct CSS class', async ({ page }) => {
    const alert = page.locator('cs-alert[type="warning"]').first();

    const hasClass = await alert.evaluate((el) => {
      return el.shadowRoot?.querySelector('.alert')?.classList.contains('type-warning');
    });

    expect(hasClass).toBe(true);
  });

  test('renders error type with correct CSS class', async ({ page }) => {
    const alert = page.locator('cs-alert[type="error"]').first();

    const hasClass = await alert.evaluate((el) => {
      return el.shadowRoot?.querySelector('.alert')?.classList.contains('type-error');
    });

    expect(hasClass).toBe(true);
  });

  test('dismiss button fires dismiss event', async ({ page }) => {
    const alert = page.locator('cs-alert[dismissible]').first();

    const fired = await alert.evaluate((el) => {
      return new Promise<boolean>((resolve) => {
        el.addEventListener('dismiss', () => resolve(true), { once: true });
        const dismissBtn = el.shadowRoot?.querySelector('.dismiss cs-button');
        (dismissBtn as HTMLElement)?.click();
      });
    });

    expect(fired).toBe(true);
  });

  test('hidden state applies hidden class', async ({ page }) => {
    const alert = page.locator('cs-alert').last();

    const hasHidden = await alert.evaluate((el) => {
      return el.shadowRoot?.querySelector('.root')?.classList.contains('hidden');
    });

    expect(hasHidden).toBe(true);
  });

  test('action slot renders correctly', async ({ page }) => {
    const alert = page.locator('cs-alert[header="Action alert"]');

    const hasAction = await alert.evaluate((el) => {
      const actionSlot = el.shadowRoot?.querySelector('.action slot[name="action"]');
      return actionSlot !== null;
    });

    expect(hasAction).toBe(true);
  });

  test('has correct ARIA role', async ({ page }) => {
    const alert = page.locator('cs-alert[type="info"]').first();

    const role = await alert.evaluate((el) => {
      return el.shadowRoot?.querySelector('.alert')?.getAttribute('role');
    });

    expect(role).toBe('alert');
  });
});
