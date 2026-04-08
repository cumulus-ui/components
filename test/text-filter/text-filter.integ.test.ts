import { test, expect, type Page } from '@playwright/test';

async function loadDemoPage(page: Page): Promise<void> {
  await page.goto('/');
  await page.addScriptTag({
    type: 'module',
    content: `import '/pages/text-filter/permutations.ts';`,
  });
  await page.waitForFunction(
    (tag) => customElements.get(tag) !== undefined,
    'text-filter-permutations-page',
  );
  await page.evaluate((tag) => {
    document.body.innerHTML = '';
    document.body.appendChild(document.createElement(tag));
  }, 'text-filter-permutations-page');
  await page.waitForSelector('text-filter-permutations-page');
}

test.describe('TextFilter — Integration', () => {
  test.beforeEach(async ({ page }) => {
    await loadDemoPage(page);
  });

  test('typing fires change event with filteringText', async ({ page }) => {
    const filter = page.locator('cs-text-filter[filtering-aria-label="Filter resources"]').first();

    const detail = await filter.evaluate((el) => {
      return new Promise<{ filteringText: string }>((resolve) => {
        el.addEventListener('change', ((e: Event) => {
          resolve((e as CustomEvent).detail);
        }) as EventListener, { once: true });

        const csInput = el.shadowRoot!.querySelector('cs-input')!;
        const native = csInput.shadowRoot!.querySelector('input')!;
        native.value = 'search term';
        native.dispatchEvent(new Event('input', { bubbles: true }));
      });
    });

    expect(detail.filteringText).toBe('search term');
  });

  test('delayedChange fires after debounce', async ({ page }) => {
    const filter = page.locator('cs-text-filter[filtering-aria-label="Filter resources"]').first();

    const detail = await filter.evaluate((el) => {
      return new Promise<{ filteringText: string }>((resolve) => {
        el.addEventListener('delayedChange', ((e: Event) => {
          resolve((e as CustomEvent).detail);
        }) as EventListener, { once: true });

        const csInput = el.shadowRoot!.querySelector('cs-input')!;
        const native = csInput.shadowRoot!.querySelector('input')!;
        native.value = 'delayed';
        native.dispatchEvent(new Event('input', { bubbles: true }));
      });
    });

    expect(detail.filteringText).toBe('delayed');
  });

  test('disabled filter disables the input', async ({ page }) => {
    const filter = page.locator('cs-text-filter[disabled]').first();

    const isDisabled = await filter.evaluate((el) => {
      const csInput = el.shadowRoot!.querySelector('cs-input')!;
      return csInput.hasAttribute('disabled');
    });

    expect(isDisabled).toBe(true);
  });

  test('count text is displayed when filtering text is present', async ({ page }) => {
    const filter = page.locator('cs-text-filter[count-text="12 matches"]').first();

    const countText = await filter.evaluate((el) => {
      const results = el.shadowRoot!.querySelector('.results');
      return results?.textContent?.trim();
    });

    expect(countText).toBe('12 matches');
  });

  test('count text is hidden when filtering text is empty', async ({ page }) => {
    const filter = page.locator('cs-text-filter[filtering-aria-label="Filter resources"]').first();

    const hasResults = await filter.evaluate((el) => {
      return el.shadowRoot!.querySelector('.results') !== null;
    });

    expect(hasResults).toBe(false);
  });

  test('clear button resets filteringText', async ({ page }) => {
    const filter = page.locator('cs-text-filter[count-text="12 matches"]').first();

    const detail = await filter.evaluate((el) => {
      return new Promise<{ filteringText: string }>((resolve) => {
        el.addEventListener('change', ((e: Event) => {
          resolve((e as CustomEvent).detail);
        }) as EventListener, { once: true });

        const csInput = el.shadowRoot!.querySelector('cs-input')!;
        const clearBtn = csInput.shadowRoot!.querySelector('button') as HTMLButtonElement;
        if (clearBtn) clearBtn.click();
      });
    });

    expect(detail.filteringText).toBe('');
  });
});
