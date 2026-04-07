// DISABLED — no baselines yet, enable when component is golden
// 
// import { test, expect } from '@playwright/test';
// import { resolve } from 'node:path';
// import { fileURLToPath } from 'node:url';
// import { compareScreenshot } from '../helpers/visual.js';
// 
// const BASELINES = resolve(fileURLToPath(import.meta.url), '..', 'baselines');
// 
// test.describe('FileDropzone — Visual Regression', () => {
//   test('permutations page matches baseline', async ({ page }) => {
//     await page.goto('/#/light/file-dropzone/permutations');
//     await page.waitForLoadState('networkidle');
//     await page.waitForTimeout(500);
// 
//     const result = await compareScreenshot(page, 'body', resolve(BASELINES, 'file-dropzone-light.png'));
//     expect(result.match).toBe(true);
//   });
// 
//   test('dark mode matches baseline', async ({ page }) => {
//     await page.goto('/#/dark/file-dropzone/permutations');
//     await page.waitForLoadState('networkidle');
//     await page.waitForTimeout(500);
// 
//     const result = await compareScreenshot(page, 'body', resolve(BASELINES, 'file-dropzone-dark.png'));
//     expect(result.match).toBe(true);
//   });
// });
