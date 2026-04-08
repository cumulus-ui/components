import { test, expect } from '@playwright/test';

test.describe('ContentLayout — Integration', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/pages/content-layout/permutations.html');
    await page.waitForSelector('content-layout-permutations-page');
  });

  test('header slot renders content', async ({ page }) => {
    const layout = page.locator('cs-content-layout').first();
    const headerText = await layout.evaluate((el) => {
      const slot = el.shadowRoot?.querySelector('slot[name="header"]') as HTMLSlotElement | null;
      const assigned = slot?.assignedNodes({ flatten: true });
      return assigned?.[0]?.textContent?.trim();
    });
    expect(headerText).toBe('Page Header');
  });

  test('default content slot renders', async ({ page }) => {
    const layout = page.locator('cs-content-layout').first();
    const hasContent = await layout.evaluate((el) => {
      const contentDiv = el.shadowRoot?.querySelector('.content');
      const slot = contentDiv?.querySelector('slot:not([name])') as HTMLSlotElement | null;
      return (slot?.assignedNodes({ flatten: true }).length ?? 0) > 0;
    });
    expect(hasContent).toBe(true);
  });

  test('default-padding class applies', async ({ page }) => {
    const layout = page.locator('cs-content-layout[default-padding]').first();
    const hasClass = await layout.evaluate((el) => {
      const root = el.shadowRoot?.querySelector('.layout');
      return root?.classList.contains('default-padding');
    });
    expect(hasClass).toBe(true);
  });

  test('disable-overlap class applies', async ({ page }) => {
    const layout = page.locator('cs-content-layout[disable-overlap]').first();
    const hasClass = await layout.evaluate((el) => {
      const root = el.shadowRoot?.querySelector('.layout');
      return root?.classList.contains('is-overlap-disabled');
    });
    expect(hasClass).toBe(true);
  });

  test('divider variant applies with-divider class', async ({ page }) => {
    const layout = page.locator('cs-content-layout[header-variant="divider"]').first();
    const hasClass = await layout.evaluate((el) => {
      const header = el.shadowRoot?.querySelector('.header-wrapper');
      return header?.classList.contains('with-divider');
    });
    expect(hasClass).toBe(true);
  });

  test('layout without header has is-overlap-disabled', async ({ page }) => {
    const layouts = page.locator('cs-content-layout');
    const lastLayout = layouts.last();
    const hasClass = await lastLayout.evaluate((el) => {
      const root = el.shadowRoot?.querySelector('.layout');
      return root?.classList.contains('is-overlap-disabled');
    });
    expect(hasClass).toBe(true);
  });

  test('layout has display grid', async ({ page }) => {
    const layout = page.locator('cs-content-layout').first();
    const display = await layout.evaluate((el) => {
      const root = el.shadowRoot?.querySelector('.layout');
      return root ? getComputedStyle(root).display : '';
    });
    expect(display).toBe('grid');
  });
});
