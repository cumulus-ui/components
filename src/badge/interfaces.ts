// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// @ts-nocheck — references Cloudscape-internal types not yet generated
// License: see /NOTICE
export interface BadgeProps {
  /**
   * Specifies the badge color.
   */
  color?: 'blue' | 'grey' | 'green' | 'red' | 'severity-critical' | 'severity-high' | 'severity-medium' | 'severity-low' | 'severity-neutral';
  /** @slot default — Text displayed inside the badge */
  /**
   * An object containing CSS properties to customize the badge's visual appearance.
   * Refer to the [style](/components/badge/?tabId=style) tab for more details.
   */
  style?: BadgeProps.Style;
}
export declare namespace BadgeProps {
  interface Style {
    root?: {
      background?: string;
      borderColor?: string;
      borderRadius?: string;
      borderWidth?: string;
      color?: string;
      paddingBlock?: string;
      paddingInline?: string;
    };
  }
}
