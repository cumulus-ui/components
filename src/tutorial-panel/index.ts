import { CsTutorialPanelInternal } from './internal.js';

export class CsTutorialPanel extends CsTutorialPanelInternal {}

customElements.define('cs-tutorial-panel', CsTutorialPanel);

export type { TutorialPanelProps } from './interfaces.js';
