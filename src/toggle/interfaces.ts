// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// @ts-nocheck — references Cloudscape-internal types not yet generated
// License: see /NOTICE
import { BaseCheckboxProps } from '../checkbox/base-checkbox.js';
import type { SlotContent, EventDetail } from '../internal/types.js';
export interface ToggleProps extends BaseCheckboxProps {
  /**
   * The control's label that's displayed next to the toggle. Clicking this will invoke a state change.
   * @displayname label
   */
  children?: SlotContent;
  onChange?: EventDetail<ToggleProps.ChangeDetail>;
  /**
   * An object containing CSS properties to customize the toggle's visual appearance.
   * Refer to the [style](/components/toggle/?tabId=style) tab for more details.
   */
  style?: ToggleProps.Style;
}
export declare namespace ToggleProps {
  interface Ref {
    /**
     * Sets input focus onto the UI control.
     */
    focus(): void;
  }
  interface ChangeDetail {
    checked: boolean;
  }
  interface Style {
    input: {
      background?: {
        checked?: string;
        default?: string;
        disabled?: string;
        readOnly?: string;
      };
      handle?: {
        background?: {
          checked?: string;
          default?: string;
          disabled?: string;
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
        readOnly?: string;
      };
    };
  }
}
