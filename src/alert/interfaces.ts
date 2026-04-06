// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// @ts-nocheck — references Cloudscape-internal types not yet generated
export declare namespace AlertProps {
  type Type = 'success' | 'error' | 'warning' | 'info';
  interface Ref {
    /**
     * Sets focus on the alert content.
     */
    focus(): void;
  }
  interface I18nStrings {
    successIconAriaLabel?: string;
    errorIconAriaLabel?: string;
    warningIconAriaLabel?: string;
    infoIconAriaLabel?: string;
    dismissAriaLabel?: string;
  }
  interface AnalyticsMetadata {
    errorContext?: ErrorContext;
  }
  interface Style {
    root?: {
      background?: string;
      borderColor?: string;
      borderRadius?: string;
      borderWidth?: string;
      color?: string;
      focusRing?: {
        borderColor?: string;
        borderRadius?: string;
        borderWidth?: string;
      };
    };
    icon?: {
      color?: string;
    };
    dismissButton?: {
      color?: {
        active?: string;
        default?: string;
        hover?: string;
      };
      focusRing?: {
        borderColor?: string;
        borderRadius?: string;
        borderWidth?: string;
      };
    };
  }
  interface PersistenceConfig {
    uniqueKey: string;
    crossServicePersistence?: boolean;
  }
}
export interface AlertProps {
  /**
   * Specifies the type of message you want to display.
   */
  type?: AlertProps.Type;
  /**
   * Provides a text alternative for the icon.
   *
   * @deprecated Use the label properties inside `i18nStrings` instead.
   * If the label is assigned via the `i18nStrings` property, this label will be ignored.
   */
  statusIconAriaLabel?: string;
  /**
   * Determines whether the alert is displayed.
   * @deprecated Use conditional rendering in your code instead of this prop.
   */
  visible?: boolean;
  /**
   * Adds a close button to the alert when set to `true`.
   * An `onDismiss` event is fired when a user clicks the button.
   */
  dismissible?: boolean;
  /**
   * Adds an aria-label to the dismiss button.
   * @i18n
   *
   * @deprecated Use `i18nStrings.dismissAriaLabel` instead.
   * If the label is assigned via the `i18nStrings` property, this label will be ignored.
   */
  dismissAriaLabel?: string;
  /** @slot default — Primary text displayed in the element */
  /** @slot header — Heading text */
  /** @slot buttonText — Displays an action button next to the message area when set */
  /** @slot action — Specifies an action for the alert message */
  /** @event dismiss — CustomEvent<void> */
  /** @event buttonClick — CustomEvent<void> */
  /**
   * An object containing all the necessary localized strings required by the component.
   * @property {AlertProps.I18nStrings} [i18nStrings] - optional
   * @i18n
   */
  i18nStrings?: AlertProps.I18nStrings;
  /**
   * Specifies additional analytics-related metadata.
   * * `errorContext` - Identifies the error category and sub-category.
   * @analytics
   */
  analyticsMetadata?: AlertProps.AnalyticsMetadata;
  /**
   * An object containing CSS properties to customize the alert's visual appearance.
   * Refer to the [style](/components/alert/?tabId=style) tab for more details.
   */
  style?: AlertProps.Style;
  /**
   * Config to persist dismiss state for dismissable Alert
   * persistenceConfig contains:
   * * `uniqueKey` (string) - This key to store the persistence state, it must be unique across your console.
   * * `crossServicePersistence` (boolean) - (Optional) If true, the persistence state will be shared across AWS services.
   */
}
