import { test, expect, type Page } from '@playwright/test';

async function loadDemoPage(page: Page): Promise<void> {
  await page.goto('/');
  await page.addScriptTag({
    type: 'module',
    content: `import '/pages/date-picker/permutations.ts';`,
  });
  await page.waitForFunction(
    (tag) => customElements.get(tag) !== undefined,
    'date-picker-permutations-page',
  );
  await page.evaluate((tag) => {
    document.body.innerHTML = '';
    document.body.appendChild(document.createElement(tag));
  }, 'date-picker-permutations-page');
  await page.waitForSelector('date-picker-permutations-page');
}

test.describe('DatePicker — Integration', () => {
  test.beforeEach(async ({ page }) => {
    await loadDemoPage(page);
  });

  test('renders date input and calendar button', async ({ page }) => {
    const picker = page.locator('cs-date-picker[aria-label="Default date picker"]').first();

    const hasInput = await picker.evaluate((el) => {
      return el.shadowRoot!.querySelector('cs-date-input') !== null;
    });

    const hasButton = await picker.evaluate((el) => {
      return el.shadowRoot!.querySelector('cs-button[icon-name="calendar"]') !== null;
    });

    expect(hasInput).toBe(true);
    expect(hasButton).toBe(true);
  });

  test('clicking calendar button opens dropdown', async ({ page }) => {
    const picker = page.locator('cs-date-picker[aria-label="Default date picker"]').first();

    await picker.evaluate((el) => {
      const btn = el.shadowRoot!.querySelector('cs-button[icon-name="calendar"]') as HTMLElement;
      btn.click();
    });

    const hasDropdown = await picker.evaluate((el) => {
      return el.shadowRoot!.querySelector('.dropdown') !== null;
    });

    expect(hasDropdown).toBe(true);
  });

  test('clicking calendar button again closes dropdown', async ({ page }) => {
    const picker = page.locator('cs-date-picker[aria-label="Default date picker"]').first();

    await picker.evaluate((el) => {
      const btn = el.shadowRoot!.querySelector('cs-button[icon-name="calendar"]') as HTMLElement;
      btn.click();
    });

    await picker.evaluate((el) => {
      const btn = el.shadowRoot!.querySelector('cs-button[icon-name="calendar"]') as HTMLElement;
      btn.click();
    });

    const hasDropdown = await picker.evaluate((el) => {
      return el.shadowRoot!.querySelector('.dropdown') !== null;
    });

    expect(hasDropdown).toBe(false);
  });

  test('selecting a date in calendar updates value and closes dropdown', async ({ page }) => {
    const picker = page.locator('cs-date-picker[aria-label="Default date picker"]').first();

    const newValue = await picker.evaluate((el) => {
      return new Promise<string>((resolve) => {
        el.addEventListener('change', ((e: Event) => {
          resolve((e as CustomEvent).detail.value);
        }) as EventListener, { once: true });

        const btn = el.shadowRoot!.querySelector('cs-button[icon-name="calendar"]') as HTMLElement;
        btn.click();

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            const calendar = el.shadowRoot!.querySelector('cs-calendar') as HTMLElement;
            const cell = calendar?.shadowRoot!.querySelector('[data-date="2025-06-20"]') as HTMLElement;
            cell?.click();
          });
        });
      });
    });

    expect(newValue).toBe('2025-06-20');

    const dropdownGone = await picker.evaluate((el) => {
      return el.shadowRoot!.querySelector('.dropdown') === null;
    });

    expect(dropdownGone).toBe(true);
  });

  test('typing in input fires change event', async ({ page }) => {
    const picker = page.locator('cs-date-picker[aria-label="Default date picker"]').first();

    const value = await picker.evaluate((el) => {
      return new Promise<string>((resolve) => {
        el.addEventListener('change', ((e: Event) => {
          resolve((e as CustomEvent).detail.value);
        }) as EventListener, { once: true });

        const dateInput = el.shadowRoot!.querySelector('cs-date-input') as HTMLElement;
        const native = dateInput.shadowRoot!.querySelector('input')!;
        native.value = '2025-12-25';
        native.dispatchEvent(new Event('input', { bubbles: true }));
      });
    });

    expect(value).toBe('2025-12-25');
  });

  test('disabled date picker prevents opening calendar', async ({ page }) => {
    const picker = page.locator('cs-date-picker[disabled]').first();

    await picker.evaluate((el) => {
      const btn = el.shadowRoot!.querySelector('cs-button[icon-name="calendar"]') as HTMLElement;
      btn.click();
    });

    const hasDropdown = await picker.evaluate((el) => {
      return el.shadowRoot!.querySelector('.dropdown') !== null;
    });

    expect(hasDropdown).toBe(false);
  });

  test('read-only date picker prevents opening calendar', async ({ page }) => {
    const picker = page.locator('cs-date-picker[read-only]').first();

    await picker.evaluate((el) => {
      const btn = el.shadowRoot!.querySelector('cs-button[icon-name="calendar"]') as HTMLElement;
      btn.click();
    });

    const hasDropdown = await picker.evaluate((el) => {
      return el.shadowRoot!.querySelector('.dropdown') !== null;
    });

    expect(hasDropdown).toBe(false);
  });

  test('escape key closes the calendar dropdown', async ({ page }) => {
    const picker = page.locator('cs-date-picker[aria-label="Default date picker"]').first();

    await picker.evaluate((el) => {
      const btn = el.shadowRoot!.querySelector('cs-button[icon-name="calendar"]') as HTMLElement;
      btn.click();
    });

    const isOpen = await picker.evaluate((el) => {
      return el.shadowRoot!.querySelector('.dropdown') !== null;
    });
    expect(isOpen).toBe(true);

    await picker.evaluate((el) => {
      el.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    });

    const isClosed = await picker.evaluate((el) => {
      return el.shadowRoot!.querySelector('.dropdown') === null;
    });
    expect(isClosed).toBe(true);
  });

  test('calendar button has aria-expanded attribute', async ({ page }) => {
    const picker = page.locator('cs-date-picker[aria-label="Default date picker"]').first();

    const ariaExpanded = await picker.evaluate((el) => {
      const btn = el.shadowRoot!.querySelector('cs-button[icon-name="calendar"]') as HTMLElement;
      return btn.getAttribute('aria-expanded');
    });

    expect(ariaExpanded).toBe('false');
  });
});
