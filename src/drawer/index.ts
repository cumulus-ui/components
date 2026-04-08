import { CsDrawerInternal } from './internal.js';

export class CsDrawer extends CsDrawerInternal {}

customElements.define('cs-drawer', CsDrawer);

export type { DrawerProps } from './interfaces.js';
