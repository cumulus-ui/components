// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// @ts-nocheck — references Cloudscape-internal types not yet generated
// License: see /NOTICE
import { Ace } from 'ace-builds';
import { BaseModalProps } from '../modal/interfaces.js';
import { AceModes } from './ace-modes.js';
import { DarkThemes, LightThemes } from './ace-themes.js';
export interface CodeEditorProps extends BaseModalProps {
  /**
   * The ace object.
   */
  ace: any;
  /**
   * Specifies the content that's displayed in the code editor.
   */
  value: string;
  /**
   * Specifies the programming language. You can use any of the programming languages supported by the `ace` object that you provide.
   * Alternatively, this can be used to set a language that is not supported by the default `language` list. Make sure you've added the highlighting support for this language to the Ace instance.
   * For more info on custom languages, see the [Code editor API](/components/code-editor?tabId=api) page.
   */
  language: CodeEditorProps.Language;
  /**
   * Specifies a custom label language. If set, it overrides the default language label.
   */
  languageLabel?: string;
  /** @event change — CustomEvent<CodeEditorProps.ChangeDetail> */
  /** @event delayedChange — CustomEvent<CodeEditorProps.ChangeDetail> */
  /** @event validate — CustomEvent<CodeEditorProps.ValidateDetail> */
  /**
   * Specifies the component preferences.
   *
   * If set to `undefined`, the component uses the following default value:
   *
   * ```
   * {
   *   wrapLines: true,
   *   theme: 'dawn'
   * }
   * ```
   *
   * You can use any theme provided by Ace.
   */
  preferences?: Partial<CodeEditorProps.Preferences>;
  /**
   * List of Ace themes available for selection in preferences dialog. Make sure you include at least one light and at
   * least one dark theme. If not set explicitly, it will render all Ace themes available for selection, except
   * "cloud_editor" and "cloud_editor_dark".
   */
  themes?: CodeEditorProps.AvailableThemes;
  /** @event preferencesChange — CustomEvent<CodeEditorProps.Preferences> */
  /**
   * Renders the code editor in a loading state.
   */
  loading?: boolean;
  /** @event recoveryClick — CustomEvent<void> */
  /**
   * An object containing all the necessary localized strings required by the component.
   * The object should contain, among others:
   *
   * * `loadingState` - Specifies the text to display while the component is loading.
   * * `errorState` - Specifies the text to display if there is an error loading Ace.
   * * `errorStateRecovery`: Specifies the text for the recovery button that's displayed next to the error text.
   *    Use the `recoveryClick` event to do a recovery action (for example, retrying the request).
   * @i18n
   */
  i18nStrings?: CodeEditorProps.I18nStrings;
  /**
   * Specifies the height of the code editor document.
   */
  editorContentHeight?: number;
  /** @event editorContentResize — CustomEvent<CodeEditorProps.ResizeDetail> */
  /**
   * Adds `aria-label` to the code editor's textarea element.
   */
  ariaLabel?: string;
}
type LiteralUnion<LiteralType, BaseType extends string> = LiteralType | (BaseType & {
  _?: never;
});
type BuiltInLanguage = (typeof AceModes)[number]['value'];
export declare namespace CodeEditorProps {
  type Language = LiteralUnion<BuiltInLanguage, string>;
  type Theme = (typeof LightThemes)[number]['value'] | (typeof DarkThemes)[number]['value'];
  interface AvailableThemes {
    light: ReadonlyArray<string>;
    dark: ReadonlyArray<string>;
  }
  interface Preferences {
    wrapLines: boolean;
    theme: Theme;
  }
  interface I18nStrings {
    loadingState?: string;
    errorState?: string;
    errorStateRecovery?: string;
    editorGroupAriaLabel?: string;
    statusBarGroupAriaLabel?: string;
    cursorPosition?: (row: number, column: number) => string;
    errorsTab?: string;
    warningsTab?: string;
    preferencesButtonAriaLabel?: string;
    paneCloseButtonAriaLabel?: string;
    preferencesModalHeader?: string;
    preferencesModalCancel?: string;
    preferencesModalConfirm?: string;
    preferencesModalCloseAriaLabel?: string;
    preferencesModalWrapLines?: string;
    preferencesModalTheme?: string;
    preferencesModalLightThemes?: string;
    preferencesModalDarkThemes?: string;
    preferencesModalThemeFilteringPlaceholder?: string;
    preferencesModalThemeFilteringAriaLabel?: string;
    preferencesModalThemeFilteringClearAriaLabel?: string;
    resizeHandleAriaLabel?: string;
    resizeHandleTooltipText?: string;
  }
  interface ResizeDetail {
    height: number;
  }
  interface ChangeDetail {
    value: string;
  }
  interface ValidateDetail {
    annotations: Ace.Annotation[];
  }
  interface Ref {
    /**
     * Sets input focus onto the code editor control.
     */
    focus(): void;
  }
}
export {};
