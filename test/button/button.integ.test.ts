import { test, expect } from '@playwright/test';

test.describe('Button — Integration', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#/light/button/permutations');
    await page.waitForSelector('button-permutations-page');
  });

  test('click fires click event with detail', async ({ page }) => {
    const btn = page.locator('cs-button[variant="primary"]').first();

    const detail = await btn.evaluate((el) => {
      return new Promise<{ button: number; ctrlKey: boolean }>((resolve) => {
        el.addEventListener('click', ((e: Event) => {
          resolve((e as CustomEvent).detail);
        }) as EventListener, { once: true });
        (el as HTMLElement).click();
      });
    });

    expect(detail.button).toBe(0);
    expect(detail.ctrlKey).toBe(false);
  });

  test('click on link fires follow event', async ({ page }) => {
    const link = page.locator('cs-button[href="https://example.com"]').first();

    const detail = await link.evaluate((el) => {
      return new Promise<{ href: string }>((resolve) => {
        el.addEventListener('follow', ((e: Event) => {
          resolve((e as CustomEvent).detail);
        }) as EventListener, { once: true });
        (el as HTMLElement).click();
      });
    });

    expect(detail.href).toBe('https://example.com');
  });

  test('disabled button prevents interaction', async ({ page }) => {
    const btn = page.locator('cs-button[disabled]').first();

    const fired = await btn.evaluate((el) => {
      return new Promise<boolean>((resolve) => {
        let clicked = false;
        el.addEventListener('click', ((e: Event) => {
          if ((e as CustomEvent).detail) clicked = true;
        }) as EventListener, { once: true });
        (el as HTMLElement).click();
        setTimeout(() => resolve(clicked), 50);
      });
    });

    expect(fired).toBe(false);
  });

  test('loading button prevents interaction', async ({ page }) => {
    const btn = page.locator('cs-button[loading]').first();

    const fired = await btn.evaluate((el) => {
      return new Promise<boolean>((resolve) => {
        let clicked = false;
        el.addEventListener('click', ((e: Event) => {
          if ((e as CustomEvent).detail) clicked = true;
        }) as EventListener, { once: true });
        (el as HTMLElement).click();
        setTimeout(() => resolve(clicked), 50);
      });
    });

    expect(fired).toBe(false);
  });

  test('loading button shows loading text', async ({ page }) => {
    const btn = page.locator('cs-button[loading]').first();

    const innerText = await btn.evaluate((el) => {
      return el.shadowRoot?.querySelector('.button')?.textContent?.trim();
    });

    expect(innerText).toContain('Submitting');
  });

  test('focus() moves focus to inner button', async ({ page }) => {
    const btn = page.locator('cs-button[variant="primary"]').first();

    await btn.evaluate((el: any) => el.focus());

    const isFocused = await btn.evaluate((el) => {
      const inner = el.shadowRoot?.querySelector('.button');
      return el.shadowRoot?.activeElement === inner;
    });

    expect(isFocused).toBe(true);
  });

  test('external link has target and rel attributes', async ({ page }) => {
    const externalBtn = page.locator('cs-button[external]').first();

    const attrs = await externalBtn.evaluate((el) => {
      const anchor = el.shadowRoot?.querySelector('a');
      return {
        target: anchor?.getAttribute('target'),
        rel: anchor?.getAttribute('rel'),
      };
    });

    expect(attrs.target).toBe('_blank');
    expect(attrs.rel).toBe('noopener noreferrer');
  });

  test('disabled button has aria-disabled', async ({ page }) => {
    const btn = page.locator('cs-button[disabled]').first();

    const ariaDisabled = await btn.evaluate((el) => {
      const inner = el.shadowRoot?.querySelector('.button');
      return inner?.getAttribute('aria-disabled');
    });

    expect(ariaDisabled).toBe('true');
  });

  test('variant classes are applied correctly', async ({ page }) => {
    const primaryBtn = page.locator('cs-button[variant="primary"]').first();

    const hasClass = await primaryBtn.evaluate((el) => {
      const inner = el.shadowRoot?.querySelector('.button');
      return inner?.classList.contains('variant-primary');
    });

    expect(hasClass).toBe(true);
  });
});
