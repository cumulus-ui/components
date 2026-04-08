import { test, expect } from '@playwright/test';

test.describe('File Upload — Integration', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#/light/file-upload/permutations');
    await page.waitForSelector('file-upload-permutations-page');
  });

  test('renders label text', async ({ page }) => {
    const upload = page.locator('cs-file-upload[label="Upload document"]').first();

    const labelText = await upload.evaluate((el) => {
      return el.shadowRoot?.querySelector('.label')?.textContent?.trim();
    });

    expect(labelText).toBe('Upload document');
  });

  test('renders constraint text', async ({ page }) => {
    const upload = page.locator('cs-file-upload[label="Upload document"]').first();

    const constraintText = await upload.evaluate((el) => {
      return el.shadowRoot?.querySelector('.constraint-text')?.textContent?.trim();
    });

    expect(constraintText).toContain('Max file size');
  });

  test('renders error text when set', async ({ page }) => {
    const upload = page.locator('cs-file-upload[error-text="File is required"]');

    const errorText = await upload.evaluate((el) => {
      return el.shadowRoot?.querySelector('.error-text')?.textContent?.trim();
    });

    expect(errorText).toBe('File is required');
  });

  test('contains cs-file-input element', async ({ page }) => {
    const upload = page.locator('cs-file-upload').first();

    const hasFileInput = await upload.evaluate((el) => {
      return el.shadowRoot?.querySelector('cs-file-input') !== null;
    });

    expect(hasFileInput).toBe(true);
  });

  test('disabled state passes to file input', async ({ page }) => {
    const upload = page.locator('cs-file-upload[disabled]');

    const isDisabled = await upload.evaluate((el) => {
      const fileInput = el.shadowRoot?.querySelector('cs-file-input');
      return fileInput?.hasAttribute('disabled');
    });

    expect(isDisabled).toBe(true);
  });

  test('multiple attribute passes to file input', async ({ page }) => {
    const upload = page.locator('cs-file-upload[multiple]').first();

    const isMultiple = await upload.evaluate((el) => {
      const fileInput = el.shadowRoot?.querySelector('cs-file-input');
      return fileInput?.hasAttribute('multiple');
    });

    expect(isMultiple).toBe(true);
  });

  test('accept attribute passes to file input', async ({ page }) => {
    const upload = page.locator('cs-file-upload[accept="image/*"]');

    const accept = await upload.evaluate((el) => {
      const fileInput = el.shadowRoot?.querySelector('cs-file-input');
      return fileInput?.getAttribute('accept');
    });

    expect(accept).toBe('image/*');
  });

  test('renders file list when files are present', async ({ page }) => {
    const upload = page.locator('cs-file-upload[label="Upload document"]').first();

    await upload.evaluate((el: any) => {
      const file = new File(['test content'], 'test.txt', { type: 'text/plain' });
      el.value = [file];
      el.requestUpdate();
    });

    await page.waitForTimeout(100);

    const hasFileList = await upload.evaluate((el) => {
      return el.shadowRoot?.querySelector('.file-list') !== null;
    });

    expect(hasFileList).toBe(true);
  });

  test('file item shows filename', async ({ page }) => {
    const upload = page.locator('cs-file-upload[label="Upload document"]').first();

    await upload.evaluate((el: any) => {
      const file = new File(['test content'], 'document.pdf', { type: 'application/pdf' });
      el.value = [file];
      el.requestUpdate();
    });

    await page.waitForTimeout(100);

    const fileName = await upload.evaluate((el) => {
      return el.shadowRoot?.querySelector('.file-name')?.textContent?.trim();
    });

    expect(fileName).toBe('document.pdf');
  });

  test('remove button has aria-label', async ({ page }) => {
    const upload = page.locator('cs-file-upload[label="Upload document"]').first();

    await upload.evaluate((el: any) => {
      const file = new File(['test'], 'test.txt', { type: 'text/plain' });
      el.value = [file];
      el.requestUpdate();
    });

    await page.waitForTimeout(100);

    const ariaLabel = await upload.evaluate((el) => {
      return el.shadowRoot?.querySelector('.dismiss-button')?.getAttribute('aria-label');
    });

    expect(ariaLabel).toContain('Remove');
  });

  test('remove button fires change event', async ({ page }) => {
    const upload = page.locator('cs-file-upload[label="Upload document"]').first();

    await upload.evaluate((el: any) => {
      const file = new File(['test'], 'test.txt', { type: 'text/plain' });
      el.value = [file];
      el.requestUpdate();
    });

    await page.waitForTimeout(100);

    const newLength = await upload.evaluate((el) => {
      return new Promise<number>((resolve) => {
        el.addEventListener('change', ((e: Event) => {
          resolve((e as CustomEvent).detail.value.length);
        }) as EventListener, { once: true });
        const removeBtn = el.shadowRoot?.querySelector('.dismiss-button') as HTMLElement;
        removeBtn?.click();
      });
    });

    expect(newLength).toBe(0);
  });
});
