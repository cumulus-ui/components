import { test, expect, type Page } from '@playwright/test';

async function loadDemoPage(page: Page): Promise<void> {
  await page.goto('/');
  await page.addScriptTag({
    type: 'module',
    content: `import '/pages/textarea/permutations.ts';`,
  });
  await page.waitForFunction(
    (tag) => customElements.get(tag) !== undefined,
    'textarea-permutations-page',
  );
  await page.evaluate((tag) => {
    document.body.innerHTML = '';
    document.body.appendChild(document.createElement(tag));
  }, 'textarea-permutations-page');
  await page.waitForSelector('textarea-permutations-page');
}

test.describe('Textarea — Integration', () => {
  test.beforeEach(async ({ page }) => {
    await loadDemoPage(page);
  });

  test('typing updates value and fires change event', async ({ page }) => {
    const textarea = page.locator('cs-textarea[aria-label="Default textarea"]').first();

    const value = await textarea.evaluate((el) => {
      return new Promise<string>((resolve) => {
        el.addEventListener('change', ((e: Event) => {
          resolve((e as CustomEvent).detail.value);
        }) as EventListener, { once: true });

        const native = el.shadowRoot!.querySelector('textarea')!;
        native.value = 'hello';
        native.dispatchEvent(new Event('input', { bubbles: true }));
      });
    });

    expect(value).toBe('hello');
  });

  test('disabled textarea prevents typing', async ({ page }) => {
    const textarea = page.locator('cs-textarea[disabled]').first();

    const isDisabled = await textarea.evaluate((el) => {
      const native = el.shadowRoot!.querySelector('textarea')!;
      return native.disabled;
    });

    expect(isDisabled).toBe(true);
  });

  test('blur event fires', async ({ page }) => {
    const textarea = page.locator('cs-textarea[aria-label="Default textarea"]').first();

    const fired = await textarea.evaluate((el) => {
      return new Promise<boolean>((resolve) => {
        el.addEventListener('blur', () => resolve(true), { once: true });

        const native = el.shadowRoot!.querySelector('textarea')!;
        native.focus();
        native.blur();
      });
    });

    expect(fired).toBe(true);
  });

  test('focus event fires', async ({ page }) => {
    const textarea = page.locator('cs-textarea[aria-label="Default textarea"]').first();

    const fired = await textarea.evaluate((el) => {
      return new Promise<boolean>((resolve) => {
        el.addEventListener('focus', () => resolve(true), { once: true });

        const native = el.shadowRoot!.querySelector('textarea')!;
        native.focus();
      });
    });

    expect(fired).toBe(true);
  });

  test('focus() moves focus to native textarea', async ({ page }) => {
    const textarea = page.locator('cs-textarea[aria-label="Default textarea"]').first();

    await textarea.evaluate((el: HTMLElement & { focus(): void }) => el.focus());

    const isFocused = await textarea.evaluate((el) => {
      const native = el.shadowRoot!.querySelector('textarea');
      return el.shadowRoot!.activeElement === native;
    });

    expect(isFocused).toBe(true);
  });

  test('readonly textarea has readonly attribute', async ({ page }) => {
    const textarea = page.locator('cs-textarea[read-only]').first();

    const isReadonly = await textarea.evaluate((el) => {
      const native = el.shadowRoot!.querySelector('textarea')!;
      return native.readOnly;
    });

    expect(isReadonly).toBe(true);
  });

  test('invalid textarea has aria-invalid', async ({ page }) => {
    const textarea = page.locator('cs-textarea[invalid]').first();

    const ariaInvalid = await textarea.evaluate((el) => {
      const native = el.shadowRoot!.querySelector('textarea')!;
      return native.getAttribute('aria-invalid');
    });

    expect(ariaInvalid).toBe('true');
  });

  test('rows attribute is applied', async ({ page }) => {
    const textarea = page.locator('cs-textarea[rows="6"]').first();

    const rows = await textarea.evaluate((el) => {
      const native = el.shadowRoot!.querySelector('textarea')!;
      return native.rows;
    });

    expect(rows).toBe(6);
  });
});
