import { test, expect } from '@playwright/test';

test('CDN bundle loads without errors', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', (err) => errors.push(err.message));

  await page.goto('/demo/index.html');

  await expect(page.locator('#status')).toHaveText('✓ CDN bundle loaded successfully');
  expect(errors).toHaveLength(0);
});
