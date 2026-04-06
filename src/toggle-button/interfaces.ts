// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// @ts-nocheck — references Cloudscape-internal types not yet generated
import { BaseButtonProps } from '../button/interfaces.js';
import { IconProps } from '../icon/interfaces.js';
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
  /** @slot pressedIconSvg — Specifies the SVG of a custom icon in pressed state */
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
  /** @event change — CustomEvent<ToggleButtonProps.ChangeDetail> */
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
