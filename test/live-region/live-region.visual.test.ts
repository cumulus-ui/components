import { test, expect } from '@playwright/test';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { compareScreenshot } from '../helpers/visual.js';

const BASELINES = resolve(fileURLToPath(import.meta.url), '..', 'baselines');

test.describe('LiveRegion — Visual Regression', () => {
  test('permutations page matches baseline', async ({ page }) => {
    await page.goto('/#/light/live-region/permutations');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(500);

    const result = await compareScreenshot(page, 'body', resolve(BASELINES, 'live-region-light.png'));
    expect(result.match).toBe(true);
  });

  test('dark mode matches baseline', async ({ page }) => {
    await page.goto('/#/dark/live-region/permutations');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(500);

    const result = await compareScreenshot(page, 'body', resolve(BASELINES, 'live-region-dark.png'));
    expect(result.match).toBe(true);
  });
});
