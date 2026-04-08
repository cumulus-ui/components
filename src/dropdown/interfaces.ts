// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// @ts-nocheck — references Cloudscape-internal types not yet generated
// License: see /NOTICE
export type OptionsFilteringType = 'none' | 'auto' | 'manual';
export declare namespace DropdownProps {
  interface Style {
    dropdown?: {
      /**
       * Background color of the dropdown content wrapper.
       */
      background?: string;
      /**
       * Border color of the dropdown content wrapper.
       */
      borderColor?: string;
      /**
       * Border radius of the dropdown content wrapper.
       */
      borderRadius?: string;
      /**
       * Border width of the dropdown content wrapper.
       */
      borderWidth?: string;
    };
  }
}
/**
 * Alignment of the dropdown relative to its trigger.
 */
export type DropdownAlignment = 'start' | 'center';
/**
 * Width constraint for the dropdown.
 * - 'trigger': references the trigger element's width
 * - number: width in pixels
 */
export type DropdownWidthConstraint = 'trigger' | number;
export interface OptionsLoadItemsDetail {
  filteringText: string;
  firstPage: boolean;
  samePage: boolean;
}
export interface BaseDropdownHostProps extends ExpandToViewport {
  /**
   * If you have more than 500 options, enable this flag to apply a performance optimization
   * that makes the filtering experience smoother. We don't recommend enabling the feature if you
   * have less than 500 options, because the improvements to performance are offset by a
   * visible scrolling lag.
   *
   * When you set this flag to `true`, it removes options that are not currently in view from the DOM.
   * If your test accesses such options, you need to first scroll the options container
   * to the correct offset, before performing any operations on them. Use the element returned
   * by the `findOptionsContainer` test utility for this.
   */
  virtualScroll?: boolean;
  /** @event loadItems — CustomEvent<OptionsLoadItemsDetail> */
}
export interface DropdownProps extends ExpandToViewport {
  /** @slot trigger — The trigger element that opens/closes the dropdown */
  /** @slot header — Optional header content that stays fixed at the top while */
  /** @slot footer — Optional footer content that stays fixed at the bottom while */
  /** @slot content — Main content of the dropdown */
  /**
   * Open state of the dropdown.
   */
  open?: boolean;
  /** @event outsideClick — CustomEvent<null> */
  /**
   * Minimum width for the dropdown in pixels. If no value is specified, the
   * dropdown will shrink to fit its content.
   */
  minWidth?: number;
  /**
   * Maximum width for the dropdown in pixels. If no value is specified, the
   * dropdown will expand to fit its content.
   */
  maxWidth?: number;
  /** @event escape — CustomEvent<void> */
  /** @event focusEnter — CustomEvent<Pick<FocusEvent, 'target' | 'relatedTarget'>> */
  /** @event focusLeave — CustomEvent<Pick<FocusEvent, 'target' | 'relatedTarget'>> */
  /**
   * Adds `role` to the dropdown content element.
   */
  ariaRole?: string;
  /**
   * Adds `aria-label` to the dropdown content element.
   */
  ariaLabel?: string;
  /**
   * Adds `aria-labelledby` to the dropdown content element.
   */
  ariaLabelledby?: string;
  /**
   * Adds `aria-describedby` to the dropdown content element.
   */
  ariaDescribedby?: string;
  /**
   * An object containing CSS properties to customize the dropdown's visual appearance.
   */
  style?: DropdownProps.Style;
}
export interface ExpandToViewport {
  /**
   * By default, the dropdown height is constrained to fit inside the height of its next scrollable container element.
   * Enabling this property will allow the dropdown to extend beyond that container by using fixed positioning and
   * [React Portals](https://reactjs.org/docs/portals.html).
   *
   * Set this property if the dropdown would otherwise be constrained by a scrollable container,
   * for example inside table and split view layouts.
   *
   * We recommend you use discretion, and don't enable this property unless necessary
   * because fixed positioning results in a slight, visible lag when scrolling complex pages.
   */
  expandToViewport?: boolean;
}
