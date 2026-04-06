// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// @ts-nocheck — references Cloudscape-internal types not yet generated
export interface FileInputProps {
  /**
   * Variant of the file input. Defaults to "button".
   */
  variant?: 'button' | 'icon';
  /**
   * Adds `aria-label` to the file input element. Use this to provide an accessible name for file inputs
   * that don't have visible text, and to distinguish between multiple file inputs with identical visible text.
   */
  ariaLabel?: string;
  /**
   * Text displayed in the file input component. Used as the aria label if ariaLabel is not defined.
   * @displayname text
   */
  children?: string;
  /**
   * Specifies the native file input `accept` attribute to describe the allow-list of file types.
   */
  accept?: string;
  /**
   * Specifies whether to add aria-required to the file upload control.
   */
  ariaRequired?: boolean;
  /**
   * Specifies the native file input `multiple` attribute to allow users entering more than one file.
   */
  multiple?: boolean;
  /** @event change — CustomEvent<FileInputProps.ChangeDetail> */
  /**
   * Specifies the currently selected file(s).
   * If you want to clear the selection, use empty array.
   */
  value: ReadonlyArray<File>;
}
export declare namespace FileInputProps {
  interface ChangeDetail {
    value: File[];
  }
  interface Ref {
    /**
     * Sets focus on the file upload button.
     */
    focus(): void;
  }
}
