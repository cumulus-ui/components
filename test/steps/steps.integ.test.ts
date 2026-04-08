import { test, expect } from '@playwright/test';

test.describe('Steps — Integration', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#/light/steps/permutations');
    await page.waitForSelector('steps-permutations-page');
  });

  test('renders correct number of steps', async ({ page }) => {
    const steps = page.locator('cs-steps').first();

    const count = await steps.evaluate((el) => {
      return el.shadowRoot?.querySelectorAll('.container').length;
    });

    expect(count).toBe(4);
  });

  test('renders step headers', async ({ page }) => {
    const steps = page.locator('cs-steps').first();

    const headers = await steps.evaluate((el) => {
      const titles = el.shadowRoot?.querySelectorAll('.title');
      return Array.from(titles || []).map(t => t.textContent?.trim());
    });

    expect(headers).toContain('Step 1: Order placed');
    expect(headers).toContain('Step 4: Delivered');
  });

  test('renders step details when provided', async ({ page }) => {
    const steps = page.locator('cs-steps').first();

    const details = await steps.evaluate((el) => {
      const detailEls = el.shadowRoot?.querySelectorAll('.details');
      return Array.from(detailEls || []).map(d => d.textContent?.trim());
    });

    expect(details).toContain('Order #12345 confirmed');
    expect(details).toContain('Package in transit');
  });

  test('renders status icons', async ({ page }) => {
    const steps = page.locator('cs-steps').first();

    const hasIcons = await steps.evaluate((el) => {
      const icons = el.shadowRoot?.querySelectorAll('cs-icon');
      const spinners = el.shadowRoot?.querySelectorAll('cs-spinner');
      return (icons?.length || 0) + (spinners?.length || 0) > 0;
    });

    expect(hasIcons).toBe(true);
  });

  test('renders spinner for loading status', async ({ page }) => {
    const steps = page.locator('cs-steps').first();

    const hasSpinner = await steps.evaluate((el) => {
      return !!el.shadowRoot?.querySelector('cs-spinner');
    });

    expect(hasSpinner).toBe(true);
  });

  test('renders connectors between steps', async ({ page }) => {
    const steps = page.locator('cs-steps').first();

    const connectorCount = await steps.evaluate((el) => {
      return el.shadowRoot?.querySelectorAll('.connector').length;
    });

    expect(connectorCount).toBeGreaterThan(0);
  });

  test('horizontal orientation renders correctly', async ({ page }) => {
    const steps = page.locator('cs-steps[orientation="horizontal"]');

    const hasHorizontalClass = await steps.evaluate((el) => {
      return !!el.shadowRoot?.querySelector('.horizontal');
    });

    expect(hasHorizontalClass).toBe(true);
  });

  test('has accessible role and label', async ({ page }) => {
    const steps = page.locator('cs-steps').first();

    const attrs = await steps.evaluate((el) => {
      const list = el.shadowRoot?.querySelector('[role="list"]');
      return {
        role: list?.getAttribute('role'),
        ariaLabel: list?.getAttribute('aria-label'),
      };
    });

    expect(attrs.role).toBe('list');
    expect(attrs.ariaLabel).toBe('Order tracking');
  });
});
