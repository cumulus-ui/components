// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// @ts-nocheck — references Cloudscape-internal types not yet generated
// License: see /NOTICE
import type { SlotContent } from '../internal/types.js';
export interface SpaceBetweenProps {
  /**
   * Defines the direction in which the content is laid out.
   */
  direction?: SpaceBetweenProps.Direction;
  /**
   * Defines the spacing between the individual items of the content.
   */
  size: SpaceBetweenProps.Size;
  /**
   * Content of this component.
   */
  children?: SlotContent;
  /**
   * Determines how the child elements will be aligned based on the [align-items](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items) property of the CSS Flexbox.
   */
  alignItems?: SpaceBetweenProps.AlignItems;
}
export declare namespace SpaceBetweenProps {
  type Direction = 'vertical' | 'horizontal';
  type Size = 'xxxs' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
  type AlignItems = 'center' | 'start' | 'end';
}
