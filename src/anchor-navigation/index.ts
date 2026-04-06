import { CsAnchorNavigationInternal } from './internal.js';

export class CsAnchorNavigation extends CsAnchorNavigationInternal {}

customElements.define('cs-anchor-navigation', CsAnchorNavigation);

export type { AnchorNavigationProps } from './interfaces.js';
