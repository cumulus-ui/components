import type { Page } from '@playwright/test';

export async function waitForPage(page: Page, route: string): Promise<void> {
  await page.goto(`/#/${route}`);
  await page.waitForLoadState('networkidle');
  const isDark = route.startsWith('dark/');
  await page.waitForFunction(
    (dark) => {
      const body = document.body;
      const hasDarkClass = body.classList.contains('awsui-dark-mode');
      if (dark && !hasDarkClass) return false;
      if (!dark && hasDarkClass) return false;
      const slot = document.querySelector('#page-slot');
      return slot && slot.children.length > 0;
    },
    isDark,
    { timeout: 5000 },
  );
  await page.waitForTimeout(500);
  await page.evaluate(async () => {
    await document.fonts.load('400 14px "Open Sans"');
    await document.fonts.load('700 14px "Open Sans"');
    await document.fonts.ready;
  });
}
