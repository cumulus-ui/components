import { test, expect } from '@playwright/test';

test.describe('Multiselect — Integration', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#/light/multiselect/permutations');
    await page.waitForSelector('multiselect-permutations-page');
  });

  test('opens dropdown on trigger click', async ({ page }) => {
    const ms = page.locator('cs-multiselect[aria-label="Basic multiselect"]');
    const trigger = ms.locator('button.trigger').first();
    await trigger.click();

    const dropdown = ms.locator('.dropdown');
    await expect(dropdown).toBeVisible();
  });

  test('selects option with checkbox and fires change event', async ({ page }) => {
    const ms = page.locator('cs-multiselect[aria-label="Basic multiselect"]');
    const trigger = ms.locator('button.trigger').first();
    await trigger.click();

    const detail = await ms.evaluate((el) => {
      return new Promise<{ selectedOptions: Array<{ label: string; value: string }> }>((resolve) => {
        el.addEventListener('change', ((e: Event) => {
          resolve((e as CustomEvent).detail);
        }) as EventListener, { once: true });

        const option = el.shadowRoot?.querySelectorAll('.option')[0];
        (option as HTMLElement)?.click();
      });
    });

    expect(detail.selectedOptions).toHaveLength(1);
    expect(detail.selectedOptions[0].label).toBe('Option 1');
  });

  test('renders checkboxes in dropdown', async ({ page }) => {
    const ms = page.locator('cs-multiselect[aria-label="Basic multiselect"]');
    const trigger = ms.locator('button.trigger').first();
    await trigger.click();

    const checkboxes = ms.locator('.option-checkbox');
    const count = await checkboxes.count();
    expect(count).toBeGreaterThan(0);
  });

  test('toggle selection deselects already-selected option', async ({ page }) => {
    const ms = page.locator('cs-multiselect[aria-label="Tokens multiselect"]');
    const trigger = ms.locator('button.trigger').first();
    await trigger.click();

    const detail = await ms.evaluate((el) => {
      return new Promise<{ selectedOptions: Array<{ label: string; value: string }> }>((resolve) => {
        el.addEventListener('change', ((e: Event) => {
          resolve((e as CustomEvent).detail);
        }) as EventListener, { once: true });

        const firstOption = el.shadowRoot?.querySelectorAll('.option')[0];
        (firstOption as HTMLElement)?.click();
      });
    });

    expect(detail.selectedOptions.length).toBe(2);
  });

  test('renders tokens for selected options', async ({ page }) => {
    const ms = page.locator('cs-multiselect[aria-label="Tokens multiselect"]');
    const tokenGroup = ms.locator('cs-token-group');
    await expect(tokenGroup).toBeVisible();
  });

  test('hides tokens when hideTokens is set', async ({ page }) => {
    const ms = page.locator('cs-multiselect[aria-label="Hidden tokens multiselect"]');
    const tokenGroup = ms.locator('cs-token-group');
    await expect(tokenGroup).not.toBeVisible();
  });

  test('keepOpen prevents dropdown from closing on selection', async ({ page }) => {
    const ms = page.locator('cs-multiselect[aria-label="Keep open multiselect"]');
    const trigger = ms.locator('button.trigger').first();
    await trigger.click();

    const firstOption = ms.locator('.option').first();
    await firstOption.click();

    await expect(ms.locator('.dropdown')).toBeVisible();
  });

  test('closes dropdown on Escape key', async ({ page }) => {
    const ms = page.locator('cs-multiselect[aria-label="Basic multiselect"]');
    const trigger = ms.locator('button.trigger').first();
    await trigger.click();
    await expect(ms.locator('.dropdown')).toBeVisible();

    await page.keyboard.press('Escape');
    await expect(ms.locator('.dropdown')).not.toBeVisible();
  });

  test('disabled multiselect does not open', async ({ page }) => {
    const ms = page.locator('cs-multiselect[aria-label="Disabled multiselect"]');
    const trigger = ms.locator('button.trigger').first();
    await trigger.click({ force: true });

    await expect(ms.locator('.dropdown')).not.toBeVisible();
  });

  test('displays grouped options', async ({ page }) => {
    const ms = page.locator('cs-multiselect[aria-label="Grouped multiselect"]');
    const trigger = ms.locator('button.trigger').first();
    await trigger.click();

    const groupLabels = ms.locator('.group-label');
    await expect(groupLabels).toHaveCount(2);
  });
});
