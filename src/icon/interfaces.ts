// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// @ts-nocheck — references Cloudscape-internal types not yet generated
// License: see /NOTICE
import { BuiltInIconName, IconRegistryIconName } from '../icon-provider/interfaces.js';
import type { SlotContent } from '../internal/types.js';
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
  /**
   * Specifies the SVG of a custom icon.
   *
   * Use this property if the icon you want isn't available, and you want your custom icon to inherit colors dictated by variant or hover states.
   * When this property is set, the component will be decorated with `aria-hidden="true"`. Ensure that the `svg` element:
   * - has attribute `focusable="false"`.
   * - has `viewBox="0 0 16 16"`.
   *
   * If you set the `svg` element as the root node of the slot, the component will automatically
   * - set `stroke="currentColor"`, `fill="none"`, and `vertical-align="top"`.
   * - set the stroke width based on the size of the icon.
   * - set the width and height of the SVG element based on the size of the icon.
   *
   * If you don't want these styles to be automatically set, wrap the `svg` element into a `span` and ensure icon `size` is not set to `inherit`.
   * You can still set the stroke to `currentColor` to inherit the color of the surrounding elements.
   *
   * If you set both `url` and `svg`, `svg` will take precedence.
   *
   * *Note:* Remember to remove any additional elements (for example: `defs`) and related CSS classes from SVG files exported from design software.
   * In most cases, they aren't needed, as the `svg` element inherits styles from the icon component.
   */
  svg?: SlotContent;
}
export declare namespace IconProps {
  type Name = BuiltInIconName | IconRegistryIconName;
  type Variant = 'normal' | 'disabled' | 'error' | 'inverted' | 'link' | 'subtle' | 'success' | 'warning';
  type Size = 'small' | 'normal' | 'medium' | 'big' | 'large' | 'inherit';
}
