import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const EXCLUDED_RULES = ['landmark-one-main', 'page-has-heading-one', 'region', 'color-contrast'];

test.describe('S3ResourceSelector — Accessibility', () => {
  test('permutations page has no axe violations', async ({ page }) => {
    await page.goto('/#/light/s3-resource-selector/permutations');
    await page.waitForSelector('s3-resource-selector-permutations-page');

    const results = await new AxeBuilder({ page })
      .disableRules(EXCLUDED_RULES)
      .analyze();
    expect(results.violations).toHaveLength(0);
  });
});
