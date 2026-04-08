import { CsFileInputInternal } from './internal.js';

export class CsFileInput extends CsFileInputInternal {}

customElements.define('cs-file-input', CsFileInput);

export type { FileInputProps } from './interfaces.js';
