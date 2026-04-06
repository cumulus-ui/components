import type { SelectorWrapper } from '../index.js';
import { createWrapper } from '../index.js';

export const LiveRegionSelectors = {
  root: 'cs-live-region',
  region: '[aria-live]',
} as const;

export function createLiveRegionWrapper(): SelectorWrapper {
  return createWrapper(LiveRegionSelectors.root);
}
