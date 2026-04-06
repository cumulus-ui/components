import { test, expect } from '@playwright/test';

test.describe('FileDropzone — Integration', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#/light/file-dropzone/permutations');
    await page.waitForSelector('file-dropzone-permutations-page');
  });

  test('renders dropzone with slot content', async ({ page }) => {
    const dropzone = page.locator('cs-file-dropzone').first();
    await expect(dropzone).toBeVisible();
    await expect(dropzone).toContainText('Drop files here');
  });

  test('applies active class during drag hover', async ({ page }) => {
    const dropzone = page.locator('cs-file-dropzone').first();

    const hasActiveClass = await dropzone.evaluate(async (el) => {
      const inner = el.shadowRoot!.querySelector('.root')!;

      const dt = new DataTransfer();
      dt.items.add(new File(['test'], 'test.txt', { type: 'text/plain' }));
      const enterEvent = new DragEvent('dragenter', {
        bubbles: true,
        composed: true,
        dataTransfer: dt,
      });
      inner.dispatchEvent(enterEvent);

      await (el as any).updateComplete;
      return inner.classList.contains('hovered');
    });

    expect(hasActiveClass).toBe(true);
  });

  test('fires change event on file drop', async ({ page }) => {
    const dropzone = page.locator('cs-file-dropzone').first();

    const firedEvent = await dropzone.evaluate((el) => {
      return new Promise<boolean>((resolve) => {
        el.addEventListener('change', () => resolve(true), { once: true });
        const dt = new DataTransfer();
        dt.items.add(new File(['hello'], 'test.txt', { type: 'text/plain' }));
        const dropEvent = new DragEvent('drop', {
          bubbles: true,
          composed: true,
          dataTransfer: dt,
        });
        el.shadowRoot!.querySelector('.root')!.dispatchEvent(dropEvent);
      });
    });

    expect(firedEvent).toBe(true);
  });

  test('change event detail contains File array', async ({ page }) => {
    const dropzone = page.locator('cs-file-dropzone').first();

    const detail = await dropzone.evaluate((el) => {
      return new Promise<{ fileCount: number; firstName: string }>((resolve) => {
        el.addEventListener('change', ((e: Event) => {
          const files = (e as CustomEvent).detail.value;
          resolve({ fileCount: files.length, firstName: files[0].name });
        }) as EventListener, { once: true });

        const dt = new DataTransfer();
        dt.items.add(new File(['content'], 'myfile.pdf', { type: 'application/pdf' }));
        const dropEvent = new DragEvent('drop', {
          bubbles: true,
          composed: true,
          dataTransfer: dt,
        });
        el.shadowRoot!.querySelector('.root')!.dispatchEvent(dropEvent);
      });
    });

    expect(detail.fileCount).toBe(1);
    expect(detail.firstName).toBe('myfile.pdf');
  });

  test('has proper ARIA attributes', async ({ page }) => {
    const inner = page.locator('cs-file-dropzone .root').first();
    await expect(inner).toHaveAttribute('role', 'button');
    await expect(inner).toHaveAttribute('tabindex', '0');
    await expect(inner).toHaveAttribute('aria-label', 'Drop files here');
  });
});
