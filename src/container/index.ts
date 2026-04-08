import { CsContainerInternal } from './internal.js';

export class CsContainer extends CsContainerInternal {}

customElements.define('cs-container', CsContainer);

export type { ContainerProps } from './interfaces.js';
