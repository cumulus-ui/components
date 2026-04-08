import { test, expect } from '@playwright/test';

test.describe('ColumnLayout — Integration', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/pages/column-layout/permutations.html');
    await page.waitForSelector('column-layout-permutations-page');
  });

  test('renders grid with correct column count', async ({ page }) => {
    const layout = page.locator('cs-column-layout[columns="3"]').first();
    const colTemplate = await layout.evaluate((el) => {
      const grid = el.shadowRoot?.querySelector('.grid');
      return grid ? getComputedStyle(grid).gridTemplateColumns : '';
    });
    const tracks = colTemplate.split(/\s+/).filter(Boolean);
    expect(tracks.length).toBe(3);
  });

  test('single column renders one track', async ({ page }) => {
    const layout = page.locator('cs-column-layout[columns="1"]').first();
    const colTemplate = await layout.evaluate((el) => {
      const grid = el.shadowRoot?.querySelector('.grid');
      return grid ? getComputedStyle(grid).gridTemplateColumns : '';
    });
    const tracks = colTemplate.split(/\s+/).filter(Boolean);
    expect(tracks.length).toBe(1);
  });

  test('four columns renders four tracks', async ({ page }) => {
    const layout = page.locator('cs-column-layout[columns="4"]').first();
    const colTemplate = await layout.evaluate((el) => {
      const grid = el.shadowRoot?.querySelector('.grid');
      return grid ? getComputedStyle(grid).gridTemplateColumns : '';
    });
    const tracks = colTemplate.split(/\s+/).filter(Boolean);
    expect(tracks.length).toBe(4);
  });

  test('variant class is applied', async ({ page }) => {
    const layout = page.locator('cs-column-layout[variant="text-grid"]').first();
    const hasClass = await layout.evaluate((el) => {
      const grid = el.shadowRoot?.querySelector('.grid');
      return grid?.classList.contains('grid-variant-text-grid');
    });
    expect(hasClass).toBe(true);
  });

  test('border classes are applied for borders=all', async ({ page }) => {
    const layout = page.locator('cs-column-layout[borders="all"]').first();
    const classes = await layout.evaluate((el) => {
      const grid = el.shadowRoot?.querySelector('.grid');
      return {
        vertical: grid?.classList.contains('grid-vertical-borders'),
        horizontal: grid?.classList.contains('grid-horizontal-borders'),
      };
    });
    expect(classes.vertical).toBe(true);
    expect(classes.horizontal).toBe(true);
  });

  test('disable-gutters applies no-gutters class', async ({ page }) => {
    const layout = page.locator('cs-column-layout[disable-gutters]').first();
    const hasClass = await layout.evaluate((el) => {
      const grid = el.shadowRoot?.querySelector('.grid');
      return grid?.classList.contains('grid-no-gutters');
    });
    expect(hasClass).toBe(true);
  });

  test('slotted children are visible', async ({ page }) => {
    const layout = page.locator('cs-column-layout[columns="3"]').first();
    const children = layout.locator(':scope > .box');
    await expect(children.first()).toBeVisible();
    await expect(children.first()).toContainText('Column 1');
  });

  test('grid uses display: grid', async ({ page }) => {
    const layout = page.locator('cs-column-layout').first();
    const display = await layout.evaluate((el) => {
      const grid = el.shadowRoot?.querySelector('.grid');
      return grid ? getComputedStyle(grid).display : '';
    });
    expect(display).toBe('grid');
  });
});
