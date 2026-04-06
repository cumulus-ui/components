// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// @ts-nocheck — references Cloudscape-internal types not yet generated
import { BaseNavigationDetail } from '../internal/generated/cloudscape-types.js';
export interface SideNavigationProps {
  /**
   * Controls the header that appears at the top of the navigation component.
   *
   * It contains the following:
   * - `text` (string) - Specifies the header text.
   * - `href` (string) - Specifies the `href` that the header links to.
   * - `logo` (object) - Specifies a logo image.
   */
  header?: SideNavigationProps.Header;
  /** @slot itemsControl — A slot located below the header and above the items */
  /**
   * Specifies the `href` of the currently active link.
   * All items within the navigation with a matching `href` are highlighted.
   *
   * `Sections` and `Expandable Page Groups` that contain a highlighted item
   * are automatically expanded, unless their definitions have the `defaultExpanded`
   * property explicitly set to `false`.
   */
  activeHref?: string;
  /**
   * Specifies the items to be displayed in the navigation.
   * Allowed objects are: `Link`, `Divider`, `Section`, `LinkGroup` and `ExpandableLinkGroup`.
   *
   * You can inject extra properties (for example, an ID)
   * in order to identify the item when it's used in an event `detail`
   * (for more information, see the events section below).
   *
   * #### Link
   * Object that represents an anchor in the navigation.
   * Links are rendered as `<a>` tags.
   * - `type` - `'link'`.
   * - `text` (string) - Specifies the link text.
   * - `href` (string) - Specifies the `href` of the link.
   * - `external` (boolean) - Determines whether to display an external link icon next to the link.
   *      If set to `true`, an external link icon appears next to the link.
   *      The anchor also has the attributes `target="_blank"` and `rel="noopener"`.
   *      Additionally, the `activeHref` property won't be modified when a user chooses the link.
   * - `externalIconAriaLabel` (string) - Adds an aria-label to the external icon.
   * - `info` (unknown) - Enables you to display content next to the link. Although it is technically possible to insert any content,
   *     our UX guidelines allow only to add a Badge and/or a "New" label.
   *
   * #### Divider
   * Object that represents a horizontal divider between navigation content.
   * It contains `type`: `'divider'` only.
   *
   * #### Section
   * Object that represents a section within the navigation.
   * - `type`: `'section'`.
   * - `text` (string) - Specifies the text to display as a title of the section.
   * - `defaultExpanded` (boolean) - Determines whether the section should be expanded by default. Default value is `true`.
   * - `items` (array) - Specifies the content of the section. You can use any valid item from this list.
   *     Although there is no technical limitation to the nesting level,
   *     our UX recommendation is to use only one level.
   *
   * #### Section Group
   * Aggregates a set of items that are conceptually related to each other, and can be displayed under a single heading to provide further organization.
   * You can nest sections, links, link groups and expandable link groups within a section group depending on your information architecture needs.
   * - `type`: `'section-group'`.
   * - `title` (string) - Specifies the text to display as a title of the section group.
   * - `items` (array) - Specifies the content of the section header group. You can use `Section`, `Link`, `LinkGroup`, `ExpandableLinkGroup`.
   *
   * #### LinkGroup
   * Object that represents a group of links.
   * - `type`: `'link-group'`.
   * - `text` (string) - Specifies the text of the group link.
   * - `href` (string) - Specifies the `href` of the group link.
   * - `info` (unknown) - Enables you to display content next to the link. Although it is technically possible to insert any content,
   *     our UX guidelines allow only to add a Badge and/or a "New" label.
   * - `items` (array) - Specifies the content of the section. You can use any valid item from this list.
   *     Although there is no technical limitation to the nesting level,
   *     our UX recommendation is to use only one level.
   *
   * #### ExpandableLinkGroup
   *
   * Object that represents an expandable group of links.
   * - `type`: `'expandable-link-group'`.
   * - `text` (string) - Specifies the text of the group link.
   * - `href` (string) - Specifies the `href` of the group link.
   * - `defaultExpanded` (boolean) - Specifies whether the group should be expanded by default.
   *    If not explicitly set, the group is collapsed by default, unless one of the nested links is active.
   * - `items` (array) - Specifies the content of the section. You can use any valid item from this list.
   *     Although there is no technical limitation to the nesting level,
   *     our UX recommendation is to use only one level.
   */
  items?: ReadonlyArray<SideNavigationProps.Item>;
  /** @event follow — CustomEvent<SideNavigationProps.FollowDetail> */
  /** @event change — CustomEvent<SideNavigationProps.ChangeDetail> */
}
export declare namespace SideNavigationProps {
  interface Logo {
    src: string;
    alt?: string;
  }
  interface Header {
    text?: string;
    href: string;
    logo?: Logo;
  }
  interface Divider {
    type: 'divider';
  }
  interface Link {
    type: 'link';
    text: string;
    href: string;
    external?: boolean;
    externalIconAriaLabel?: string;
    info?: unknown;
  }
  interface Section {
    type: 'section';
    text: string;
    items: ReadonlyArray<Item>;
    defaultExpanded?: boolean;
  }
  interface SectionGroup {
    type: 'section-group';
    title: string;
    items: ReadonlyArray<Section | Link | LinkGroup | ExpandableLinkGroup>;
  }
  interface LinkGroup {
    type: 'link-group';
    text: string;
    href: string;
    info?: unknown;
    items: ReadonlyArray<Item>;
  }
  interface ExpandableLinkGroup {
    type: 'expandable-link-group';
    text: string;
    href: string;
    items: ReadonlyArray<Item>;
    defaultExpanded?: boolean;
  }
  type Item = Divider | Link | Section | LinkGroup | ExpandableLinkGroup | SectionGroup;
  interface ChangeDetail {
    item: Section | ExpandableLinkGroup;
    expanded: boolean;
    expandableParents: ReadonlyArray<Section | ExpandableLinkGroup>;
  }
  interface FollowDetail extends BaseNavigationDetail {
    text?: string;
    href: string;
    type?: 'link' | 'link-group' | 'expandable-link-group' | 'section-header';
    info?: unknown;
  }
}
