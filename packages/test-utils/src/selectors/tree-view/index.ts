import type { SelectorWrapper } from '../index.js';
import { createWrapper } from '../index.js';

export const TreeViewSelectors = {
  root: 'cs-tree-view',
  tree: '.root',
  node: '.node',
  nodeRow: '.node-row',
  toggle: '.toggle',
  toggleIcon: '.toggle-icon',
  nodeIcon: '.node-icon',
  nodeContent: '.node-content',
  nodePrimary: '.node-primary',
  nodeSecondary: '.node-secondary',
  nodeActions: '.node-actions',
  children: '.tree',
} as const;

export function createTreeViewWrapper(): SelectorWrapper {
  return createWrapper(TreeViewSelectors.root);
}
