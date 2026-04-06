// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// @ts-nocheck — references Cloudscape-internal types not yet generated
import { BaseCheckboxProps } from './base-checkbox.js';
export interface CheckboxProps extends BaseCheckboxProps {
  /** @slot default — The control's label that's displayed next to the checkbox */
  /**
   * Specifies that the component is in an indeterminate state. The behavior of this property replicates
   * the behavior of [the respective property](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#Indeterminate_state_checkboxes)
   * in the native control.
   */
  indeterminate?: boolean;
  /** @event change — CustomEvent<CheckboxProps.ChangeDetail> */
  /**
   * Specifies whether to add `aria-required` to the native control.
   */
  ariaRequired?: boolean;
  /**
   * An object containing CSS properties to customize the checkbox's visual appearance.
   * Refer to the [style](/components/checkbox/?tabId=style) tab for more details.
   */
  style?: CheckboxProps.Style;
}
export declare namespace CheckboxProps {
  interface Ref {
    /**
     * Sets input focus onto the UI control.
     */
    focus(): void;
  }
  interface ChangeDetail {
    checked: boolean;
    indeterminate: false;
  }
  interface Style {
    input?: {
      fill?: {
        checked?: string;
        default?: string;
        disabled?: string;
        indeterminate?: string;
        readOnly?: string;
      };
      stroke?: {
        checked?: string;
        default?: string;
        disabled?: string;
        indeterminate?: string;
        readOnly?: string;
      };
      check?: {
        stroke?: {
          checked?: string;
          disabled?: string;
          indeterminate?: string;
          readOnly?: string;
        };
      };
      focusRing?: {
        borderColor?: string;
        borderRadius?: string;
        borderWidth?: string;
      };
    };
    label?: {
      color?: {
        checked?: string;
        default?: string;
        disabled?: string;
        indeterminate?: string;
        readOnly?: string;
      };
    };
  }
}
