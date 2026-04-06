import { test, expect } from '@playwright/test';

test.describe('Box — Integration', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#/light/box/permutations');
    await page.waitForSelector('box-permutations-page');
  });

  test('renders h1 variant with correct tag', async ({ page }) => {
    const box = page.locator('cs-box[variant="h1"]').first();
    const innerTag = await box.evaluate((el) => {
      return el.shadowRoot?.querySelector('.box')?.tagName.toLowerCase();
    });
    expect(innerTag).toBe('h1');
  });

  test('renders p variant with correct tag', async ({ page }) => {
    const box = page.locator('cs-box[variant="p"]').first();
    const innerTag = await box.evaluate((el) => {
      return el.shadowRoot?.querySelector('.box')?.tagName.toLowerCase();
    });
    expect(innerTag).toBe('p');
  });

  test('renders code variant with monospace font family', async ({ page }) => {
    const box = page.locator('cs-box[variant="code"]').first();
    const inner = box.locator('.box');
    await expect(inner).toHaveClass(/code-variant/);
  });

  test('applies color class', async ({ page }) => {
    const box = page.locator('cs-box[color="text-status-error"]').first();
    const inner = box.locator('.box');
    await expect(inner).toHaveClass(/color-text-status-error/);
  });

  test('applies fontSize class', async ({ page }) => {
    const box = page.locator('cs-box[fontsize="heading-xl"]').first();
    const inner = box.locator('.box');
    await expect(inner).toHaveClass(/font-size-heading-xl/);
  });

  test('applies fontWeight class', async ({ page }) => {
    const box = page.locator('cs-box[fontweight="bold"]').first();
    const inner = box.locator('.box');
    await expect(inner).toHaveClass(/font-weight-bold/);
  });

  test('applies textAlign class', async ({ page }) => {
    const box = page.locator('cs-box[textalign="center"]').first();
    const inner = box.locator('.box');
    await expect(inner).toHaveClass(/t-center/);
  });

  test('tagOverride overrides the inner element tag', async ({ page }) => {
    const box = page.locator('cs-box[tagoverride="span"]').first();
    const innerTag = await box.evaluate((el) => {
      return el.shadowRoot?.querySelector('.box')?.tagName.toLowerCase();
    });
    expect(innerTag).toBe('span');
  });

  test('display attribute sets host display', async ({ page }) => {
    const inlineBox = page.locator('cs-box[display="inline"]').first();
    const display = await inlineBox.evaluate((el) => getComputedStyle(el).display);
    expect(display).toBe('inline');
  });

  test('slotted content is visible', async ({ page }) => {
    const box = page.locator('cs-box[variant="h1"]').first();
    await expect(box).toContainText('Heading 1');
  });

  test('special variant awsui-key-label renders as div', async ({ page }) => {
    const box = page.locator('cs-box[variant="awsui-key-label"]').first();
    const innerTag = await box.evaluate((el) => {
      return el.shadowRoot?.querySelector('.box')?.tagName.toLowerCase();
    });
    expect(innerTag).toBe('div');
  });

  test('special variant awsui-inline-code renders as code', async ({ page }) => {
    const box = page.locator('cs-box[variant="awsui-inline-code"]').first();
    const innerTag = await box.evaluate((el) => {
      return el.shadowRoot?.querySelector('.box')?.tagName.toLowerCase();
    });
    expect(innerTag).toBe('code');
  });
});
