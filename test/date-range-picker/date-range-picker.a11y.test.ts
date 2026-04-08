import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const EXCLUDED_RULES = ['landmark-one-main', 'page-has-heading-one', 'region'];

test.describe('DateRangePicker — Accessibility', () => {
  test('permutations page has no axe violations', async ({ page }) => {
    await page.goto('/#/light/date-range-picker/permutations');
    await page.waitForSelector('date-range-picker-permutations-page');

    const results = await new AxeBuilder({ page })
      .disableRules(EXCLUDED_RULES)
      .analyze();
    expect(results.violations).toHaveLength(0);
  });

  test('trigger has aria-haspopup and aria-expanded', async ({ page }) => {
    await page.goto('/#/light/date-range-picker/permutations');
    await page.waitForSelector('date-range-picker-permutations-page');

    const picker = page.locator('cs-date-range-picker[aria-label="Default date range"]');
    const trigger = picker.locator('button.trigger-button').first();

    await expect(trigger).toHaveAttribute('aria-haspopup', 'dialog');
    await expect(trigger).toHaveAttribute('aria-expanded', 'false');

    await trigger.click();
    await expect(trigger).toHaveAttribute('aria-expanded', 'true');
  });

  test('dropdown has role dialog and aria-modal', async ({ page }) => {
    await page.goto('/#/light/date-range-picker/permutations');
    await page.waitForSelector('date-range-picker-permutations-page');

    const picker = page.locator('cs-date-range-picker[aria-label="Default date range"]');
    const trigger = picker.locator('button.trigger-button').first();
    await trigger.click();

    const dialog = picker.locator('[role="dialog"]');
    await expect(dialog).toBeVisible();
    await expect(dialog).toHaveAttribute('aria-modal', 'true');
  });

  test('calendar grids have role grid', async ({ page }) => {
    await page.goto('/#/light/date-range-picker/permutations');
    await page.waitForSelector('date-range-picker-permutations-page');

    const picker = page.locator('cs-date-range-picker[aria-label="Default date range"]');
    const trigger = picker.locator('button.trigger-button').first();
    await trigger.click();

    const grids = picker.locator('[role="grid"]');
    const count = await grids.count();
    expect(count).toBe(2);
  });

  test('mode tabs have correct aria-selected', async ({ page }) => {
    await page.goto('/#/light/date-range-picker/permutations');
    await page.waitForSelector('date-range-picker-permutations-page');

    const picker = page.locator('cs-date-range-picker[aria-label="Default date range"]');
    const trigger = picker.locator('button.trigger-button').first();
    await trigger.click();

    const tabs = picker.locator('[role="tab"]');
    await expect(tabs.first()).toHaveAttribute('aria-selected', 'true');
    await expect(tabs.last()).toHaveAttribute('aria-selected', 'false');

    await tabs.last().click();
    await expect(tabs.first()).toHaveAttribute('aria-selected', 'false');
    await expect(tabs.last()).toHaveAttribute('aria-selected', 'true');
  });

  test('relative options have radiogroup role', async ({ page }) => {
    await page.goto('/#/light/date-range-picker/permutations');
    await page.waitForSelector('date-range-picker-permutations-page');

    const picker = page.locator('cs-date-range-picker[aria-label="Relative date range"]');
    const trigger = picker.locator('button.trigger-button').first();
    await trigger.click();

    const radiogroup = picker.locator('[role="radiogroup"]');
    await expect(radiogroup).toBeVisible();
  });

  test('disabled picker has aria-disabled', async ({ page }) => {
    await page.goto('/#/light/date-range-picker/permutations');
    await page.waitForSelector('date-range-picker-permutations-page');

    const picker = page.locator('cs-date-range-picker[aria-label="Disabled date range"]');
    const trigger = picker.locator('button.trigger-button').first();
    await expect(trigger).toHaveAttribute('aria-disabled', 'true');
  });

  test('error message has role alert', async ({ page }) => {
    await page.goto('/#/light/date-range-picker/permutations');
    await page.waitForSelector('date-range-picker-permutations-page');

    const picker = page.locator('cs-date-range-picker[aria-label="Default date range"]');
    const trigger = picker.locator('button.trigger-button').first();
    await trigger.click();

    const applyBtn = picker.locator('cs-button[variant="primary"]');
    await applyBtn.click();

    const alert = picker.locator('[role="alert"]');
    await expect(alert).toBeVisible();
  });
});
