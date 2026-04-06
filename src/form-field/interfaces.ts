// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// @ts-nocheck — references Cloudscape-internal types not yet generated
export interface FormFieldProps {
  /**
   * The ID of the primary form control. You can use this to set the
   * `for` attribute of a label for accessibility.
   *
   * If you don't set this property, the control group automatically sets
   * the label to the ID of an inner form control (for example, an [input](/components/input) component).
   * This only works well if you're using a single control in the form field.
   */
  controlId?: string;
  /**
   * Determines whether the primary control should expand to 12 columns.
   *
   * By default (or when this property is set to `false`), the primary control
   * occupies 9 columns. The secondary control uses the remaining 3 columns.
   * On smaller viewports, both components occupy 12 columns and stack on top of each other.
   *
   * If this property is set to `true`, the primary control uses the full
   * 12 columns. The secondary control (if present) also uses 12 columns, and the two
   * controls stack on top of each other.
   */
  stretch?: boolean;
  /** @slot label — The main label for the form field */
  /**
   * An object containing all the necessary localized strings required by the component.
   * @i18n
   */
  i18nStrings?: FormFieldProps.I18nStrings;
  /** @slot info — Use to display an 'Info' link next to the label */
  /** @slot default — The primary form control (for example, input, textarea, etc */
  /** @slot secondaryControl — A secondary control */
  /** @slot description — Detailed information about the form field that's displayed below the label */
  /** @slot constraintText — Constraint text that's displayed below the control */
  /**
   * Character count constraint displayed adjacent to the constraintText. Use
   * this to provide an updated character count on each keypress that is debounced
   * for screen reader users.
   */
  characterCountText?: string;
  /** @slot errorText — Text that displays as a validation error message */
  /** @slot warningText — Text that displays as a validation warning message */
  /**
   * Specifies additional analytics-related metadata.
   * * `instanceIdentifier` - A unique string that identifies this component instance in your application.
   * * `errorContext` - Identifies the error category and sub-category.
   * @analytics
   */
  analyticsMetadata?: FormFieldProps.AnalyticsMetadata;
}
export declare namespace FormFieldProps {
  interface AnalyticsMetadata {
    instanceIdentifier?: string;
    errorContext?: ErrorContext;
  }
  interface I18nStrings {
    /**
     * Provides a text alternative for the error icon in the error message.
     */
    errorIconAriaLabel?: string;
    /**
     * Provides a text alternative for the warning icon in the warning message.
     */
    warningIconAriaLabel?: string;
  }
}
export interface InternalFormFieldProps extends FormFieldProps {
  /**
   * Visually hide the label.
   */
  __hideLabel?: boolean;
  /**
   * Disable the gutter applied by default.
   */
  __disableGutters?: boolean;
  __analyticsMetadata?: AnalyticsMetadata;
  __style?: CSSProperties;
}
