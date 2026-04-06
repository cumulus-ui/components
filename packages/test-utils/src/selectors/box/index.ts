import type { SelectorWrapper } from '../index.js';
import { createWrapper } from '../index.js';

export const BoxSelectors = {
  root: 'cs-box',
  content: '.box',
} as const;

export function createBoxWrapper(): SelectorWrapper {
  return createWrapper(BoxSelectors.root);
}
