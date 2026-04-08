import { test, expect } from '@playwright/test';

test.describe('Tooltip — Integration', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#/light/tooltip/permutations');
    await page.waitForSelector('tooltip-permutations-page');
  });

  test('hover shows tooltip', async ({ page }) => {
    const tooltip = page.locator('cs-tooltip[position="top"]').first();

    await tooltip.hover();
    await page.waitForTimeout(200);

    const hasTooltipBody = await tooltip.evaluate((el) => {
      return el.shadowRoot?.querySelector('.tooltip-body') !== null;
    });

    expect(hasTooltipBody).toBe(true);
  });

  test('mouse leave hides tooltip', async ({ page }) => {
    const tooltip = page.locator('cs-tooltip[position="top"]').first();

    await tooltip.hover();
    await page.waitForTimeout(200);


    await page.mouse.move(0, 0);
    await page.waitForTimeout(100);

    const hasTooltipBody = await tooltip.evaluate((el) => {
      return el.shadowRoot?.querySelector('.tooltip-body') !== null;
    });

    expect(hasTooltipBody).toBe(false);
  });

  test('tooltip has correct role="tooltip"', async ({ page }) => {
    const tooltip = page.locator('cs-tooltip[position="top"]').first();

    await tooltip.hover();
    await page.waitForTimeout(200);

    const role = await tooltip.evaluate((el) => {
      return el.shadowRoot?.querySelector('.tooltip-body')?.getAttribute('role');
    });

    expect(role).toBe('tooltip');
  });

  test('aria-describedby is set on trigger when visible', async ({ page }) => {
    const tooltip = page.locator('cs-tooltip[position="top"]').first();

    await tooltip.hover();
    await page.waitForTimeout(200);

    const { describedby, tooltipId } = await tooltip.evaluate((el) => {
      const trigger = el.shadowRoot?.querySelector('.tooltip-trigger');
      const body = el.shadowRoot?.querySelector('.tooltip-body');
      return {
        describedby: trigger?.getAttribute('aria-describedby') ?? null,
        tooltipId: body?.getAttribute('id') ?? null,
      };
    });

    expect(describedby).toBeTruthy();
    expect(describedby).toBe(tooltipId);
  });

  test('tooltip content matches content attribute', async ({ page }) => {
    const tooltip = page.locator('cs-tooltip[position="top"]').first();

    await tooltip.hover();
    await page.waitForTimeout(200);

    const text = await tooltip.evaluate((el) => {
      return el.shadowRoot?.querySelector('.tooltip-body')?.textContent?.trim();
    });

    expect(text).toBe('Tooltip on top');
  });

  test('all four positions render', async ({ page }) => {
    const positions = ['top', 'right', 'bottom', 'left'];

    for (const pos of positions) {
      const tooltip = page.locator(`cs-tooltip[position="${pos}"]`).first();
      await expect(tooltip).toBeVisible();
    }
  });
});
