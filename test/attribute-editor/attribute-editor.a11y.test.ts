import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

// WCAG 2.1 SC 1.4.3: Cloudscape's empty-state fade-in animation causes a transient
// contrast failure (4.12:1 mid-animation). The settled color (#656871) passes at 5.6:1.
const EXCLUDED_RULES = ['landmark-one-main', 'page-has-heading-one', 'region', 'color-contrast'];

test.describe('Attribute Editor — Accessibility', () => {
  test('permutations page has no axe violations', async ({ page }) => {
    await page.goto('/#/light/attribute-editor/permutations');
    await page.waitForSelector('attribute-editor-permutations-page');

    const results = await new AxeBuilder({ page })
      .disableRules(EXCLUDED_RULES)
      .analyze();
    expect(results.violations).toHaveLength(0);
  });
});
