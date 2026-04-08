import { CsTopNavigationInternal } from './internal.js';

export class CsTopNavigation extends CsTopNavigationInternal {}

customElements.define('cs-top-navigation', CsTopNavigation);

export type { TopNavigationProps } from './interfaces.js';
