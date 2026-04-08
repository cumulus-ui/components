import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const EXCLUDED_RULES = [
  'landmark-one-main',
  'page-has-heading-one',
  'region',
  'landmark-unique',
  'heading-order',
  'landmark-no-duplicate-main',
];

test.describe('AppLayoutToolbar — Accessibility', () => {
  test('permutations page has no axe violations', async ({ page }) => {
    await page.goto('/#/light/app-layout-toolbar/permutations');
    await page.waitForSelector('app-layout-toolbar-permutations-page');

    const results = await new AxeBuilder({ page })
      .disableRules(EXCLUDED_RULES)
      .analyze();
    expect(results.violations).toHaveLength(0);
  });
});
