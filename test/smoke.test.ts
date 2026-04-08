import { test, expect } from '@playwright/test';

test('CDN bundle loads without errors', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', (err) => errors.push(err.message));

  await page.goto('/');

  await expect(page.locator('demo-app h1')).toHaveText('Component Gallery');
  expect(errors).toHaveLength(0);
});
