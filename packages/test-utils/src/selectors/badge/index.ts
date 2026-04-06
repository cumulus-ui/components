import type { SelectorWrapper } from '../index.js';
import { createWrapper } from '../index.js';

export const BadgeSelectors = {
  root: 'cs-badge',
  badge: '.badge',
} as const;

export function createBadgeWrapper(): SelectorWrapper {
  return createWrapper(BadgeSelectors.root);
}
