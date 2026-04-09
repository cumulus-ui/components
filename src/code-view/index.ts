import { CsCodeViewInternal } from './internal.js';

export class CsCodeView extends CsCodeViewInternal {}

customElements.define('cs-code-view', CsCodeView);

export type { CodeViewProps } from './interfaces.js';
