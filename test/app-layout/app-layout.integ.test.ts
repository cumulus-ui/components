import { test, expect } from '@playwright/test';

test.describe('AppLayout — Integration', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#/light/app-layout/permutations');
    await page.waitForSelector('app-layout-permutations-page');
  });

  test('renders root layout structure', async ({ page }) => {
    const layout = page.locator('cs-app-layout').first();

    const hasRoot = await layout.evaluate((el) => {
      return el.shadowRoot?.querySelector('.root') !== null;
    });

    expect(hasRoot).toBe(true);
  });

  test('renders navigation panel when navigationOpen is true', async ({ page }) => {
    const layout = page.locator('cs-app-layout').first();

    const navVisible = await layout.evaluate((el) => {
      const nav = el.shadowRoot?.querySelector('[role="navigation"]') as HTMLElement | null;
      return nav !== null && nav.style.display !== 'none';
    });

    expect(navVisible).toBe(true);
  });

  test('navigation slot receives slotted content', async ({ page }) => {
    const layout = page.locator('cs-app-layout').first();

    const hasNavSlot = await layout.evaluate((el) => {
      return el.shadowRoot?.querySelector('slot[name="navigation"]') !== null;
    });

    expect(hasNavSlot).toBe(true);
  });

  test('navigation toggle fires navigationChange event', async ({ page }) => {
    const layout = page.locator('cs-app-layout').first();

    const eventFired = await layout.evaluate((el) => {
      return new Promise<boolean>((resolve) => {
        el.addEventListener('navigationChange', () => resolve(true), { once: true });
        const btn = el.shadowRoot?.querySelector('button[aria-label="Close navigation"]') as HTMLButtonElement | null;
        btn?.click();
        setTimeout(() => resolve(false), 500);
      });
    });

    expect(eventFired).toBe(true);
  });

  test('tools panel hidden when toolsOpen is false', async ({ page }) => {
    const layout = page.locator('cs-app-layout').first();

    const toolsHidden = await layout.evaluate((el) => {
      const tools = el.shadowRoot?.querySelector('[role="complementary"]') as HTMLElement | null;
      return tools === null || tools.style.display === 'none';
    });

    expect(toolsHidden).toBe(true);
  });

  test('tools toggle fires toolsChange event', async ({ page }) => {
    const layout = page.locator('cs-app-layout').first();

    const eventFired = await layout.evaluate((el) => {
      return new Promise<boolean>((resolve) => {
        el.addEventListener('toolsChange', () => resolve(true), { once: true });
        const btn = el.shadowRoot?.querySelector('button[aria-label="Open tools"]') as HTMLButtonElement | null;
        btn?.click();
        setTimeout(() => resolve(false), 500);
      });
    });

    expect(eventFired).toBe(true);
  });

  test('default content slot renders', async ({ page }) => {
    const layout = page.locator('cs-app-layout').first();

    const hasDefaultSlot = await layout.evaluate((el) => {
      return el.shadowRoot?.querySelector('slot:not([name])') !== null;
    });

    expect(hasDefaultSlot).toBe(true);
  });

  test('breadcrumbs slot renders', async ({ page }) => {
    const layout = page.locator('cs-app-layout').first();

    const hasBreadcrumbsSlot = await layout.evaluate((el) => {
      return el.shadowRoot?.querySelector('slot[name="breadcrumbs"]') !== null;
    });

    expect(hasBreadcrumbsSlot).toBe(true);
  });

  test('notifications slot renders', async ({ page }) => {
    const layout = page.locator('cs-app-layout').first();

    const hasNotificationsSlot = await layout.evaluate((el) => {
      return el.shadowRoot?.querySelector('slot[name="notifications"]') !== null;
    });

    expect(hasNotificationsSlot).toBe(true);
  });

  test('navigation-hide removes navigation panel', async ({ page }) => {
    const layout = page.locator('cs-app-layout[navigation-hide]').first();

    const hasNav = await layout.evaluate((el) => {
      return el.shadowRoot?.querySelector('[role="navigation"]') !== null;
    });

    expect(hasNav).toBe(false);
  });

  test('tools-hide removes tools panel', async ({ page }) => {
    const layout = page.locator('cs-app-layout[tools-hide]').first();

    const hasTools = await layout.evaluate((el) => {
      return el.shadowRoot?.querySelector('[role="complementary"]') !== null;
    });

    expect(hasTools).toBe(false);
  });

  test('disable-content-paddings removes padding class', async ({ page }) => {
    const layout = page.locator('cs-app-layout[disable-content-paddings]').first();

    const hasPaddingClass = await layout.evaluate((el) => {
      return el.shadowRoot?.querySelector('main')?.classList.contains('app-layout-content-wrapper--content-wrapper');
    });

    expect(hasPaddingClass).toBe(false);
  });

  test('main element exists for landmark', async ({ page }) => {
    const layout = page.locator('cs-app-layout').first();

    const hasMain = await layout.evaluate((el) => {
      return el.shadowRoot?.querySelector('main') !== null;
    });

    expect(hasMain).toBe(true);
  });
});
