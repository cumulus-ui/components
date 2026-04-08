// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// @ts-nocheck — references Cloudscape-internal types not yet generated
// License: see /NOTICE
export interface TokenProps {
  /** Slot for the label of the token as text or an element.
   *
   * For `variant="inline"`, only plain text is supported, for example, strings or numbers.
   */
  /** @slot label */
  /**
   * Adds an `aria-label` to the token.
   *
   * Use this if the label is not plain text.
   */
  ariaLabel?: string;
  /** A label tag that provides additional guidance, shown next to the label. */
  labelTag?: string;
  /** Further information about the token that appears below the label. */
  description?: string;
  /** A list of tags giving further guidance about the token. */
  tags?: ReadonlyArray<string>;
  /** An icon at the start of the token.
   *
   * When `variant="normal"`, if a description or tags are set, icon size should be `normal`.
   *
   * When `variant="inline"`, icon size should be `small`.
   */
  /** @slot icon */
  /**
   * Specifies the token's visual style and functionality.
   *
   * For `inline` only label, icon and dismiss button are displayed.
   *
   * Defaults to `normal` if not specified.
   */
  variant?: TokenProps.Variant;
  /** Determines whether the token is disabled. */
  disabled?: boolean;
  /**
   * Specifies if the control is read-only. A read-only control is still focusable.
   */
  readOnly?: boolean;
  /** Adds an `aria-label` to the dismiss button. */
  dismissLabel?: string;
  /** @event dismiss — CustomEvent<void> */
  /**
   * Content to display in the tooltip when `variant="inline"`. The tooltip appears when the token label is truncated due to insufficient space.
   *
   * Only applies to plain text labels.
   */
  tooltipContent?: string;
  /**
   * An object containing CSS properties to customize the token's visual appearance.
   * Refer to the [style](/components/token/?tabId=style) tab for more details.
   */
  style?: TokenProps.Style;
}
export declare namespace TokenProps {
  type Variant = 'normal' | 'inline';
  interface Style {
    root?: {
      background?: {
        default?: string;
        disabled?: string;
        readOnly?: string;
      };
      borderColor?: {
        default?: string;
        disabled?: string;
        readOnly?: string;
      };
      borderRadius?: string;
      borderWidth?: string;
      paddingBlock?: string;
      paddingInline?: string;
    };
    dismissButton?: {
      color?: {
        default?: string;
        disabled?: string;
        hover?: string;
        readOnly?: string;
      };
      focusRing?: {
        borderColor?: string;
        borderRadius?: string;
        borderWidth?: string;
      };
    };
  }
}
