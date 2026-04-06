import type { SelectorWrapper } from '../index.js';
import { createWrapper } from '../index.js';

export const SpinnerSelectors = {
  root: 'cs-spinner',
  circle: '.circle',
} as const;

export function createSpinnerWrapper(): SelectorWrapper {
  return createWrapper(SpinnerSelectors.root);
}
