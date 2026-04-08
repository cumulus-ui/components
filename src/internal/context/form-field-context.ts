// SPDX-License-Identifier: Apache-2.0
import { createContext } from '@lit/context';

export interface FormFieldContext {
  controlId: string;
  ariaLabelledby: string;
  ariaDescribedby: string;
  invalid: boolean;
  warning: boolean;
}

export const formFieldContext = createContext<FormFieldContext>(
  Symbol('form-field-context'),
);

export const defaultFormFieldContext: FormFieldContext = {
  controlId: '',
  ariaLabelledby: '',
  ariaDescribedby: '',
  invalid: false,
  warning: false,
};
