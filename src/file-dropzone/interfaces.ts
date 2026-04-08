// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// @ts-nocheck — references Cloudscape-internal types not yet generated
// License: see /NOTICE
import type { SlotContent, EventDetail } from '../internal/types.js';
export interface FileDropzoneProps {
  /**
   * Called when the user selects new file(s), or removes a file.
   * The event `detail` contains the current value of the component.
   */
  onChange?: EventDetail<FileDropzoneProps.ChangeDetail>;
  /**
   * Children of the Dropzone.
   */
  children?: SlotContent;
}
export declare namespace FileDropzoneProps {
  interface ChangeDetail {
    value: File[];
  }
}
