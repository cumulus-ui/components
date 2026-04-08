import { test, expect } from '@playwright/test';

test.describe('File Input — Integration', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#/light/file-input/permutations');
    await page.waitForSelector('file-input-permutations-page');
  });

  test('renders hidden file input and visible button', async ({ page }) => {
    const fileInput = page.locator('cs-file-input[variant="button"]').first();

    const structure = await fileInput.evaluate((el) => {
      const hiddenInput = el.shadowRoot?.querySelector('input[type="file"]');
      const btn = el.shadowRoot?.querySelector('cs-button');
      return {
        hasHiddenInput: !!hiddenInput,
        hasButton: !!btn,
        inputHidden: hiddenInput?.classList.contains('file-input'),
      };
    });

    expect(structure.hasHiddenInput).toBe(true);
    expect(structure.hasButton).toBe(true);
    expect(structure.inputHidden).toBe(true);
  });

  test('multiple attribute is forwarded to native input', async ({ page }) => {
    const fileInput = page.locator('cs-file-input[multiple]').first();

    const isMultiple = await fileInput.evaluate((el) => {
      const input = el.shadowRoot?.querySelector('input[type="file"]');
      return input?.hasAttribute('multiple');
    });

    expect(isMultiple).toBe(true);
  });

  test('accept attribute is forwarded to native input', async ({ page }) => {
    const fileInput = page.locator('cs-file-input[accept]').first();

    const accept = await fileInput.evaluate((el) => {
      const input = el.shadowRoot?.querySelector('input[type="file"]');
      return input?.getAttribute('accept');
    });

    expect(accept).toBe('.png,.jpg,.jpeg');
  });

  test('disabled file input has disabled button', async ({ page }) => {
    const fileInput = page.locator('cs-file-input[disabled]').first();

    const isDisabled = await fileInput.evaluate((el) => {
      const btn = el.shadowRoot?.querySelector('cs-button');
      return btn?.hasAttribute('disabled');
    });

    expect(isDisabled).toBe(true);
  });

  test('icon variant renders icon button', async ({ page }) => {
    const fileInput = page.locator('cs-file-input[variant="icon"]').first();

    const variant = await fileInput.evaluate((el) => {
      const btn = el.shadowRoot?.querySelector('cs-button');
      return btn?.getAttribute('variant');
    });

    expect(variant).toBe('icon');
  });
});
