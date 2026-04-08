import { test, expect } from '@playwright/test';

test.describe('S3ResourceSelector — Integration', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#/light/s3-resource-selector/permutations');
    await page.waitForSelector('s3-resource-selector-permutations-page');
  });

  test('renders URI input field', async ({ page }) => {
    const selector = page.locator('cs-s3-resource-selector').first();

    const hasInput = await selector.evaluate((el) => {
      const input = el.shadowRoot?.querySelector('cs-input');
      return input !== null;
    });

    expect(hasInput).toBe(true);
  });

  test('renders Browse S3 button', async ({ page }) => {
    const selector = page.locator('cs-s3-resource-selector').first();

    const hasButton = await selector.evaluate((el) => {
      const buttons = el.shadowRoot?.querySelectorAll('cs-button');
      return Array.from(buttons ?? []).some(
        btn => btn.textContent?.trim() === 'Browse S3'
      );
    });

    expect(hasButton).toBe(true);
  });

  test('browse button opens modal', async ({ page }) => {
    const selector = page.locator('cs-s3-resource-selector').first();

    const modalVisible = await selector.evaluate(async (el) => {
      const browseBtn = Array.from(el.shadowRoot?.querySelectorAll('cs-button') ?? [])
        .find(btn => btn.textContent?.trim() === 'Browse S3') as HTMLElement;
      browseBtn?.click();

      await new Promise(r => setTimeout(r, 100));

      const modal = el.shadowRoot?.querySelector('cs-modal');
      return modal?.getAttribute('visible') !== null || modal?.hasAttribute('visible') || (modal as any)?.visible === true;
    });

    expect(modalVisible).toBe(true);
  });

  test('modal closes on cancel click', async ({ page }) => {
    const selector = page.locator('cs-s3-resource-selector').first();

    const modalClosed = await selector.evaluate(async (el) => {
      const browseBtn = Array.from(el.shadowRoot?.querySelectorAll('cs-button') ?? [])
        .find(btn => btn.textContent?.trim() === 'Browse S3') as HTMLElement;
      browseBtn?.click();

      await new Promise(r => setTimeout(r, 100));

      const modal = el.shadowRoot?.querySelector('cs-modal');
      const cancelBtn = modal?.querySelector('cs-button[variant="link"]') as HTMLElement;
      cancelBtn?.click();

      await new Promise(r => setTimeout(r, 100));

      return (modal as any)?.visible === false;
    });

    expect(modalClosed).toBe(true);
  });

  test('URI change fires change event', async ({ page }) => {
    const selector = page.locator('cs-s3-resource-selector').first();

    const uri = await selector.evaluate(async (el) => {
      return new Promise<string>((resolve) => {
        el.addEventListener('change', ((e: Event) => {
          resolve((e as CustomEvent).detail.resource.uri);
        }) as EventListener, { once: true });

        const input = el.shadowRoot?.querySelector('cs-input') as any;
        if (input) {
          input.value = 's3://test-bucket/file.txt';
          input.dispatchEvent(new CustomEvent('change', {
            detail: { value: 's3://test-bucket/file.txt' },
            bubbles: true,
            composed: true,
          }));
        }
      });
    });

    expect(uri).toBe('s3://test-bucket/file.txt');
  });

  test('pre-filled URI is displayed in input', async ({ page }) => {
    const selectors = page.locator('cs-s3-resource-selector');
    const prefilled = selectors.nth(1);

    const value = await prefilled.evaluate((el) => {
      const input = el.shadowRoot?.querySelector('cs-input') as any;
      return input?.value;
    });

    expect(value).toBe('s3://my-bucket-1/readme.txt');
  });

  test('invalid state is passed to input', async ({ page }) => {
    const selectors = page.locator('cs-s3-resource-selector');
    const invalidSelector = selectors.nth(2);

    const isInvalid = await invalidSelector.evaluate((el) => {
      const input = el.shadowRoot?.querySelector('cs-input') as any;
      return input?.invalid === true;
    });

    expect(isInvalid).toBe(true);
  });

  test('alert slot renders content', async ({ page }) => {
    const selectors = page.locator('cs-s3-resource-selector');
    const withAlert = selectors.nth(3);

    const hasAlertSlot = await withAlert.evaluate((el) => {
      const slot = el.shadowRoot?.querySelector('slot[name="alert"]');
      return slot !== null;
    });

    expect(hasAlertSlot).toBe(true);
  });
});
