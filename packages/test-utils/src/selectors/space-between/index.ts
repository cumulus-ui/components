import type { SelectorWrapper } from '../index.js';
import { createWrapper } from '../index.js';

export const SpaceBetweenSelectors = {
  root: 'cs-space-between',
  container: '.root',
} as const;

export function createSpaceBetweenWrapper(): SelectorWrapper {
  return createWrapper(SpaceBetweenSelectors.root);
}
