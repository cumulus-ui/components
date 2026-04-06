// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// @ts-nocheck — references Cloudscape-internal types not yet generated
export interface StatusIndicatorProps {
  /**
   * Specifies the status type.
   */
  type?: StatusIndicatorProps.Type;
  /** @slot default — A text fragment that communicates the status */
  /**
   * Specifies an `aria-label` for the icon. If the status text alone does not fully describe the status,
   * use this to communicate additional context.
   */
  iconAriaLabel?: string;
  /**
   * Specifies an override for the status indicator color.
   */
  colorOverride?: StatusIndicatorProps.Color;
  /**
   * Specifies if the text content should wrap. If you set it to false, it prevents the text from wrapping
   * and truncates it with an ellipsis.
   */
  wrapText?: boolean;
}
export declare namespace StatusIndicatorProps {
  type Type = 'error' | 'warning' | 'success' | 'info' | 'stopped' | 'pending' | 'in-progress' | 'loading' | 'not-started';
  type Color = 'blue' | 'grey' | 'green' | 'red' | 'yellow';
}
