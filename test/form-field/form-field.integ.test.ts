import { test, expect } from '@playwright/test';

test.describe('FormField — Integration', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/pages/form-field/permutations.html');
    await page.waitForSelector('form-field-permutations-page');
  });

  test('label renders with correct text', async ({ page }) => {
    const ff = page.locator('cs-form-field[label="Name"]').first();
    const labelText = await ff.evaluate((el) => {
      return el.shadowRoot?.querySelector('.label')?.textContent?.trim();
    });
    expect(labelText).toBe('Name');
  });

  test('description renders', async ({ page }) => {
    const ff = page.locator('cs-form-field[label="Email"]').first();
    const descText = await ff.evaluate((el) => {
      return el.shadowRoot?.querySelector('.description')?.textContent?.trim();
    });
    expect(descText).toContain('never share your email');
  });

  test('error text shows with icon', async ({ page }) => {
    const ff = page.locator('cs-form-field[error-text]').first();
    const errorInfo = await ff.evaluate((el) => {
      const error = el.shadowRoot?.querySelector('.error');
      const icon = error?.querySelector('cs-icon');
      const message = error?.querySelector('.error__message');
      return {
        hasError: !!error,
        hasIcon: !!icon,
        iconName: icon?.getAttribute('name'),
        message: message?.textContent?.trim(),
      };
    });
    expect(errorInfo.hasError).toBe(true);
    expect(errorInfo.hasIcon).toBe(true);
    expect(errorInfo.iconName).toBe('status-negative');
    expect(errorInfo.message).toBe('Password is required');
  });

  test('warning text shows with icon when no error', async ({ page }) => {
    const ff = page.locator('cs-form-field[warning-text]').first();
    const warningInfo = await ff.evaluate((el) => {
      const warning = el.shadowRoot?.querySelector('.warning');
      const icon = warning?.querySelector('cs-icon');
      const message = warning?.querySelector('.warning__message');
      return {
        hasWarning: !!warning,
        hasIcon: !!icon,
        iconName: icon?.getAttribute('name'),
        message: message?.textContent?.trim(),
      };
    });
    expect(warningInfo.hasWarning).toBe(true);
    expect(warningInfo.hasIcon).toBe(true);
    expect(warningInfo.iconName).toBe('status-warning');
    expect(warningInfo.message).toContain('already be taken');
  });

  test('warning is hidden when error is present', async ({ page }) => {
    const ff = page.locator('cs-form-field[label="Full Name"]').first();
    const hasWarning = await ff.evaluate((el) => {
      return !!el.shadowRoot?.querySelector('.warning');
    });
    expect(hasWarning).toBe(false);
  });

  test('constraint text renders', async ({ page }) => {
    const ff = page.locator('cs-form-field[label="Bio"]').first();
    const constraintText = await ff.evaluate((el) => {
      return el.shadowRoot?.querySelector('.constraint')?.textContent?.trim();
    });
    expect(constraintText).toBe('Maximum 200 characters');
  });

  test('controlId is auto-generated', async ({ page }) => {
    const ff = page.locator('cs-form-field[label="Name"]').first();
    const forAttr = await ff.evaluate((el) => {
      return el.shadowRoot?.querySelector('label')?.getAttribute('for');
    });
    expect(forAttr).toMatch(/^cs-formfield-/);
  });

  test('custom controlId is used', async ({ page }) => {
    const ff = page.locator('cs-form-field[control-id="my-phone-input"]').first();
    const forAttr = await ff.evaluate((el) => {
      return el.shadowRoot?.querySelector('label')?.getAttribute('for');
    });
    expect(forAttr).toBe('my-phone-input');
  });

  test('slotted input gets id from controlId', async ({ page }) => {
    const ff = page.locator('cs-form-field[label="Name"]').first();
    const inputId = await ff.evaluate((el) => {
      const input = el.querySelector('input');
      return input?.id;
    });
    expect(inputId).toMatch(/^cs-formfield-/);
  });

  test('slotted input gets aria-invalid when error present', async ({ page }) => {
    const ff = page.locator('cs-form-field[label="Password"]').first();
    const ariaInvalid = await ff.evaluate((el) => {
      const input = el.querySelector('input');
      return input?.getAttribute('aria-invalid');
    });
    expect(ariaInvalid).toBe('true');
  });

  test('slotted input has no aria-invalid when no error', async ({ page }) => {
    const ff = page.locator('cs-form-field[label="Name"]').first();
    const ariaInvalid = await ff.evaluate((el) => {
      const input = el.querySelector('input');
      return input?.getAttribute('aria-invalid');
    });
    expect(ariaInvalid).toBeNull();
  });

  test('context provides correct values', async ({ page }) => {
    const ff = page.locator('cs-form-field[label="Password"]').first();
    const context = await ff.evaluate((el: any) => {
      return {
        controlId: el._context?.controlId,
        invalid: el._context?.invalid,
        warning: el._context?.warning,
        hasAriaLabelledby: !!el._context?.ariaLabelledby,
        hasAriaDescribedby: !!el._context?.ariaDescribedby,
      };
    });
    expect(context.controlId).toMatch(/^cs-formfield-/);
    expect(context.invalid).toBe(true);
    expect(context.warning).toBe(false);
    expect(context.hasAriaLabelledby).toBe(true);
    expect(context.hasAriaDescribedby).toBe(true);
  });
});
