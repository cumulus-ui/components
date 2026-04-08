import { test, expect } from '@playwright/test';

test.describe('Toggle Button — Integration', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#/light/toggle-button/permutations');
    await page.waitForSelector('toggle-button-permutations-page');
  });

  test('click toggles pressed state and fires change event', async ({ page }) => {
    const btn = page.locator('cs-toggle-button[variant="normal"]').first();

    const detail = await btn.evaluate((el) => {
      return new Promise<{ pressed: boolean }>((resolve) => {
        el.addEventListener('change', ((e: Event) => {
          resolve((e as CustomEvent).detail);
        }) as EventListener, { once: true });
        (el as HTMLElement).click();
      });
    });

    expect(detail.pressed).toBe(true);
  });

  test('pressing again untoggles', async ({ page }) => {
    const btn = page.locator('cs-toggle-button[variant="normal"]').nth(1);

    const detail = await btn.evaluate((el) => {
      return new Promise<{ pressed: boolean }>((resolve) => {
        el.addEventListener('change', ((e: Event) => {
          resolve((e as CustomEvent).detail);
        }) as EventListener, { once: true });
        (el as HTMLElement).click();
      });
    });

    expect(detail.pressed).toBe(false);
  });

  test('disabled button prevents toggle', async ({ page }) => {
    const btn = page.locator('cs-toggle-button[disabled]').first();

    const fired = await btn.evaluate((el) => {
      return new Promise<boolean>((resolve) => {
        let changed = false;
        el.addEventListener('change', () => { changed = true; }, { once: true });
        (el as HTMLElement).click();
        setTimeout(() => resolve(changed), 50);
      });
    });

    expect(fired).toBe(false);
  });

  test('aria-pressed reflects pressed state', async ({ page }) => {
    const btn = page.locator('cs-toggle-button[variant="normal"]').first();

    const ariaPressed = await btn.evaluate((el) => {
      const inner = el.shadowRoot?.querySelector('button');
      return inner?.getAttribute('aria-pressed');
    });

    expect(ariaPressed).toBe('false');
  });

  test('icon variant renders with aria-label', async ({ page }) => {
    const btn = page.locator('cs-toggle-button[variant="icon"]').first();

    const ariaLabel = await btn.evaluate((el) => {
      const inner = el.shadowRoot?.querySelector('button');
      return inner?.getAttribute('aria-label');
    });

    expect(ariaLabel).toBe('Like');
  });
});
