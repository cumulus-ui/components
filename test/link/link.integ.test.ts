import { test, expect } from '@playwright/test';

test.describe('Link — Integration', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#/light/link/permutations');
    await page.waitForSelector('link-permutations-page');
  });

  test('click fires follow event with detail', async ({ page }) => {
    const link = page.locator('cs-link[href="https://example.com"]').first();

    const detail = await link.evaluate((el) => {
      return new Promise<{ href: string; external: boolean }>((resolve) => {
        el.addEventListener('follow', ((e: Event) => {
          resolve((e as CustomEvent).detail);
        }) as EventListener, { once: true });
        (el as HTMLElement).click();
      });
    });

    expect(detail.href).toBe('https://example.com');
    expect(detail.external).toBe(false);
  });

  test('external link renders icon', async ({ page }) => {
    const link = page.locator('cs-link[external]').first();

    const hasIcon = await link.evaluate((el) => {
      return el.shadowRoot?.querySelector('cs-icon[name="external"]') !== null;
    });

    expect(hasIcon).toBe(true);
  });

  test('external link has target and rel attributes', async ({ page }) => {
    const link = page.locator('cs-link[external]').first();

    const attrs = await link.evaluate((el) => {
      const anchor = el.shadowRoot?.querySelector('a');
      return {
        target: anchor?.getAttribute('target'),
        rel: anchor?.getAttribute('rel'),
      };
    });

    expect(attrs.target).toBe('_blank');
    expect(attrs.rel).toBe('noopener noreferrer');
  });

  test('variant classes apply correctly', async ({ page }) => {
    const link = page.locator('cs-link[variant="primary"]').first();

    const hasClass = await link.evaluate((el) => {
      const inner = el.shadowRoot?.querySelector('.link');
      return inner?.classList.contains('variant-primary');
    });

    expect(hasClass).toBe(true);
  });

  test('aria-label is forwarded', async ({ page }) => {
    const link = page.locator('cs-link[aria-label="Custom accessible label"]');

    const ariaLabel = await link.evaluate((el) => {
      const inner = el.shadowRoot?.querySelector('a');
      return inner?.getAttribute('aria-label');
    });

    expect(ariaLabel).toBe('Custom accessible label');
  });

  test('no href renders button element', async ({ page }) => {
    const link = page.locator('cs-link:not([href])').first();

    const tagName = await link.evaluate((el) => {
      const inner = el.shadowRoot?.querySelector('.link');
      return inner?.tagName.toLowerCase();
    });

    expect(tagName).toBe('button');
  });

  test('no href element has button class', async ({ page }) => {
    const link = page.locator('cs-link:not([href])').first();

    const hasClass = await link.evaluate((el) => {
      const inner = el.shadowRoot?.querySelector('.link');
      return inner?.classList.contains('button');
    });

    expect(hasClass).toBe(true);
  });

  test('font-size class is applied', async ({ page }) => {
    const link = page.locator('cs-link[font-size="heading-s"]');

    const hasClass = await link.evaluate((el) => {
      const inner = el.shadowRoot?.querySelector('.link');
      return inner?.classList.contains('font-size-heading-s');
    });

    expect(hasClass).toBe(true);
  });
});
