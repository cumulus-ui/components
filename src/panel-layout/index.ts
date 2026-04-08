import { CsPanelLayoutInternal } from './internal.js';

export class CsPanelLayout extends CsPanelLayoutInternal {}

customElements.define('cs-panel-layout', CsPanelLayout);

export type { PanelLayoutProps } from './interfaces.js';
