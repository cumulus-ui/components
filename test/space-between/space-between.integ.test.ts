import { test, expect } from '@playwright/test';

test.describe('SpaceBetween — Integration', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#/light/space-between/permutations');
    await page.waitForSelector('space-between-permutations-page');
  });

  test('renders flexbox container', async ({ page }) => {
    const sb = page.locator('cs-space-between').first();
    const display = await sb.evaluate((el) => {
      const inner = el.shadowRoot?.querySelector('.root');
      return inner ? getComputedStyle(inner).display : '';
    });
    expect(display).toBe('flex');
  });

  test('vertical direction applies column flex-direction', async ({ page }) => {
    const sb = page.locator('cs-space-between').first();
    const direction = await sb.evaluate((el) => {
      const inner = el.shadowRoot?.querySelector('.root');
      return inner ? getComputedStyle(inner).flexDirection : '';
    });
    expect(direction).toBe('column');
  });

  test('horizontal direction applies row flex-direction', async ({ page }) => {
    const sb = page.locator('cs-space-between[direction="horizontal"]').first();
    const direction = await sb.evaluate((el) => {
      const inner = el.shadowRoot?.querySelector('.root');
      return inner ? getComputedStyle(inner).flexDirection : '';
    });
    expect(direction).toBe('row');
  });

  test('size class is applied', async ({ page }) => {
    const sb = page.locator('cs-space-between[size="xs"]').first();
    const inner = sb.locator('.root');
    await expect(inner).toHaveClass(/vertical-xs/);
  });

  test('direction class is applied', async ({ page }) => {
    const sb = page.locator('cs-space-between[direction="horizontal"]').first();
    const inner = sb.locator('.root');
    await expect(inner).toHaveClass(/horizontal/);
  });

  test('alignItems center is applied', async ({ page }) => {
    const sb = page.locator('cs-space-between[align-items="center"]').first();
    const inner = sb.locator('.root');
    await expect(inner).toHaveClass(/align-center/);
  });

  test('alignItems end is applied', async ({ page }) => {
    const sb = page.locator('cs-space-between[align-items="end"]').first();
    const inner = sb.locator('.root');
    await expect(inner).toHaveClass(/align-end/);
  });

  test('gap increases with size', async ({ page }) => {
    const getGap = async (size: string) => {
      const sb = page.locator(`cs-space-between[size="${size}"]`).first();
      return sb.evaluate((el) => {
        const inner = el.shadowRoot?.querySelector('.root');
        return inner ? parseFloat(getComputedStyle(inner).gap) : 0;
      });
    };

    const gapXs = await getGap('xs');
    const gapL = await getGap('l');
    expect(gapL).toBeGreaterThan(gapXs);
  });

  test('slotted children are visible', async ({ page }) => {
    const sb = page.locator('cs-space-between').first();
    await expect(sb).toContainText('Item 1');
  });
});
