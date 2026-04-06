import { CsTextContentInternal } from './internal.js';

export class CsTextContent extends CsTextContentInternal {}

customElements.define('cs-text-content', CsTextContent);

export type { TextContentProps } from './interfaces.js';
