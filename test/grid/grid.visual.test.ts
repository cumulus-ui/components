import { test, expect } from '@playwright/test';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { compareScreenshot } from '../helpers/visual.js';

const BASELINES = resolve(fileURLToPath(import.meta.url), '..', 'baselines');

test.describe('Grid — Visual Regression', () => {
  test('permutations page matches baseline', async ({ page }) => {
    await page.goto('/#/light/grid/permutations');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(500);

    const result = await compareScreenshot(page, 'body', resolve(BASELINES, 'grid-light.png'));
    expect(result.match).toBe(true);
  });

  test('dark mode matches baseline', async ({ page }) => {
    await page.goto('/#/dark/grid/permutations');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(500);

    const result = await compareScreenshot(page, 'body', resolve(BASELINES, 'grid-dark.png'));
    expect(result.match).toBe(true);
  });
});
