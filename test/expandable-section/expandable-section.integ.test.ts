import { test, expect } from '@playwright/test';

test.describe('ExpandableSection — Integration', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#/light/expandable-section/permutations');
    await page.waitForSelector('expandable-section-permutations-page');
  });

  test('clicking header toggles expanded state', async ({ page }) => {
    const section = page.locator('cs-expandable-section').first();

    const detail = await section.evaluate((el) => {
      return new Promise<{ expanded: boolean }>((resolve) => {
        el.addEventListener('change', ((e: Event) => {
          resolve((e as CustomEvent).detail);
        }) as EventListener, { once: true });
        const header = el.shadowRoot?.querySelector('[role="button"]') as HTMLElement;
        header?.click();
      });
    });

    expect(detail.expanded).toBe(true);
  });

  test('default-expanded starts section open', async ({ page }) => {
    const section = page.locator('cs-expandable-section[default-expanded]').first();

    const isExpanded = await section.evaluate((el) => {
      const header = el.shadowRoot?.querySelector('[role="button"]');
      return header?.getAttribute('aria-expanded');
    });

    expect(isExpanded).toBe('true');
  });

  test('content is hidden when collapsed', async ({ page }) => {
    const section = page.locator('cs-expandable-section').first();

    const contentVisible = await section.evaluate((el) => {
      const content = el.shadowRoot?.querySelector('.content');
      if (!content) return false;
      const style = window.getComputedStyle(content);
      return style.display !== 'none';
    });

    expect(contentVisible).toBe(false);
  });

  test('content is visible when expanded', async ({ page }) => {
    const section = page.locator('cs-expandable-section[default-expanded]').first();

    const contentVisible = await section.evaluate((el) => {
      const content = el.shadowRoot?.querySelector('.content-expanded');
      if (!content) return false;
      const style = window.getComputedStyle(content);
      return style.display !== 'none';
    });

    expect(contentVisible).toBe(true);
  });

  test('aria-expanded reflects state correctly', async ({ page }) => {
    const section = page.locator('cs-expandable-section').first();

    const beforeExpand = await section.evaluate((el) => {
      return el.shadowRoot?.querySelector('[role="button"]')?.getAttribute('aria-expanded');
    });

    expect(beforeExpand).toBe('false');

    await section.evaluate((el) => {
      const header = el.shadowRoot?.querySelector('[role="button"]') as HTMLElement;
      header?.click();
    });

    const afterExpand = await section.evaluate((el) => {
      return el.shadowRoot?.querySelector('[role="button"]')?.getAttribute('aria-expanded');
    });

    expect(afterExpand).toBe('true');
  });

  test('keyboard Enter toggles section', async ({ page }) => {
    const section = page.locator('cs-expandable-section').first();

    const detail = await section.evaluate((el) => {
      return new Promise<{ expanded: boolean }>((resolve) => {
        el.addEventListener('change', ((e: Event) => {
          resolve((e as CustomEvent).detail);
        }) as EventListener, { once: true });
        const header = el.shadowRoot?.querySelector('[role="button"]') as HTMLElement;
        header?.focus();
        header?.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
      });
    });

    expect(detail.expanded).toBe(true);
  });

  test('header description is rendered when provided', async ({ page }) => {
    const section = page.locator('cs-expandable-section[header-description]').first();

    const hasDescription = await section.evaluate((el) => {
      return !!el.shadowRoot?.querySelector('.header-description');
    });

    expect(hasDescription).toBe(true);
  });

  test('header counter is rendered when provided', async ({ page }) => {
    const section = page.locator('cs-expandable-section[header-counter]').first();

    const hasCounter = await section.evaluate((el) => {
      return !!el.shadowRoot?.querySelector('.header-counter');
    });

    expect(hasCounter).toBe(true);
  });
});
