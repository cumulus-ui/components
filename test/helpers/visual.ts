import type { Page } from '@playwright/test';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { dirname } from 'node:path';
import { PNG } from 'pngjs';
import pixelmatch from 'pixelmatch';

export interface CompareResult {
  match: boolean;
  diffPixels: number;
  diffImagePath: string | null;
}

export async function freezeAnimations(page: Page): Promise<void> {
  await page.evaluate(() => {
    const css = '*, *::before, *::after { animation: none !important; transition: none !important; }';
    const docStyle = document.createElement('style');
    docStyle.textContent = css;
    document.head.appendChild(docStyle);
    function injectIntoShadows(root: ParentNode) {
      root.querySelectorAll('*').forEach(el => {
        if (el.shadowRoot) {
          const s = document.createElement('style');
          s.textContent = css;
          el.shadowRoot.appendChild(s);
          injectIntoShadows(el.shadowRoot);
        }
      });
    }
    injectIntoShadows(document);
  });
  await page.waitForTimeout(50);
}

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

export async function compareScreenshot(
  page: Page,
  selector: string,
  baselinePath: string,
  threshold = 0.1,
  maxDiffPixels = 1,
): Promise<CompareResult> {
  const element = page.locator(selector).first();
  const screenshotBuffer = await element.screenshot();

  const baselineDir = dirname(baselinePath);
  if (!existsSync(baselineDir)) {
    mkdirSync(baselineDir, { recursive: true });
  }

  if (!existsSync(baselinePath)) {
    writeFileSync(baselinePath, screenshotBuffer);
    return { match: true, diffPixels: 0, diffImagePath: null };
  }

  const baseline = PNG.sync.read(readFileSync(baselinePath));
  const actual = PNG.sync.read(screenshotBuffer);

  const { width, height } = baseline;
  if (actual.width !== width || actual.height !== height) {
    writeFileSync(baselinePath.replace('.png', '.actual.png'), screenshotBuffer);
    return {
      match: false,
      diffPixels: width * height,
      diffImagePath: baselinePath.replace('.png', '.actual.png'),
    };
  }

  const diff = new PNG({ width, height });
  const diffPixels = pixelmatch(baseline.data, actual.data, diff.data, width, height, {
    threshold,
  });

  let diffImagePath: string | null = null;
  if (diffPixels > 1) {
    diffImagePath = baselinePath.replace('.png', '.diff.png');
    writeFileSync(diffImagePath, PNG.sync.write(diff));
    writeFileSync(baselinePath.replace('.png', '.actual.png'), screenshotBuffer);
  }

  return { match: diffPixels <= maxDiffPixels, diffPixels, diffImagePath };
}

export interface SectionResult {
  name: string;
  slug: string;
  result: CompareResult;
}

export async function compareSections(
  page: Page,
  baselineDir: string,
  component: string,
  mode: 'light' | 'dark',
  threshold = 0.1,
  maxDiffPixels = 1,
): Promise<SectionResult[]> {
  await freezeAnimations(page);

  const sections = page.locator('section');
  const count = await sections.count();
  const results: SectionResult[] = [];

  for (let i = 0; i < count; i++) {
    const section = sections.nth(i);
    const title = await section.locator('h3').first().textContent() ?? `section-${i}`;
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const baselinePath = `${baselineDir}/${component}-${mode}-${slug}.png`;

    const screenshotBuffer = await section.screenshot();
    const baseDir = dirname(baselinePath);
    if (!existsSync(baseDir)) mkdirSync(baseDir, { recursive: true });

    if (!existsSync(baselinePath)) {
      writeFileSync(baselinePath, screenshotBuffer);
      results.push({ name: title, slug, result: { match: true, diffPixels: 0, diffImagePath: null } });
      continue;
    }

    const baseline = PNG.sync.read(readFileSync(baselinePath));
    const actual = PNG.sync.read(screenshotBuffer);

    if (actual.width !== baseline.width || actual.height !== baseline.height) {
      writeFileSync(baselinePath.replace('.png', '.actual.png'), screenshotBuffer);
      results.push({
        name: title,
        slug,
        result: { match: false, diffPixels: baseline.width * baseline.height, diffImagePath: baselinePath.replace('.png', '.actual.png') },
      });
      continue;
    }

    const diff = new PNG({ width: baseline.width, height: baseline.height });
    const diffPixels = pixelmatch(baseline.data, actual.data, diff.data, baseline.width, baseline.height, { threshold });

    let diffImagePath: string | null = null;
    if (diffPixels > maxDiffPixels) {
      diffImagePath = baselinePath.replace('.png', '.diff.png');
      writeFileSync(diffImagePath, PNG.sync.write(diff));
      writeFileSync(baselinePath.replace('.png', '.actual.png'), screenshotBuffer);
    }

    results.push({ name: title, slug, result: { match: diffPixels <= maxDiffPixels, diffPixels, diffImagePath } });
  }

  return results;
}
