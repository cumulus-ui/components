import { html, type TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import { provide, createContext } from '@lit/context';
import { CsBaseElement } from '../internal/base-element.js';
import { fireNonCancelableEvent } from '../internal/events.js';
import type { AnnotationContextProps } from './interfaces.js';

/**
 * The annotation context value provided to descendant hotspot components.
 */
export interface AnnotationContextValue {
  currentTutorial: AnnotationContextProps.Tutorial | null;
  currentStepIndex: number;
  totalSteps: number;
  i18nStrings: AnnotationContextProps.I18nStrings;
  onStepChange: (detail: AnnotationContextProps.StepChangeDetail) => void;
  onDismiss: () => void;
}

export const annotationContext = createContext<AnnotationContextValue | undefined>(
  Symbol('annotation-context'),
);

export class CsAnnotationContextInternal extends CsBaseElement {
  @property({ attribute: false })
  currentTutorial: AnnotationContextProps['currentTutorial'] = null;

  @property({ attribute: false })
  i18nStrings!: AnnotationContextProps['i18nStrings'];

  @provide({ context: annotationContext })
  _contextValue?: AnnotationContextValue;

  override createRenderRoot(): this {
    return this;
  }

  override willUpdate(): void {
    let totalSteps = 0;
    if (this.currentTutorial) {
      for (const task of this.currentTutorial.tasks) {
        totalSteps += task.steps.length;
      }
    }

    this._contextValue = {
      currentTutorial: this.currentTutorial ?? null,
      currentStepIndex: 0,
      totalSteps,
      i18nStrings: this.i18nStrings,
      onStepChange: (detail: AnnotationContextProps.StepChangeDetail) => {
        fireNonCancelableEvent(this, 'stepChange', detail);
      },
      onDismiss: () => {
        if (this.currentTutorial) {
          fireNonCancelableEvent(this, 'exitTutorial', { tutorial: this.currentTutorial });
        }
      },
    };
  }

  override render(): TemplateResult {
    return html`<slot></slot>`;
  }
}
