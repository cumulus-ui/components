import { CsFileUploadInternal } from './internal.js';

export class CsFileUpload extends CsFileUploadInternal {}

customElements.define('cs-file-upload', CsFileUpload);

export type { FileUploadProps } from './interfaces.js';
