import { CsAppLayoutToolbarInternal } from './internal.js';

export class CsAppLayoutToolbar extends CsAppLayoutToolbarInternal {}

customElements.define('cs-app-layout-toolbar', CsAppLayoutToolbar);

export type { AppLayoutToolbarProps } from './interfaces.js';
