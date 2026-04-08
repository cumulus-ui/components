import { test, expect } from '@playwright/test';

test.describe('Tabs — Integration', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#/light/tabs/permutations');
    await page.waitForSelector('tabs-permutations-page');
  });

  test('clicking a tab fires change event with activeTabId', async ({ page }) => {
    const tabs = page.locator('cs-tabs').first();

    const detail = await tabs.evaluate((el) => {
      return new Promise<{ activeTabId: string }>((resolve) => {
        el.addEventListener('change', ((e: Event) => {
          resolve((e as CustomEvent).detail);
        }) as EventListener, { once: true });
        const secondTab = el.shadowRoot?.querySelectorAll('[role="tab"]')[1] as HTMLElement;
        secondTab?.click();
      });
    });

    expect(detail.activeTabId).toBe('second');
  });

  test('disabled tab does not fire change event', async ({ page }) => {
    const tabs = page.locator('cs-tabs').first();

    const fired = await tabs.evaluate((el) => {
      return new Promise<boolean>((resolve) => {
        let changed = false;
        el.addEventListener('change', (() => { changed = true; }) as EventListener, { once: true });
        const disabledTab = el.shadowRoot?.querySelector('[aria-disabled="true"]') as HTMLElement;
        disabledTab?.click();
        setTimeout(() => resolve(changed), 50);
      });
    });

    expect(fired).toBe(false);
  });

  test('arrow keys navigate between tabs', async ({ page }) => {
    const tabs = page.locator('cs-tabs').first();

    const newActiveId = await tabs.evaluate((el) => {
      return new Promise<string>((resolve) => {
        el.addEventListener('change', ((e: Event) => {
          resolve((e as CustomEvent).detail.activeTabId);
        }) as EventListener, { once: true });
        const firstTab = el.shadowRoot?.querySelector('[role="tab"]') as HTMLElement;
        firstTab?.focus();
        firstTab?.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }));
      });
    });

    expect(newActiveId).toBe('second');
  });

  test('ARIA roles are correctly assigned', async ({ page }) => {
    const tabs = page.locator('cs-tabs').first();

    const roles = await tabs.evaluate((el) => {
      const tablist = el.shadowRoot?.querySelector('[role="tablist"]');
      const tabElements = el.shadowRoot?.querySelectorAll('[role="tab"]');
      const panels = el.shadowRoot?.querySelectorAll('[role="tabpanel"]');
      return {
        hasTablist: !!tablist,
        tabCount: tabElements?.length ?? 0,
        panelCount: panels?.length ?? 0,
      };
    });

    expect(roles.hasTablist).toBe(true);
    expect(roles.tabCount).toBeGreaterThan(0);
    expect(roles.panelCount).toBeGreaterThan(0);
  });

  test('active tab has aria-selected true', async ({ page }) => {
    const tabs = page.locator('cs-tabs').first();

    const ariaSelected = await tabs.evaluate((el) => {
      const activeTab = el.shadowRoot?.querySelector('[role="tab"][aria-selected="true"]');
      return activeTab?.getAttribute('data-tab-id');
    });

    expect(ariaSelected).toBe('first');
  });

  test('tab panel is associated with tab via aria-controls', async ({ page }) => {
    const tabs = page.locator('cs-tabs').first();

    const association = await tabs.evaluate((el) => {
      const activeTab = el.shadowRoot?.querySelector('[role="tab"][aria-selected="true"]');
      const controlsId = activeTab?.getAttribute('aria-controls');
      const panel = controlsId ? el.shadowRoot?.getElementById(controlsId) : null;
      return {
        controlsId,
        panelExists: !!panel,
        panelRole: panel?.getAttribute('role'),
      };
    });

    expect(association.controlsId).toBe('panel-first');
    expect(association.panelExists).toBe(true);
    expect(association.panelRole).toBe('tabpanel');
  });
});
