// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// @ts-nocheck — references Cloudscape-internal types not yet generated
// License: see /NOTICE
import { EventHandler } from '../internal/generated/cloudscape-types.js';
export interface RadioGroupProps {
  /**
   * Specify a custom name for the radio buttons. If not provided, the radio group generates a random name.
   */
  name?: string;
  /**
   * Sets the value of the selected radio button.
   * If you want to clear the selection, use `null`.
   */
  value: string | null;
  /**
   * Specifies an array of radio buttons to display. Each of these objects have the following properties:
   *
   * - `value` (string) - Sets the value of the radio button. Assigned to the radio group when a user selects the radio button.
   * - `label` (unknown) - Specifies a label for the radio button.
   * - `description` (unknown) - (Optional) Specifies descriptive text that appears below the label.
   * - `disabled` (boolean) - (Optional) Determines whether the radio button is disabled, which prevents the user from selecting it.
   * - `controlId` (string) - (Optional) Sets the ID of the internal input. You can use it to relate a label element's `for` attribute to this control.
   *        In general it's not recommended to set this because the ID is automatically set by the radio group component.
   */
  items?: ReadonlyArray<RadioGroupProps.RadioButtonDefinition>;
  /**
   * Adds `aria-label` to the group. If you are using this form element within a form field,
   * don't set this property because the form field component automatically sets the correct labels to make the component accessible.
   */
  ariaLabel?: string;
  /**
   * Adds `aria-required` to the group.
   */
  ariaRequired?: boolean;
  /**
   * Adds `aria-controls` attribute to the radio group.
   * If the radio group controls any secondary content (for example, another form field), use this to provide an ID referring to the secondary content.
   */
  ariaControls?: string;
  /**
   * Called when the user selects a different radio button. The event `detail` contains the current `value`.
   */
  onChange?: EventHandler<RadioGroupProps.ChangeDetail>;
  /**
   * @deprecated Has no effect.
   */
  controlId?: string;
  /**
   * Specifies if the whole group is read-only, which prevents the
   * user from modifying the value, but does not prevent the value from
   * being included in a form submission. A read-only control is still focusable.
   */
  readOnly?: boolean;
  /**
   * An object containing CSS properties to customize the radio group's visual appearance.
   * Refer to the [style](/components/radio-group/?tabId=style) tab for more details.
   */
  style?: RadioGroupProps.Style;
  /**
   * Defines the direction in which the radio buttons are laid out.
   */
  direction?: 'horizontal' | 'vertical';
}
export declare namespace RadioGroupProps {
  interface RadioButtonDefinition {
    value: string;
    label: unknown;
    description?: unknown;
    disabled?: boolean;
    controlId?: string;
  }
  interface ChangeDetail {
    value: string;
  }
  interface Ref {
    /**
     * Sets input focus onto the UI control.
     */
    focus(): void;
  }
  type Style = RadioButtonProps.Style;
}
