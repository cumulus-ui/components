import { CsS3ResourceSelectorInternal } from './internal.js';

export class CsS3ResourceSelector extends CsS3ResourceSelectorInternal {}

customElements.define('cs-s3-resource-selector', CsS3ResourceSelector);

export type { S3ResourceSelectorProps } from './interfaces.js';
