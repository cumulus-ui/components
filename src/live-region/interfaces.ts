// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// @ts-nocheck — references Cloudscape-internal types not yet generated
// License: see /NOTICE
export interface LiveRegionProps {
  /**
   * Whether the announcements should be made using assertive aria-live.
   * Assertive announcements interrupt the user's action, so they should only
   * be used when absolutely necessary.
   */
  assertive?: boolean;
  /**
   * The tag name to use for the wrapper around the `children` slot.
   */
  tagName?: LiveRegionProps.TagName;
  /**
   * Determines whether to visually hide the contents of the `children` slot.
   */
  hidden?: boolean;
  /** @slot default — Use the rendered content as the source for the announcement text */
}
export declare namespace LiveRegionProps {
  type TagName = 'span' | 'div';
}
