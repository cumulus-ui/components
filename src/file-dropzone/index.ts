import { CsFileDropzoneInternal } from './internal.js';

export class CsFileDropzone extends CsFileDropzoneInternal {}

customElements.define('cs-file-dropzone', CsFileDropzone);

export type { FileDropzoneProps } from './interfaces.js';
