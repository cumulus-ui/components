// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// @ts-nocheck — references Cloudscape-internal types not yet generated
export interface DrawerProps {
  /** @slot header — Header of the drawer */
  /** @slot default — Main content of the drawer */
  /**
   * Renders the drawer in a loading state. We recommend that you also set a `loadingText`.
   */
  loading?: boolean;
  /**
   * Determines whether the drawer content has padding. If `true`, removes the default padding from the content area.
   */
  disableContentPaddings?: boolean;
  /**
   * An object containing all the necessary localized strings required by the component.
   * @i18n
   */
  i18nStrings?: I18nStrings;
  /** @slot headerActions — Actions for the header */
  /** @slot footer — Sticky footer content that remains visible at the bottom during scroll */
}
interface I18nStrings {
  /**
    Specifies the text that's displayed when the panel is in a loading state.
   */
  loadingText?: string;
}
export {};
