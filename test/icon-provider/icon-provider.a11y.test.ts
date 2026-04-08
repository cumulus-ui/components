import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const url = 'http://localhost:4174/#/light/icon-provider/permutations';

test.describe('icon-provider a11y', () => {
  test('permutations page has no axe violations', async ({ page }) => {
    await page.goto(url);
    await page.waitForSelector('cs-icon-provider');
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations).toEqual([]);
  });
});
