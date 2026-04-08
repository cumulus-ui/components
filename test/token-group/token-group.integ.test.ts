import { test, expect } from '@playwright/test';

test.describe('Token Group — Integration', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#/light/token-group/permutations');
    await page.waitForSelector('token-group-permutations-page');
  });

  test('renders items as token elements', async ({ page }) => {
    const group = page.locator('cs-token-group').first();

    const tokenCount = await group.evaluate((el) => {
      return el.shadowRoot?.querySelectorAll('.token').length ?? 0;
    });

    expect(tokenCount).toBe(3);
  });

  test('dismiss fires event with correct itemIndex', async ({ page }) => {
    const group = page.locator('cs-token-group').first();

    const detail = await group.evaluate((el) => {
      return new Promise<{ itemIndex: number }>((resolve) => {
        el.addEventListener('dismiss', ((e: Event) => {
          resolve((e as CustomEvent).detail);
        }) as EventListener, { once: true });
        const dismissBtns = el.shadowRoot?.querySelectorAll('.dismiss-button');
        (dismissBtns?.[1] as HTMLElement)?.click();
      });
    });

    expect(detail.itemIndex).toBe(1);
  });

  test('disabled item does not show dismiss button', async ({ page }) => {
    const group = page.locator('cs-token-group').last();

    const disabledHasDismiss = await group.evaluate((el) => {
      const tokens = el.shadowRoot?.querySelectorAll('.token');
      if (!tokens || tokens.length < 2) return null;
      const disabledToken = tokens[1];
      return disabledToken.querySelector('.dismiss-button') !== null;
    });

    expect(disabledHasDismiss).toBe(false);
  });

  test('limit truncates visible items', async ({ page }) => {
    const group = page.locator('cs-token-group[disable-outer-padding]');

    const visibleCount = await group.evaluate((el) => {
      return el.shadowRoot?.querySelectorAll('.token').length ?? 0;
    });

    expect(visibleCount).toBe(2);
  });

  test('limit shows toggle button', async ({ page }) => {
    const group = page.locator('cs-token-group[disable-outer-padding]');

    const hasToggle = await group.evaluate((el) => {
      return el.shadowRoot?.querySelector('.toggle') !== null;
    });

    expect(hasToggle).toBe(true);
  });

  test('toggle expands to show all items', async ({ page }) => {
    const group = page.locator('cs-token-group[disable-outer-padding]');

    const expandedCount = await group.evaluate((el) => {
      const toggle = el.shadowRoot?.querySelector('.toggle') as HTMLElement;
      toggle?.click();
      return new Promise<number>((resolve) => {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            resolve(el.shadowRoot?.querySelectorAll('.token').length ?? 0);
          });
        });
      });
    });

    expect(expandedCount).toBe(5);
  });

  test('read-only group has no dismiss buttons', async ({ page }) => {
    const group = page.locator('cs-token-group[read-only]');

    const dismissCount = await group.evaluate((el) => {
      return el.shadowRoot?.querySelectorAll('.dismiss-button').length ?? 0;
    });

    expect(dismissCount).toBe(0);
  });

  test('vertical alignment applies correct class', async ({ page }) => {
    const group = page.locator('cs-token-group[alignment="vertical"]');

    const hasVertical = await group.evaluate((el) => {
      return el.shadowRoot?.querySelector('.list-vertical') !== null;
    });

    expect(hasVertical).toBe(true);
  });

  test('has-items class applied when items present', async ({ page }) => {
    const group = page.locator('cs-token-group').first();

    const hasItemsClass = await group.evaluate((el) => {
      return el.shadowRoot?.querySelector('.root')?.classList.contains('has-items') ?? false;
    });

    expect(hasItemsClass).toBe(true);
  });
});
