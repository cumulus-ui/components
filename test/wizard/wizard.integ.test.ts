import { test, expect } from '@playwright/test';

test.describe('Wizard — Integration', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#/light/wizard/permutations');
    await page.waitForSelector('wizard-permutations-page');
  });

  test('renders step navigation with correct step count', async ({ page }) => {
    const wizard = page.locator('cs-wizard').first();

    const count = await wizard.evaluate((el) => {
      return el.shadowRoot?.querySelectorAll('.navigation li').length ?? 0;
    });

    expect(count).toBe(3);
  });

  test('displays current step title in form header', async ({ page }) => {
    const wizard = page.locator('cs-wizard').first();

    const headerText = await wizard.evaluate((el) => {
      return el.shadowRoot?.querySelector('.form-header')?.textContent?.trim() ?? '';
    });

    expect(headerText).toContain('Choose instance type');
  });

  test('next button fires navigate event', async ({ page }) => {
    const wizard = page.locator('cs-wizard').first();

    const detail = await wizard.evaluate((el) => {
      return new Promise<{ requestedStepIndex: number; reason: string }>((resolve) => {
        el.addEventListener('navigate', ((e: Event) => {
          resolve((e as CustomEvent).detail);
        }) as EventListener, { once: true });
        const btn = el.shadowRoot?.querySelector('.action-buttons-right cs-button[variant="primary"]');
        (btn as HTMLElement)?.click();
      });
    });

    expect(detail.requestedStepIndex).toBe(1);
    expect(detail.reason).toBe('next');
  });

  test('cancel button fires cancel event', async ({ page }) => {
    const wizard = page.locator('cs-wizard').first();

    const fired = await wizard.evaluate((el) => {
      return new Promise<boolean>((resolve) => {
        el.addEventListener('cancel', () => resolve(true), { once: true });
        const btn = el.shadowRoot?.querySelector('.action-buttons-left cs-button');
        (btn as HTMLElement)?.click();
      });
    });

    expect(fired).toBe(true);
  });

  test('previous button is hidden on first step', async ({ page }) => {
    const wizard = page.locator('cs-wizard').first();

    const hasPrevious = await wizard.evaluate((el) => {
      const buttons = el.shadowRoot?.querySelectorAll('.action-buttons-right cs-button');
      return buttons ? buttons.length > 1 : false;
    });

    expect(hasPrevious).toBe(false);
  });

  test('step with error shows alert', async ({ page }) => {
    const wizard = page.locator('cs-wizard').nth(1);

    const alertText = await wizard.evaluate((el) => {
      const alert = el.shadowRoot?.querySelector('cs-alert');
      return alert?.textContent?.trim() ?? '';
    });

    expect(alertText).toContain('Validation failed');
  });

  test('loading state shows on primary button', async ({ page }) => {
    const wizard = page.locator('cs-wizard').nth(2);

    const isLoading = await wizard.evaluate((el) => {
      const btn = el.shadowRoot?.querySelector('.action-buttons-right cs-button[variant="primary"]');
      return btn?.hasAttribute('loading') ?? false;
    });

    expect(isLoading).toBe(true);
  });

  test('navigation step click fires navigate event with step reason', async ({ page }) => {
    const wizard = page.locator('cs-wizard').nth(1);

    const detail = await wizard.evaluate((el) => {
      return new Promise<{ requestedStepIndex: number; reason: string }>((resolve) => {
        el.addEventListener('navigate', ((e: Event) => {
          resolve((e as CustomEvent).detail);
        }) as EventListener, { once: true });
        const firstLink = el.shadowRoot?.querySelector('.navigation li.enabled a');
        (firstLink as HTMLElement)?.click();
      });
    });

    expect(detail.requestedStepIndex).toBe(0);
    expect(detail.reason).toBe('step');
  });

  test('optional step displays optional label', async ({ page }) => {
    const wizard = page.locator('cs-wizard').first();

    const hasOptional = await wizard.evaluate((el) => {
      const navLinks = el.shadowRoot?.querySelectorAll('.navigation .title');
      return Array.from(navLinks ?? []).some(n => n.textContent?.includes('optional'));
    });

    expect(hasOptional).toBe(true);
  });
});
