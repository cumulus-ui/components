import { CsPromptInputInternal } from './internal.js';

export class CsPromptInput extends CsPromptInputInternal {}

customElements.define('cs-prompt-input', CsPromptInput);

export type { PromptInputProps } from './interfaces.js';
