import { test, expect, type Page } from '@playwright/test';

async function loadDemoPage(page: Page): Promise<void> {
  await page.goto('/');
  await page.addScriptTag({
    type: 'module',
    content: `import '/pages/calendar/permutations.ts';`,
  });
  await page.waitForFunction(
    (tag) => customElements.get(tag) !== undefined,
    'calendar-permutations-page',
  );
  await page.evaluate((tag) => {
    document.body.innerHTML = '';
    document.body.appendChild(document.createElement(tag));
  }, 'calendar-permutations-page');
  await page.waitForSelector('calendar-permutations-page');
}

test.describe('Calendar — Integration', () => {
  test.beforeEach(async ({ page }) => {
    await loadDemoPage(page);
  });

  test('renders month grid with day headers', async ({ page }) => {
    const calendar = page.locator('cs-calendar').first();

    const headerCount = await calendar.evaluate((el) => {
      return el.shadowRoot!.querySelectorAll('.calendar-date-header').length;
    });

    expect(headerCount).toBe(7);
  });

  test('renders 6 weeks of date cells', async ({ page }) => {
    const calendar = page.locator('cs-calendar').first();

    const rowCount = await calendar.evaluate((el) => {
      return el.shadowRoot!.querySelectorAll('.calendar-row').length;
    });

    expect(rowCount).toBe(6);
  });

  test('selected date has calendar-date-selected class', async ({ page }) => {
    const calendar = page.locator('cs-calendar[aria-label="Default calendar"]').first();

    const hasSelectedClass = await calendar.evaluate((el) => {
      const cell = el.shadowRoot!.querySelector('[data-date="2025-06-15"]');
      return cell?.classList.contains('calendar-date-selected') ?? false;
    });

    expect(hasSelectedClass).toBe(true);
  });

  test('clicking a date fires change event', async ({ page }) => {
    const calendar = page.locator('cs-calendar[aria-label="Default calendar"]').first();

    const newValue = await calendar.evaluate((el) => {
      return new Promise<string>((resolve) => {
        el.addEventListener('change', ((e: Event) => {
          resolve((e as CustomEvent).detail.value);
        }) as EventListener, { once: true });

        const cell = el.shadowRoot!.querySelector('[data-date="2025-06-20"]') as HTMLElement;
        cell?.click();
      });
    });

    expect(newValue).toBe('2025-06-20');
  });

  test('previous month button navigates to previous month', async ({ page }) => {
    const calendar = page.locator('cs-calendar[aria-label="Default calendar"]').first();

    await calendar.evaluate((el) => {
      const prevBtn = el.shadowRoot!.querySelector('.calendar-prev-btn') as HTMLElement;
      prevBtn.click();
    });

    const title = await calendar.evaluate((el) => {
      return el.shadowRoot!.querySelector('.calendar-header-title')?.textContent?.trim();
    });

    expect(title).toContain('May');
  });

  test('next month button navigates to next month', async ({ page }) => {
    const calendar = page.locator('cs-calendar[aria-label="Default calendar"]').first();

    await calendar.evaluate((el) => {
      const nextBtn = el.shadowRoot!.querySelector('.calendar-next-btn') as HTMLElement;
      nextBtn.click();
    });

    const title = await calendar.evaluate((el) => {
      return el.shadowRoot!.querySelector('.calendar-header-title')?.textContent?.trim();
    });

    expect(title).toContain('July');
  });

  test('disabled dates from isDateEnabled are not selectable', async ({ page }) => {
    const calendar = page.locator('cs-calendar[aria-label="Weekdays only calendar"]').first();

    const ariaDisabled = await calendar.evaluate((el) => {
      const sunday = el.shadowRoot!.querySelector('.calendar-date[aria-disabled="true"]');
      return sunday !== null;
    });

    expect(ariaDisabled).toBe(true);
  });

  test('today has calendar-date-current class', async ({ page }) => {
    const calendar = page.locator('cs-calendar[aria-label="No selection calendar"]').first();

    const hasTodayClass = await calendar.evaluate((el) => {
      const today = new Date();
      const y = today.getFullYear();
      const m = String(today.getMonth() + 1).padStart(2, '0');
      const d = String(today.getDate()).padStart(2, '0');
      const cell = el.shadowRoot!.querySelector(`[data-date="${y}-${m}-${d}"]`);
      return cell?.classList.contains('calendar-date-current') ?? false;
    });

    expect(hasTodayClass).toBe(true);
  });

  test('displays correct month title with locale', async ({ page }) => {
    const calendar = page.locator('cs-calendar[aria-label="German calendar"]').first();

    const title = await calendar.evaluate((el) => {
      return el.shadowRoot!.querySelector('.calendar-header-title')?.textContent?.trim();
    });

    expect(title).toContain('Juni');
  });
});
