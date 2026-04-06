import type { SelectorWrapper } from '../index.js';
import { createWrapper } from '../index.js';

export const RadioGroupSelectors = {
  root: 'cs-radio-group',
  item: '.radio',
  nativeInput: '.native-input',
  control: '.radio-control',
  label: '.radio-label',
  description: '.radio-description',
} as const;

export function createRadioGroupWrapper(): SelectorWrapper {
  return createWrapper(RadioGroupSelectors.root);
}
