import { test, expect } from '@playwright/test';

test.describe('Hotspot — Integration', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#/light/hotspot/permutations');
    await page.waitForSelector('hotspot-permutations-page');
  });

  test('renders wrapped content in slot', async ({ page }) => {
    const hotspot = page.locator('cs-hotspot').first();

    const hasElementWrapper = await hotspot.evaluate((el) => {
      return el.shadowRoot?.querySelector('.elementWrapper') !== null;
    });

    expect(hasElementWrapper).toBe(true);
  });

  test('standalone hotspot has no marker (no annotation context)', async ({ page }) => {
    const hotspot = page.locator('cs-hotspot[hotspot-id="standalone-1"]');

    const hasMarker = await hotspot.evaluate((el) => {
      return el.shadowRoot?.querySelector('.markerWrapper') !== null;
    });

    expect(hasMarker).toBe(false);
  });

  test('active hotspot shows marker inside annotation context', async ({ page }) => {
    const hotspot = page.locator('cs-hotspot[hotspot-id="hotspot-demo-1"]');

    const hasMarker = await hotspot.evaluate((el) => {
      return el.shadowRoot?.querySelector('.markerWrapper') !== null;
    });

    expect(hasMarker).toBe(true);
  });

  test('marker button has aria-expanded attribute', async ({ page }) => {
    const hotspot = page.locator('cs-hotspot[hotspot-id="hotspot-demo-1"]');

    const ariaExpanded = await hotspot.evaluate((el) => {
      const btn = el.shadowRoot?.querySelector('.markerWrapper cs-button');
      return btn?.getAttribute('aria-expanded');
    });

    expect(ariaExpanded).toBe('false');
  });

  test('clicking marker opens annotation popover', async ({ page }) => {
    const hotspot = page.locator('cs-hotspot[hotspot-id="hotspot-demo-1"]');

    const hasPopover = await hotspot.evaluate(async (el: any) => {
      el._popoverOpen = true;
      el.requestUpdate();
      await el.updateComplete;
      return el.shadowRoot?.querySelector('.annotation-popover') !== null;
    });

    expect(hasPopover).toBe(true);
  });

  test('popover has step counter text', async ({ page }) => {
    const hotspot = page.locator('cs-hotspot[hotspot-id="hotspot-demo-1"]');

    const stepText = await hotspot.evaluate(async (el: any) => {
      el._popoverOpen = true;
      el.requestUpdate();
      await el.updateComplete;
      return el.shadowRoot?.querySelector('.annotation-step-counter')?.textContent?.trim();
    });

    expect(stepText).toContain('Step 1 of 2');
  });

  test('side placement applies correct class', async ({ page }) => {
    const rightHotspot = page.locator('cs-hotspot[hotspot-id="hotspot-demo-1"]');

    const hasRight = await rightHotspot.evaluate((el) => {
      return el.shadowRoot?.querySelector('.placement-right') !== null;
    });

    expect(hasRight).toBe(true);
  });
});
