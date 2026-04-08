import { test, expect } from '@playwright/test';

test.describe('SideNavigation — Integration', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#/light/side-navigation/permutations');
    await page.waitForSelector('side-navigation-permutations-page');
  });

  test('renders nav element', async ({ page }) => {
    const nav = page.locator('cs-side-navigation').first();

    const tagName = await nav.evaluate((el) => {
      return el.shadowRoot?.querySelector('.root')?.tagName.toLowerCase();
    });
    expect(tagName).toBe('nav');
  });

  test('has correct aria-label', async ({ page }) => {
    const nav = page.locator('cs-side-navigation').first();

    const label = await nav.evaluate((el) => {
      return el.shadowRoot?.querySelector('nav')?.getAttribute('aria-label');
    });
    expect(label).toBe('Side navigation');
  });

  test('renders correct number of link items', async ({ page }) => {
    const nav = page.locator('cs-side-navigation').first();

    const count = await nav.evaluate((el) => {
      return el.shadowRoot?.querySelectorAll('.link')?.length;
    });
    expect(count).toBe(3);
  });

  test('active link has link-active class', async ({ page }) => {
    const nav = page.locator('cs-side-navigation').first();

    const hasActiveClass = await nav.evaluate((el) => {
      const links = el.shadowRoot?.querySelectorAll('.link');
      return Array.from(links ?? []).some(l => l.classList.contains('link-active'));
    });
    expect(hasActiveClass).toBe(true);
  });

  test('active link has aria-current page', async ({ page }) => {
    const nav = page.locator('cs-side-navigation').first();

    const ariaCurrent = await nav.evaluate((el) => {
      const activeLink = el.shadowRoot?.querySelector('.link-active');
      return activeLink?.getAttribute('aria-current');
    });
    expect(ariaCurrent).toBe('page');
  });

  test('fires follow event on link click', async ({ page }) => {
    const nav = page.locator('cs-side-navigation').first();

    const detail = await nav.evaluate((el) => {
      return new Promise<{ href: string; text: string }>((resolve) => {
        el.addEventListener('follow', ((e: Event) => {
          resolve((e as CustomEvent).detail);
        }) as EventListener, { once: true });
        const firstLink = el.shadowRoot?.querySelector('.link') as HTMLElement;
        firstLink?.click();
      });
    });

    expect(detail.href).toBe('/dashboard');
    expect(detail.text).toBe('Dashboard');
  });

  test('renders header when provided', async ({ page }) => {
    const nav = page.locator('cs-side-navigation').nth(1);

    const headerText = await nav.evaluate((el) => {
      return el.shadowRoot?.querySelector('.header-link-text')?.textContent?.trim();
    });
    expect(headerText).toBe('EC2 Console');
  });

  test('renders divider between sections', async ({ page }) => {
    const nav = page.locator('cs-side-navigation').nth(2);

    const hasDivider = await nav.evaluate((el) => {
      return !!el.shadowRoot?.querySelector('.divider-default');
    });
    expect(hasDivider).toBe(true);
  });

  test('section toggle fires change event', async ({ page }) => {
    const nav = page.locator('cs-side-navigation').nth(2);

    const detail = await nav.evaluate((el) => {
      return new Promise<{ expanded: boolean }>((resolve) => {
        el.addEventListener('change', ((e: Event) => {
          resolve((e as CustomEvent).detail);
        }) as EventListener, { once: true });
        const trigger = el.shadowRoot?.querySelector('.overflow-menu-control-expandable-menu-trigger') as HTMLElement;
        trigger?.click();
      });
    });

    expect(typeof detail.expanded).toBe('boolean');
  });

  test('external link has target _blank', async ({ page }) => {
    const nav = page.locator('cs-side-navigation').nth(4);

    const target = await nav.evaluate((el) => {
      const extLink = el.shadowRoot?.querySelector('.link[target="_blank"]');
      return extLink?.getAttribute('target');
    });
    expect(target).toBe('_blank');
  });

  test('external link shows external icon', async ({ page }) => {
    const nav = page.locator('cs-side-navigation').nth(4);

    const hasIcon = await nav.evaluate((el) => {
      return !!el.shadowRoot?.querySelector('.external-icon');
    });
    expect(hasIcon).toBe(true);
  });
});
