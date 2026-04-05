import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: 'test',
  testMatch: '**/*.test.ts',
  timeout: 15_000,
  use: {
    baseURL: 'http://localhost:3000',
    browserName: 'chromium',
  },
  webServer: {
    command: 'node scripts/serve.mjs',
    port: 3000,
    reuseExistingServer: !process.env.CI,
  },
});
