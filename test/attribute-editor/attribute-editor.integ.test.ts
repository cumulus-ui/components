import { test, expect } from '@playwright/test';

test.describe('Attribute Editor — Integration', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#/light/attribute-editor/permutations');
    await page.waitForSelector('attribute-editor-permutations-page');
  });

  test('renders rows matching items count', async ({ page }) => {
    const rows = page.locator('cs-attribute-editor').first().locator('[data-row-index]');
    await expect(rows).toHaveCount(2);
  });

  test('add button fires addButtonClick event', async ({ page }) => {
    const editor = page.locator('cs-attribute-editor').first();
    const rowsBefore = await editor.locator('[data-row-index]').count();

    await editor.locator('cs-button[icon-name="add-plus"]').click();

    const rowsAfter = await editor.locator('[data-row-index]').count();
    expect(rowsAfter).toBe(rowsBefore + 1);
  });

  test('remove button fires removeButtonClick with itemIndex', async ({ page }) => {
    const editor = page.locator('cs-attribute-editor').first();
    const rowsBefore = await editor.locator('[data-row-index]').count();

    const removeBtn = editor.locator('[data-row-index="0"] cs-button').first();
    await removeBtn.click();

    const rowsAfter = await editor.locator('[data-row-index]').count();
    expect(rowsAfter).toBe(rowsBefore - 1);
  });

  test('empty state shown when no items', async ({ page }) => {
    const emptyEditor = page.locator('cs-attribute-editor').nth(1);
    const emptyEl = emptyEditor.locator('.empty');
    await expect(emptyEl).toHaveCount(1);
  });

  test('disabled add button prevents interaction', async ({ page }) => {
    const disabledEditor = page.locator('cs-attribute-editor').nth(2);
    const addBtn = disabledEditor.locator('cs-button[icon-name="add-plus"]');
    const isDisabled = await addBtn.evaluate(
      (el) => el.hasAttribute('disabled') || el.getAttribute('disable-add-button') !== null
    );
    expect(isDisabled).toBe(true);
  });

  test('non-removable items hide remove button', async ({ page }) => {
    const nonRemovableEditor = page.locator('cs-attribute-editor').nth(3);
    const removeBtns = nonRemovableEditor.locator('.remove-button-container');
    await expect(removeBtns).toHaveCount(0);
  });

  test('definition fields render form fields with labels', async ({ page }) => {
    const editor = page.locator('cs-attribute-editor').first();
    const formFields = editor.locator('[data-row-index="0"] cs-form-field');
    await expect(formFields).toHaveCount(2);
  });
});
