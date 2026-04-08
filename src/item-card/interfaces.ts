// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// @ts-nocheck — references Cloudscape-internal types not yet generated
// License: see /NOTICE
import type { SlotContent } from '../internal/types.js';
export interface ItemCardProps {
  /**
   * Heading element of the item card. Use this to add a title or header text.
   */
  header?: SlotContent;
  /**
   * A description or subtitle displayed below the header.
   */
  description?: SlotContent;
  /**
   * Footer content displayed at the bottom of the item card.
   */
  footer?: SlotContent;
  /**
   * Actions to display in the item card header area, typically buttons or links.
   */
  actions?: SlotContent;
  /**
   * Main content of the item card.
   */
  children?: SlotContent;
  /**
   * Icon content displayed next to the header.
   */
  icon?: SlotContent;
  /**
   * Removes the default padding from the header area.
   * @default false
   */
  disableHeaderPaddings?: boolean;
  /**
   * Removes the default padding from the content area.
   * @default false
   */
  disableContentPaddings?: boolean;
  /**
   * Removes the default padding from the footer area.
   * @default false
   */
  disableFooterPaddings?: boolean;
  /**
   * Specifies the visual variant of the item card, which controls the border radius and padding.
   *
   * - `default` - Uses container-level border radius and padding (larger).
   * - `embedded` - Uses compact border radius and padding (smaller).
   *
   * @default 'default'
   */
  variant?: ItemCardProps.Variant;
  /**
   * An object containing CSS properties to customize the item card's visual appearance.
   * Refer to the [style](/components/item-card/?tabId=style) tab for more details.
   */
  style?: ItemCardProps.Style;
}
export declare namespace ItemCardProps {
  type Variant = 'embedded' | 'default';
  interface Style {
    root?: {
      background?: string;
      borderColor?: string;
      borderRadius?: string;
      borderWidth?: string;
      boxShadow?: string;
    };
    content?: {
      paddingBlock?: string;
      paddingInline?: string;
    };
    header?: {
      paddingBlock?: string;
      paddingInline?: string;
    };
    footer?: {
      root?: {
        paddingBlock?: string;
        paddingInline?: string;
      };
      divider?: {
        borderColor?: string;
        borderWidth?: string;
      };
    };
  }
}
export interface InternalItemCardProps extends ItemCardProps {
  /**
   * Called when the user clicks on the item card.
   */
  onClick?: MouseEventHandler<HTMLElement>;
  /**
   * Specifies whether the item card is in highlighted state.
   */
  highlighted?: boolean;
  /**
   * Makes the item card stretch to fill the full height of its container.
   */
  fullHeight?: boolean;
  /**
   * Specifies metadata for analytics in cards
   */
  metadataAttributes?: Record<string, string | undefined>;
}
