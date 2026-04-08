import { test, expect } from '@playwright/test';

test.describe('Error Boundary — Integration', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#/light/error-boundary/permutations');
    await page.waitForSelector('error-boundary-permutations-page');
  });

  test('normal state renders slot content', async ({ page }) => {
    const boundary = page.locator('cs-error-boundary').first();

    const slotContent = await boundary.evaluate((el) => {
      const slot = el.shadowRoot?.querySelector('slot');
      if (!slot) return null;
      const nodes = slot.assignedNodes({ flatten: true });
      return nodes.length > 0;
    });

    expect(slotContent).toBe(true);
  });

  test('provides data-awsui-boundary-id attribute when set', async ({ page }) => {
    const boundary = page.locator('cs-error-boundary[error-boundary-id="my-section"]');

    const attrValue = await boundary.evaluate((el) => {
      return el.getAttribute('data-awsui-boundary-id');
    });

    expect(attrValue).toBe('my-section');
  });

  test('does not have data-awsui-boundary-id when not set', async ({ page }) => {
    const boundary = page.locator('cs-error-boundary').first();

    const hasAttr = await boundary.evaluate((el) => {
      return el.hasAttribute('data-awsui-boundary-id');
    });

    expect(hasAttr).toBe(false);
  });

  test('renders as display contents (pass-through)', async ({ page }) => {
    const boundary = page.locator('cs-error-boundary').first();

    const display = await boundary.evaluate((el) => {
      return getComputedStyle(el).display;
    });

    expect(display).toBe('contents');
  });
});
