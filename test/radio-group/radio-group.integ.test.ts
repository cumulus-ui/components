import { test, expect } from '@playwright/test';

test.describe('RadioGroup — Integration', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#/light/radio-group/permutations');
    await page.waitForSelector('radio-group-permutations-page');
  });

  test('clicking a radio button selects it', async ({ page }) => {
    const group = page.locator('cs-radio-group').first();
    const items = group.locator('.radio');

    await items.nth(1).click();

    const selectedValue = await group.evaluate((el: any) => el.value);
    expect(selectedValue).toBe('option-2');
  });

  test('arrow key navigates and selects next item', async ({ page }) => {
    const group = page.locator('cs-radio-group').first();
    const inputs = group.locator('.native-input');

    await inputs.first().focus();
    await page.keyboard.press('ArrowDown');

    const selectedValue = await group.evaluate((el: any) => el.value);
    expect(selectedValue).toBe('option-2');
  });

  test('arrow keys wrap around', async ({ page }) => {
    const group = page.locator('cs-radio-group').first();
    const inputs = group.locator('.native-input');

    await inputs.nth(2).focus();
    await page.keyboard.press('ArrowDown');

    const selectedValue = await group.evaluate((el: any) => el.value);
    expect(selectedValue).toBe('option-1');
  });

  test('disabled item is skipped by arrow keys', async ({ page }) => {
    const groups = page.locator('cs-radio-group');
    const disabledGroup = groups.nth(3);

    const inputs = disabledGroup.locator('.native-input');
    await inputs.first().focus();
    await page.keyboard.press('ArrowDown');

    const selectedValue = await disabledGroup.evaluate((el: any) => el.value);
    expect(selectedValue).toBe('enabled-2');
  });

  test('disabled group blocks interaction', async ({ page }) => {
    const disabledGroup = page.locator('cs-radio-group[disabled]').first();

    const initialValue = await disabledGroup.evaluate((el: any) => el.value);
    await disabledGroup.locator('.radio').last().click({ force: true });

    const afterValue = await disabledGroup.evaluate((el: any) => el.value);
    expect(afterValue).toBe(initialValue);
  });

  test('readOnly group blocks selection change', async ({ page }) => {
    const readOnlyGroup = page.locator('cs-radio-group[readonly]').first();

    expect(await readOnlyGroup.evaluate((el: any) => el.value)).toBe('ro-1');
    await readOnlyGroup.locator('.radio').last().click();
    expect(await readOnlyGroup.evaluate((el: any) => el.value)).toBe('ro-1');
  });

  test('fires change event with detail', async ({ page }) => {
    const group = page.locator('cs-radio-group').first();

    const detail = await group.evaluate((el) => {
      return new Promise<{ value: string }>((resolve) => {
        el.addEventListener('change', ((e: Event) => {
          resolve((e as CustomEvent).detail);
        }) as EventListener, { once: true });
        el.shadowRoot!.querySelectorAll('.radio')[1].dispatchEvent(
          new MouseEvent('click', { bubbles: true, composed: true })
        );
      });
    });

    expect(detail.value).toBe('option-2');
  });

  test('description renders when provided', async ({ page }) => {
    const groups = page.locator('cs-radio-group');
    const descGroup = groups.nth(2);
    const desc = descGroup.locator('.radio-description');

    await expect(desc.first()).toBeVisible();
    await expect(desc.first()).toHaveText(/First option with extra info/);
  });

  test('checked radio has visual indicator', async ({ page }) => {
    const group = page.locator('cs-radio-group').first();
    const firstControl = group.locator('.radio-control').first();

    await expect(firstControl).toHaveClass(/radio-control--checked/);
  });

  test('has radiogroup role', async ({ page }) => {
    const group = page.locator('cs-radio-group').first();
    const container = group.locator('[role="radiogroup"]');
    await expect(container).toBeAttached();
  });
});

test.describe('RadioGroup — Form Submit', () => {
  test('form submission includes selected radio value', async ({ page }) => {
    await page.goto('/#/light/radio-group/form-submit');
    await page.waitForSelector('radio-group-form-submit-page');

    await page.locator('button[type="submit"]').click();
    const result = page.locator('#form-result');

    await expect(result).toBeVisible();
    await expect(result).toContainText('plan = standard');
  });
});
