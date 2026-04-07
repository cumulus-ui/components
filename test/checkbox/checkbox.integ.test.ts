import { test, expect } from '@playwright/test';

test.describe('Checkbox — Integration', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#/light/checkbox/permutations');
    await page.waitForSelector('checkbox-permutations-page');
  });

  test('click toggles checked state', async ({ page }) => {
    const checkbox = page.locator('cs-checkbox').first();

    const isChecked = () => checkbox.evaluate((el: any) => el.checked);

    expect(await isChecked()).toBe(false);
    await checkbox.click();
    expect(await isChecked()).toBe(true);
    await checkbox.click();
    expect(await isChecked()).toBe(false);
  });

  test('Space key toggles checked', async ({ page }) => {
    const checkbox = page.locator('cs-checkbox').first();
    const input = checkbox.locator('.native-input');

    await input.focus();
    expect(await checkbox.evaluate((el: any) => el.checked)).toBe(false);
    await input.press('Space');
    expect(await checkbox.evaluate((el: any) => el.checked)).toBe(true);
  });

  test('disabled checkbox blocks interaction', async ({ page }) => {
    const disabledCheckbox = page.locator('cs-checkbox[disabled]').first();

    const wasChecked = await disabledCheckbox.evaluate((el: any) => el.checked);
    await disabledCheckbox.click({ force: true });
    expect(await disabledCheckbox.evaluate((el: any) => el.checked)).toBe(wasChecked);
  });

  test('readOnly checkbox blocks toggle', async ({ page }) => {
    const readOnlyCheckbox = page.locator('cs-checkbox[read-only]').first();

    expect(await readOnlyCheckbox.evaluate((el: any) => el.checked)).toBe(true);
    await readOnlyCheckbox.click();
    expect(await readOnlyCheckbox.evaluate((el: any) => el.checked)).toBe(true);
  });

  test('checked checkbox has visual indicator', async ({ page }) => {
    const checked = page.locator('cs-checkbox[checked]').first();
    const box = checked.locator('.styled-box');

    await expect(box).toHaveClass(/styled-box-checked/);
  });

  test('indeterminate checkbox has visual indicator', async ({ page }) => {
    const indet = page.locator('cs-checkbox[indeterminate]').first();
    const box = indet.locator('.styled-box');

    await expect(box).toHaveClass(/styled-box-indeterminate/);
  });

  test('description renders when provided', async ({ page }) => {
    const withDesc = page.locator('cs-checkbox[description]').first();
    const desc = withDesc.locator('.description');

    await expect(desc).toBeVisible();
    await expect(desc).toHaveText(/Additional info/);
  });

  test('fires change event with detail', async ({ page }) => {
    const checkbox = page.locator('cs-checkbox').first();

    const detail = await checkbox.evaluate((el) => {
      return new Promise<{ checked: boolean; indeterminate: boolean }>((resolve) => {
        el.addEventListener('change', ((e: Event) => {
          resolve((e as CustomEvent).detail);
        }) as EventListener, { once: true });
        (el as HTMLElement).click();
      });
    });

    expect(detail.checked).toBe(true);
    expect(detail.indeterminate).toBe(false);
  });
});

test.describe('Checkbox — Form Submit', () => {
  test('form submission includes checked checkbox value', async ({ page }) => {
    await page.goto('/#/light/checkbox/form-submit');
    await page.waitForSelector('checkbox-form-submit-page');

    const agreeCheckbox = page.locator('cs-checkbox[name="agree"]');
    await agreeCheckbox.click();

    await page.locator('button[type="submit"]').click();
    const result = page.locator('#form-result');

    await expect(result).toBeVisible();
    await expect(result).toContainText('agree = yes');
  });

  test('unchecked checkbox not included in FormData', async ({ page }) => {
    await page.goto('/#/light/checkbox/form-submit');
    await page.waitForSelector('checkbox-form-submit-page');

    const notifCheckbox = page.locator('cs-checkbox[name="notifications"]');
    await notifCheckbox.click();

    await page.locator('button[type="submit"]').click();
    const result = page.locator('#form-result');

    await expect(result).toBeVisible();
    const text = await result.textContent();
    expect(text).not.toContain('notifications');
  });
});
