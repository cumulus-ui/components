import { test, expect } from '@playwright/test';

test.describe('DateRangePicker — Integration', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#/light/date-range-picker/permutations');
    await page.waitForSelector('date-range-picker-permutations-page');
  });

  test('opens dropdown on trigger click', async ({ page }) => {
    const picker = page.locator('cs-date-range-picker[aria-label="Default date range"]');
    const trigger = picker.locator('button.trigger-button').first();
    await trigger.click();

    const dropdown = picker.locator('.dropdown');
    await expect(dropdown).toBeVisible();
  });

  test('closes dropdown on second trigger click', async ({ page }) => {
    const picker = page.locator('cs-date-range-picker[aria-label="Default date range"]');
    const trigger = picker.locator('button.trigger-button').first();
    await trigger.click();
    await expect(picker.locator('.dropdown')).toBeVisible();

    await trigger.click();
    await expect(picker.locator('.dropdown')).not.toBeVisible();
  });

  test('closes dropdown on Escape', async ({ page }) => {
    const picker = page.locator('cs-date-range-picker[aria-label="Default date range"]');
    const trigger = picker.locator('button.trigger-button').first();
    await trigger.click();
    await expect(picker.locator('.dropdown')).toBeVisible();

    await page.keyboard.press('Escape');
    await expect(picker.locator('.dropdown')).not.toBeVisible();
  });

  test('closes dropdown on Cancel button', async ({ page }) => {
    const picker = page.locator('cs-date-range-picker[aria-label="Default date range"]');
    const trigger = picker.locator('button.trigger-button').first();
    await trigger.click();
    await expect(picker.locator('.dropdown')).toBeVisible();

    const cancelBtn = picker.locator('cs-button[variant="link"]');
    await cancelBtn.click();
    await expect(picker.locator('.dropdown')).not.toBeVisible();
  });

  test('shows placeholder when no value selected', async ({ page }) => {
    const picker = page.locator('cs-date-range-picker[aria-label="Default date range"]');
    const labelText = picker.locator('.label-text');
    await expect(labelText).toContainText('Filter by date range');
  });

  test('shows pre-selected absolute range in trigger', async ({ page }) => {
    const picker = page.locator('cs-date-range-picker[aria-label="Absolute date range"]');
    const labelText = picker.locator('.label-text');
    await expect(labelText).toContainText('2025-01-01');
    await expect(labelText).toContainText('2025-01-31');
  });

  test('displays mode switch tabs in default mode', async ({ page }) => {
    const picker = page.locator('cs-date-range-picker[aria-label="Default date range"]');
    const trigger = picker.locator('button.trigger-button').first();
    await trigger.click();

    const tabs = picker.locator('[role="tab"]');
    await expect(tabs).toHaveCount(2);
    await expect(tabs.first()).toContainText('Absolute');
    await expect(tabs.last()).toContainText('Relative');
  });

  test('hides mode switch in absolute-only mode', async ({ page }) => {
    const picker = page.locator('cs-date-range-picker[aria-label="Absolute date range"]');
    const trigger = picker.locator('button.trigger-button').first();
    await trigger.click();

    const tabs = picker.locator('[role="tab"]');
    await expect(tabs).toHaveCount(0);
  });

  test('shows calendar grids in absolute mode', async ({ page }) => {
    const picker = page.locator('cs-date-range-picker[aria-label="Default date range"]');
    const trigger = picker.locator('button.trigger-button').first();
    await trigger.click();

    const grids = picker.locator('[role="grid"]');
    await expect(grids).toHaveCount(2);
  });

  test('navigates months with prev/next buttons', async ({ page }) => {
    const picker = page.locator('cs-date-range-picker[aria-label="Default date range"]');
    const trigger = picker.locator('button.trigger-button').first();
    await trigger.click();

    const headers = picker.locator('.calendar-header-page');
    const firstHeader = await headers.first().textContent();

    const nextBtn = picker.locator('cs-button[icon-name="angle-right"]');
    await nextBtn.click();

    const newFirstHeader = await headers.first().textContent();
    expect(newFirstHeader).not.toBe(firstHeader);
  });

  test('selects a date range and fires change event', async ({ page }) => {
    const picker = page.locator('cs-date-range-picker[aria-label="Default date range"]');
    const trigger = picker.locator('button.trigger-button').first();
    await trigger.click();

    const days = picker.locator('.calendar-day-number');
    const dayCount = await days.count();
    expect(dayCount).toBeGreaterThan(0);

    const enabledDays = picker.locator('.calendar-day:not(.calendar-day-empty):not(.calendar-day-disabled)');
    await enabledDays.first().click();
    await enabledDays.nth(5).click();

    const detail = await picker.evaluate((el) => {
      return new Promise<{ value: { type: string; startDate: string; endDate: string } }>((resolve) => {
        el.addEventListener('change', ((e: Event) => {
          resolve((e as CustomEvent).detail);
        }) as EventListener, { once: true });

        const applyBtn = el.shadowRoot?.querySelector('cs-button[variant="primary"]');
        (applyBtn as HTMLElement)?.click();
      });
    });

    expect(detail.value.type).toBe('absolute');
    expect(detail.value.startDate).toBeTruthy();
    expect(detail.value.endDate).toBeTruthy();
  });

  test('switches to relative mode and selects preset', async ({ page }) => {
    const picker = page.locator('cs-date-range-picker[aria-label="Default date range"]');
    const trigger = picker.locator('button.trigger-button').first();
    await trigger.click();

    const relativeTab = picker.locator('[role="tab"]').last();
    await relativeTab.click();

    const radios = picker.locator('.relative-radio');
    await expect(radios.first()).toBeVisible();
    await radios.first().click();

    const detail = await picker.evaluate((el) => {
      return new Promise<{ value: { type: string; key: string; amount: number; unit: string } }>((resolve) => {
        el.addEventListener('change', ((e: Event) => {
          resolve((e as CustomEvent).detail);
        }) as EventListener, { once: true });

        const applyBtn = el.shadowRoot?.querySelector('cs-button[variant="primary"]');
        (applyBtn as HTMLElement)?.click();
      });
    });

    expect(detail.value.type).toBe('relative');
    expect(detail.value.key).toBe('last-5-min');
    expect(detail.value.amount).toBe(5);
    expect(detail.value.unit).toBe('minute');
  });

  test('shows relative options in relative-only mode', async ({ page }) => {
    const picker = page.locator('cs-date-range-picker[aria-label="Relative date range"]');
    const trigger = picker.locator('button.trigger-button').first();
    await trigger.click();

    const radios = picker.locator('.relative-radio');
    const count = await radios.count();
    expect(count).toBe(7);
  });

  test('disabled picker does not open', async ({ page }) => {
    const picker = page.locator('cs-date-range-picker[aria-label="Disabled date range"]');
    const trigger = picker.locator('button.trigger-button').first();
    await trigger.click({ force: true });

    await expect(picker.locator('.dropdown')).not.toBeVisible();
  });

  test('shows error when applying without selection', async ({ page }) => {
    const picker = page.locator('cs-date-range-picker[aria-label="Default date range"]');
    const trigger = picker.locator('button.trigger-button').first();
    await trigger.click();

    const applyBtn = picker.locator('cs-button[variant="primary"]');
    await applyBtn.click();

    const error = picker.locator('.error-message');
    await expect(error).toBeVisible();
  });
});
