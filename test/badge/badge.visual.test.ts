import { test, expect } from '@playwright/test';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { compareScreenshot, waitForPage } from '../helpers/visual.js';

const BASELINES = resolve(fileURLToPath(import.meta.url), '..', 'baselines');

test.describe('Badge — Visual Regression', () => {
  test('permutations page matches baseline', async ({ page }) => {
    await waitForPage(page, 'light/badge');

    const result = await compareScreenshot(page, 'body', resolve(BASELINES, 'badge-light.png'));
    expect(result.match).toBe(true);
  });

  test('dark mode matches baseline', async ({ page }) => {
    await waitForPage(page, 'dark/badge');

    const result = await compareScreenshot(page, 'body', resolve(BASELINES, 'badge-dark.png'));
    expect(result.match).toBe(true);
  });
});
