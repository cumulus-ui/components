// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// @ts-nocheck — references Cloudscape-internal types not yet generated
// License: see /NOTICE
import { TutorialPanelProps } from '../tutorial-panel/interfaces.js';
import type { SlotContent, EventDetail } from '../internal/types.js';
export interface AnnotationContextProps {
  /**
   * The currently launched tutorial. This should be the object received
   * in the `detail` property of the `onStartTutorial` event.
   */
  currentTutorial: AnnotationContextProps.Tutorial | null;
  /**
   * This event is fired when a user clicks the "Next" or "Previous"
   * button on a popover, when the user clicks on a closed hotspot icon,
   * or when the AnnotationOverlay determines that the current hotspot
   * has disappeared from the page and a different one should be
   * selected (e.g. when navigating between pages).
   *
   * Use the `reason` property of the event detail to determine why
   * this event was fired.
   */
  onStepChange?: EventDetail<AnnotationContextProps.StepChangeDetail>;
  /**
   * Fired when the user selects a tutorial from the list.
   */
  onStartTutorial?: EventDetail<TutorialPanelProps.TutorialDetail>;
  /**
   * Fired when the user exits the current tutorial.
   */
  onExitTutorial?: EventDetail<TutorialPanelProps.TutorialDetail>;
  /**
   * Fired when the user clicks the "Finish" button on the last step of
   * the tutorial.
   */
  onFinish?: EventDetail<void>;
  /**
   * Put all page content inside this component's children. This component
   * will provide a context which is used by the Hotspot elements throughout
   * the page.
   */
  children?: SlotContent;
  /**
   * An object containing all the necessary localized strings required by the component. The object should contain:
   *
   * * `finishButtonText` - Specifies the text that's displayed in the finish button.
   * * `labelDismissAnnotation` - Specifies the aria-label for the dismiss button.
   * * `labelHotspot` - Specifies the aria-label for the hotspot button. The `openState` argument is deprecated, it's handled by the hotspot button aria-expanded attribute.
   * * `nextButtonText` - Specifies the text that's displayed in the next button.
   * * `previousButtonText` - Specifies the text that's displayed in the previous button.
   * * `stepCounterText` - Specifies the step counter text that's displayed in the annotation popover.
   * * `taskTitle` - Specifies the title text that's displayed in the annotation popover.
   */
  i18nStrings: AnnotationContextProps.I18nStrings;
}
export declare namespace AnnotationContextProps {
  interface StepChangeDetail {
    step: number;
    reason: 'next' | 'previous' | 'open' | 'auto-fallback';
  }
  interface OpenChangeDetail {
    open: boolean;
  }
  type Task = TutorialPanelProps.Task;
  type Step = TutorialPanelProps.Step;
  type Tutorial = TutorialPanelProps.Tutorial;
  interface I18nStrings {
    nextButtonText: string;
    previousButtonText: string;
    finishButtonText: string;
    labelDismissAnnotation: string;
    labelHotspot: (openState: boolean, stepIndex: number, totalStepCount: number) => string;
    stepCounterText: (stepIndex: number, totalStepCount: number) => string;
    taskTitle: (taskIndex: number, taskTitle: string) => string;
  }
}
