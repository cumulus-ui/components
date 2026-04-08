import { test, expect } from '@playwright/test';

test.describe('Item Card — Integration', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#/light/item-card/permutations');
    await page.waitForSelector('item-card-permutations-page');
  });

  test('renders root element with default variant class', async ({ page }) => {
    const card = page.locator('cs-item-card').first();

    const hasClass = await card.evaluate((el) => {
      const root = el.shadowRoot?.querySelector('.root');
      return root?.classList.contains('variant-default') ?? false;
    });

    expect(hasClass).toBe(true);
  });

  test('renders header slot content', async ({ page }) => {
    const card = page.locator('cs-item-card').first();

    const headerVisible = await card.evaluate((el) => {
      const header = el.shadowRoot?.querySelector('.header');
      return header !== null;
    });

    expect(headerVisible).toBe(true);
  });

  test('renders body slot content', async ({ page }) => {
    const card = page.locator('cs-item-card').first();

    const bodyVisible = await card.evaluate((el) => {
      const body = el.shadowRoot?.querySelector('.body');
      return body !== null;
    });

    expect(bodyVisible).toBe(true);
  });

  test('embedded variant applies correct class', async ({ page }) => {
    const card = page.locator('cs-item-card[variant="embedded"]').first();

    const hasClass = await card.evaluate((el) => {
      const root = el.shadowRoot?.querySelector('.root');
      return root?.classList.contains('variant-embedded') ?? false;
    });

    expect(hasClass).toBe(true);
  });

  test('highlighted state applies highlighted class', async ({ page }) => {
    const card = page.locator('cs-item-card[highlighted]').first();

    const hasClass = await card.evaluate((el) => {
      const root = el.shadowRoot?.querySelector('.root');
      return root?.classList.contains('highlighted') ?? false;
    });

    expect(hasClass).toBe(true);
  });

  test('disable-header-paddings applies no-padding class', async ({ page }) => {
    const card = page.locator('cs-item-card[disable-header-paddings]').first();

    const hasClass = await card.evaluate((el) => {
      const header = el.shadowRoot?.querySelector('.header');
      return header?.classList.contains('no-padding') ?? false;
    });

    expect(hasClass).toBe(true);
  });

  test('footer renders when slotted', async ({ page }) => {
    const card = page.locator('cs-item-card').first();

    const hasFooter = await card.evaluate((el) => {
      return new Promise<boolean>((resolve) => {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            const footer = el.shadowRoot?.querySelector('.footer');
            resolve(footer !== null);
          });
        });
      });
    });

    expect(hasFooter).toBe(true);
  });

  test('inner-card structure exists', async ({ page }) => {
    const card = page.locator('cs-item-card').first();

    const hasInnerCard = await card.evaluate((el) => {
      return el.shadowRoot?.querySelector('.inner-card') !== null;
    });

    expect(hasInnerCard).toBe(true);
  });
});
