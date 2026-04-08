import { test, expect } from '@playwright/test';

test.describe('PropertyFilter — Integration', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#/light/property-filter/permutations');
    await page.waitForSelector('property-filter-permutations-page');
  });

  test('renders filter input', async ({ page }) => {
    const filter = page.locator('cs-property-filter').first();

    const hasInput = await filter.evaluate((el) => {
      return !!el.shadowRoot?.querySelector('.filter-input');
    });

    expect(hasInput).toBe(true);
  });

  test('renders existing tokens', async ({ page }) => {
    const filter = page.locator('cs-property-filter').first();

    const tokenCount = await filter.evaluate((el) => {
      return el.shadowRoot?.querySelectorAll('.token-box').length;
    });

    expect(tokenCount).toBe(2);
  });

  test('adds token on Enter', async ({ page }) => {
    const filter = page.locator('cs-property-filter').nth(1);

    await filter.evaluate((el) => {
      const input = el.shadowRoot?.querySelector('.filter-input') as HTMLInputElement;
      const nativeInputSetter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')!.set!;
      nativeInputSetter.call(input, 'new-filter');
      input.dispatchEvent(new Event('input', { bubbles: true }));
      input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
    });

    await page.waitForTimeout(100);

    const tokenCount = await filter.evaluate((el) => {
      return el.shadowRoot?.querySelectorAll('.token-box').length;
    });

    expect(tokenCount).toBe(1);
  });

  test('fires change event when token added', async ({ page }) => {
    const filter = page.locator('cs-property-filter').nth(1);

    const changeDetail = await filter.evaluate((el) => {
      return new Promise<{ query: { tokens: { value: string }[] } }>((resolve) => {
        el.addEventListener('change', ((e: Event) => {
          resolve((e as CustomEvent).detail);
        }) as EventListener, { once: true });

        const input = el.shadowRoot?.querySelector('.filter-input') as HTMLInputElement;
        const nativeInputSetter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')!.set!;
        nativeInputSetter.call(input, 'test-value');
        input.dispatchEvent(new Event('input', { bubbles: true }));

        input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
      });
    });

    expect(changeDetail.query.tokens.length).toBe(1);
    expect(changeDetail.query.tokens[0].value).toBe('test-value');
  });

  test('dismisses token on button click', async ({ page }) => {
    const filter = page.locator('cs-property-filter').first();

    const initialCount = await filter.evaluate((el) => {
      return el.shadowRoot?.querySelectorAll('.token-box').length;
    });

    await filter.evaluate((el) => {
      const btn = el.shadowRoot?.querySelector('.dismiss-button') as HTMLElement;
      btn?.click();
    });

    await page.waitForTimeout(100);

    const output = page.locator('.output').first();
    const text = await output.textContent();
    const parsed = JSON.parse(text || '{}');

    expect(parsed.tokens.length).toBe((initialCount || 0) - 1);
  });

  test('disabled state prevents input', async ({ page }) => {
    const filter = page.locator('cs-property-filter[disabled]');

    const isDisabled = await filter.evaluate((el) => {
      const input = el.shadowRoot?.querySelector('.filter-input') as HTMLInputElement;
      return input?.disabled;
    });

    expect(isDisabled).toBe(true);
  });

  test('shows operation labels between tokens', async ({ page }) => {
    const filter = page.locator('cs-property-filter').first();

    const opLabel = await filter.evaluate((el) => {
      return el.shadowRoot?.querySelector('.operation-label')?.textContent?.trim();
    });

    expect(opLabel).toBe('and');
  });
});
