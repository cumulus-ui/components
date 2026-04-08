import { test, expect } from '@playwright/test';

test.describe('ButtonDropdown — Integration', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#/light/button-dropdown/permutations');
    await page.waitForSelector('button-dropdown-permutations-page');
  });

  test('renders trigger button with text', async ({ page }) => {
    const dropdown = page.locator('cs-button-dropdown[variant="normal"]').first();
    const triggerText = await dropdown.evaluate((el) => {
      return el.textContent?.trim();
    });
    expect(triggerText).toContain('Actions');
  });

  test('opens dropdown on trigger click', async ({ page }) => {
    const dropdown = page.locator('cs-button-dropdown[variant="normal"]').first();

    await dropdown.evaluate((el) => {
      el.shadowRoot?.querySelector<HTMLElement>('.trigger-btn')?.click();
    });

    const menuVisible = await dropdown.evaluate((el) => {
      return !!el.shadowRoot?.querySelector('[role="menu"]');
    });
    expect(menuVisible).toBe(true);
  });

  test('closes dropdown on item click and fires itemClick', async ({ page }) => {
    const dropdown = page.locator('cs-button-dropdown[variant="normal"]').first();

    const detail = await dropdown.evaluate((el) => {
      return new Promise<{ id: string }>((resolve) => {
        el.addEventListener('itemClick', ((e: Event) => {
          resolve((e as CustomEvent).detail);
        }) as EventListener, { once: true });

        el.shadowRoot?.querySelector<HTMLElement>('.trigger-btn')?.click();
        setTimeout(() => {
          const items = el.shadowRoot?.querySelectorAll('[role="menuitem"]');
          (items?.[0] as HTMLElement)?.click();
        }, 50);
      });
    });

    expect(detail.id).toBe('edit');

    const menuVisible = await dropdown.evaluate((el) => {
      return !!el.shadowRoot?.querySelector('[role="menu"]');
    });
    expect(menuVisible).toBe(false);
  });

  test('fires itemFollow for items with href', async ({ page }) => {
    const dropdown = page.locator('cs-button-dropdown[variant="normal"]').first();

    const detail = await dropdown.evaluate((el) => {
      return new Promise<{ id: string; href: string }>((resolve) => {
        el.addEventListener('itemFollow', ((e: Event) => {
          resolve((e as CustomEvent).detail);
        }) as EventListener, { once: true });

        el.shadowRoot?.querySelector<HTMLElement>('.trigger-btn')?.click();
        setTimeout(() => {
          const items = el.shadowRoot?.querySelectorAll('[role="menuitem"]');
          (items?.[4] as HTMLElement)?.click();
        }, 50);
      });
    });

    expect(detail.id).toBe('link-item');
    expect(detail.href).toBe('https://example.com');
  });

  test('disabled button prevents interaction', async ({ page }) => {
    const dropdown = page.locator('cs-button-dropdown[disabled]').first();

    await dropdown.evaluate((el) => {
      el.shadowRoot?.querySelector<HTMLElement>('.trigger-btn')?.click();
    });

    const menuVisible = await dropdown.evaluate((el) => {
      return !!el.shadowRoot?.querySelector('[role="menu"]');
    });
    expect(menuVisible).toBe(false);
  });

  test('escape closes dropdown', async ({ page }) => {
    const dropdown = page.locator('cs-button-dropdown[variant="normal"]').first();

    await dropdown.evaluate((el) => {
      el.shadowRoot?.querySelector<HTMLElement>('.trigger-btn')?.click();
    });

    await dropdown.evaluate((el) => {
      el.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true, composed: true }));
    });

    const menuVisible = await dropdown.evaluate((el) => {
      return !!el.shadowRoot?.querySelector('[role="menu"]');
    });
    expect(menuVisible).toBe(false);
  });

  test('disabled items are not clickable', async ({ page }) => {
    const dropdown = page.locator('cs-button-dropdown[variant="normal"]').first();

    const fired = await dropdown.evaluate((el) => {
      return new Promise<boolean>((resolve) => {
        let clicked = false;
        el.addEventListener('itemClick', () => { clicked = true; }, { once: true });

        el.shadowRoot?.querySelector<HTMLElement>('.trigger-btn')?.click();
        setTimeout(() => {
          const items = el.shadowRoot?.querySelectorAll('[role="menuitem"]');
          (items?.[3] as HTMLElement)?.click();
          setTimeout(() => resolve(clicked), 50);
        }, 50);
      });
    });

    expect(fired).toBe(false);
  });

  test('icon variant renders with ellipsis icon', async ({ page }) => {
    const dropdown = page.locator('cs-button-dropdown[variant="icon"]').first();

    const hasIcon = await dropdown.evaluate((el) => {
      return !!el.shadowRoot?.querySelector('.trigger-btn cs-icon[name="ellipsis"]');
    });
    expect(hasIcon).toBe(true);
  });

  test('trigger has aria-haspopup and aria-expanded', async ({ page }) => {
    const dropdown = page.locator('cs-button-dropdown[variant="normal"]').first();

    const attrs = await dropdown.evaluate((el) => {
      const trigger = el.shadowRoot?.querySelector('.trigger-btn');
      return {
        haspopup: trigger?.getAttribute('aria-haspopup'),
        expanded: trigger?.getAttribute('aria-expanded'),
      };
    });

    expect(attrs.haspopup).toBe('true');
    expect(attrs.expanded).toBe('false');
  });
});
