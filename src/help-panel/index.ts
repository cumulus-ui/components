import { CsHelpPanelInternal } from './internal.js';

export class CsHelpPanel extends CsHelpPanelInternal {}

customElements.define('cs-help-panel', CsHelpPanel);

export type { HelpPanelProps } from './interfaces.js';
