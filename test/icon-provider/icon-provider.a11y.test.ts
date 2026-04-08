import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const url = '/#/light/icon-provider/permutations';
const EXCLUDED_RULES = ['landmark-one-main', 'page-has-heading-one', 'region'];

test.describe('icon-provider a11y', () => {
  test('permutations page has no axe violations', async ({ page }) => {
    await page.goto(url);
    await page.waitForSelector('cs-icon-provider');
    const results = await new AxeBuilder({ page })
      .disableRules(EXCLUDED_RULES)
      .analyze();
    expect(results.violations).toHaveLength(0);
  });
});
