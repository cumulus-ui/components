import { test, expect } from '@playwright/test';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { compareScreenshot, waitForPage } from '../helpers/visual.js';

const BASELINES = resolve(fileURLToPath(import.meta.url), '..', 'baselines');

test.describe('Icon — Visual Regression', () => {
  test('permutations page matches baseline', async ({ page }) => {
    await waitForPage(page, 'light/icon');

    const result = await compareScreenshot(page, 'body', resolve(BASELINES, 'icon-light.png'));
    expect(result.match).toBe(true);
  });

  test('dark mode matches baseline', async ({ page }) => {
    await waitForPage(page, 'dark/icon');

    const result = await compareScreenshot(page, 'body', resolve(BASELINES, 'icon-dark.png'));
    expect(result.match).toBe(true);
  });
});
