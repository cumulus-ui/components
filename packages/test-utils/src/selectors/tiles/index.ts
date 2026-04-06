import type { SelectorWrapper } from '../index.js';
import { createWrapper } from '../index.js';

export const TilesSelectors = {
  root: 'cs-tiles',
  tile: '.tile-container',
  nativeInput: '.native-input',
  control: '.control',
  label: '.tile-label',
  description: '.tile-description',
  image: '.image',
} as const;

export function createTilesWrapper(): SelectorWrapper {
  return createWrapper(TilesSelectors.root);
}
