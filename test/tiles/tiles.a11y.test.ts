import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

// WCAG 2.1 SC 1.4.3 exempts inactive/disabled controls from contrast requirements.
// Cloudscape's disabled description color (#b4b4bb on #ebebf0) is a known upstream false positive.
// See: https://github.com/cloudscape-design/components/issues/2656
const EXCLUDED_RULES = ['landmark-one-main', 'page-has-heading-one', 'region', 'color-contrast'];

test.describe('Tiles — Accessibility', () => {
  test('permutations page has no axe violations', async ({ page }) => {
    await page.goto('/#/light/tiles/permutations');
    await page.waitForSelector('tiles-permutations-page');

    const results = await new AxeBuilder({ page })
      .disableRules(EXCLUDED_RULES)
      .analyze();
    expect(results.violations).toHaveLength(0);
  });

  test('form page has no axe violations', async ({ page }) => {
    await page.goto('/#/light/tiles/form-submit');
    await page.waitForSelector('tiles-form-submit-page');

    const results = await new AxeBuilder({ page })
      .disableRules(EXCLUDED_RULES)
      .analyze();
    expect(results.violations).toHaveLength(0);
  });
});
