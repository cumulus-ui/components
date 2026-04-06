// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// @ts-nocheck — references Cloudscape-internal types not yet generated
import { PopoverProps } from '../popover/interfaces.js';
export interface TooltipProps {
  /** @slot content — Content to display in the tooltip */
  /**
   * Function that returns the element the tooltip points to.
   * Can return null if the element is not yet mounted or available.
   */
  getTrack: () => null | HTMLElement | SVGElement;
  /**
   * Determines where the tooltip is displayed when opened, relative to the trigger. If the tooltip doesn't have enough space to open in this direction, it automatically chooses a better direction based on available space.
   */
  position?: TooltipProps.Position;
  /** @event escape — CustomEvent<void> */
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
