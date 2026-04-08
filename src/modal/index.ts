import { CsModalInternal } from './internal.js';

export class CsModal extends CsModalInternal {}

customElements.define('cs-modal', CsModal);

export type { ModalProps } from './interfaces.js';
