// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// @ts-nocheck — references Cloudscape-internal types not yet generated
// License: see /NOTICE
import type { SlotContent } from '../internal/types.js';
export interface SplitPanelProps {
  /**
   * Header text of the split panel.
   */
  header?: string;
  children?: SlotContent;
  /**
   * Determines whether the split panel collapses or hides completely when closed.
   */
  closeBehavior?: 'collapse' | 'hide';
  /**
   * When set to `true`, the preferences button is not displayed.
   */
  hidePreferencesButton?: boolean;
  /**
   * An object containing all the necessary localized strings required by the component.
   * - `closeButtonAriaLabel` - The text of the panel close button aria label.
   * - `openButtonAriaLabel` - The text of the panel open button aria label.
   * - `preferencesTitle` - The text of the preferences modal header.
   * - `preferencesPositionLabel` - The text of the position preference label.
   * - `preferencesPositionDescription` - The text of the position preference description.
   * - `preferencesPositionSide` - The text of the side position preference label.
   * - `preferencesPositionBottom` - The text of the bottom position preference label.
   * - `preferencesConfirm` - The text of the preference modal confirm button.
   * - `preferencesCancel` - The text of the preference modal cancel button.
   * - `resizeHandleAriaLabel` - The label of the resize handle aria label.
   * @i18n
   */
  i18nStrings?: SplitPanelProps.I18nStrings;
  /**
   * ARIA label for the panel. Use this if the value passed in the `header` property is not descriptive as a label for the panel.
   */
  ariaLabel?: string;
  /**
   * Actions for the header.
   */
  headerActions?: SlotContent;
  /**
   * Supplementary text below the heading.
   */
  headerDescription?: SlotContent;
  /**
   * The area next to the heading, used to display an Info link.
   */
  headerInfo?: SlotContent;
  /**
   * Content displayed before the header text.
   */
  headerBefore?: SlotContent;
}
export declare namespace SplitPanelProps {
  interface I18nStrings {
    closeButtonAriaLabel?: string;
    openButtonAriaLabel?: string;
    preferencesTitle?: string;
    preferencesPositionLabel?: string;
    preferencesPositionDescription?: string;
    preferencesPositionSide?: string;
    preferencesPositionBottom?: string;
    preferencesConfirm?: string;
    preferencesCancel?: string;
    preferencesCloseAriaLabel?: string;
    resizeHandleAriaLabel?: string;
    resizeHandleTooltipText?: string;
  }
}
export interface SplitPanelContentProps {
  style: Record<string, string>;
  baseProps: BaseComponentProps;
  isOpen?: boolean;
  splitPanelRef?: unknown;
  cappedSize: number;
  panelHeaderId?: string;
  ariaLabel?: string;
  resizeHandle?: SlotContent;
  header?: SlotContent;
  children?: SlotContent;
  onToggle: () => void;
}
