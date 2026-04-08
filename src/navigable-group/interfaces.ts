// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// @ts-nocheck — references Cloudscape-internal types not yet generated
// License: see /NOTICE
export interface NavigableGroupProps {
  /** @slot default — The children that will be rendered inside the navigation group */
  /**
   * A method that should return a unique identifier for a given element.
   * The element passed will be the first focusable descendent of a child component.
   */
  getItemKey: (element: HTMLElement) => string;
  /**
   * Determines which arrow keys move focus sequentially within the group:
   * - `horizontal` - left and right arrow keys
   * - `vertical` - up and down arrow keys
   * - `both` - all arrow keys
   */
  navigationDirection?: 'horizontal' | 'vertical' | 'both';
}
export interface InternalNavigableGroupProps extends NavigableGroupProps {}
export declare namespace NavigableGroupProps {
  interface Ref {
    /**
     * Focuses the first focusable element (or previously focused element) in the navigation group.
     */
    focus(): void;
  }
}
