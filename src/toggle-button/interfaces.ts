// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// @ts-nocheck — references Cloudscape-internal types not yet generated
// License: see /NOTICE
import { BaseButtonProps } from '../button/interfaces.js';
import { IconProps } from '../icon/interfaces.js';
import { SlotContent, EventHandler } from '../internal/generated/cloudscape-types.js';
export interface ToggleButtonProps extends Omit<BaseButtonProps, 'nativeAnchorAttributes'> {
  /** Determines the general styling of the toggle button as follows:
   * * `normal` for secondary buttons.
   * * `icon` to display an icon only (no text).
   *
   * Defaults to `normal` if not specified.
   */
  variant?: ToggleButtonProps.Variant;
  /**
   * Displays an icon next to the text.
   */
  iconName?: IconProps.Name;
  /**
   * Displays an icon next to the text in pressed state.
   */
  pressedIconName?: IconProps.Name;
  /**
   * Specifies the URL of a custom icon in pressed state. Use this property if the icon needed for your use case isn't available.
   *
   * `pressedIconSvg` will take precedence if you set both `pressedIconUrl` and `pressedIconSvg`.
   */
  pressedIconUrl?: string;
  /**
   * Specifies the SVG of a custom icon in pressed state.
   *
   * Use this property if you want your custom icon to inherit colors dictated by variant or hover states.
   * When this property is set, the component will be decorated with `aria-hidden="true"`. Ensure that the `svg` element:
   * - has attribute `focusable="false"`
   * - has `viewBox="0 0 16 16"`
   *
   * If you set the `svg` element as the root node of the slot, the component will automatically:
   * - set `stroke="currentColor"`, `fill="none"`, and `vertical-align="top"`.
   * - set the stroke width based on the size of the icon.
   * - set the width and height of the SVG element based on the size of the icon.
   *
   * If you don't want these styles to be automatically set, wrap the `svg` element into a `span`.
   * You can still set the stroke to `currentColor` to inherit the color of the surrounding elements.
   *
   * If you set both `pressedIconUrl` and `pressedIconSvg`, `pressedIconSvg` will take precedence.
   *
   * *Note:* Remember to remove any additional elements (for example: `defs`) and related CSS classes from SVG files exported from design software.
   * In most cases, they aren't needed, as the `svg` element inherits styles from the icon component.
   */
  pressedIconSvg?: SlotContent;
  /**
   * Sets the toggle button to pressed state.
   */
  pressed: boolean;
  /**
   * Provides a reason why the button is disabled (only when `disabled` is `true`).
   * If provided, the button becomes focusable.
   * Applicable only for the normal variant.
   */
  disabledReason?: string;
  /**
   * Called when the user changes their selection.
   * The event `detail` contains the current value for the `pressed` property.
   */
  onChange?: EventHandler<ToggleButtonProps.ChangeDetail>;
}
export declare namespace ToggleButtonProps {
  type Variant = 'normal' | 'icon';
  interface ChangeDetail {
    pressed: boolean;
  }
  interface Ref {
    /**
     * Focuses the underlying native button.
     */
    focus(options?: FocusOptions): void;
  }
}
