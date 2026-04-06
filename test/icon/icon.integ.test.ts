import { test, expect } from '@playwright/test';

test.describe('Icon — Integration', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#/light/icon/permutations');
    await page.waitForSelector('icon-permutations-page');
  });

  test('renders named icon with SVG', async ({ page }) => {
    const icon = page.locator('cs-icon[name="settings"]').first();
    await expect(icon).toBeVisible();

    const svg = icon.locator('svg');
    await expect(svg).toBeVisible();
    await expect(svg).toHaveAttribute('viewBox', '0 0 16 16');
  });

  test('renders all size variants', async ({ page }) => {
    const sizeSection = page.locator('.size-row');
    const sizes = ['small', 'normal', 'medium', 'big', 'large'];
    for (const size of sizes) {
      const icon = sizeSection.locator(`cs-icon[size="${size}"]`);
      await expect(icon).toBeVisible();
    }
  });

  test('renders all color variants', async ({ page }) => {
    const variantSection = page.locator('.variant-row');
    const variants = ['normal', 'subtle', 'disabled', 'inverted', 'link', 'success', 'error', 'warning'];
    for (const variant of variants) {
      const icon = variantSection.locator(`cs-icon[variant="${variant}"]`);
      await expect(icon).toBeVisible();
    }
  });

  test('aria-hidden is true for decorative icons', async ({ page }) => {
    const icon = page.locator('cs-icon[name="settings"]').first();
    const inner = icon.locator('.icon');
    await expect(inner).toHaveAttribute('aria-hidden', 'true');
  });

  test('accessible icon has role=img and aria-label', async ({ page }) => {
    const icon = page.locator('cs-icon[ariaLabel="Search"]');
    const inner = icon.locator('.icon');
    await expect(inner).toHaveAttribute('role', 'img');
    await expect(inner).toHaveAttribute('aria-label', 'Search');
    await expect(inner).toHaveAttribute('aria-hidden', 'false');
  });

  test('url-based icon renders img', async ({ page }) => {
    const icon = page.locator('cs-icon[url]').first();
    const img = icon.locator('img');
    await expect(img).toBeVisible();
  });

  test('size classes are applied correctly', async ({ page }) => {
    const icon = page.locator('cs-icon[name="settings"][size="large"]');
    const inner = icon.locator('.icon');
    await expect(inner).toHaveClass(/size-large/);
  });

  test('variant classes are applied correctly', async ({ page }) => {
    const icon = page.locator('cs-icon[name="settings"][variant="error"]');
    const inner = icon.locator('.icon');
    await expect(inner).toHaveClass(/variant-error/);
  });

  test('multiple named icons render distinct SVGs', async ({ page }) => {
    const searchIcon = page.locator('cs-icon[name="search"]').first();
    const closeIcon = page.locator('cs-icon[name="close"]').first();

    const searchPath = await searchIcon.locator('svg path').first().getAttribute('d');
    const closePath = await closeIcon.locator('svg path').first().getAttribute('d');

    expect(searchPath).not.toEqual(closePath);
  });
});
