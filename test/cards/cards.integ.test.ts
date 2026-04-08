import { test, expect } from '@playwright/test';

test.describe('Cards — Integration', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#/light/cards/permutations');
    await page.waitForSelector('cards-permutations-page');
  });

  test('renders basic grid with cards', async ({ page }) => {
    const cards = page.locator('cs-cards').first();
    const items = await cards.evaluate((el: any) => {
      const list = el.shadowRoot?.querySelector('.list');
      return list?.querySelectorAll('.card')?.length ?? 0;
    });
    expect(items).toBe(6);
  });

  test('card header renders item name', async ({ page }) => {
    const cards = page.locator('cs-cards').first();
    const headerText = await cards.evaluate((el: any) => {
      return el.shadowRoot?.querySelector('.card-header')?.textContent?.trim();
    });
    expect(headerText).toContain('Instance A');
  });

  test('card sections render correctly', async ({ page }) => {
    const cards = page.locator('cs-cards').first();
    const sectionHeaders = await cards.evaluate((el: any) => {
      const sections = el.shadowRoot?.querySelectorAll('.section-header');
      return Array.from(sections ?? []).map((s: any) => s.textContent?.trim());
    });
    expect(sectionHeaders).toContain('Description');
    expect(sectionHeaders).toContain('Status');
  });

  test('multi-selection shows checkboxes', async ({ page }) => {
    const cards = page.locator('cs-cards[selection-type="multi"]');
    const checkboxCount = await cards.evaluate((el: any) => {
      const controls = el.shadowRoot?.querySelectorAll('.selection-control cs-checkbox');
      return controls?.length ?? 0;
    });
    expect(checkboxCount).toBe(6);
  });

  test('selectionChange fires on checkbox click', async ({ page }) => {
    const cards = page.locator('cs-cards[selection-type="multi"]');
    const selectedCount = await cards.evaluate((el: any) => {
      return new Promise<number>((resolve) => {
        el.addEventListener('selectionChange', ((e: CustomEvent) => {
          resolve(e.detail.selectedItems.length);
        }) as EventListener, { once: true });
        const checkbox = el.shadowRoot?.querySelector('.selection-control cs-checkbox');
        checkbox?.click();
      });
    });
    expect(selectedCount).toBe(1);
  });

  test('loading state shows spinner', async ({ page }) => {
    const cards = page.locator('cs-cards[loading]');
    const hasSpinner = await cards.evaluate((el: any) => {
      return !!el.shadowRoot?.querySelector('.loading cs-spinner');
    });
    expect(hasSpinner).toBe(true);
  });

  test('loading state shows loading text', async ({ page }) => {
    const cards = page.locator('cs-cards[loading]');
    const text = await cards.evaluate((el: any) => {
      return el.shadowRoot?.querySelector('.loading')?.textContent?.trim();
    });
    expect(text).toContain('Loading instances...');
  });

  test('empty state shows empty slot content', async ({ page }) => {
    const cardsAll = page.locator('cs-cards');
    const emptyCards = cardsAll.nth(3);
    const emptyText = await emptyCards.evaluate((el: any) => {
      const emptyDiv = el.shadowRoot?.querySelector('.empty');
      const slot = emptyDiv?.querySelector('slot[name="empty"]');
      const assigned = slot?.assignedNodes({ flatten: true });
      return assigned?.[0]?.textContent?.trim();
    });
    expect(emptyText).toBe('No instances found');
  });

  test('header slot renders', async ({ page }) => {
    const cards = page.locator('cs-cards').first();
    const hasHeader = await cards.evaluate((el: any) => {
      const slot = el.shadowRoot?.querySelector('slot[name="header"]');
      return slot?.assignedNodes({ flatten: true }).length > 0;
    });
    expect(hasHeader).toBe(true);
  });
});
