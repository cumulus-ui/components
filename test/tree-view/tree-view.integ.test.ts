import { test, expect } from '@playwright/test';

test.describe('TreeView — Integration', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#/light/tree-view/permutations');
    await page.waitForSelector('tree-view-permutations-page');
  });

  test('renders top-level tree nodes', async ({ page }) => {
    const tree = page.locator('cs-tree-view').first();
    const topNodes = tree.locator(':scope > .root > .tree > .treeitem');
    await expect(topNodes).toHaveCount(4);
  });

  test('renders tree role', async ({ page }) => {
    const tree = page.locator('cs-tree-view').first();
    const treeEl = tree.locator('[role="tree"]');
    await expect(treeEl).toHaveCount(1);
  });

  test('has aria-label attribute', async ({ page }) => {
    const tree = page.locator('cs-tree-view').first();
    const treeEl = tree.locator('[role="tree"]');
    await expect(treeEl).toHaveAttribute('aria-label', 'File tree');
  });

  test('expanded node shows children', async ({ page }) => {
    const tree = page.locator('cs-tree-view').first();
    const srcNode = tree.locator('[data-node-id="src"]');
    const children = srcNode.locator(':scope > .treeitem-group');
    await expect(children).toBeVisible();
  });

  test('collapsed node hides children', async ({ page }) => {
    const collapsedTree = page.locator('cs-tree-view').nth(2);
    const srcNode = collapsedTree.locator('[data-node-id="src"]');
    const children = srcNode.locator(':scope > .treeitem-group');
    await expect(children).toBeHidden();
  });

  test('clicking toggle expands/collapses node', async ({ page }) => {
    const tree = page.locator('cs-tree-view').first();
    const testsNode = tree.locator('[data-node-id="tests"]');
    const toggle = testsNode.locator(':scope > .treeitem-content-wrapper .expand-toggle');
    const children = testsNode.locator(':scope > .treeitem-group');

    await expect(children).toBeHidden();

    await toggle.click();
    await expect(children).toBeVisible();

    await toggle.click();
    await expect(children).toBeHidden();
  });

  test('fires itemToggle event on toggle click', async ({ page }) => {
    const tree = page.locator('cs-tree-view').first();
    const testsNode = tree.locator('[data-node-id="tests"]');
    const toggle = testsNode.locator(':scope > .treeitem-content-wrapper .expand-toggle');

    const detailPromise = tree.evaluate((el) => {
      return new Promise<{ id: string; expanded: boolean }>((resolve) => {
        el.addEventListener('itemToggle', ((e: Event) => {
          const d = (e as CustomEvent).detail;
          resolve({ id: d.id, expanded: d.expanded });
        }) as EventListener, { once: true });
      });
    });

    await toggle.click();

    const result = await detailPromise;
    expect(result.id).toBe('tests');
    expect(result.expanded).toBe(true);
  });

  test('connector lines variant adds class', async ({ page }) => {
    const treeWithLines = page.locator('cs-tree-view[connector-lines="vertical"]');
    const rootEl = treeWithLines.locator(':scope > div.root');
    await expect(rootEl).toHaveClass(/root--connector-lines/);
  });

  test('toggle button has aria-label', async ({ page }) => {
    const tree = page.locator('cs-tree-view').first();
    const toggle = tree.locator('.expand-toggle').first();
    const label = await toggle.getAttribute('aria-label');
    expect(label).toBeTruthy();
  });

  test('nodes without children have no toggle button', async ({ page }) => {
    const tree = page.locator('cs-tree-view').first();
    const readmeNode = tree.locator('[data-node-id="readme"]');
    const toggle = readmeNode.locator('.expand-toggle');
    await expect(toggle).toHaveCount(0);
  });

  test('leaf nodes have no expand-toggle-wrapper content', async ({ page }) => {
    const tree = page.locator('cs-tree-view').first();
    const readmeNode = tree.locator('[data-node-id="readme"]');
    const wrapper = readmeNode.locator('.expand-toggle-wrapper');
    const toggle = wrapper.locator('.expand-toggle');
    await expect(toggle).toHaveCount(0);
  });
});
