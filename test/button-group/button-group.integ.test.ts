import { test, expect } from '@playwright/test';

test.describe('ButtonGroup — Integration', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#/light/button-group/permutations');
    await page.waitForSelector('button-group-permutations-page');
  });

  test('renders toolbar with icon buttons', async ({ page }) => {
    const group = page.locator('cs-button-group').first();

    const role = await group.evaluate((el) => {
      return el.shadowRoot?.querySelector('.root')?.getAttribute('role');
    });
    expect(role).toBe('toolbar');
  });

  test('renders correct number of buttons', async ({ page }) => {
    const group = page.locator('cs-button-group').first();

    const count = await group.evaluate((el) => {
      return el.shadowRoot?.querySelectorAll('cs-button').length;
    });
    expect(count).toBe(4);
  });

  test('fires itemClick on button click', async ({ page }) => {
    const group = page.locator('cs-button-group').first();

    const detail = await group.evaluate((el) => {
      return new Promise<{ id: string }>((resolve) => {
        el.addEventListener('itemClick', ((e: Event) => {
          resolve((e as CustomEvent).detail);
        }) as EventListener, { once: true });

        const btn = el.shadowRoot?.querySelector('cs-button[data-item-id="copy"]') as HTMLElement;
        btn?.click();
      });
    });

    expect(detail.id).toBe('copy');
  });

  test('fires itemClick with pressed for toggle button', async ({ page }) => {
    const groups = page.locator('cs-button-group');
    const toggleGroup = groups.nth(1);

    const detail = await toggleGroup.evaluate((el) => {
      return new Promise<{ id: string; pressed: boolean }>((resolve) => {
        el.addEventListener('itemClick', ((e: Event) => {
          resolve((e as CustomEvent).detail);
        }) as EventListener, { once: true });

        const btn = el.shadowRoot?.querySelector('cs-toggle-button[data-item-id="like"]') as HTMLElement;
        btn?.click();
      });
    });

    expect(detail.id).toBe('like');
    expect(detail.pressed).toBe(true);
  });

  test('disabled button does not fire event', async ({ page }) => {
    const group = page.locator('cs-button-group').first();

    const fired = await group.evaluate((el) => {
      return new Promise<boolean>((resolve) => {
        let clicked = false;
        el.addEventListener('itemClick', () => { clicked = true; }, { once: true });
        const btn = el.shadowRoot?.querySelector('cs-button[data-item-id="disabled-btn"]') as HTMLElement;
        btn?.click();
        setTimeout(() => resolve(clicked), 100);
      });
    });

    expect(fired).toBe(false);
  });

  test('renders group dividers between groups', async ({ page }) => {
    const groups = page.locator('cs-button-group');
    const groupedGroup = groups.nth(2);

    const dividerCount = await groupedGroup.evaluate((el) => {
      return el.shadowRoot?.querySelectorAll('[role="separator"]')?.length;
    });
    expect(dividerCount).toBe(1);
  });

  test('has aria-label on toolbar', async ({ page }) => {
    const group = page.locator('cs-button-group').first();

    const label = await group.evaluate((el) => {
      return el.shadowRoot?.querySelector('[role="toolbar"]')?.getAttribute('aria-label');
    });
    expect(label).toBe('Actions');
  });
});
