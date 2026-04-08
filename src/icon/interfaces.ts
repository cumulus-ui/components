// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// @ts-nocheck — references Cloudscape-internal types not yet generated
// License: see /NOTICE
import { BuiltInIconName, IconRegistryIconName } from '../icon-provider/interfaces.js';
export interface IconProps {
  /**
   * Specifies the icon to be displayed.
   */
  name?: IconProps.Name;
  /**
   * Specifies the size of the icon.
   *
   * If you set size to `inherit`, an icon size will be assigned based on the icon's inherited line height.
   * For icons used alongside text, ensure the icon is placed inside the acompanying text tag.
   * The icon will be vertically centered based on the height.
   *
   * @visualrefresh `medium` size
   */
  size?: IconProps.Size;
  /**
   * Specifies the color variant of the icon. The `normal` variant picks up the current color of its context.
   */
  variant?: IconProps.Variant;
  /**
   * Specifies the URL of a custom icon. Use this property if the icon you want isn't available, and your custom icon cannot be an SVG.
   * For SVG icons, use the `svg` slot instead.
   *
   * If you set both `url` and `svg`, `svg` will take precedence.
   */
  url?: string;
  /**
   * Specifies alternate text for a custom icon (using the `url` attribute).
   * This property is ignored if you use a predefined icon or if you set your custom icon using the `svg` slot.
   *
   * @deprecated Use `ariaLabel` instead.
   */
  alt?: string;
  /**
   * Specifies alternate text for the icon. We recommend that you provide this for accessibility.
   */
  ariaLabel?: string;
  /** @slot svg — Specifies the SVG of a custom icon */
}
export declare namespace IconProps {
  type Name = BuiltInIconName | IconRegistryIconName;
  type Variant = 'normal' | 'disabled' | 'error' | 'inverted' | 'link' | 'subtle' | 'success' | 'warning';
  type Size = 'small' | 'normal' | 'medium' | 'big' | 'large' | 'inherit';
}
