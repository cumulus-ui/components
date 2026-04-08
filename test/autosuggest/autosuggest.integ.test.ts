import { test, expect } from '@playwright/test';

test.describe('Autosuggest — Integration', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#/light/autosuggest/permutations');
    await page.waitForSelector('autosuggest-permutations-page');
  });

  test('typing filters suggestions and shows dropdown', async ({ page }) => {
    const autosuggest = page.locator('cs-autosuggest[aria-label="Programming language"]');
    const input = autosuggest.locator('input');

    await input.focus();
    await input.fill('Type');

    const dropdown = autosuggest.locator('.dropdown');
    await expect(dropdown).toBeAttached();

    const options = autosuggest.locator('.option');
    await expect(options).toHaveCount(1);
    await expect(options.first()).toContainText('TypeScript');
  });

  test('selecting a suggestion updates the value', async ({ page }) => {
    const autosuggest = page.locator('cs-autosuggest[aria-label="Programming language"]');
    const input = autosuggest.locator('input');

    await input.focus();
    await input.fill('Py');

    const option = autosuggest.locator('.option').first();
    await option.click();

    const value = await autosuggest.evaluate((el: any) => el.value);
    expect(value).toBe('python');
  });

  test('fires select event when suggestion is chosen', async ({ page }) => {
    const autosuggest = page.locator('cs-autosuggest[aria-label="Programming language"]');
    const input = autosuggest.locator('input');

    await input.focus();

    const detail = await autosuggest.evaluate((el) => {
      return new Promise<{ value: string }>((resolve) => {
        el.addEventListener('select', ((e: Event) => {
          resolve((e as CustomEvent).detail);
        }) as EventListener, { once: true });

        const native = el.shadowRoot!.querySelector('input')!;
        native.value = 'Ru';
        native.dispatchEvent(new Event('input', { bubbles: true }));

        requestAnimationFrame(() => {
          const opts = el.shadowRoot!.querySelectorAll('.option');
          if (opts.length > 0) {
            (opts[0] as HTMLElement).click();
          }
        });
      });
    });

    expect(detail.value).toBe('rust');
  });

  test('ArrowDown navigates suggestions', async ({ page }) => {
    const autosuggest = page.locator('cs-autosuggest[aria-label="Programming language"]');
    const input = autosuggest.locator('input');

    await input.focus();
    await page.keyboard.press('ArrowDown');

    const highlighted = autosuggest.locator('.option-highlighted');
    await expect(highlighted).toBeAttached();
  });

  test('Enter selects highlighted suggestion', async ({ page }) => {
    const autosuggest = page.locator('cs-autosuggest[aria-label="Programming language"]');
    const input = autosuggest.locator('input');

    await input.focus();
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');

    const value = await autosuggest.evaluate((el: any) => el.value);
    expect(value).toBe('typescript');

    const dropdown = autosuggest.locator('.dropdown');
    await expect(dropdown).not.toBeAttached();
  });

  test('Escape closes the dropdown', async ({ page }) => {
    const autosuggest = page.locator('cs-autosuggest[aria-label="Programming language"]');
    const input = autosuggest.locator('input');

    await input.focus();
    await expect(autosuggest.locator('.dropdown')).toBeAttached();

    await page.keyboard.press('Escape');
    await expect(autosuggest.locator('.dropdown')).not.toBeAttached();
  });

  test('disabled autosuggest prevents interaction', async ({ page }) => {
    const autosuggest = page.locator('cs-autosuggest[disabled]').first();
    const input = autosuggest.locator('input');

    const isDisabled = await input.evaluate((el: HTMLInputElement) => el.disabled);
    expect(isDisabled).toBe(true);
  });

  test('readonly autosuggest does not show dropdown', async ({ page }) => {
    const autosuggest = page.locator('cs-autosuggest[read-only]').first();
    const input = autosuggest.locator('input');

    await input.focus();

    const dropdown = autosuggest.locator('.dropdown');
    await expect(dropdown).not.toBeAttached();
  });

  test('input has combobox role', async ({ page }) => {
    const autosuggest = page.locator('cs-autosuggest[aria-label="Programming language"]');
    const input = autosuggest.locator('input[role="combobox"]');
    await expect(input).toBeAttached();
  });

  test('dropdown has listbox role', async ({ page }) => {
    const autosuggest = page.locator('cs-autosuggest[aria-label="Programming language"]');
    const input = autosuggest.locator('input');

    await input.focus();

    const listbox = autosuggest.locator('[role="listbox"]');
    await expect(listbox).toBeAttached();
  });
});
