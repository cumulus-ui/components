import { test, expect, type Page } from '@playwright/test';

async function loadDemoPage(page: Page): Promise<void> {
  await page.goto('/');
  await page.addScriptTag({
    type: 'module',
    content: `import '/pages/input/permutations.ts';`,
  });
  await page.waitForFunction(
    (tag) => customElements.get(tag) !== undefined,
    'input-permutations-page',
  );
  await page.evaluate((tag) => {
    document.body.innerHTML = '';
    document.body.appendChild(document.createElement(tag));
  }, 'input-permutations-page');
  await page.waitForSelector('input-permutations-page');
}

test.describe('Input — Integration', () => {
  test.beforeEach(async ({ page }) => {
    await loadDemoPage(page);
  });

  test('typing updates value and fires change event', async ({ page }) => {
    const input = page.locator('cs-input[aria-label="Default input"]').first();

    const value = await input.evaluate((el) => {
      return new Promise<string>((resolve) => {
        el.addEventListener('change', ((e: Event) => {
          resolve((e as CustomEvent).detail.value);
        }) as EventListener, { once: true });

        const native = el.shadowRoot!.querySelector('input')!;
        native.value = 'test';
        native.dispatchEvent(new Event('input', { bubbles: true }));
      });
    });

    expect(value).toBe('test');
  });

  test('disabled input prevents typing', async ({ page }) => {
    const input = page.locator('cs-input[disabled]').first();

    const isDisabled = await input.evaluate((el) => {
      const native = el.shadowRoot!.querySelector('input')!;
      return native.disabled;
    });

    expect(isDisabled).toBe(true);
  });

  test('blur event fires', async ({ page }) => {
    const input = page.locator('cs-input[aria-label="Default input"]').first();

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
    const input = page.locator('cs-input[aria-label="Default input"]').first();

    const fired = await input.evaluate((el) => {
      return new Promise<boolean>((resolve) => {
        el.addEventListener('focus', () => resolve(true), { once: true });

        const native = el.shadowRoot!.querySelector('input')!;
        native.focus();
      });
    });

    expect(fired).toBe(true);
  });

  test('focus() moves focus to native input', async ({ page }) => {
    const input = page.locator('cs-input[aria-label="Default input"]').first();

    await input.evaluate((el: HTMLElement & { focus(): void }) => el.focus());

    const isFocused = await input.evaluate((el) => {
      const native = el.shadowRoot!.querySelector('input');
      return el.shadowRoot!.activeElement === native;
    });

    expect(isFocused).toBe(true);
  });

  test('clear button clears value and fires change', async ({ page }) => {
    const input = page.locator('cs-input[clear-aria-label="Clear input"]').first();

    const detail = await input.evaluate((el) => {
      return new Promise<{ value: string }>((resolve) => {
        el.addEventListener('change', ((e: Event) => {
          resolve((e as CustomEvent).detail);
        }) as EventListener, { once: true });

        const clearBtn = el.shadowRoot!.querySelector('button[aria-label="Clear input"]') as HTMLButtonElement;
        clearBtn.click();
      });
    });

    expect(detail.value).toBe('');
  });

  test('readonly input has readonly attribute', async ({ page }) => {
    const input = page.locator('cs-input[read-only]').first();

    const isReadonly = await input.evaluate((el) => {
      const native = el.shadowRoot!.querySelector('input')!;
      return native.readOnly;
    });

    expect(isReadonly).toBe(true);
  });

  test('invalid input has aria-invalid', async ({ page }) => {
    const input = page.locator('cs-input[invalid]').first();

    const ariaInvalid = await input.evaluate((el) => {
      const native = el.shadowRoot!.querySelector('input')!;
      return native.getAttribute('aria-invalid');
    });

    expect(ariaInvalid).toBe('true');
  });
});
