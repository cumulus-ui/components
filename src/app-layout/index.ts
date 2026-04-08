import { CsAppLayoutInternal } from './internal.js';

export class CsAppLayout extends CsAppLayoutInternal {}

customElements.define('cs-app-layout', CsAppLayout);

export type { AppLayoutProps } from './interfaces.js';
