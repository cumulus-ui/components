import { test, expect } from '@playwright/test';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { compareSections, waitForPage } from '../helpers/visual.js';

const BASELINES = resolve(fileURLToPath(import.meta.url), '..', 'baselines');

for (const mode of ['light', 'dark'] as const) {
  test.describe(`TreeView — Visual (${mode})`, () => {
    test.beforeEach(async ({ page }) => {
      await waitForPage(page, `${mode}/tree-view`);
    });

    test('all sections match baselines', async ({ page }) => {
      const results = await compareSections(page, BASELINES, 'tree-view', mode);
      for (const { name, result } of results) {
        expect(result.match, `"${name}" differs by ${result.diffPixels}px`).toBe(true);
      }
    });
  });
}
