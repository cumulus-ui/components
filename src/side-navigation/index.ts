import { CsSideNavigationInternal } from './internal.js';

export class CsSideNavigation extends CsSideNavigationInternal {}

customElements.define('cs-side-navigation', CsSideNavigation);

export type { SideNavigationProps } from './interfaces.js';
