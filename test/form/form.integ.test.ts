import { test, expect } from '@playwright/test';

test.describe('Form — Integration', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#/light/form/permutations');
    await page.waitForSelector('form-permutations-page');
  });

  test('renders header text', async ({ page }) => {
    const form = page.locator('cs-form[header="Create resource"]').first();

    const headerText = await form.evaluate((el) => {
      const headerSlot = el.shadowRoot?.querySelector('.header');
      return headerSlot?.textContent?.trim();
    });

    expect(headerText).toContain('Create resource');
  });

  test('renders error alert when errorText is set', async ({ page }) => {
    const form = page.locator('cs-form[error-text]').first();

    const hasError = await form.evaluate((el) => {
      const alert = el.shadowRoot?.querySelector('cs-alert[type="error"]');
      return alert !== null;
    });

    expect(hasError).toBe(true);
  });

  test('error alert contains error message', async ({ page }) => {
    const form = page.locator('cs-form[error-text]').first();

    const errorText = await form.evaluate((el) => {
      const alert = el.shadowRoot?.querySelector('cs-alert[type="error"]');
      return alert?.textContent?.trim();
    });

    expect(errorText).toContain('There are validation errors');
  });

  test('no error alert when errorText is empty', async ({ page }) => {
    const form = page.locator('cs-form[header="Create resource"]').first();

    const hasError = await form.evaluate((el) => {
      const alert = el.shadowRoot?.querySelector('cs-alert[type="error"]');
      return alert !== null;
    });

    expect(hasError).toBe(false);
  });

  test('actions slot renders correctly', async ({ page }) => {
    const form = page.locator('cs-form[header="Create resource"]').first();

    const hasActionsSlot = await form.evaluate((el) => {
      const slot = el.shadowRoot?.querySelector('slot[name="actions"]');
      return slot !== null;
    });

    expect(hasActionsSlot).toBe(true);
  });

  test('secondaryActions slot renders correctly', async ({ page }) => {
    const form = page.locator('cs-form[header="Configure settings"]').first();

    const hasSlot = await form.evaluate((el) => {
      const slot = el.shadowRoot?.querySelector('slot[name="secondaryActions"]');
      return slot !== null;
    });

    expect(hasSlot).toBe(true);
  });

  test('root class is applied', async ({ page }) => {
    const form = page.locator('cs-form').first();

    const hasRoot = await form.evaluate((el) => {
      return el.shadowRoot?.querySelector('.root') !== null;
    });

    expect(hasRoot).toBe(true);
  });
});
