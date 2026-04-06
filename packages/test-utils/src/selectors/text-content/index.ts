import type { SelectorWrapper } from '../index.js';
import { createWrapper } from '../index.js';

export const TextContentSelectors = {
  root: 'cs-text-content',
  content: '.text-content',
} as const;

export function createTextContentWrapper(): SelectorWrapper {
  return createWrapper(TextContentSelectors.root);
}
