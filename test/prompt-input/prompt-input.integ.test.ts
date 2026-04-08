import { test, expect } from '@playwright/test';

test.describe('Prompt Input — Integration', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#/light/prompt-input/permutations');
    await page.waitForSelector('prompt-input-permutations-page');
  });

  test('typing fires change event with value', async ({ page }) => {
    const input = page.locator('cs-prompt-input').first();

    const detail = await input.evaluate((el) => {
      return new Promise<{ value: string }>((resolve) => {
        el.addEventListener('change', ((e: Event) => {
          resolve((e as CustomEvent).detail);
        }) as EventListener, { once: true });

        const textarea = el.shadowRoot?.querySelector('textarea') as HTMLTextAreaElement;
        const nativeSetValue = Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype, 'value')!.set!;
        nativeSetValue.call(textarea, 'Hello');
        textarea.dispatchEvent(new Event('input', { bubbles: true }));
      });
    });

    expect(detail.value).toBe('Hello');
  });

  test('action button click fires action event', async ({ page }) => {
    const input = page.locator('cs-prompt-input').nth(1);

    const detail = await input.evaluate((el) => {
      return new Promise<{ value: string }>((resolve) => {
        el.addEventListener('action', ((e: Event) => {
          resolve((e as CustomEvent).detail);
        }) as EventListener, { once: true });

        const btn = el.shadowRoot?.querySelector('cs-button') as HTMLElement;
        btn.click();
      });
    });

    expect(detail.value).toBe('Pre-filled text');
  });

  test('disabled input prevents interaction', async ({ page }) => {
    const input = page.locator('cs-prompt-input[disabled]').first();

    const isDisabled = await input.evaluate((el) => {
      const textarea = el.shadowRoot?.querySelector('textarea');
      return textarea?.hasAttribute('disabled');
    });

    expect(isDisabled).toBe(true);
  });

  test('read-only input has readonly attribute', async ({ page }) => {
    const input = page.locator('cs-prompt-input[read-only]').first();

    const isReadOnly = await input.evaluate((el) => {
      const textarea = el.shadowRoot?.querySelector('textarea');
      return textarea?.hasAttribute('readonly');
    });

    expect(isReadOnly).toBe(true);
  });
});
