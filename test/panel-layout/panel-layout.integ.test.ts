import { test, expect } from '@playwright/test';

test.describe('Panel Layout — Integration', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#/light/panel-layout/permutations');
    await page.waitForSelector('panel-layout-permutations-page');
  });

  test('renders root with display-all class by default', async ({ page }) => {
    const layout = page.locator('cs-panel-layout').first();

    const hasClass = await layout.evaluate((el) => {
      const root = el.shadowRoot?.querySelector('.root');
      return root?.classList.contains('display-all') ?? false;
    });

    expect(hasClass).toBe(true);
  });

  test('renders panel and content sections', async ({ page }) => {
    const layout = page.locator('cs-panel-layout').first();

    const structure = await layout.evaluate((el) => {
      return {
        hasPanel: el.shadowRoot?.querySelector('.panel') !== null,
        hasContent: el.shadowRoot?.querySelector('.content') !== null,
      };
    });

    expect(structure.hasPanel).toBe(true);
    expect(structure.hasContent).toBe(true);
  });

  test('panel-only display hides main content', async ({ page }) => {
    const layout = page.locator('cs-panel-layout[display="panel-only"]');

    const hasClass = await layout.evaluate((el) => {
      const root = el.shadowRoot?.querySelector('.root');
      return root?.classList.contains('display-panel-only') ?? false;
    });

    expect(hasClass).toBe(true);
  });

  test('main-only display hides panel', async ({ page }) => {
    const layout = page.locator('cs-panel-layout[display="main-only"]');

    const hasClass = await layout.evaluate((el) => {
      const root = el.shadowRoot?.querySelector('.root');
      return root?.classList.contains('display-main-only') ?? false;
    });

    expect(hasClass).toBe(true);
  });

  test('resizable layout shows handle', async ({ page }) => {
    const layout = page.locator('cs-panel-layout[resizable]');

    const hasHandle = await layout.evaluate((el) => {
      return el.shadowRoot?.querySelector('.handle-wrapper') !== null;
    });

    expect(hasHandle).toBe(true);
  });

  test('handle has separator role', async ({ page }) => {
    const layout = page.locator('cs-panel-layout[resizable]');

    const role = await layout.evaluate((el) => {
      const handle = el.shadowRoot?.querySelector('.handle-wrapper');
      return handle?.getAttribute('role');
    });

    expect(role).toBe('separator');
  });

  test('panel has correct width from defaultPanelSize', async ({ page }) => {
    const layout = page.locator('cs-panel-layout').first();

    const panelWidth = await layout.evaluate((el) => {
      const panel = el.shadowRoot?.querySelector('.panel') as HTMLElement;
      return panel?.style.inlineSize || panel?.style.width || '';
    });

    expect(panelWidth).toContain('200px');
  });

  test('side-start position renders panel first', async ({ page }) => {
    const layout = page.locator('cs-panel-layout[panel-position="side-start"]');

    const panelIsFirst = await layout.evaluate((el) => {
      const root = el.shadowRoot?.querySelector('.root');
      const firstChild = root?.firstElementChild;
      return firstChild?.classList.contains('panel') ?? false;
    });

    expect(panelIsFirst).toBe(true);
  });
});
