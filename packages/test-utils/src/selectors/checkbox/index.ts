import type { SelectorWrapper } from '../index.js';
import { createWrapper } from '../index.js';

export const CheckboxSelectors = {
  root: 'cs-checkbox',
  nativeInput: '.native-input',
  control: '.checkbox-control',
  label: '.label',
  description: '.description',
} as const;

export function createCheckboxWrapper(): SelectorWrapper {
  return createWrapper(CheckboxSelectors.root);
}
