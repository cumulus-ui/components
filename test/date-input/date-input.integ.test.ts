import { test, expect, type Page } from '@playwright/test';

async function loadDemoPage(page: Page): Promise<void> {
  await page.goto('/');
  await page.addScriptTag({
    type: 'module',
    content: `import '/pages/date-input/permutations.ts';`,
  });
  await page.waitForFunction(
    (tag) => customElements.get(tag) !== undefined,
    'date-input-permutations-page',
  );
  await page.evaluate((tag) => {
    document.body.innerHTML = '';
    document.body.appendChild(document.createElement(tag));
  }, 'date-input-permutations-page');
  await page.waitForSelector('date-input-permutations-page');
}

test.describe('DateInput — Integration', () => {
  test.beforeEach(async ({ page }) => {
    await loadDemoPage(page);
  });

  test('typing updates value and fires change event', async ({ page }) => {
    const input = page.locator('cs-date-input[aria-label="Default date input"]').first();

    const value = await input.evaluate((el) => {
      return new Promise<string>((resolve) => {
        el.addEventListener('change', ((e: Event) => {
          resolve((e as CustomEvent).detail.value);
        }) as EventListener, { once: true });

        const native = el.shadowRoot!.querySelector('input')!;
        native.value = '2025-03-20';
        native.dispatchEvent(new Event('input', { bubbles: true }));
      });
    });

    expect(value).toBe('2025-03-20');
  });

  test('disabled input prevents typing', async ({ page }) => {
    const input = page.locator('cs-date-input[disabled]').first();

    const isDisabled = await input.evaluate((el) => {
      const native = el.shadowRoot!.querySelector('input')!;
      return native.disabled;
    });

    expect(isDisabled).toBe(true);
  });

  test('readonly input has readonly attribute', async ({ page }) => {
    const input = page.locator('cs-date-input[read-only]').first();

    const isReadonly = await input.evaluate((el) => {
      const native = el.shadowRoot!.querySelector('input')!;
      return native.readOnly;
    });

    expect(isReadonly).toBe(true);
  });

  test('invalid input has aria-invalid', async ({ page }) => {
    const input = page.locator('cs-date-input[invalid]').first();

    const ariaInvalid = await input.evaluate((el) => {
      const native = el.shadowRoot!.querySelector('input')!;
      return native.getAttribute('aria-invalid');
    });

    expect(ariaInvalid).toBe('true');
  });

  test('focus() moves focus to native input', async ({ page }) => {
    const input = page.locator('cs-date-input[aria-label="Default date input"]').first();

    await input.evaluate((el: HTMLElement & { focus(): void }) => el.focus());

    const isFocused = await input.evaluate((el) => {
      const native = el.shadowRoot!.querySelector('input');
      return el.shadowRoot!.activeElement === native;
    });

    expect(isFocused).toBe(true);
  });

  test('blur event fires', async ({ page }) => {
    const input = page.locator('cs-date-input[aria-label="Default date input"]').first();

    const fired = await input.evaluate((el) => {
      return new Promise<boolean>((resolve) => {
        el.addEventListener('blur', () => resolve(true), { once: true });
        const native = el.shadowRoot!.querySelector('input')!;
        native.focus();
        native.blur();
      });
    });

    expect(fired).toBe(true);
  });

  test('focus event fires', async ({ page }) => {
    const input = page.locator('cs-date-input[aria-label="Default date input"]').first();

    const fired = await input.evaluate((el) => {
      return new Promise<boolean>((resolve) => {
        el.addEventListener('focus', () => resolve(true), { once: true });
        const native = el.shadowRoot!.querySelector('input')!;
        native.focus();
      });
    });

    expect(fired).toBe(true);
  });

  test('placeholder renders correctly', async ({ page }) => {
    const input = page.locator('cs-date-input[aria-label="Default date input"]').first();

    const placeholder = await input.evaluate((el) => {
      const native = el.shadowRoot!.querySelector('input')!;
      return native.placeholder;
    });

    expect(placeholder).toBe('YYYY/MM/DD');
  });
});
