import { defineConfig } from '@playwright/test';
import path from 'node:path';

const PORT = Number(process.env.PORT) || 3000;

export default defineConfig({
  testDir: 'test',
  timeout: 15_000,
  expect: {
    toHaveScreenshot: {
      maxDiffPixels: 1,
    },
  },
  use: {
    baseURL: `http://localhost:${PORT}`,
    browserName: 'chromium',
  },
  projects: [
    {
      name: 'unit',
      testMatch: '**/*.unit.test.ts',
    },
    {
      name: 'integration',
      testMatch: '**/*.integ.test.ts',
    },
    {
      name: 'visual',
      testMatch: '**/*.visual.test.ts',
      use: {
        viewport: { width: 1280, height: 720 },
      },
    },
    {
      name: 'a11y',
      testMatch: '**/*.a11y.test.ts',
    },
    {
      name: 'smoke',
      testMatch: '**/smoke.test.ts',
    },
  ],
  webServer: {
    command: 'npx vite --port ' + PORT,
    port: PORT,
    reuseExistingServer: true,
  },
  snapshotDir: path.resolve('test', '__snapshots__'),
});
