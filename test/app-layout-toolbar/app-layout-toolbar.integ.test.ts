import { test, expect } from '@playwright/test';

test.describe('AppLayoutToolbar — Integration', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#/light/app-layout-toolbar/permutations');
    await page.waitForSelector('app-layout-toolbar-permutations-page');
  });

  test('renders toolbar bar with role="toolbar"', async ({ page }) => {
    const layout = page.locator('cs-app-layout-toolbar').first();

    const hasToolbar = await layout.evaluate((el) => {
      return el.shadowRoot?.querySelector('[role="toolbar"]') !== null;
    });

    expect(hasToolbar).toBe(true);
  });

  test('renders navigation trigger in toolbar', async ({ page }) => {
    const layout = page.locator('cs-app-layout-toolbar').first();

    const hasNavTrigger = await layout.evaluate((el) => {
      return el.shadowRoot?.querySelector('.toolbar__nav-trigger') !== null;
    });

    expect(hasNavTrigger).toBe(true);
  });

  test('navigation trigger fires navigationChange event', async ({ page }) => {
    const layout = page.locator('cs-app-layout-toolbar').first();

    const eventFired = await layout.evaluate((el) => {
      return new Promise<boolean>((resolve) => {
        el.addEventListener('navigationChange', () => resolve(true), { once: true });
        const btn = el.shadowRoot?.querySelector('.toolbar__nav-trigger') as HTMLButtonElement | null;
        btn?.click();
        setTimeout(() => resolve(false), 500);
      });
    });

    expect(eventFired).toBe(true);
  });

  test('renders tools trigger in toolbar', async ({ page }) => {
    const layout = page.locator('cs-app-layout-toolbar').first();

    const hasToolsTrigger = await layout.evaluate((el) => {
      return el.shadowRoot?.querySelector('.toolbar__tools-trigger') !== null;
    });

    expect(hasToolsTrigger).toBe(true);
  });

  test('tools trigger fires toolsChange event', async ({ page }) => {
    const layout = page.locator('cs-app-layout-toolbar').first();

    const eventFired = await layout.evaluate((el) => {
      return new Promise<boolean>((resolve) => {
        el.addEventListener('toolsChange', () => resolve(true), { once: true });
        const btn = el.shadowRoot?.querySelector('.toolbar__tools-trigger') as HTMLButtonElement | null;
        btn?.click();
        setTimeout(() => resolve(false), 500);
      });
    });

    expect(eventFired).toBe(true);
  });

  test('renders drawer trigger buttons', async ({ page }) => {
    const layout = page.locator('cs-app-layout-toolbar').first();

    const drawerTriggerCount = await layout.evaluate((el) => {
      return el.shadowRoot?.querySelectorAll('.toolbar__drawer-trigger').length ?? 0;
    });

    expect(drawerTriggerCount).toBe(2);
  });

  test('drawer trigger fires drawerChange event', async ({ page }) => {
    const layout = page.locator('cs-app-layout-toolbar').first();

    const detail = await layout.evaluate((el) => {
      return new Promise<{ activeDrawerId: string | null } | null>((resolve) => {
        el.addEventListener('drawerChange', ((e: CustomEvent) => {
          resolve(e.detail);
        }) as EventListener, { once: true });
        const btn = el.shadowRoot?.querySelector('.toolbar__drawer-trigger') as HTMLButtonElement | null;
        btn?.click();
        setTimeout(() => resolve(null), 500);
      });
    });

    expect(detail).not.toBeNull();
    expect(detail?.activeDrawerId).toBe('security');
  });

  test('drawer badge renders when badge is true', async ({ page }) => {
    const layout = page.locator('cs-app-layout-toolbar').first();

    const hasBadge = await layout.evaluate((el) => {
      const firstTrigger = el.shadowRoot?.querySelector('.toolbar__drawer-trigger');
      return firstTrigger?.querySelector('.toolbar__badge') !== null;
    });

    expect(hasBadge).toBe(true);
  });

  test('breadcrumbs slot renders in toolbar', async ({ page }) => {
    const layout = page.locator('cs-app-layout-toolbar').first();

    const hasBreadcrumbsSlot = await layout.evaluate((el) => {
      const toolbar = el.shadowRoot?.querySelector('[role="toolbar"]');
      return toolbar?.querySelector('slot[name="breadcrumbs"]') !== null;
    });

    expect(hasBreadcrumbsSlot).toBe(true);
  });

  test('navigation panel renders when open', async ({ page }) => {
    const layout = page.locator('cs-app-layout-toolbar').first();

    const navVisible = await layout.evaluate((el) => {
      const nav = el.shadowRoot?.querySelector('[role="navigation"]') as HTMLElement | null;
      return nav !== null && nav.style.display !== 'none';
    });

    expect(navVisible).toBe(true);
  });

  test('navigation-trigger-hide hides nav trigger but keeps nav panel', async ({ page }) => {
    const layout = page.locator('cs-app-layout-toolbar[navigation-trigger-hide]').first();

    const result = await layout.evaluate((el) => {
      const trigger = el.shadowRoot?.querySelector('.toolbar__nav-trigger');
      const nav = el.shadowRoot?.querySelector('[role="navigation"]');
      return { hasTrigger: trigger !== null, hasNav: nav !== null };
    });

    expect(result.hasTrigger).toBe(false);
    expect(result.hasNav).toBe(true);
  });

  test('tools-hide removes tools trigger from toolbar', async ({ page }) => {
    const layout = page.locator('cs-app-layout-toolbar[tools-hide]').first();

    const hasToolsTrigger = await layout.evaluate((el) => {
      return el.shadowRoot?.querySelector('.toolbar__tools-trigger') !== null;
    });

    expect(hasToolsTrigger).toBe(false);
  });

  test('main element exists for landmark', async ({ page }) => {
    const layout = page.locator('cs-app-layout-toolbar').first();

    const hasMain = await layout.evaluate((el) => {
      return el.shadowRoot?.querySelector('main') !== null;
    });

    expect(hasMain).toBe(true);
  });

  test('default content slot renders', async ({ page }) => {
    const layout = page.locator('cs-app-layout-toolbar').first();

    const hasDefaultSlot = await layout.evaluate((el) => {
      return el.shadowRoot?.querySelector('slot:not([name])') !== null;
    });

    expect(hasDefaultSlot).toBe(true);
  });

  test('notifications slot renders', async ({ page }) => {
    const layout = page.locator('cs-app-layout-toolbar').first();

    const hasNotificationsSlot = await layout.evaluate((el) => {
      return el.shadowRoot?.querySelector('slot[name="notifications"]') !== null;
    });

    expect(hasNotificationsSlot).toBe(true);
  });
});
