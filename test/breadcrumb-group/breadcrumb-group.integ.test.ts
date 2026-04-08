import { test, expect } from '@playwright/test';

test.describe('BreadcrumbGroup — Integration', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#/light/breadcrumb-group/permutations');
    await page.waitForSelector('breadcrumb-group-permutations-page');
  });

  test('renders nav with breadcrumb items', async ({ page }) => {
    const breadcrumb = page.locator('cs-breadcrumb-group').first();

    const navLabel = await breadcrumb.evaluate((el) => {
      return el.shadowRoot?.querySelector('nav')?.getAttribute('aria-label');
    });
    expect(navLabel).toBe('Breadcrumbs');
  });

  test('renders correct number of items', async ({ page }) => {
    const breadcrumb = page.locator('cs-breadcrumb-group').first();

    const count = await breadcrumb.evaluate((el) => {
      return el.shadowRoot?.querySelectorAll('.item')?.length;
    });
    expect(count).toBe(3);
  });

  test('last item has aria-current="page"', async ({ page }) => {
    const breadcrumb = page.locator('cs-breadcrumb-group').first();

    const ariaCurrent = await breadcrumb.evaluate((el) => {
      const items = el.shadowRoot?.querySelectorAll('.item');
      const last = items?.[items.length - 1];
      return last?.querySelector('[aria-current]')?.getAttribute('aria-current');
    });
    expect(ariaCurrent).toBe('page');
  });

  test('non-last items are links', async ({ page }) => {
    const breadcrumb = page.locator('cs-breadcrumb-group').first();

    const hrefs = await breadcrumb.evaluate((el) => {
      const anchors = el.shadowRoot?.querySelectorAll('.breadcrumb-group-item--anchor');
      return Array.from(anchors ?? []).map(a => ({
        tag: a.tagName.toLowerCase(),
        href: a.getAttribute('href'),
      }));
    });

    expect(hrefs[0].tag).toBe('a');
    expect(hrefs[0].href).toBe('/');
    expect(hrefs[1].tag).toBe('a');
    expect(hrefs[1].href).toBe('/services');
    expect(hrefs[2].tag).toBe('span');
  });

  test('fires follow event on link click', async ({ page }) => {
    const breadcrumb = page.locator('cs-breadcrumb-group').first();

    const detail = await breadcrumb.evaluate((el) => {
      return new Promise<{ text: string; href: string }>((resolve) => {
        el.addEventListener('follow', ((e: Event) => {
          resolve((e as CustomEvent).detail);
        }) as EventListener, { once: true });

        const firstLink = el.shadowRoot?.querySelector('a.breadcrumb-group-item--anchor') as HTMLElement;
        firstLink?.click();
      });
    });

    expect(detail.text).toBe('Home');
    expect(detail.href).toBe('/');
  });

  test('last item does not fire follow event', async ({ page }) => {
    const breadcrumb = page.locator('cs-breadcrumb-group').first();

    const fired = await breadcrumb.evaluate((el) => {
      return new Promise<boolean>((resolve) => {
        let followed = false;
        el.addEventListener('follow', () => { followed = true; }, { once: true });
        const items = el.shadowRoot?.querySelectorAll('.item');
        const last = items?.[items!.length - 1];
        const span = last?.querySelector('.breadcrumb-group-item--anchor') as HTMLElement;
        span?.click();
        setTimeout(() => resolve(followed), 50);
      });
    });

    expect(fired).toBe(false);
  });

  test('separator icons appear between items', async ({ page }) => {
    const breadcrumb = page.locator('cs-breadcrumb-group').first();

    const separatorCount = await breadcrumb.evaluate((el) => {
      return el.shadowRoot?.querySelectorAll('.breadcrumb-group-item--icon cs-icon')?.length;
    });
    expect(separatorCount).toBe(2);
  });

  test('renders ordered list', async ({ page }) => {
    const breadcrumb = page.locator('cs-breadcrumb-group').first();

    const listTag = await breadcrumb.evaluate((el) => {
      return el.shadowRoot?.querySelector('.breadcrumb-group-list')?.tagName.toLowerCase();
    });
    expect(listTag).toBe('ol');
  });
});
