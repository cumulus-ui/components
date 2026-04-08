// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// @ts-nocheck — references Cloudscape-internal types not yet generated
// License: see /NOTICE
import { LinkItem } from '../button-dropdown/interfaces.js';
import { BaseNavigationDetail } from '../internal/generated/cloudscape-types.js';
import type { EventDetail } from '../internal/types.js';
export interface BreadcrumbGroupProps<T extends BreadcrumbGroupProps.Item = BreadcrumbGroupProps.Item> {
  /**
   * An array of breadcrumb items that describes the link hierarchy for this navigation.
   * Each option has the following properties:
      * * `text` (string) - Specifies the title text of the breadcrumb item.
   * * `href` (string) - Specifies the URL for the link in the breadcrumb item.
   * You should specify the link even if you have a click handler for a breadcrumb item
   * to ensure that valid markup is generated.
      * Note: The last breadcrumb item is automatically considered the current item, and it's
   * not a link.
   */
  items: ReadonlyArray<T>;
  /**
   * Provides an `aria-label` to the breadcrumb group that screen readers can read (for accessibility).
   */
  ariaLabel?: string;
  /**
   * Provides an `aria-label` to the ellipsis button that screen readers can read (for accessibility).
   * @i18n
   */
  expandAriaLabel?: string;
  /**
   * Called when the user clicks on a breadcrumb item.
   */
  onClick?: EventDetail<BreadcrumbGroupProps.ClickDetail<T>>;
  /**
   * Called when the user clicks on a breadcrumb item with the left mouse button
   * without pressing modifier keys (that is, CTRL, ALT, SHIFT, META).
   */
  onFollow?: EventDetail<BreadcrumbGroupProps.ClickDetail<T>>;
}
export declare namespace BreadcrumbGroupProps {
  interface Item {
    text: string;
    href: string;
  }
  interface ClickDetail<T extends BreadcrumbGroupProps.Item = BreadcrumbGroupProps.Item> extends BaseNavigationDetail {
    item: T;
    text: string;
    href: string;
  }
}
export type InternalBreadcrumbGroupProps<T extends BreadcrumbGroupProps.Item = BreadcrumbGroupProps.Item> = BreadcrumbGroupProps<T> & InternalBaseComponentProps & {
  __injectAnalyticsComponentMetadata?: boolean;
};
export interface BreadcrumbItemProps<T extends BreadcrumbGroupProps.Item> {
  item: T;
  itemIndex: number;
  totalCount: number;
  isTruncated?: boolean;
  isGhost?: boolean;
  onClick?: EventDetail<BreadcrumbGroupProps.ClickDetail<T>>;
  onFollow?: EventDetail<BreadcrumbGroupProps.ClickDetail<T>>;
}
export interface EllipsisDropdownProps {
  ariaLabel?: BreadcrumbGroupProps['expandAriaLabel'];
  dropdownItems: ReadonlyArray<LinkItem>;
  onDropdownItemClick?: EventDetail<{ id: string; }>;
  onDropdownItemFollow?: EventDetail<{ id: string; }>;
  visible?: boolean;
}
