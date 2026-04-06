import type { SelectorWrapper } from '../index.js';
import { createWrapper } from '../index.js';

export const ListSelectors = {
  root: 'cs-list',
  list: '.root',
  item: '.item',
  itemIcon: '.item-icon',
  itemContent: '.item-content',
  itemPrimary: '.item-primary',
  itemSecondary: '.item-secondary',
  itemActions: '.item-actions',
} as const;

export function createListWrapper(): SelectorWrapper {
  return createWrapper(ListSelectors.root);
}
