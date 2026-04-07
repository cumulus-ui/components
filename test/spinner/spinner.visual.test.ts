import { test, expect } from '@playwright/test';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { compareScreenshot, freezeAnimations, waitForPage } from '../helpers/visual.js';

const BASELINES = resolve(fileURLToPath(import.meta.url), '..', 'baselines');

test.describe('Spinner — Visual Regression', () => {
  test('permutations page matches baseline', async ({ page }) => {
    await waitForPage(page, 'light/spinner');
    await freezeAnimations(page);

    const result = await compareScreenshot(page, 'body', resolve(BASELINES, 'spinner-light.png'));
    expect(result.match).toBe(true);
  });

  test('dark mode matches baseline', async ({ page }) => {
    await waitForPage(page, 'dark/spinner');
    await freezeAnimations(page);

    const result = await compareScreenshot(page, 'body', resolve(BASELINES, 'spinner-dark.png'));
    expect(result.match).toBe(true);
  });
});
