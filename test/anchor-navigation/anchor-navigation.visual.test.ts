import { test, expect } from '@playwright/test';
import { waitForPage } from '../helpers/visual.js';

for (const mode of ['light', 'dark'] as const) {
  test.describe(`AnchorNavigation — Visual (${mode})`, () => {
    test.beforeEach(async ({ page }) => {
      await waitForPage(page, `${mode}/anchor-navigation`);
    });

    test('all sections match baselines', async ({ page }) => {
      await page.addStyleTag({
        content: '*, *::before, *::after { animation-duration: 0s !important; transition-duration: 0s !important; }',
      });

      const sections = page.locator('section');
      const count = await sections.count();
      for (let i = 0; i < count; i++) {
        await expect(sections.nth(i)).toHaveScreenshot(
          `anchor-navigation-${mode}-section-${i}.png`,
        );
      }
    });
  });
}
