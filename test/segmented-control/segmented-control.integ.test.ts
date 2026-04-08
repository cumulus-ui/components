import { test, expect } from '@playwright/test';

test.describe('SegmentedControl — Integration', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#/light/segmented-control/permutations');
    await page.waitForSelector('segmented-control-permutations-page');
  });

  test('clicking a segment selects it', async ({ page }) => {
    const control = page.locator('cs-segmented-control[label="Choose segment"]');
    const segments = control.locator('.segment');

    await segments.nth(1).click();

    const selectedId = await control.evaluate((el: any) => el.selectedId);
    expect(selectedId).toBe('seg-2');
  });

  test('selected segment has aria-pressed true', async ({ page }) => {
    const control = page.locator('cs-segmented-control[label="Choose segment"]');
    const segments = control.locator('.segment');

    const ariaPressed = await segments.first().evaluate(
      (el) => el.getAttribute('aria-pressed'),
    );
    expect(ariaPressed).toBe('true');

    const notPressed = await segments.nth(1).evaluate(
      (el) => el.getAttribute('aria-pressed'),
    );
    expect(notPressed).toBe('false');
  });

  test('arrow key navigates to next segment', async ({ page }) => {
    const control = page.locator('cs-segmented-control[label="Choose segment"]');
    const segments = control.locator('.segment');

    await segments.first().focus();
    await page.keyboard.press('ArrowRight');

    const selectedId = await control.evaluate((el: any) => el.selectedId);
    expect(selectedId).toBe('seg-2');
  });

  test('arrow keys wrap around', async ({ page }) => {
    const control = page.locator('cs-segmented-control[label="Choose segment"]');
    const segments = control.locator('.segment');

    await segments.nth(2).focus();
    await page.keyboard.press('ArrowRight');

    const selectedId = await control.evaluate((el: any) => el.selectedId);
    expect(selectedId).toBe('seg-1');
  });

  test('disabled segment cannot be selected', async ({ page }) => {
    const control = page.locator('cs-segmented-control[label="Options with disabled"]');
    const disabledSegment = control.locator('.segment.disabled');

    await disabledSegment.click({ force: true });

    const selectedId = await control.evaluate((el: any) => el.selectedId);
    expect(selectedId).toBe('opt-a');
  });

  test('disabled segment is skipped by arrow keys', async ({ page }) => {
    const control = page.locator('cs-segmented-control[label="Options with disabled"]');
    const segments = control.locator('.segment:not([disabled])');

    await segments.first().focus();
    await page.keyboard.press('ArrowRight');

    const selectedId = await control.evaluate((el: any) => el.selectedId);
    expect(selectedId).toBe('opt-c');
  });

  test('fires change event with detail', async ({ page }) => {
    const control = page.locator('cs-segmented-control[label="Choose segment"]');

    const detail = await control.evaluate((el) => {
      return new Promise<{ selectedId: string }>((resolve) => {
        el.addEventListener('change', ((e: Event) => {
          resolve((e as CustomEvent).detail);
        }) as EventListener, { once: true });
        const buttons = el.shadowRoot!.querySelectorAll('.segment');
        (buttons[1] as HTMLButtonElement).click();
      });
    });

    expect(detail.selectedId).toBe('seg-2');
  });

  test('has group role with aria-label', async ({ page }) => {
    const control = page.locator('cs-segmented-control[label="Choose segment"]');
    const group = control.locator('[role="group"]');
    await expect(group).toBeAttached();

    const label = await group.evaluate((el) => el.getAttribute('aria-label'));
    expect(label).toBe('Choose segment');
  });

  test('segments render with correct text', async ({ page }) => {
    const control = page.locator('cs-segmented-control[label="Choose segment"]');
    const segments = control.locator('.segment');

    await expect(segments).toHaveCount(3);
    await expect(segments.first()).toContainText('Segment 1');
    await expect(segments.nth(1)).toContainText('Segment 2');
    await expect(segments.nth(2)).toContainText('Segment 3');
  });

  test('icon-only segments have aria-label', async ({ page }) => {
    const control = page.locator('cs-segmented-control[label="View mode"]');
    const segments = control.locator('.segment');

    const ariaLabel = await segments.first().evaluate(
      (el) => el.getAttribute('aria-label'),
    );
    expect(ariaLabel).toBe('Map view');
  });
});
