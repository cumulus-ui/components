import { test, expect } from '@playwright/test';

test.describe('Tag Editor — Integration', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#/light/tag-editor/permutations');
    await page.waitForSelector('tag-editor-permutations-page');
  });

  test('renders rows matching tags count', async ({ page }) => {
    const rows = page.locator('cs-tag-editor').first().locator('[data-row-index]');
    await expect(rows).toHaveCount(3);
  });

  test('add button adds a new tag row', async ({ page }) => {
    const editor = page.locator('cs-tag-editor').first();
    const rowsBefore = await editor.locator('[data-row-index]').count();

    await editor.locator('cs-button[icon-name="add-plus"]').click();

    const rowsAfter = await editor.locator('[data-row-index]').count();
    expect(rowsAfter).toBe(rowsBefore + 1);
  });

  test('remove non-existing tag removes it from list', async ({ page }) => {
    const editor = page.locator('cs-tag-editor').first();
    const rowsBefore = await editor.locator('[data-row-index]').count();

    const lastRow = editor.locator('[data-row-index="2"]');
    await lastRow.locator('cs-button').click();

    const rowsAfter = await editor.locator('[data-row-index]').count();
    expect(rowsAfter).toBe(rowsBefore - 1);
  });

  test('remove existing tag marks it for removal and shows undo', async ({ page }) => {
    const editor = page.locator('cs-tag-editor').first();

    const firstRow = editor.locator('[data-row-index="0"]');
    await firstRow.locator('cs-button').click();

    const updatedFirstRow = editor.locator('[data-row-index="0"]');
    const undoBtn = updatedFirstRow.locator('cs-button');
    const btnText = await undoBtn.evaluate(
      (el) => el.textContent?.trim()
    );
    expect(btnText).toBe('Undo');
  });

  test('undo restores a marked-for-removal tag', async ({ page }) => {
    const editor = page.locator('cs-tag-editor').first();

    const firstRow = editor.locator('[data-row-index="0"]');
    await firstRow.locator('cs-button').click();

    const undoBtn = editor.locator('[data-row-index="0"] cs-button');
    await undoBtn.click();

    const restoredBtn = editor.locator('[data-row-index="0"] cs-button');
    const btnText = await restoredBtn.evaluate(
      (el) => el.textContent?.trim()
    );
    expect(btnText).toBe('Remove');
  });

  test('empty state shown when no tags', async ({ page }) => {
    const emptyEditor = page.locator('cs-tag-editor').nth(1);
    const text = await emptyEditor.evaluate(
      (el) => el.shadowRoot?.textContent ?? ''
    );
    expect(text).toContain('No tags');
  });

  test('tag limit disables add button when reached', async ({ page }) => {
    const limitEditor = page.locator('cs-tag-editor').nth(3);
    const addBtn = limitEditor.locator('cs-button[icon-name="add-plus"]');
    const isDisabled = await addBtn.evaluate(
      (el) => el.hasAttribute('disabled')
    );
    expect(isDisabled).toBe(true);
  });

  test('each tag row has key and value inputs', async ({ page }) => {
    const editor = page.locator('cs-tag-editor').first();
    const firstRow = editor.locator('[data-row-index="0"]');
    const inputs = firstRow.locator('cs-input');
    await expect(inputs).toHaveCount(2);
  });
});
