// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// @ts-nocheck — references Cloudscape-internal types not yet generated
export declare namespace FormProps {
  interface AnalyticsMetadata {
    instanceIdentifier?: string;
    flowType?: FlowType;
    resourceType?: string;
    errorContext?: ErrorContext;
  }
}
export interface FormProps {
  /** @slot default — Specifies the main form content */
  /** @slot header — Specifies the form title and optional description */
  /** @slot errorText — Specifies a form-level validation message */
  /**
   * Provides a text alternative for the error icon in the error alert.
   * @i18n
   */
  errorIconAriaLabel?: string;
  /** @slot actions — Specifies actions for the form */
  /** @slot secondaryActions — Specifies left-aligned secondary actions for the form */
  /**
   * Specify a form variant with one of the following:
   * * `full-page` - Use this variant when the form contains the entire content of the page.
   * * `embedded` - Use this variant when the form doesn't occupy the full page.
   * @deprecated You can safely remove this property as there is no longer any visual difference between `full-page` and `embedded` variants.
   */
  variant?: 'full-page' | 'embedded';
  /**
   * Specifies additional analytics-related metadata.
   * * `instanceIdentifier` - A unique string that identifies this component instance in your application.
   * * `flowType` - Identifies the type of flow represented by the component.
   * * `resourceType` - Identifies the type of resource represented by the flow. **Note:** This API is currently experimental.
   * * `errorContext` - Identifies the error category and sub-category.
   * @analytics
   */
  analyticsMetadata?: FormProps.AnalyticsMetadata;
}
