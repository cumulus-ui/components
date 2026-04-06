import type { Page } from '@playwright/test';

export interface RenderResult<T extends HTMLElement = HTMLElement> {
  element: T;
  page: Page;
}

export async function renderComponent<T extends HTMLElement = HTMLElement>(
  page: Page,
  tagName: string,
  props?: Record<string, unknown>,
): Promise<RenderResult<T>> {
  await page.evaluate(
    ({ tag, attrs }) => {
      const el = document.createElement(tag);
      if (attrs) {
        for (const [key, value] of Object.entries(attrs)) {
          if (typeof value === 'boolean') {
            if (value) el.setAttribute(key, '');
          } else if (value != null) {
            el.setAttribute(key, String(value));
          }
        }
      }
      document.body.appendChild(el);
    },
    { tag: tagName, attrs: props as Record<string, string> },
  );

  const handle = await page.locator(tagName).first().elementHandle();
  if (!handle) throw new Error(`Failed to locate <${tagName}> after render`);

  await page.evaluate(
    (el) => (el as unknown as { updateComplete: Promise<boolean> }).updateComplete,
    handle,
  );

  return { element: handle as unknown as T, page };
}
