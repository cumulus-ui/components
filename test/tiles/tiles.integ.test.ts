import { test, expect } from '@playwright/test';

test.describe('Tiles — Integration', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#/light/tiles/permutations');
    await page.waitForSelector('tiles-permutations-page');
  });

  test('clicking a tile selects it', async ({ page }) => {
    const tiles = page.locator('cs-tiles').first();
    const tileItems = tiles.locator('.tile-container');

    await tileItems.nth(1).click();

    const selectedValue = await tiles.evaluate((el: any) => el.value);
    expect(selectedValue).toBe('t2');
  });

  test('arrow key navigates and selects next tile', async ({ page }) => {
    const tiles = page.locator('cs-tiles').first();
    const inputs = tiles.locator('.native-input');

    await inputs.first().focus();
    await page.keyboard.press('ArrowRight');

    const selectedValue = await tiles.evaluate((el: any) => el.value);
    expect(selectedValue).toBe('t2');
  });

  test('arrow keys wrap around', async ({ page }) => {
    const tiles = page.locator('cs-tiles').first();
    const inputs = tiles.locator('.native-input');

    await inputs.nth(2).focus();
    await page.keyboard.press('ArrowDown');

    const selectedValue = await tiles.evaluate((el: any) => el.value);
    expect(selectedValue).toBe('t1');
  });

  test('disabled tile is skipped by arrow keys', async ({ page }) => {
    const tilesGroups = page.locator('cs-tiles');
    const disabledTilesGroup = tilesGroups.nth(2);

    const inputs = disabledTilesGroup.locator('.native-input');
    await inputs.first().focus();
    await page.keyboard.press('ArrowRight');

    const selectedValue = await disabledTilesGroup.evaluate((el: any) => el.value);
    expect(selectedValue).toBe('enabled-b');
  });

  test('disabled group blocks interaction', async ({ page }) => {
    const disabledGroup = page.locator('cs-tiles[disabled]').first();

    const initialValue = await disabledGroup.evaluate((el: any) => el.value);
    await disabledGroup.locator('.tile-container').last().click({ force: true });

    const afterValue = await disabledGroup.evaluate((el: any) => el.value);
    expect(afterValue).toBe(initialValue);
  });

  test('readOnly group blocks selection change', async ({ page }) => {
    const readOnlyGroup = page.locator('cs-tiles[read-only]').first();

    expect(await readOnlyGroup.evaluate((el: any) => el.value)).toBe('ro-1');
    await readOnlyGroup.locator('.tile-container').last().click();
    expect(await readOnlyGroup.evaluate((el: any) => el.value)).toBe('ro-1');
  });

  test('fires change event with detail', async ({ page }) => {
    const tiles = page.locator('cs-tiles').first();

    const detail = await tiles.evaluate((el) => {
      return new Promise<{ value: string }>((resolve) => {
        el.addEventListener('change', ((e: Event) => {
          resolve((e as CustomEvent).detail);
        }) as EventListener, { once: true });
        el.shadowRoot!.querySelectorAll('.tile-container')[1].dispatchEvent(
          new MouseEvent('click', { bubbles: true, composed: true })
        );
      });
    });

    expect(detail.value).toBe('t2');
  });

  test('description renders when provided', async ({ page }) => {
    const tiles = page.locator('cs-tiles').first();
    const desc = tiles.locator('.description');

    await expect(desc.first()).toBeVisible();
    await expect(desc.first()).toHaveText(/First tile description/);
  });

  test('selected tile has visual indicator', async ({ page }) => {
    const tiles = page.locator('cs-tiles').first();
    const firstTile = tiles.locator('.tile-container').first();

    await expect(firstTile).toHaveClass(/selected/);
  });

  test('has radiogroup role', async ({ page }) => {
    const tiles = page.locator('cs-tiles').first();
    const container = tiles.locator('[role="radiogroup"]');
    await expect(container).toBeAttached();
  });

  test('columns class is applied', async ({ page }) => {
    const tilesGroups = page.locator('cs-tiles');
    const twoColGroup = tilesGroups.nth(1);
    const columnsEl = twoColGroup.locator('.columns');

    await expect(columnsEl).toHaveClass(/column-2/);
  });
});

test.describe('Tiles — Form Submit', () => {
  test('form submission includes selected tile value', async ({ page }) => {
    await page.goto('/#/light/tiles/form-submit');
    await page.waitForSelector('tiles-form-submit-page');

    await page.locator('button[type="submit"]').click();
    const result = page.locator('#form-result');

    await expect(result).toBeVisible();
    await expect(result).toContainText('instance = t3.medium');
  });
});
