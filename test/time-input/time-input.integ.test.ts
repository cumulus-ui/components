import { test, expect, type Page } from '@playwright/test';

async function loadDemoPage(page: Page): Promise<void> {
  await page.goto('/');
  await page.addScriptTag({
    type: 'module',
    content: `import '/pages/time-input/permutations.ts';`,
  });
  await page.waitForFunction(
    (tag) => customElements.get(tag) !== undefined,
    'time-input-permutations-page',
  );
  await page.evaluate((tag) => {
    document.body.innerHTML = '';
    document.body.appendChild(document.createElement(tag));
  }, 'time-input-permutations-page');
  await page.waitForSelector('time-input-permutations-page');
}

test.describe('TimeInput — Integration', () => {
  test.beforeEach(async ({ page }) => {
    await loadDemoPage(page);
  });

  test('typing updates value and fires change event', async ({ page }) => {
    const input = page.locator('cs-time-input[aria-label="Time input hh:mm"]').first();

    const value = await input.evaluate((el) => {
      return new Promise<string>((resolve) => {
        el.addEventListener('change', ((e: Event) => {
          resolve((e as CustomEvent).detail.value);
        }) as EventListener, { once: true });

        const native = el.shadowRoot!.querySelector('input')!;
        native.value = '14:30';
        native.dispatchEvent(new Event('input', { bubbles: true }));
      });
    });

    expect(value).toBe('14:30');
  });

  test('format is used as default placeholder', async ({ page }) => {
    const input = page.locator('cs-time-input[format="hh:mm:ss"]').first();

    const placeholder = await input.evaluate((el) => {
      const native = el.shadowRoot!.querySelector('input')!;
      return native.placeholder;
    });

    expect(placeholder).toBe('hh:mm:ss');
  });

  test('disabled input prevents typing', async ({ page }) => {
    const input = page.locator('cs-time-input[disabled]').first();

    const isDisabled = await input.evaluate((el) => {
      const native = el.shadowRoot!.querySelector('input')!;
      return native.disabled;
    });

    expect(isDisabled).toBe(true);
  });

  test('readonly input has readonly attribute', async ({ page }) => {
    const input = page.locator('cs-time-input[read-only]').first();

    const isReadonly = await input.evaluate((el) => {
      const native = el.shadowRoot!.querySelector('input')!;
      return native.readOnly;
    });

    expect(isReadonly).toBe(true);
  });

  test('invalid input has aria-invalid', async ({ page }) => {
    const input = page.locator('cs-time-input[invalid]').first();

    const ariaInvalid = await input.evaluate((el) => {
      const native = el.shadowRoot!.querySelector('input')!;
      return native.getAttribute('aria-invalid');
    });

    expect(ariaInvalid).toBe('true');
  });

  test('focus() moves focus to native input', async ({ page }) => {
    const input = page.locator('cs-time-input[aria-label="Time input hh:mm"]').first();

    await input.evaluate((el: HTMLElement & { focus(): void }) => el.focus());

    const isFocused = await input.evaluate((el) => {
      const native = el.shadowRoot!.querySelector('input');
      return el.shadowRoot!.activeElement === native;
    });

    expect(isFocused).toBe(true);
  });
});
