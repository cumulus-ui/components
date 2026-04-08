import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const EXCLUDED_RULES = ['landmark-one-main', 'page-has-heading-one', 'region'];

test.describe('Token — Accessibility', () => {
  test('permutations page has no axe violations', async ({ page }) => {
    await page.goto('/#/light/token/permutations');
    await page.waitForSelector('token-permutations-page');

    const results = await new AxeBuilder({ page })
      .disableRules(EXCLUDED_RULES)
      .analyze();
    expect(results.violations).toHaveLength(0);
  });
});
