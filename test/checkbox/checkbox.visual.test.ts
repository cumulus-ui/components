import { test, expect } from '@playwright/test';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { compareScreenshot, waitForPage } from '../helpers/visual.js';

const BASELINES = resolve(fileURLToPath(import.meta.url), '..', 'baselines');

test.describe('Checkbox — Visual Regression', () => {
  test('permutations page matches baseline', async ({ page }) => {
    await waitForPage(page, 'light/checkbox');

    const result = await compareScreenshot(page, 'body', resolve(BASELINES, 'checkbox-permutations.png'));
    expect(result.match).toBe(true);
  });

  test('dark mode matches baseline', async ({ page }) => {
    await waitForPage(page, 'dark/checkbox');

    const result = await compareScreenshot(page, 'body', resolve(BASELINES, 'checkbox-dark.png'));
    expect(result.match).toBe(true);
  });
});
