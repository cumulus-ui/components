import type { SelectorWrapper } from '../index.js';
import { createWrapper } from '../index.js';

export const FileDropzoneSelectors = {
  root: 'cs-file-dropzone',
  dropzone: '.root',
} as const;

export function createFileDropzoneWrapper(): SelectorWrapper {
  return createWrapper(FileDropzoneSelectors.root);
}
