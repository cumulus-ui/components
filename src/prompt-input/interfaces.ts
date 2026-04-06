// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// @ts-nocheck — references Cloudscape-internal types not yet generated
import { IconProps } from '../icon/interfaces.js';
import { BaseChangeDetail, BaseInputProps, InputAutoComplete, InputAutoCorrect, InputKeyEvents, InputSpellcheck } from '../input/interfaces.js';
import { BaseKeyDetail } from '../internal/generated/cloudscape-types.js';
export interface PromptInputProps extends Omit<BaseInputProps, 'nativeInputAttributes'>, InputKeyEvents, InputAutoCorrect, InputAutoComplete, InputSpellcheck {
  /** @event action — CustomEvent<PromptInputProps.ActionDetail> */
  /**
   * Determines what icon to display in the action button.
   */
  actionButtonIconName?: IconProps.Name;
  /**
   * Specifies the URL of a custom icon. Use this property if the icon you want isn't available.
   *
   * If you set both `actionButtonIconUrl` and `actionButtonIconSvg`, `actionButtonIconSvg` will take precedence.
   */
  actionButtonIconUrl?: string;
  /** @slot actionButtonIconSvg — Specifies the SVG of a custom icon */
  /**
   * Specifies alternate text for a custom icon. We recommend that you provide this for accessibility.
   * This property is ignored if you use a predefined icon or if you set your custom icon using the `iconSvg` slot.
   */
  actionButtonIconAlt?: string;
  /**
   * Adds an aria-label to the action button.
   * @i18n
   */
  actionButtonAriaLabel?: string;
  /**
   * Specifies whether to disable the action button.
   */
  disableActionButton?: boolean;
  /**
   * Specifies the minimum number of lines of text to set the height to.
   */
  minRows?: number;
  /**
   * Specifies the maximum number of lines of text the textarea will expand to.
   * Defaults to 3. Use -1 for infinite rows.
   */
  maxRows?: number;
  /** @slot customPrimaryAction — Use this to replace the primary action */
  /** @slot secondaryActions — Use this slot to add secondary actions to the prompt input */
  /** @slot secondaryContent — Use this slot to add secondary content, such as file attachments, to the prompt input */
  /**
   * Determines whether the secondary actions area of the input has padding. If true, removes the default padding from the secondary actions area.
   */
  disableSecondaryActionsPaddings?: boolean;
  /**
   * Determines whether the secondary content area of the input has padding. If true, removes the default padding from the secondary content area.
   */
  disableSecondaryContentPaddings?: boolean;
  /**
   * An object containing CSS properties to customize the prompt input's visual appearance.
   * Refer to the [style](/components/prompt-input/?tabId=style) tab for more details.
   */
  style?: PromptInputProps.Style;
}
export declare namespace PromptInputProps {
  type KeyDetail = BaseKeyDetail;
  type ActionDetail = BaseChangeDetail;
  interface Ref {
    /**
     * Sets input focus on the textarea control.
     */
    focus(): void;
    /**
     * Selects all text in the textarea control.
     */
    select(): void;
    /**
     * Selects a range of text in the textarea control.
     *
     * See https://developer.mozilla.org/en-US/docs/Web/API/HTMLTextAreaElement/setSelectionRange
     * for more details on this method. Be aware that using this method in React has some
     * common pitfalls: https://stackoverflow.com/questions/60129605/is-javascripts-setselectionrange-incompatible-with-react-hooks
     */
    setSelectionRange(start: number | null, end: number | null, direction?: 'forward' | 'backward' | 'none'): void;
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
