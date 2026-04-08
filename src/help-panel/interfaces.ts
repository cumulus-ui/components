// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// @ts-nocheck — references Cloudscape-internal types not yet generated
// License: see /NOTICE
import { SlotContent } from '../internal/generated/cloudscape-types.js';
export interface HelpPanelProps {
  /**
   * Header of the help panel.
   *
   * It should contain the only `h2` used in the help panel.
   */
  header?: SlotContent;
  /**
   * Main content of the help panel.
   *
   * Use `p, a, h3, h4, h5, span, div, ul, ol, li, code, pre, dl, dt, dd, hr, br, i, em, b, strong` tags to format the content.
   * Use `code` for inline code or `pre` for code blocks.
   */
  children?: SlotContent;
  /**
   * Footer of the help panel.
   */
  footer?: SlotContent;
  /**
   * Renders the panel in a loading state. We recommend that you also set a `loadingText`.
   */
  loading?: boolean;
  /**
   * Specifies the text that's displayed when the panel is in a loading state.
   * @i18n
   */
  loadingText?: string;
}
