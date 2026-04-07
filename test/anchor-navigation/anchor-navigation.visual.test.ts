import { test, expect } from '@playwright/test';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { compareScreenshot } from '../helpers/visual.js';

const BASELINES = resolve(fileURLToPath(import.meta.url), '..', 'baselines');

test.describe('AnchorNavigation — Visual Regression', () => {
  test('permutations page matches baseline', async ({ page }) => {
    await page.goto('/#/light/anchor-navigation/permutations');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(500);

    const result = await compareScreenshot(page, 'body', resolve(BASELINES, 'anchor-navigation-light.png'));
    expect(result.match).toBe(true);
  });

  test('dark mode matches baseline', async ({ page }) => {
    await page.goto('/#/dark/anchor-navigation/permutations');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(500);

    const result = await compareScreenshot(page, 'body', resolve(BASELINES, 'anchor-navigation-dark.png'));
    expect(result.match).toBe(true);
  });
});
