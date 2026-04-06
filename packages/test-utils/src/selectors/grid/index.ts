import type { SelectorWrapper } from '../index.js';
import { createWrapper } from '../index.js';

export const GridSelectors = {
  root: 'cs-grid',
  grid: '.grid',
} as const;

export function createGridWrapper(): SelectorWrapper {
  return createWrapper(GridSelectors.root);
}
