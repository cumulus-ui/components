import { test, expect } from '@playwright/test';
import { waitForPage } from '../helpers/visual.js';

for (const mode of ['light', 'dark'] as const) {
  test.describe(`TextContent — Visual (${mode})`, () => {
    test.beforeEach(async ({ page }) => {
      await waitForPage(page, `${mode}/text-content`);
    });

    test('all sections match baselines', async ({ page }) => {
      await page.addStyleTag({
        content: '*, *::before, *::after { animation-duration: 0s !important; transition-duration: 0s !important; }',
      });

      const sections = page.locator('section');
      const count = await sections.count();
      for (let i = 0; i < count; i++) {
        await expect(sections.nth(i)).toHaveScreenshot(
          `text-content-${mode}-section-${i}.png`,
        );
      }
    });
  });
}
