import { test, expect } from '@playwright/test';

test.describe('TextContent — Integration', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#/light/text-content/permutations');
    await page.waitForSelector('text-content-permutations-page');
  });

  test('renders wrapper div with text-content class', async ({ page }) => {
    const tc = page.locator('cs-text-content').first();
    const inner = tc.locator('.text-content');
    await expect(inner).toBeVisible();
  });

  test('slotted h1 is visible', async ({ page }) => {
    const tc = page.locator('cs-text-content').first();
    await expect(tc.locator('h1')).toContainText('Heading 1');
  });

  test('slotted h2 is visible', async ({ page }) => {
    const tc = page.locator('cs-text-content').first();
    await expect(tc.locator('h2')).toContainText('Heading 2');
  });

  test('slotted paragraphs are visible', async ({ page }) => {
    const tcs = page.locator('cs-text-content');
    const paragraphSection = tcs.nth(1);
    const paragraphs = paragraphSection.locator('p');
    await expect(paragraphs.first()).toContainText('paragraph of body text');
    await expect(paragraphs.nth(1)).toContainText('second paragraph');
  });

  test('slotted code element is visible', async ({ page }) => {
    const tcs = page.locator('cs-text-content');
    const codeSection = tcs.nth(3);
    await expect(codeSection.locator('code')).toContainText('npm install');
  });

  test('slotted pre element is visible', async ({ page }) => {
    const tcs = page.locator('cs-text-content');
    const codeSection = tcs.nth(3);
    await expect(codeSection.locator('pre')).toContainText('const x = 42');
  });

  test('slotted lists render', async ({ page }) => {
    const tcs = page.locator('cs-text-content');
    const listSection = tcs.nth(4);
    await expect(listSection.locator('ul')).toBeVisible();
    await expect(listSection.locator('ol')).toBeVisible();
  });

  test('slotted hr renders', async ({ page }) => {
    const tcs = page.locator('cs-text-content');
    const hrSection = tcs.nth(6);
    await expect(hrSection.locator('hr')).toBeVisible();
  });
});
