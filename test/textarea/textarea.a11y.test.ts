import { test, expect, type Page } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const EXCLUDED_RULES = ['landmark-one-main', 'page-has-heading-one', 'region'];

async function loadDemoPage(page: Page): Promise<void> {
  await page.goto('/');
  await page.addScriptTag({
    type: 'module',
    content: `import '/pages/textarea/permutations.ts';`,
  });
  await page.waitForFunction(
    (tag) => customElements.get(tag) !== undefined,
    'textarea-permutations-page',
  );
  await page.evaluate((tag) => {
    document.body.innerHTML = '';
    document.body.appendChild(document.createElement(tag));
  }, 'textarea-permutations-page');
  await page.waitForSelector('textarea-permutations-page');
}

test.describe('Textarea — Accessibility', () => {
  test('permutations page has no axe violations', async ({ page }) => {
    await loadDemoPage(page);

    const results = await new AxeBuilder({ page })
      .disableRules(EXCLUDED_RULES)
      .analyze();
    expect(results.violations).toHaveLength(0);
  });
});
