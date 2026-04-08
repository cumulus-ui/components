import { test, expect } from '@playwright/test';

test.describe('Toggle — Integration', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#/light/toggle/permutations');
    await page.waitForSelector('toggle-permutations-page');
  });

  test('click toggles checked state', async ({ page }) => {
    const toggle = page.locator('cs-toggle:not([checked]):not([disabled]):not([read-only])').first();

    const checkedAfter = await toggle.evaluate((el) => {
      (el as HTMLElement).click();
      return (el as any).checked;
    });

    expect(checkedAfter).toBe(true);
  });

  test('click fires change event with detail', async ({ page }) => {
    const toggle = page.locator('cs-toggle:not([checked]):not([disabled]):not([read-only])').first();

    const detail = await toggle.evaluate((el) => {
      return new Promise<{ checked: boolean }>((resolve) => {
        el.addEventListener('change', ((e: Event) => {
          resolve((e as CustomEvent).detail);
        }) as EventListener, { once: true });
        (el as HTMLElement).click();
      });
    });

    expect(detail.checked).toBe(true);
  });

  test('disabled toggle prevents interaction', async ({ page }) => {
    const toggle = page.locator('cs-toggle[disabled]').first();

    const result = await toggle.evaluate((el) => {
      const before = (el as any).checked;
      (el as HTMLElement).click();
      const after = (el as any).checked;
      return { before, after };
    });

    expect(result.before).toBe(result.after);
  });

  test('read-only toggle prevents interaction', async ({ page }) => {
    const toggle = page.locator('cs-toggle[read-only]').first();

    const result = await toggle.evaluate((el) => {
      const before = (el as any).checked;
      (el as HTMLElement).click();
      const after = (el as any).checked;
      return { before, after };
    });

    expect(result.before).toBe(result.after);
  });

  test('checked state reflects to attribute', async ({ page }) => {
    const toggle = page.locator('cs-toggle[checked]').first();

    const hasAttr = await toggle.evaluate((el) => {
      return el.hasAttribute('checked');
    });

    expect(hasAttr).toBe(true);
  });

  test('toggle control has correct checked classes', async ({ page }) => {
    const toggle = page.locator('cs-toggle[checked]').first();

    const hasClass = await toggle.evaluate((el) => {
      const control = el.shadowRoot?.querySelector('.toggle-control');
      return control?.classList.contains('toggle-control-checked');
    });

    expect(hasClass).toBe(true);
  });

  test('description is rendered when provided', async ({ page }) => {
    const toggle = page.locator('cs-toggle[description]').first();

    const descText = await toggle.evaluate((el) => {
      const desc = el.shadowRoot?.querySelector('.abstract-switch--description');
      return desc?.textContent?.trim();
    });

    expect(descText).toBeTruthy();
  });
});
