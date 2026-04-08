import { CsCopyToClipboardInternal } from './internal.js';

export class CsCopyToClipboard extends CsCopyToClipboardInternal {}

customElements.define('cs-copy-to-clipboard', CsCopyToClipboard);

export type { CopyToClipboardProps } from './interfaces.js';
