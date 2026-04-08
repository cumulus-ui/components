import { CsFormInternal } from './internal.js';

export class CsForm extends CsFormInternal {}

customElements.define('cs-form', CsForm);

export type { FormProps } from './interfaces.js';
