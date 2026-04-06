// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// @ts-nocheck — references Cloudscape-internal types not yet generated
export interface ContentLayoutProps {
  /** @slot default — Use this slot to render the main content of the layout below the header */
  /**
   * Determines whether the layout has an overlap between the header and content.
   * If true, the overlap will be removed.
   * @visualrefresh
   */
  disableOverlap?: boolean;
  /** @slot header — Use this slot to render the header content for the layout */
  /**
   * Determines the visual treatment for the header. Specifically:
   * * `default` - Does not apply any visual treatment.
   * * `high-contrast` - Applies high-contrast to the background of the header and the elements contained within it.
   *     If you are using the AppLayout component, set `headerVariant="high-contrast"` to apply the same treatment to the breadcrumbs and notifications slots.
   * * `divider` - Adds a horizontal separator between the header and the content.
   * @visualrefresh `high-contrast` headerVariant
   */
  headerVariant?: 'default' | 'high-contrast' | 'divider';
  /**
   * Maximum width for the content.
   * If set, all elements of the content layout (header, content, notifications, breadcrumbs) will be center-aligned and have the desired maximum width.
   * If not set, all elements will occupy the full available width.
   */
  maxContentWidth?: number;
  /**
   * Set it to `true` if your page uses the [app layout component](/components/app-layout/) with `disableContentPaddings=true`.
   * In that case, the content layout will become sensitive to the state of drawers in app layout and leave the necessary padding to avoid visual overlap with those elements.
   */
  defaultPadding?: boolean;
  /** @slot notifications — Use this slot to display [notifications](/components/flashbar/) to the content layout: */
  /** @slot breadcrumbs — Use this slot to add the [breadcrumb group component](/components/breadcrumb-group/) to the content layout: */
  /**
   * Use this property to style the background of the header.
   *
   * It can be:
   * * a string representing the CSS `background` value for the header element.
   * * a function that receives the mode ("light" or "dark") as a parameter and returns a string.
   *
   *  The header background spans across the full available width, independent of the specified `maxContentWidth`.
   *  If set, the component will not add the default background color to the header.
   */
  headerBackgroundStyle?: string | ((mode: 'light' | 'dark') => string);
  /** @slot secondaryHeader — Use this slot to add a secondary element inside the header */
}
