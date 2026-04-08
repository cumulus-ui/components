import { test, expect } from '@playwright/test';

test.describe('TopNavigation — Integration', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#/light/top-navigation/permutations');
    await page.waitForSelector('top-navigation-permutations-page');
  });

  test('renders navigation header', async ({ page }) => {
    const nav = page.locator('cs-top-navigation').first();

    const tagName = await nav.evaluate((el) => {
      return el.shadowRoot?.querySelector('.top-navigation')?.tagName.toLowerCase();
    });
    expect(tagName).toBe('nav');
  });

  test('renders identity title', async ({ page }) => {
    const nav = page.locator('cs-top-navigation').first();

    const title = await nav.evaluate((el) => {
      return el.shadowRoot?.querySelector('.title')?.textContent?.trim();
    });
    expect(title).toBe('My Service');
  });

  test('identity link has correct href', async ({ page }) => {
    const nav = page.locator('cs-top-navigation').first();

    const href = await nav.evaluate((el) => {
      return el.shadowRoot?.querySelector('.identity-link')?.getAttribute('href');
    });
    expect(href).toBe('/');
  });

  test('renders utility buttons', async ({ page }) => {
    const nav = page.locator('cs-top-navigation').first();

    const utilityCount = await nav.evaluate((el) => {
      return el.shadowRoot?.querySelectorAll('.utility-wrapper')?.length;
    });
    expect(utilityCount).toBe(2);
  });

  test('utility link has href', async ({ page }) => {
    const nav = page.locator('cs-top-navigation').first();

    const href = await nav.evaluate((el) => {
      const link = el.shadowRoot?.querySelector('.utility-wrapper a');
      return link?.getAttribute('href');
    });
    expect(href).toBe('/docs');
  });

  test('fires utilityClick on button click', async ({ page }) => {
    const nav = page.locator('cs-top-navigation').first();

    const detail = await nav.evaluate((el) => {
      return new Promise<{ type: string; text: string }>((resolve) => {
        el.addEventListener('utilityClick', ((e: Event) => {
          resolve((e as CustomEvent).detail);
        }) as EventListener, { once: true });
        const btn = el.shadowRoot?.querySelector('.utility-wrapper button') as HTMLElement;
        btn?.click();
      });
    });

    expect(detail.type).toBe('button');
    expect(detail.text).toBe('Sign out');
  });

  test('logo variant renders img', async ({ page }) => {
    const nav = page.locator('cs-top-navigation').nth(1);

    const hasLogo = await nav.evaluate((el) => {
      return !!el.shadowRoot?.querySelector('.logo');
    });
    expect(hasLogo).toBe(true);
  });

  test('fires identityClick on identity link click', async ({ page }) => {
    const nav = page.locator('cs-top-navigation').first();

    const detail = await nav.evaluate((el) => {
      return new Promise<{ href: string }>((resolve) => {
        el.addEventListener('identityClick', ((e: Event) => {
          resolve((e as CustomEvent).detail);
        }) as EventListener, { once: true });
        const link = el.shadowRoot?.querySelector('.identity-link') as HTMLElement;
        link?.click();
      });
    });

    expect(detail.href).toBe('/');
  });

  test('renders search slot', async ({ page }) => {
    const nav = page.locator('cs-top-navigation').first();

    const hasSearchSlot = await nav.evaluate((el) => {
      const slot = el.shadowRoot?.querySelector('slot[name="search"]');
      return !!slot;
    });
    expect(hasSearchSlot).toBe(true);
  });
});
