// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// @ts-nocheck — references Cloudscape-internal types not yet generated
// License: see /NOTICE
import { SlotContent } from '../internal/generated/cloudscape-types.js';
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
  /**
   * Use the rendered content as the source for the announcement text. When the
   * text content inside this slot changes, it will be re-announced to
   * assistive technologies.
   */
  children?: SlotContent;
}
export declare namespace LiveRegionProps {
  type TagName = 'span' | 'div';
}
