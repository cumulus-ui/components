import { CsFormFieldInternal } from './internal.js';

export class CsFormField extends CsFormFieldInternal {}

customElements.define('cs-form-field', CsFormField);

export type { FormFieldProps } from './interfaces.js';
