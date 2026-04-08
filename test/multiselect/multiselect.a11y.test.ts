import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const EXCLUDED_RULES = ['landmark-one-main', 'page-has-heading-one', 'region'];

test.describe('Multiselect — Accessibility', () => {
  test('permutations page has no axe violations', async ({ page }) => {
    await page.goto('/#/light/multiselect/permutations');
    await page.waitForSelector('multiselect-permutations-page');

    const results = await new AxeBuilder({ page })
      .disableRules(EXCLUDED_RULES)
      .analyze();
    expect(results.violations).toHaveLength(0);
  });

  test('trigger has aria-haspopup and aria-expanded', async ({ page }) => {
    await page.goto('/#/light/multiselect/permutations');
    await page.waitForSelector('multiselect-permutations-page');

    const ms = page.locator('cs-multiselect[aria-label="Basic multiselect"]');
    const trigger = ms.locator('button.trigger').first();

    await expect(trigger).toHaveAttribute('aria-haspopup', 'listbox');
    await expect(trigger).toHaveAttribute('aria-expanded', 'false');

    await trigger.click();
    await expect(trigger).toHaveAttribute('aria-expanded', 'true');
  });

  test('dropdown has role listbox', async ({ page }) => {
    await page.goto('/#/light/multiselect/permutations');
    await page.waitForSelector('multiselect-permutations-page');

    const ms = page.locator('cs-multiselect[aria-label="Basic multiselect"]');
    const trigger = ms.locator('button.trigger').first();
    await trigger.click();

    const listbox = ms.locator('[role="listbox"]');
    await expect(listbox).toBeVisible();
  });

  test('options have role option and aria-selected', async ({ page }) => {
    await page.goto('/#/light/multiselect/permutations');
    await page.waitForSelector('multiselect-permutations-page');

    const ms = page.locator('cs-multiselect[aria-label="Basic multiselect"]');
    const trigger = ms.locator('button.trigger').first();
    await trigger.click();

    const options = ms.locator('[role="option"]');
    const count = await options.count();
    expect(count).toBeGreaterThan(0);

    const firstOption = options.first();
    await expect(firstOption).toHaveAttribute('aria-selected');
  });

  test('disabled multiselect has aria-disabled', async ({ page }) => {
    await page.goto('/#/light/multiselect/permutations');
    await page.waitForSelector('multiselect-permutations-page');

    const ms = page.locator('cs-multiselect[aria-label="Disabled multiselect"]');
    const trigger = ms.locator('button.trigger').first();
    await expect(trigger).toHaveAttribute('aria-disabled', 'true');
  });
});
