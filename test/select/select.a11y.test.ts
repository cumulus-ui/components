import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const EXCLUDED_RULES = ['landmark-one-main', 'page-has-heading-one', 'region'];

test.describe('Select — Accessibility', () => {
  test('permutations page has no axe violations', async ({ page }) => {
    await page.goto('/#/light/select/permutations');
    await page.waitForSelector('select-permutations-page');

    const results = await new AxeBuilder({ page })
      .disableRules(EXCLUDED_RULES)
      .analyze();
    expect(results.violations).toHaveLength(0);
  });

  test('trigger has aria-haspopup and aria-expanded', async ({ page }) => {
    await page.goto('/#/light/select/permutations');
    await page.waitForSelector('select-permutations-page');

    const select = page.locator('cs-select[aria-label="Basic select"]');
    const trigger = select.locator('button.trigger').first();

    await expect(trigger).toHaveAttribute('aria-haspopup', 'listbox');
    await expect(trigger).toHaveAttribute('aria-expanded', 'false');

    await trigger.click();
    await expect(trigger).toHaveAttribute('aria-expanded', 'true');
  });

  test('dropdown has role listbox', async ({ page }) => {
    await page.goto('/#/light/select/permutations');
    await page.waitForSelector('select-permutations-page');

    const select = page.locator('cs-select[aria-label="Basic select"]');
    const trigger = select.locator('button.trigger').first();
    await trigger.click();

    const listbox = select.locator('[role="listbox"]');
    await expect(listbox).toBeVisible();
  });

  test('options have role option and aria-selected', async ({ page }) => {
    await page.goto('/#/light/select/permutations');
    await page.waitForSelector('select-permutations-page');

    const select = page.locator('cs-select[aria-label="Basic select"]');
    const trigger = select.locator('button.trigger').first();
    await trigger.click();

    const options = select.locator('[role="option"]');
    const count = await options.count();
    expect(count).toBeGreaterThan(0);

    const firstOption = options.first();
    await expect(firstOption).toHaveAttribute('aria-selected');
  });

  test('disabled select has aria-disabled', async ({ page }) => {
    await page.goto('/#/light/select/permutations');
    await page.waitForSelector('select-permutations-page');

    const select = page.locator('cs-select[aria-label="Disabled select"]');
    const trigger = select.locator('button.trigger').first();
    await expect(trigger).toHaveAttribute('aria-disabled', 'true');
  });
});
