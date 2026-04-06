// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// @ts-nocheck — references Cloudscape-internal types not yet generated
export interface HotspotProps {
  /**
   * ID of this hotspot. Use this ID in your tutorial data to refer to this
   * hotspot's location in your application. The ID must be unique
   * throughout your whole application.
   */
  hotspotId: string;
  /**
   * On which side of the content the hotspot icon should be displayed.
   */
  side?: 'left' | 'right';
  /**
   * The direction that the annotation popover should open in.
   * Change this property if in the default direction the annotation popover
   * overlaps too much with other content on the page.
   */
  direction?: 'top' | 'right' | 'bottom' | 'left';
  /** @slot default — Content that should be wrapped by the hotspot icon */
}
