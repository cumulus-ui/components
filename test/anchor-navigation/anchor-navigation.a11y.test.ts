import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const EXCLUDED_RULES = [
  'landmark-one-main',
  'page-has-heading-one',
  'region',
  'landmark-unique',
  'scrollable-region-focusable',
];

test.describe('AnchorNavigation — Accessibility', () => {
  test('permutations page has no axe violations', async ({ page }) => {
    await page.goto('/#/light/anchor-navigation/permutations');
    await page.waitForSelector('anchor-navigation-permutations-page');

    const results = await new AxeBuilder({ page })
      .disableRules(EXCLUDED_RULES)
      .analyze();
    expect(results.violations).toHaveLength(0);
  });
});
