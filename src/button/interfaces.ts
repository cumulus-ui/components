// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// @ts-nocheck — references Cloudscape-internal types not yet generated
// License: see /NOTICE
import { IconProps } from '../icon/interfaces.js';
import { ClickDetail as _ClickDetail, BaseNavigationDetail } from '../internal/generated/cloudscape-types.js';
export interface BaseButtonProps {
  /**
   * Renders the button as disabled and prevents clicks.
   */
  disabled?: boolean;
  /**
   * Provides a reason why the button is disabled (only when `disabled` is `true`).
   * If provided, the button becomes focusable.
   * Applicable for all button variants, except link.
   */
  disabledReason?: string;
  /**
   * Renders the button as being in a loading state. It takes precedence over the `disabled` if both are set to `true`.
   * It prevents users from clicking the button, but it can still be focused.
   */
  loading?: boolean;
  /**
   * Specifies the text that screen reader announces when the button is in a loading state.
   */
  loadingText?: string;
  /**
   * Displays an icon next to the text. You can use the `iconAlign` property to position the icon.
   */
  iconName?: IconProps.Name;
  /**
   * Specifies the URL of a custom icon. Use this property if the icon you want isn't available.
   *
   * If you set both `iconUrl` and `iconSvg`, `iconSvg` will take precedence.
   */
  iconUrl?: string;
  /** @slot iconSvg — Specifies the SVG of a custom icon */
  /**
   * Adds `aria-label` to the button element. Use this to provide an accessible name for buttons
   * that don't have visible text, and to distinguish between multiple buttons with identical visible text.
   * The text will also be added to the `title` attribute of the button.
   */
  ariaLabel?: string;
  /**
   * Adds `aria-describedby` to the button.
   */
  ariaDescribedby?: string;
  /**
   * Specifies if the `text` content wraps. If you set it to `false`, it prevents the text from wrapping.
   */
  wrapText?: boolean;
  /** @slot default — Text displayed in the button element */
  /**
   * Adds `aria-controls` to the button. Use when the button controls the contents or presence of an element.
   */
  ariaControls?: string;
  /**
   * Adds an external icon after the button label text.
   * If an href is provided, it opens the link in a new tab.
   */
  external?: boolean;
  /**
   * An object containing all the necessary localized strings required by the component. The object should contain:
   *
   * * `externalIconAriaLabel` - (optional) Specifies the aria-label for the external icon when `external` is set to `true`.
   * @i18n
   */
  i18nStrings?: ButtonProps.I18nStrings;
}
export interface ButtonProps extends BaseButtonProps {
  /**
   * Specifies the alignment of the icon.
   */
  iconAlign?: ButtonProps.IconAlign;
  /**
   * The form action that is performed by a button click.
   */
  formAction?: ButtonProps.FormAction;
  /**
   * Applies button styling to a link. Use this property if you need a link styled as a button (`variant=link`).
   * For example, if you have a 'help' button that links to a documentation page.
   */
  href?: string;
  /**
   * Specifies where to open the linked URL (for example, to open in a new browser window or tab use `_blank`).
   * This property only applies when an `href` is provided.
   */
  target?: string;
  /**
   * Adds a `rel` attribute to the link. By default, the component sets the `rel` attribute to "noopener noreferrer" when `target` is `"_blank"`.
   * If the `rel` property is provided, it overrides the default behavior.
   */
  rel?: string;
  /**
   * Specifies whether the linked URL, when selected, will prompt the user to download instead of navigate.
   * You can specify a string value that will be suggested as the name of the downloaded file.
   * This property only applies when an `href` is provided.
   **/
  download?: boolean | string;
  /** The id of the <form> element to associate with the button. The value of this attribute must be the id of a <form> in the same document.
   *  Use when a button is not the descendant of a form element, such as when used in a modal.
   */
  form?: string;
  /**
   * Adds aria-expanded to the button element. Use when the button controls an expandable element.
   */
  ariaExpanded?: boolean;
  /**
   * Adds `aria-haspopup` to the button element. Use when the button triggers a popup element such as a menu, listbox, tree, grid, or dialog.
   */
  ariaHaspopup?: boolean | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog';
  /** @event click — CustomEvent<ButtonProps.ClickDetail> */
  /** @event follow — CustomEvent<ButtonProps.FollowDetail> */
  /**
   * Sets the button width to be 100% of the parent container width. Button content is centered.
   */
  fullWidth?: boolean;
  /** Determines the general styling of the button as follows:
   * * `primary` for primary buttons.
   * * `normal` for secondary buttons.
   * * `link` for tertiary buttons.
   * * `icon` to display an icon only (no text).
   * * `inline-icon` to display an icon-only (no text) button within a text context.
   * * `inline-link` to display a tertiary button with no outer padding.
   */
  variant?: ButtonProps.Variant;
  /**
   * Specifies alternate text for a custom icon. We recommend that you provide this for accessibility.
   * This property is ignored if you use a predefined icon or if you set your custom icon using the `iconSvg` slot.
   */
  iconAlt?: string;
  /**
   * An object containing CSS properties to customize the button's visual appearance.
   * Refer to the [style](/components/button/?tabId=style) tab for more details.
   */
  style?: ButtonProps.Style;
}
export declare namespace ButtonProps {
  type Variant = 'normal' | 'primary' | 'link' | 'icon' | 'inline-icon' | 'inline-link';
  type ClickDetail = _ClickDetail;
  type FollowDetail = BaseNavigationDetail;
  type FormAction = 'submit' | 'none';
  type IconAlign = 'left' | 'right';
  interface I18nStrings {
    /**
     * Specifies the aria-label for the external icon when `external` is set to `true`.
     */
    externalIconAriaLabel?: string;
  }
  interface Ref {
    /**
     * Focuses the underlying native button.
     */
    focus(options?: FocusOptions): void;
  }
  interface Style {
    root?: {
      background?: {
        active?: string;
        default?: string;
        disabled?: string;
        hover?: string;
      };
      borderColor?: {
        active?: string;
        default?: string;
        disabled?: string;
        hover?: string;
      };
      borderRadius?: string;
      borderWidth?: string;
      boxShadow?: {
        active?: string;
        default?: string;
        disabled?: string;
        hover?: string;
      };
      color?: {
        active?: string;
        default?: string;
        disabled?: string;
        hover?: string;
      };
      focusRing?: {
        borderColor?: string;
        borderRadius?: string;
        borderWidth?: string;
      };
      paddingBlock?: string;
      paddingInline?: string;
    };
  }
}
