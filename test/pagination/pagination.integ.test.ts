import { test, expect } from '@playwright/test';

test.describe('Pagination — Integration', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#/light/pagination/permutations');
    await page.waitForSelector('pagination-permutations-page');
  });

  test('clicking page button changes current page', async ({ page }) => {
    const pagination = page.locator('cs-pagination[pages-count="10"]').first();

    const newIndex = await pagination.evaluate((el) => {
      return new Promise<number>((resolve) => {
        el.addEventListener('change', ((e: Event) => {
          resolve((e as CustomEvent).detail.currentPageIndex);
        }) as EventListener, { once: true });
        const page2Btn = el.shadowRoot?.querySelector('.page-number:not(.button-current)') as HTMLButtonElement;
        page2Btn?.click();
      });
    });

    expect(newIndex).toBeGreaterThan(0);
  });

  test('next button fires nextPageClick event', async ({ page }) => {
    const pagination = page.locator('cs-pagination[pages-count="10"]').first();

    const detail = await pagination.evaluate((el) => {
      return new Promise<{ requestedPageIndex: number }>((resolve) => {
        el.addEventListener('nextPageClick', ((e: Event) => {
          resolve((e as CustomEvent).detail);
        }) as EventListener, { once: true });
        const nextBtn = el.shadowRoot?.querySelectorAll('.arrow');
        const lastArrow = nextBtn?.[nextBtn.length - 1] as HTMLButtonElement;
        lastArrow?.click();
      });
    });

    expect(detail.requestedPageIndex).toBe(2);
  });

  test('previous button fires previousPageClick event on middle page', async ({ page }) => {
    const pagination = page.locator('cs-pagination[current-page-index="5"]');

    const detail = await pagination.evaluate((el) => {
      return new Promise<{ requestedPageIndex: number }>((resolve) => {
        el.addEventListener('previousPageClick', ((e: Event) => {
          resolve((e as CustomEvent).detail);
        }) as EventListener, { once: true });
        const prevBtn = el.shadowRoot?.querySelector('.arrow') as HTMLButtonElement;
        prevBtn?.click();
      });
    });

    expect(detail.requestedPageIndex).toBe(4);
  });

  test('disabled pagination prevents clicks', async ({ page }) => {
    const pagination = page.locator('cs-pagination[disabled]');

    const fired = await pagination.evaluate((el) => {
      return new Promise<boolean>((resolve) => {
        let changed = false;
        el.addEventListener('change', () => { changed = true; }, { once: true });
        const btn = el.shadowRoot?.querySelector('.page-number') as HTMLButtonElement;
        btn?.click();
        setTimeout(() => resolve(changed), 50);
      });
    });

    expect(fired).toBe(false);
  });

  test('current page has aria-current attribute', async ({ page }) => {
    const pagination = page.locator('cs-pagination[current-page-index="5"]');

    const ariaCurrent = await pagination.evaluate((el) => {
      const currentBtn = el.shadowRoot?.querySelector('.button-current');
      return currentBtn?.getAttribute('aria-current');
    });

    expect(ariaCurrent).toBe('page');
  });

  test('previous button is disabled on first page', async ({ page }) => {
    const pagination = page.locator('cs-pagination[pages-count="10"]').first();

    const isDisabled = await pagination.evaluate((el) => {
      const prevBtn = el.shadowRoot?.querySelector('.arrow') as HTMLButtonElement;
      return prevBtn?.disabled;
    });

    expect(isDisabled).toBe(true);
  });

  test('nav has pagination aria-label', async ({ page }) => {
    const pagination = page.locator('cs-pagination[pages-count="10"]').first();

    const ariaLabel = await pagination.evaluate((el) => {
      const nav = el.shadowRoot?.querySelector('nav');
      return nav?.getAttribute('aria-label');
    });

    expect(ariaLabel).toBe('Pagination');
  });
});
