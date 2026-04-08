import { test, expect } from '@playwright/test';

test.describe('File Token Group — Integration', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#/light/file-token-group/permutations');
    await page.waitForSelector('file-token-group-permutations-page');
  });

  test('renders file tokens with filenames', async ({ page }) => {
    const group = page.locator('cs-file-token-group').first();

    const tokenCount = await group.evaluate((el) => {
      return el.shadowRoot?.querySelectorAll('li').length ?? 0;
    });

    expect(tokenCount).toBe(3);
  });

  test('shows file size when showFileSize is set', async ({ page }) => {
    const group = page.locator('cs-file-token-group[show-file-size]').first();

    const hasSizeText = await group.evaluate((el) => {
      const sizeEl = el.shadowRoot?.querySelector('.file-option-size');
      return sizeEl !== null && (sizeEl?.textContent?.trim().length ?? 0) > 0;
    });

    expect(hasSizeText).toBe(true);
  });

  test('dismiss fires event with correct fileIndex', async ({ page }) => {
    const group = page.locator('cs-file-token-group').first();

    const detail = await group.evaluate((el) => {
      return new Promise<{ fileIndex: number }>((resolve) => {
        el.addEventListener('dismiss', ((e: Event) => {
          resolve((e as CustomEvent).detail);
        }) as EventListener, { once: true });
        const dismissBtns = el.shadowRoot?.querySelectorAll('.dismiss-button');
        (dismissBtns?.[1] as HTMLElement)?.click();
      });
    });

    expect(detail.fileIndex).toBe(1);
  });

  test('error state shows error text', async ({ page }) => {
    const group = page.locator('cs-file-token-group[alignment="vertical"]').nth(1);

    const hasErrorText = await group.evaluate((el) => {
      return el.shadowRoot?.querySelector('.file-error-text') !== null;
    });

    expect(hasErrorText).toBe(true);
  });

  test('warning state shows warning text', async ({ page }) => {
    const group = page.locator('cs-file-token-group[alignment="vertical"]').nth(1);

    const hasWarningText = await group.evaluate((el) => {
      return el.shadowRoot?.querySelector('.file-warning-text') !== null;
    });

    expect(hasWarningText).toBe(true);
  });

  test('read-only group has no dismiss buttons', async ({ page }) => {
    const group = page.locator('cs-file-token-group[read-only]');

    const dismissCount = await group.evaluate((el) => {
      return el.shadowRoot?.querySelectorAll('.dismiss-button').length ?? 0;
    });

    expect(dismissCount).toBe(0);
  });

  test('loading token shows spinner', async ({ page }) => {
    const groups = page.locator('cs-file-token-group');
    const loadingGroup = groups.nth(3);

    const hasSpinner = await loadingGroup.evaluate((el) => {
      return el.shadowRoot?.querySelector('.file-loading-overlay') !== null;
    });

    expect(hasSpinner).toBe(true);
  });

  test('limit truncates visible items', async ({ page }) => {
    const group = page.locator('cs-file-token-group').last();

    const visibleCount = await group.evaluate((el) => {
      return el.shadowRoot?.querySelectorAll('li').length ?? 0;
    });

    expect(visibleCount).toBe(2);
  });

  test('toggle expands to show all items', async ({ page }) => {
    const group = page.locator('cs-file-token-group').last();

    const expandedCount = await group.evaluate((el) => {
      const toggle = el.shadowRoot?.querySelector('.toggle') as HTMLElement;
      toggle?.click();
      return new Promise<number>((resolve) => {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            resolve(el.shadowRoot?.querySelectorAll('li').length ?? 0);
          });
        });
      });
    });

    expect(expandedCount).toBe(5);
  });

  test('vertical alignment applies correct class', async ({ page }) => {
    const group = page.locator('cs-file-token-group[alignment="vertical"]').first();

    const hasVertical = await group.evaluate((el) => {
      return el.shadowRoot?.querySelector('.list-vertical') !== null;
    });

    expect(hasVertical).toBe(true);
  });
});
