import { test, expect } from '@playwright/test';

test.describe('ProgressBar — Integration', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#/light/progress-bar/permutations');
    await page.waitForSelector('progress-bar-permutations-page');
  });

  test('renders progress bar with correct value', async ({ page }) => {
    const bar = page.locator('cs-progress-bar').first();

    const value = await bar.evaluate((el) => {
      const progress = el.shadowRoot?.querySelector('progress');
      return progress?.value;
    });

    expect(value).toBe(42);
  });

  test('displays percentage text', async ({ page }) => {
    const bar = page.locator('cs-progress-bar').first();

    const text = await bar.evaluate((el) => {
      return el.shadowRoot?.querySelector('.percentage-container')?.textContent?.trim();
    });

    expect(text).toBe('42%');
  });

  test('clamps value between 0 and 100', async ({ page }) => {
    const bar = page.locator('cs-progress-bar').first();

    const clamped = await bar.evaluate((el: any) => {
      el.value = 150;
      return el._clampedValue;
    });

    expect(clamped).toBe(100);
  });

  test('renders success state with status indicator', async ({ page }) => {
    const bar = page.locator('cs-progress-bar[status="success"]').first();

    const hasIndicator = await bar.evaluate((el) => {
      return !!el.shadowRoot?.querySelector('cs-status-indicator');
    });

    expect(hasIndicator).toBe(true);
  });

  test('renders error state with status indicator', async ({ page }) => {
    const bar = page.locator('cs-progress-bar[status="error"]').first();

    const hasIndicator = await bar.evaluate((el) => {
      return !!el.shadowRoot?.querySelector('cs-status-indicator');
    });

    expect(hasIndicator).toBe(true);
  });

  test('fires resultButtonClick event', async ({ page }) => {
    const bar = page.locator('cs-progress-bar[status="success"]').first();

    const fired = await bar.evaluate((el) => {
      return new Promise<boolean>((resolve) => {
        el.addEventListener('resultButtonClick', () => resolve(true), { once: true });
        const btn = el.shadowRoot?.querySelector('.result-button-trigger') as HTMLElement;
        btn?.click();
        setTimeout(() => resolve(false), 100);
      });
    });

    expect(fired).toBe(true);
  });

  test('label slot renders content', async ({ page }) => {
    const bar = page.locator('cs-progress-bar').first();

    const labelText = await bar.evaluate((el) => {
      const slot = el.shadowRoot?.querySelector('slot[name="label"]') as HTMLSlotElement;
      const assigned = slot?.assignedElements();
      return assigned?.[0]?.textContent?.trim();
    });

    expect(labelText).toBe('Uploading files');
  });
});
