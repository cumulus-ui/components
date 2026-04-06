// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// @ts-nocheck — references Cloudscape-internal types not yet generated
export interface PanelLayoutProps {
  /**
   * Position of the panel with respect to the main content
   */
  panelPosition?: PanelLayoutProps.PanelPosition;
  /**
   * Initial panel size, for uncontrolled behavior.
   *
   * The actual size will be constrained by `minPanelSize` and `maxPanelSize`, if set.
   */
  defaultPanelSize?: number;
  /**
   * Size of the panel. If provided, and panel is resizable, the component is controlled,
   * so you must also provide `onPanelResize`.
   *
   * The actual size will be constrained by `minPanelSize` and `maxPanelSize`, if set.
   */
  panelSize?: number;
  /**
   * The minimum size of the panel.
   */
  minPanelSize?: number;
  /**
   * The maximum size of the panel.
   */
  maxPanelSize?: number;
  /**
   * Indicates whether the panel is resizable.
   */
  resizable?: boolean;
  /**
   * Panel contents.
   */
  panelContent: unknown;
  /**
   * Main content area displayed next to the panel.
   */
  mainContent: unknown;
  /**
   * Makes the panel content focusable. This should be used if there are no focusable elements
   * inside the panel, to ensure it is keyboard scrollable.
   *
   * Provide either `{ariaLabel: "Panel label"}` or `{ariaLabelledby: "panel-label-id"}`
   */
  panelFocusable?: PanelLayoutProps.FocusableConfig;
  /**
   * Makes the main content area focusable. This should be used if there are no focusable elements
   * inside the content, to ensure it is keyboard scrollable.
   *
   * Provide either `{ariaLabel: "Main label"}` or `{ariaLabelledby: "main-label-id"}`
   */
  mainFocusable?: PanelLayoutProps.FocusableConfig;
  /**
   * Determines which content is displayed:
   * - 'all': Both panel and main content are displayed.
   * - 'panel-only': Only panel is displayed.
   * - 'main-only': Only main content is displayed.
   */
  display?: PanelLayoutProps.Display;
  /**
   * An object containing all the necessary localized strings required by the component.
   * @i18n
   */
  i18nStrings?: PanelLayoutProps.I18nStrings;
  /** @event panelResize — CustomEvent<PanelLayoutProps.PanelResizeDetail> */
  /** @event layoutChange — CustomEvent<PanelLayoutProps.PanelResizeDetail> */
}
export declare namespace PanelLayoutProps {
  type PanelPosition = 'side-start' | 'side-end';
  type Display = 'all' | 'panel-only' | 'main-only';
  interface PanelResizeDetail {
    totalSize: number;
    panelSize: number;
  }
  interface FocusableConfig {
    ariaLabel?: string;
    ariaLabelledby?: string;
  }
  interface I18nStrings {
    resizeHandleAriaLabel?: string;
    resizeHandleTooltipText?: string;
  }
  interface Ref {
    /**
     * Focuses the resize handle of the panel layout.
     */
    focusResizeHandle(): void;
  }
}
