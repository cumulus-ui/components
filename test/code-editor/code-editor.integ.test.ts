import { test, expect } from '@playwright/test';

test.describe('CodeEditor — Integration', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#/light/code-editor/permutations');
    await page.waitForSelector('code-editor-permutations-page');
  });

  test('renders textarea with initial value', async ({ page }) => {
    const editor = page.locator('cs-code-editor').first();

    const value = await editor.evaluate((el) => {
      const textarea = el.shadowRoot?.querySelector('textarea');
      return textarea?.value ?? '';
    });

    expect(value).toContain('fibonacci');
  });

  test('change event fires on input', async ({ page }) => {
    const editor = page.locator('cs-code-editor').first();

    const detail = await editor.evaluate((el) => {
      return new Promise<{ value: string }>((resolve) => {
        el.addEventListener('change', ((e: Event) => {
          resolve((e as CustomEvent).detail);
        }) as EventListener, { once: true });
        const textarea = el.shadowRoot?.querySelector('textarea');
        if (textarea) {
          textarea.value = 'const x = 1;';
          textarea.dispatchEvent(new Event('input', { bubbles: true }));
        }
      });
    });

    expect(detail.value).toBe('const x = 1;');
  });

  test('read-only textarea prevents editing', async ({ page }) => {
    const editor = page.locator('cs-code-editor[read-only]');

    const isReadOnly = await editor.evaluate((el) => {
      const textarea = el.shadowRoot?.querySelector('textarea');
      return textarea?.readOnly ?? false;
    });

    expect(isReadOnly).toBe(true);
  });

  test('loading state shows spinner', async ({ page }) => {
    const editor = page.locator('cs-code-editor[loading]');

    const hasSpinner = await editor.evaluate((el) => {
      return !!el.shadowRoot?.querySelector('cs-spinner');
    });

    expect(hasSpinner).toBe(true);
  });

  test('loading state hides textarea', async ({ page }) => {
    const editor = page.locator('cs-code-editor[loading]');

    const hasTextarea = await editor.evaluate((el) => {
      return !!el.shadowRoot?.querySelector('textarea');
    });

    expect(hasTextarea).toBe(false);
  });

  test('line numbers are rendered', async ({ page }) => {
    const editor = page.locator('cs-code-editor').first();

    const lineCount = await editor.evaluate((el) => {
      const lineNums = el.shadowRoot?.querySelectorAll('.line-number');
      return lineNums?.length ?? 0;
    });

    expect(lineCount).toBeGreaterThan(1);
  });

  test('status bar shows language', async ({ page }) => {
    const editor = page.locator('cs-code-editor').first();

    const language = await editor.evaluate((el) => {
      const langEl = el.shadowRoot?.querySelector('.status-bar__language-mode');
      return langEl?.textContent?.trim() ?? '';
    });

    expect(language).toBe('javascript');
  });

  test('status bar shows cursor position', async ({ page }) => {
    const editor = page.locator('cs-code-editor').first();

    const cursorText = await editor.evaluate((el) => {
      const cursorEl = el.shadowRoot?.querySelector('.status-bar__cursor-position');
      return cursorEl?.textContent?.trim() ?? '';
    });

    expect(cursorText).toContain('Ln');
    expect(cursorText).toContain('Col');
  });

  test('preferences button exists in status bar', async ({ page }) => {
    const editor = page.locator('cs-code-editor').first();

    const hasPrefsBtn = await editor.evaluate((el) => {
      return !!el.shadowRoot?.querySelector('.status-bar__cog-button cs-button');
    });

    expect(hasPrefsBtn).toBe(true);
  });
});
