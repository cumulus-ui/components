import { test, expect } from '@playwright/test';

test.describe('AnchorNavigation — Integration', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#/light/anchor-navigation/permutations');
    await page.waitForSelector('anchor-navigation-permutations-page');
  });

  test('renders all anchor links', async ({ page }) => {
    const firstNav = page.locator('cs-anchor-navigation').first();
    const links = firstNav.locator('.anchor-link');
    await expect(links).toHaveCount(6);
  });

  test('displays anchor text correctly', async ({ page }) => {
    const firstNav = page.locator('cs-anchor-navigation').first();
    const firstLink = firstNav.locator('.anchor-link').first();
    await expect(firstLink).toContainText('Overview');
  });

  test('nested anchors are indented', async ({ page }) => {
    const firstNav = page.locator('cs-anchor-navigation').first();
    const items = firstNav.locator('.anchor-item');
    const thirdItem = items.nth(2);
    const paddingLeft = await thirdItem.evaluate((el) =>
      getComputedStyle(el).paddingLeft
    );
    expect(parseInt(paddingLeft, 10)).toBeGreaterThan(0);
  });

  test('controlled mode shows active anchor', async ({ page }) => {
    const secondNav = page.locator('cs-anchor-navigation').nth(1);
    const activeLink = secondNav.locator('.anchor-link--active');
    await expect(activeLink).toHaveCount(1);
    await expect(activeLink).toContainText('Configuration');
  });

  test('controlled mode sets aria-current on active link', async ({ page }) => {
    const secondNav = page.locator('cs-anchor-navigation').nth(1);
    const activeLink = secondNav.locator('.anchor-link--active');
    await expect(activeLink).toHaveAttribute('aria-current', 'location');
  });

  test('fires follow event on click', async ({ page }) => {
    const nav = page.locator('cs-anchor-navigation').first();

    const detail = await nav.evaluate((el) => {
      return new Promise<{ text: string; href: string }>((resolve) => {
        el.addEventListener('follow', ((e: Event) => {
          const d = (e as CustomEvent).detail;
          resolve({ text: d.text, href: d.href });
        }) as EventListener, { once: true });
        el.shadowRoot!.querySelector('.anchor-link')!.dispatchEvent(
          new MouseEvent('click', { bubbles: true, composed: true })
        );
      });
    });

    expect(detail.text).toBe('Overview');
    expect(detail.href).toBe('#overview');
  });

  test('info badge renders when specified', async ({ page }) => {
    const firstNav = page.locator('cs-anchor-navigation').first();
    const infoSpan = firstNav.locator('.anchor-link-info').first();
    await expect(infoSpan).toBeVisible();
    await expect(infoSpan).toHaveText('New');
  });

  test('links have correct href attributes', async ({ page }) => {
    const firstNav = page.locator('cs-anchor-navigation').first();
    const firstLink = firstNav.locator('.anchor-link').first();
    await expect(firstLink).toHaveAttribute('href', '#overview');
  });

  test('keyboard Tab moves between anchor links', async ({ page }) => {
    const firstNav = page.locator('cs-anchor-navigation').first();
    const firstLink = firstNav.locator('.anchor-link').first();

    await firstLink.focus();
    await expect(firstLink).toBeFocused();

    await page.keyboard.press('Tab');
    const secondLink = firstNav.locator('.anchor-link').nth(1);
    await expect(secondLink).toBeFocused();
  });

  test('nav element has proper structure', async ({ page }) => {
    const firstNav = page.locator('cs-anchor-navigation').first();
    const nav = firstNav.locator('nav');
    await expect(nav).toBeVisible();
    const list = nav.locator('ul[role="list"]');
    await expect(list).toBeVisible();
  });
});
