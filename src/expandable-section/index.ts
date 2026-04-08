import { CsExpandableSectionInternal } from './internal.js';

export class CsExpandableSection extends CsExpandableSectionInternal {}

customElements.define('cs-expandable-section', CsExpandableSection);

export type { ExpandableSectionProps } from './interfaces.js';
