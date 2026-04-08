import { test, expect } from '@playwright/test';

test.describe('Select — Integration', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#/light/select/permutations');
    await page.waitForSelector('select-permutations-page');
  });

  test('opens dropdown on trigger click', async ({ page }) => {
    const select = page.locator('cs-select[aria-label="Basic select"]');
    const trigger = select.locator('button.trigger').first();
    await trigger.click();

    const dropdown = select.locator('.dropdown');
    await expect(dropdown).toBeVisible();
  });

  test('closes dropdown on second trigger click', async ({ page }) => {
    const select = page.locator('cs-select[aria-label="Basic select"]');
    const trigger = select.locator('button.trigger').first();
    await trigger.click();
    await expect(select.locator('.dropdown')).toBeVisible();

    await trigger.click();
    await expect(select.locator('.dropdown')).not.toBeVisible();
  });

  test('selects an option and fires change event', async ({ page }) => {
    const select = page.locator('cs-select[aria-label="Basic select"]');
    const trigger = select.locator('button.trigger').first();
    await trigger.click();

    const detail = await select.evaluate((el) => {
      return new Promise<{ selectedOption: { label: string; value: string } }>((resolve) => {
        el.addEventListener('change', ((e: Event) => {
          resolve((e as CustomEvent).detail);
        }) as EventListener, { once: true });

        const option = el.shadowRoot?.querySelectorAll('.option')[1];
        (option as HTMLElement)?.click();
      });
    });

    expect(detail.selectedOption.label).toBe('Option 2');
    expect(detail.selectedOption.value).toBe('2');
  });

  test('closes dropdown after option selection', async ({ page }) => {
    const select = page.locator('cs-select[aria-label="Basic select"]');
    const trigger = select.locator('button.trigger').first();
    await trigger.click();

    const option = select.locator('.option').nth(0);
    await option.click();

    await expect(select.locator('.dropdown')).not.toBeVisible();
  });

  test('closes dropdown on Escape key', async ({ page }) => {
    const select = page.locator('cs-select[aria-label="Basic select"]');
    const trigger = select.locator('button.trigger').first();
    await trigger.click();
    await expect(select.locator('.dropdown')).toBeVisible();

    await page.keyboard.press('Escape');
    await expect(select.locator('.dropdown')).not.toBeVisible();
  });

  test('shows placeholder when no option selected', async ({ page }) => {
    const select = page.locator('cs-select[aria-label="Basic select"]');
    const triggerLabel = select.locator('.trigger-label');
    await expect(triggerLabel).toContainText('Choose an option');
  });

  test('shows selected option label in trigger', async ({ page }) => {
    const select = page.locator('cs-select[aria-label="Pre-selected"]');
    const triggerLabel = select.locator('.trigger-label');
    await expect(triggerLabel).toContainText('Option 2');
  });

  test('keyboard ArrowDown navigates options', async ({ page }) => {
    const select = page.locator('cs-select[aria-label="Basic select"]');
    const trigger = select.locator('button.trigger').first();
    await trigger.click();

    await page.keyboard.press('ArrowDown');

    const highlighted = select.locator('.option-highlighted');
    await expect(highlighted).toBeVisible();
  });

  test('keyboard Enter selects highlighted option', async ({ page }) => {
    const select = page.locator('cs-select[aria-label="Basic select"]');
    const trigger = select.locator('button.trigger').first();
    await trigger.click();

    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');

    await expect(select.locator('.dropdown')).not.toBeVisible();
    const triggerLabel = select.locator('.trigger-label');
    await expect(triggerLabel).not.toContainText('Choose an option');
  });

  test('filtering filters visible options', async ({ page }) => {
    const select = page.locator('cs-select[aria-label="Filterable select"]');
    const trigger = select.locator('button.trigger').first();
    await trigger.click();

    const filterInput = select.locator('.filter-input');
    await filterInput.fill('apple');

    const options = select.locator('.option');
    await expect(options).toHaveCount(1);
    await expect(options.first()).toContainText('Apple');
  });

  test('disabled select does not open', async ({ page }) => {
    const select = page.locator('cs-select[aria-label="Disabled select"]');
    const trigger = select.locator('button.trigger').first();
    await trigger.click({ force: true });

    await expect(select.locator('.dropdown')).not.toBeVisible();
  });

  test('displays grouped options with group labels', async ({ page }) => {
    const select = page.locator('cs-select[aria-label="Grouped select"]');
    const trigger = select.locator('button.trigger').first();
    await trigger.click();

    const groupLabels = select.locator('.group-label');
    await expect(groupLabels).toHaveCount(2);
    await expect(groupLabels.first()).toContainText('Group A');
  });
});
