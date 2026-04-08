import { test, expect } from '@playwright/test';

test.describe('KeyValuePairs — Integration', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#/light/key-value-pairs/permutations');
    await page.waitForSelector('key-value-pairs-permutations-page');
  });

  test('renders key-value pairs', async ({ page }) => {
    const kvp = page.locator('cs-key-value-pairs').first();

    const termCount = await kvp.evaluate((el) => {
      return el.shadowRoot?.querySelectorAll('.term').length;
    });

    expect(termCount).toBe(3);
  });

  test('renders labels correctly', async ({ page }) => {
    const kvp = page.locator('cs-key-value-pairs').first();

    const labels = await kvp.evaluate((el) => {
      const terms = el.shadowRoot?.querySelectorAll('.key-label');
      return Array.from(terms || []).map(t => t.textContent?.trim());
    });

    expect(labels).toContain('Instance ID');
    expect(labels).toContain('State');
    expect(labels).toContain('Type');
  });

  test('renders values correctly', async ({ page }) => {
    const kvp = page.locator('cs-key-value-pairs').first();

    const values = await kvp.evaluate((el) => {
      const details = el.shadowRoot?.querySelectorAll('.detail');
      return Array.from(details || []).map(d => d.textContent?.trim());
    });

    expect(values).toContain('i-0123456789abcdef0');
    expect(values).toContain('Running');
  });

  test('multi-column layout applies grid columns', async ({ page }) => {
    const kvp = page.locator('cs-key-value-pairs[columns="3"]');

    const style = await kvp.evaluate((el) => {
      const grid = el.shadowRoot?.querySelector('.grid');
      return (grid as HTMLElement)?.style.gridTemplateColumns;
    });

    expect(style).toContain('repeat(3');
  });

  test('renders group titles', async ({ page }) => {
    const kvp = page.locator('cs-key-value-pairs').last();

    const groupTitles = await kvp.evaluate((el) => {
      const titles = el.shadowRoot?.querySelectorAll('.group-title');
      return Array.from(titles || []).map(t => t.textContent?.trim());
    });

    expect(groupTitles).toContain('Instance details');
    expect(groupTitles).toContain('Network');
  });

  test('has accessible role and label', async ({ page }) => {
    const kvp = page.locator('cs-key-value-pairs').first();

    const role = await kvp.evaluate((el) => {
      return el.shadowRoot?.querySelector('[role="group"]')?.getAttribute('role');
    });

    expect(role).toBe('group');
  });
});
