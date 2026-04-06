import { CsIconProviderInternal } from './internal.js';

export class CsIconProvider extends CsIconProviderInternal {}

customElements.define('cs-icon-provider', CsIconProvider);

export type { IconProviderProps } from './interfaces.js';
