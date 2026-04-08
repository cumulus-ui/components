// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// @ts-nocheck — references Cloudscape-internal types not yet generated
// License: see /NOTICE
import { PopoverProps } from '../popover/interfaces.js';
import { SlotContent, EventHandler } from '../internal/generated/cloudscape-types.js';
export interface TooltipProps {
  /**
   * Content to display in the tooltip.
   */
  content?: SlotContent;
  /**
   * Function that returns the element the tooltip points to.
   * Can return null if the element is not yet mounted or available.
   */
  getTrack: () => null | HTMLElement | SVGElement;
  /**
   * Determines where the tooltip is displayed when opened, relative to the trigger. If the tooltip doesn't have enough space to open in this direction, it automatically chooses a better direction based on available space.
   */
  position?: TooltipProps.Position;
  /**
   * Callback fired when the user presses the Escape key while the tooltip is visible.
   */
  onEscape?: EventHandler<void>;
}
export declare namespace TooltipProps {
  /**
   * Position of the tooltip relative to the tracked element.
   */
  type Position = PopoverProps.Position;
}
/**
 * Internal tooltip props - includes props not exposed in public API.
 * Note: position defaults to 'top' in both index.tsx and internal.tsx
 */
export interface InternalTooltipProps extends TooltipProps {
  /**
   * Additional CSS class for the tooltip container.
   */
  className?: string;
}
