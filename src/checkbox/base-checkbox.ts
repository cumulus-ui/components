// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// @ts-nocheck — references Cloudscape-internal types not yet generated
// License: see /NOTICE
import { SlotContent, EventHandler } from '../internal/generated/cloudscape-types.js';
export interface BaseCheckboxProps {
  /**
   * Specifies if the component is selected.
   */
  checked: boolean;
  /**
   * Specifies the name of the control used in HTML forms.
   */
  name?: string;
  /**
   * Specifies if the control is disabled, which prevents the
   * user from modifying the value and prevents the value from
   * being included in a form submission. A disabled control can't
   * receive focus.
   */
  disabled?: boolean;
  /**
   * Specifies if the control is read-only, which prevents the
   * user from modifying the value. Should be used only inside forms.
   * A read-only control is still focusable.
   * If both `readOnly` and `disabled` are set, `disabled` takes precedence.
   */
  readOnly?: boolean;
  /**
   * Specifies the ID of the native form element. By default, it uses an automatically generated ID.
   */
  controlId?: string;
  /**
   * Adds an `aria-label` to the native control.
   *
   * Use this if you don't have a visible label for this control.
   */
  ariaLabel?: string;
  /**
   * Called when input focus is moved to the UI control.
   */
  onFocus?: EventHandler<void>;
  /**
   * Called when input focus is removed from the UI control.
   */
  onBlur?: EventHandler<void>;
  children?: SlotContent;
  /**
   * Description that appears below the label.
   */
  description?: SlotContent;
  /**
   * Adds `aria-controls` attribute to the component.
   * If the component controls any secondary content (for example, another form field), use this to provide an ID referring to the secondary content.
   */
  ariaControls?: string;
}
