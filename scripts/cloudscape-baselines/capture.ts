import { chromium } from '@playwright/test';
import { spawn, type ChildProcess } from 'node:child_process';
import { mkdirSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const COMPONENTS_PKG = resolve(__dirname, '..', '..');
const PORT = 4173;
const BASE_URL = `http://localhost:${PORT}`;

const COMPONENTS = [
  'checkbox',
  'icon',
  'box',
  'grid',
  'space-between',
  'text-content',
  'spinner',
  'badge',
  'live-region',
  'radio-group',
  'tiles',
  'list',
  'tree-view',
  'file-dropzone',
  'anchor-navigation',
];

function startViteServer(): Promise<ChildProcess> {
  return new Promise((resolvePromise, reject) => {
    const child = spawn('npx', ['vite', '--port', String(PORT), '--strictPort'], {
      cwd: __dirname,
      stdio: ['ignore', 'pipe', 'pipe'],
    });

    let started = false;
    const timeout = setTimeout(() => {
      if (!started) {
        child.kill();
        reject(new Error('Vite server did not start within 30s'));
      }
    }, 30_000);

    child.stdout?.on('data', (data: Buffer) => {
      const text = data.toString();
      if (text.includes('Local:') || text.includes(`localhost:${PORT}`)) {
        started = true;
        clearTimeout(timeout);
        resolvePromise(child);
      }
    });

    child.stderr?.on('data', (data: Buffer) => {
      const text = data.toString();
      if (text.includes('Local:') || text.includes(`localhost:${PORT}`)) {
        started = true;
        clearTimeout(timeout);
        resolvePromise(child);
      }
    });

    child.on('error', (err) => {
      clearTimeout(timeout);
      reject(err);
    });

    child.on('exit', (code) => {
      if (!started) {
        clearTimeout(timeout);
        reject(new Error(`Vite exited with code ${code} before starting`));
      }
    });
  });
}

async function capture() {
  const filterArg = process.argv[2];
  const components = filterArg
    ? COMPONENTS.filter(c => c === filterArg)
    : COMPONENTS;

  if (filterArg && components.length === 0) {
    console.error(`Unknown component: ${filterArg}\nAvailable: ${COMPONENTS.join(', ')}`);
    process.exit(1);
  }

  console.log('Starting Vite dev server...');
  const server = await startViteServer();

  try {
    console.log(`Vite server running on ${BASE_URL}`);
    const browser = await chromium.launch();
    const context = await browser.newContext({
      viewport: { width: 1280, height: 720 },
    });

    for (const component of components) {
      const baselineDir = resolve(COMPONENTS_PKG, 'test', component, 'baselines');
      if (!existsSync(baselineDir)) {
        mkdirSync(baselineDir, { recursive: true });
      }

      for (const mode of ['light', 'dark'] as const) {
        const page = await context.newPage();
        const url = `${BASE_URL}/#/${mode}/${component}/permutations`;
        console.log(`  Capturing ${mode}/${component}...`);

        await page.goto(url);
        await page.waitForLoadState('networkidle');
        if (mode === 'dark') {
          await page.waitForFunction(
            () => document.body.classList.contains('awsui-dark-mode'),
            { timeout: 5000 },
          );
        }
        await page.waitForFunction(
          () => {
            const root = document.querySelector('#root');
            return root && root.querySelector('h2') !== null;
          },
          { timeout: 5000 },
        );
        await page.waitForTimeout(1000);
        await page.evaluate(async () => {
          await document.fonts.load('400 14px "Open Sans"');
          await document.fonts.load('700 14px "Open Sans"');
          await document.fonts.ready;
        });
        await page.waitForTimeout(100);
        await page.addStyleTag({
          content: '*, *::before, *::after { animation: none !important; transition: none !important; }',
        });
        await page.waitForTimeout(50);

        const filename = mode === 'light'
          ? `${component}-permutations.png`
          : `${component}-dark.png`;

        await page.locator('body').screenshot({
          path: resolve(baselineDir, filename),
        });

        await page.close();
      }
    }

    await browser.close();
    console.log(`\nDone! Captured ${components.length * 2} baselines.`);
  } finally {
    server.kill();
  }
}

capture().catch((err) => {
  console.error('Capture failed:', err);
  process.exit(1);
});
