// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// @ts-nocheck — references Cloudscape-internal types not yet generated
// License: see /NOTICE
export interface ErrorBoundaryProps {
  /**
   * Optional identifier for the error boundary instance.
   *
   * When provided, the identifier is included in the `onError` callback payload.
   * In the rendered output, the boundary wraps its content in a `<div>` with the
   * attribute `data-awsui-boundary-id={errorBoundaryId}` to support debugging.
   */
  errorBoundaryId?: string;
  /**
   * Callback invoked when an error is intercepted by the boundary.
   * Use this function to record, log, or report errors (for example, to telemetry or monitoring systems).
   *
   * The callback receives a `detail` object containing:
   * * `error` (Error): The thrown error instance.
   * * `errorInfo` (unknown): Additional metadata captured by React.
   * * `errorBoundaryId` (optional, string): The boundary identifier, if defined.
   */
  onError: (detail: ErrorBoundaryProps.OnErrorDetail) => void;
  /**
   * Controls how nested error boundaries behave.
   *
   * Several components—such as app layout, container, and modal include built-in
   * error boundaries. These boundaries activate automatically when they detect
   * an ancestor boundary, inheriting configuration from the closest one.
   *
   * When `suppressNested` is set to `true`, nested built-in error boundaries
   * and nested standalone error boundaries with `suppressible=true` are disabled,
   * so the errors propagate further up and are captured by this error boundary.
   */
  suppressNested?: boolean;
  /**
   * When set to `true`, this error boundary can be suppressed by another error
   * boundary with `suppressNested=true`, rendered above in the components tree.
   */
  suppressible?: boolean;
  /**
   * Optional custom renderer for the fallback UI displayed when an error occurs.
   *
   * The function receives the default slots derived from i18n configuration:
   * * `header` (unknown): The fallback header text.
   * * `description` (unknown): The fallback description text.
   * * `action` (unknown): The fallback action element (a refresh button by default).
   *
   * Return a React node to fully override the default fallback presentation.
   */
  renderFallback?: (props: ErrorBoundaryProps.FallbackProps) => unknown;
  /**
   * Localized strings and components used in the fallback UI.
   *
   * * `headerText` (string): Header text displayed in the fallback view.
   * * `descriptionText` (string): Description text displayed in the fallback view. Supports embedding inline
   *   feedback actions by including `<Feedback>` pseudo-tags when `components.Feedback` is provided.
   * * `refreshActionText` (string): Text for the default refresh action button.
   * * `components.Feedback` (unknown): A component used to render
   *   inline feedback actions within the description text.
   *
   * @i18n
   */
  i18nStrings?: ErrorBoundaryProps.I18nStrings;
  /** @slot default — Child content rendered when no error has been captured */
}
export declare namespace ErrorBoundaryProps {
  interface FallbackProps {
    header?: unknown;
    description?: unknown;
    action?: unknown;
  }
  interface I18nStrings {
    headerText?: string;
    descriptionText?: string;
    refreshActionText?: string;
    components?: {
      Feedback?: unknown;
    };
  }
  interface I18nFeedbackProps {
    children: unknown;
  }
  interface OnErrorDetail {
    error: Error;
    errorInfo: ErrorInfo;
    errorBoundaryId?: string;
  }
}
export interface BuiltInErrorBoundaryProps {
  /** @slot default */
  wrapper?: (content: unknown) => unknown;
  suppressNested?: boolean;
}
export interface AppLayoutBuiltInErrorBoundaryProps extends BuiltInErrorBoundaryProps {
  renderFallback?: ErrorBoundaryProps['renderFallback'];
}
