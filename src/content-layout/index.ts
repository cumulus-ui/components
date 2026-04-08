import { CsContentLayoutInternal } from './internal.js';

export class CsContentLayout extends CsContentLayoutInternal {}

customElements.define('cs-content-layout', CsContentLayout);

export type { ContentLayoutProps } from './interfaces.js';
