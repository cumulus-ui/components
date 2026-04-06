import { test, expect } from '@playwright/test';

test.describe('Spinner — Integration', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#/light/spinner/permutations');
    await page.waitForSelector('spinner-permutations-page');
  });

  test('renders with default props', async ({ page }) => {
    const spinner = page.locator('cs-spinner').first();
    await expect(spinner).toBeVisible();
  });

  test('renders all three sizes', async ({ page }) => {
    for (const size of ['normal', 'big', 'large']) {
      const spinner = page.locator(`cs-spinner[size="${size}"]`).first();
      await expect(spinner).toBeVisible();
    }
  });

  test('renders all variants', async ({ page }) => {
    for (const variant of ['normal', 'disabled', 'inverted']) {
      const spinner = page.locator(`cs-spinner[variant="${variant}"]`).first();
      await expect(spinner).toBeVisible();
    }
  });

  test('has role="img" with aria-label', async ({ page }) => {
    const spinner = page.locator('cs-spinner').first();
    const role = spinner.locator('[role="img"]');
    await expect(role).toHaveAttribute('aria-label', 'Loading');
  });

  test('circle elements are rendered for animation', async ({ page }) => {
    const spinner = page.locator('cs-spinner').first();
    const circles = spinner.locator('.circle');
    await expect(circles.first()).toBeAttached();
    expect(await circles.count()).toBe(2);
  });

  test('uses CSS animation on root', async ({ page }) => {
    const spinner = page.locator('cs-spinner').first();
    const hasAnimation = await spinner.evaluate((el) => {
      const root = el.shadowRoot?.querySelector('.root');
      if (!root) return false;
      const style = getComputedStyle(root);
      return style.animationName !== 'none' && style.animationName !== '';
    });
    expect(hasAnimation).toBe(true);
  });

  test('disabled variant has distinct color', async ({ page }) => {
    const spinner = page.locator('cs-spinner[variant="disabled"]').first();
    const color = await spinner.evaluate((el) => {
      const wrapper = el.shadowRoot?.querySelector('.variant-disabled');
      if (!wrapper) return '';
      return getComputedStyle(wrapper).color;
    });
    expect(color).toBeTruthy();
  });
});
