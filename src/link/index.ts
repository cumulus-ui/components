import { CsLinkInternal } from './internal.js';

export class CsLink extends CsLinkInternal {}

customElements.define('cs-link', CsLink);

export type { LinkProps } from './interfaces.js';
