// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// @ts-nocheck — references Cloudscape-internal types not yet generated
// License: see /NOTICE
export interface AnchorNavigationProps {
  /**
   * Adds `aria-labelledby` to the component.
   *
   * Use this property for identifying the header or title that labels the anchor navigation.
   * To use it correctly, define an ID for the element either as label, and set the property to that ID.
   */
  ariaLabelledby?: string;
  /**
   * List of anchors. Each anchor object has the following properties:
   *
   * * `text` (string) - The text for the anchor item.
   * * `href` (string) - The `id` attribute of the target HTML element that the anchor refers to.
   * For example: `"#section1.1"`
   * * `level` (number) - Level of nesting of the anchor.
   * * `info` (string | undefined) - Additional information to display next to the link, for example: "New" or "Updated".
   *
   * Note: The list of anchors should be sorted in the order they appear on the page.
   */
  anchors: AnchorNavigationProps.Anchor[];
  /**
   * Specifies the active anchor href. When set, the component will operate in a
   * controlled manner, and internal scroll-spy will be disabled.
   */
  activeHref?: string;
  /**
   * Specifies the height (in pixels) to be considered as an offset when activating anchors.
   * This is useful when you have a fixed or sticky header that might overlap with the content as you scroll.
   *
   * Defaults to 0.
   */
  scrollSpyOffset?: number;
  /** @event follow — CustomEvent<AnchorNavigationProps.Anchor> */
  /** @event activeHrefChange — CustomEvent<AnchorNavigationProps.Anchor> */
}
export declare namespace AnchorNavigationProps {
  interface Anchor {
    /**
     * The text for the anchor item.
     */
    text: string;
    /**
     * The `href` of the anchor. For example: `"#section1.1"`".
     */
    href: string;
    /**
     * Level of nesting of the anchor.
     */
    level: number;
    /**
     * Additional information to display next to the link, for example: "New" or "Updated".
     */
    info?: string;
  }
}
