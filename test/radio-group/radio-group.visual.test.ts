import { test, expect } from '@playwright/test';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { compareScreenshot } from '../helpers/visual.js';

const BASELINES = resolve(fileURLToPath(import.meta.url), '..', 'baselines');

test.describe('RadioGroup — Visual Regression', () => {
  test('permutations page matches baseline', async ({ page }) => {
    await page.goto('/#/light/radio-group/permutations');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(500);

    const result = await compareScreenshot(page, 'body', resolve(BASELINES, 'radio-group-permutations.png'));
    expect(result.match).toBe(true);
  });

  test('dark mode matches baseline', async ({ page }) => {
    await page.goto('/#/dark/radio-group/permutations');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(500);

    const result = await compareScreenshot(page, 'body', resolve(BASELINES, 'radio-group-dark.png'));
    expect(result.match).toBe(true);
  });
});
