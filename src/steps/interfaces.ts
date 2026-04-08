// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// @ts-nocheck — references Cloudscape-internal types not yet generated
// License: see /NOTICE
import { StatusIndicatorProps } from '../status-indicator/interfaces.js';
import type { SlotContent } from '../internal/types.js';
export interface StepsProps {
  /**
   * An array of individual steps
   *
   * Each step definition has the following properties:
   *  * `status` (string) - Status of the step corresponding to a status indicator.
   *  * `statusIconAriaLabel` - (string) - (Optional) Alternative text for the status icon.
   *  * `header` (unknown) - Summary corresponding to the step.
   *  * `details` (unknown) - (Optional) Additional information corresponding to the step.
   */
  steps: ReadonlyArray<StepsProps.Step>;
  /**
   * The visual orientation of the steps (vertical or horizontal).
   * By default the orientation is vertical.
   */
  orientation?: StepsProps.Orientation;
  /**
   * Render a step. This overrides the default icon, header, and details provided by the component.
   * The function is called for each step and should return an object with the following keys:
   * * `header` (unknown) - Summary corresponding to the step.
   * * `details` (unknown) - (Optional) Additional information corresponding to the step.
   * * `icon` (unknown) - (Optional) Replaces the standard step icon from the status indicator.
   *
   */
  renderStep?: (step: StepsProps.Step) => {
  header?: SlotContent;
  details?: SlotContent;
  icon?: SlotContent;
  };
  /**
   * Provides an `aria-label` to the progress steps container.
   * Don't use `ariaLabel` and `ariaLabelledby` at the same time.
   */
  ariaLabel?: string;
  /**
   * Sets the `aria-labelledby` property on the progress steps container.
   * If there's a visible label element that you can reference, use this instead of `ariaLabel`.
   * Don't use `ariaLabel` and `ariaLabelledby` at the same time.
   */
  ariaLabelledby?: string;
  /**
   * Sets the `aria-describedby` property on the progress steps container.
   */
  ariaDescribedby?: string;
}
export declare namespace StepsProps {
  type Status = StatusIndicatorProps.Type;
  interface Step {
    status: Status;
    statusIconAriaLabel?: string;
    header: unknown;
    details?: unknown;
  }
  type Orientation = 'vertical' | 'horizontal';
}
