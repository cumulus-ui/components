// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// @ts-nocheck — references Cloudscape-internal types not yet generated
import { BaseInputProps, InputAutoComplete, InputAutoCorrect, InputKeyEvents, InputSpellcheck } from '../input/interfaces.js';
import { BaseKeyDetail } from '../internal/generated/cloudscape-types.js';
export interface TextareaProps extends Omit<BaseInputProps, 'nativeInputAttributes'>, InputKeyEvents, InputAutoCorrect, InputAutoComplete, InputSpellcheck {
  /**
   * Specifies the number of lines of text to set the height to.
   */
  rows?: number;
  /**
   * Specifies whether to disable browser spellcheck feature.
   * If you set this to `true`, it disables native browser capability
   * that checks for spelling/grammar errors.
   * If you don't set it, the behavior follows the default behavior
   * of the user's browser.
   *
   * @deprecated Use the `spellcheck` property instead.
   */
  disableBrowserSpellcheck?: boolean;
  /**
   * An object containing CSS properties to customize the textarea's visual appearance.
   * Refer to the [style](/components/textarea/?tabId=style) tab for more details.
   */
  style?: TextareaProps.Style;
}
export declare namespace TextareaProps {
  type KeyDetail = BaseKeyDetail;
  interface ChangeDetail {
    /**
     * The new value of this textarea.
     */
    value: string;
  }
  interface Ref {
    /**
     * Sets input focus on the textarea control.
     */
    focus(): void;
  }
  interface Style {
    root?: {
      backgroundColor?: {
        default?: string;
        disabled?: string;
        focus?: string;
        hover?: string;
        readonly?: string;
      };
      borderColor?: {
        default?: string;
        disabled?: string;
        focus?: string;
        hover?: string;
        readonly?: string;
      };
      borderRadius?: string;
      borderWidth?: string;
      boxShadow?: {
        default?: string;
        disabled?: string;
        focus?: string;
        hover?: string;
        readonly?: string;
      };
      color?: {
        default?: string;
        disabled?: string;
        focus?: string;
        hover?: string;
        readonly?: string;
      };
      fontSize?: string;
      fontWeight?: string;
      paddingBlock?: string;
      paddingInline?: string;
    };
    placeholder?: {
      color?: string;
      fontSize?: string;
      fontStyle?: string;
      fontWeight?: string;
    };
  }
}
