// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// @ts-nocheck — references Cloudscape-internal types not yet generated
// License: see /NOTICE
import { TutorialPanelProps } from '../tutorial-panel/interfaces.js';
export interface AnnotationContextProps {
  /**
   * The currently launched tutorial. This should be the object received
   * in the `detail` property of the `onStartTutorial` event.
   */
  currentTutorial: AnnotationContextProps.Tutorial | null;
  /** @event stepChange — CustomEvent<AnnotationContextProps.StepChangeDetail> */
  /** @event startTutorial — CustomEvent<TutorialPanelProps.TutorialDetail> */
  /** @event exitTutorial — CustomEvent<TutorialPanelProps.TutorialDetail> */
  /** @event finish — CustomEvent<void> */
  /** @slot default — Put all page content inside this component's children */
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
