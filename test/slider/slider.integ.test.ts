import { test, expect } from '@playwright/test';

test.describe('Slider — Integration', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#/light/slider/permutations');
    await page.waitForSelector('slider-permutations-page');
  });

  test('renders with correct min/max attributes', async ({ page }) => {
    const slider = page.locator('cs-slider').first();

    const attrs = await slider.evaluate((el) => {
      const input = el.shadowRoot?.querySelector('input[type="range"]');
      return {
        min: input?.getAttribute('min'),
        max: input?.getAttribute('max'),
        step: input?.getAttribute('step'),
      };
    });

    expect(attrs.min).toBe('0');
    expect(attrs.max).toBe('100');
    expect(attrs.step).toBe('1');
  });

  test('input event fires change with new value', async ({ page }) => {
    const slider = page.locator('cs-slider').first();

    const detail = await slider.evaluate((el) => {
      return new Promise<{ value: number }>((resolve) => {
        el.addEventListener('change', ((e: Event) => {
          resolve((e as CustomEvent).detail);
        }) as EventListener, { once: true });

        const input = el.shadowRoot?.querySelector('input[type="range"]') as HTMLInputElement;
        const nativeSetValue = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')!.set!;
        nativeSetValue.call(input, '75');
        input.dispatchEvent(new Event('input', { bubbles: true }));
      });
    });

    expect(detail.value).toBe(75);
  });

  test('disabled slider has disabled attribute on input', async ({ page }) => {
    const slider = page.locator('cs-slider[disabled]').first();

    const isDisabled = await slider.evaluate((el) => {
      const input = el.shadowRoot?.querySelector('input[type="range"]');
      return input?.hasAttribute('disabled');
    });

    expect(isDisabled).toBe(true);
  });

  test('aria attributes are set correctly', async ({ page }) => {
    const slider = page.locator('cs-slider').first();

    const attrs = await slider.evaluate((el) => {
      const input = el.shadowRoot?.querySelector('input[type="range"]');
      return {
        ariaLabel: input?.getAttribute('aria-label'),
        ariaValuemin: input?.getAttribute('aria-valuemin'),
        ariaValuemax: input?.getAttribute('aria-valuemax'),
      };
    });

    expect(attrs.ariaLabel).toBe('Volume');
    expect(attrs.ariaValuemin).toBe('0');
    expect(attrs.ariaValuemax).toBe('100');
  });
});
