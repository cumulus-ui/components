import { css, html, nothing, type TemplateResult } from 'lit';
import { property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { consume } from '@lit/context';
import { CsBaseElement } from '../internal/base-element.js';
import { componentStyles, sharedStyles } from './styles.js';
import { annotationContext, type AnnotationContextValue } from '../annotation-context/internal.js';
import type { HotspotProps } from './interfaces.js';
import '../button/index.js';

const hostStyles = css`:host { display: inline-block; }`;

export class CsHotspotInternal extends CsBaseElement {
  static override styles = [sharedStyles, componentStyles, hostStyles];

  @property({ type: String })
  hotspotId = '';

  @property({ type: String })
  side: HotspotProps['side'] = 'right';

  @property({ type: String })
  direction: HotspotProps['direction'] = 'top';

  @consume({ context: annotationContext, subscribe: true })
  _annotationCtx?: AnnotationContextValue;

  @state()
  _popoverOpen = false;

  get _isActive(): boolean {
    const ctx = this._annotationCtx;
    if (!ctx?.currentTutorial) return false;

    let stepIndex = 0;
    for (const task of ctx.currentTutorial.tasks) {
      for (const step of task.steps) {
        if (stepIndex === ctx.currentStepIndex && step.hotspotId === this.hotspotId) {
          return true;
        }
        stepIndex++;
      }
    }
    return false;
  }

  private get _currentStep(): { step: { title: string; content: unknown; hotspotId: string }; globalIndex: number } | null {
    const ctx = this._annotationCtx;
    if (!ctx?.currentTutorial) return null;

    let stepIndex = 0;
    for (const task of ctx.currentTutorial.tasks) {
      for (const step of task.steps) {
        if (stepIndex === ctx.currentStepIndex && step.hotspotId === this.hotspotId) {
          return { step, globalIndex: stepIndex };
        }
        stepIndex++;
      }
    }
    return null;
  }

  private _onHotspotClick = (): void => {
    if (this._isActive) {
      this._popoverOpen = !this._popoverOpen;
    }
  };

  private _onDismiss = (): void => {
    this._popoverOpen = false;
    this._annotationCtx?.onDismiss();
  };

  private _onNext = (): void => {
    const ctx = this._annotationCtx;
    if (!ctx) return;
    this._popoverOpen = false;
    ctx.onStepChange({ step: ctx.currentStepIndex + 1, reason: 'next' });
  };

  private _onPrevious = (): void => {
    const ctx = this._annotationCtx;
    if (!ctx) return;
    this._popoverOpen = false;
    ctx.onStepChange({ step: ctx.currentStepIndex - 1, reason: 'previous' });
  };

  private _onFinish = (): void => {
    this._popoverOpen = false;
    this._annotationCtx?.onDismiss();
  };

  override render(): TemplateResult {
    const isActive = this._isActive;
    const ctx = this._annotationCtx;
    const placementClass = this.side === 'left' ? 'placement-left' : 'placement-right';

    const hotspotButton = isActive ? html`
      <div class="${classMap({ markerWrapper: true, [placementClass]: true })}">
        <cs-button
          variant="icon"
          icon-name="status-info"
          aria-label=${ctx?.i18nStrings?.labelHotspot(this._popoverOpen, ctx.currentStepIndex, ctx.totalSteps) ?? 'Hotspot'}
          aria-expanded=${this._popoverOpen}
          @click=${this._onHotspotClick}
        ></cs-button>
      </div>
    ` : nothing;

    const currentStep = this._currentStep;
    const popoverContent = this._popoverOpen && isActive && currentStep && ctx ? html`
      <div class="annotation-popover" role="dialog" aria-label="Annotation">
        <div class="annotation-header">
          <span class="annotation-step-counter">
            ${ctx.i18nStrings.stepCounterText(currentStep.globalIndex + 1, ctx.totalSteps)}
          </span>
          <cs-button
            variant="icon"
            icon-name="close"
            aria-label=${ctx.i18nStrings.labelDismissAnnotation}
            @click=${this._onDismiss}
          ></cs-button>
        </div>
        <div class="annotation-content">${currentStep.step.content}</div>
        <div class="annotation-actions">
          ${currentStep.globalIndex > 0 ? html`
            <cs-button variant="link" @click=${this._onPrevious}>
              ${ctx.i18nStrings.previousButtonText}
            </cs-button>
          ` : nothing}
          ${currentStep.globalIndex < ctx.totalSteps - 1 ? html`
            <cs-button variant="primary" @click=${this._onNext}>
              ${ctx.i18nStrings.nextButtonText}
            </cs-button>
          ` : html`
            <cs-button variant="primary" @click=${this._onFinish}>
              ${ctx.i18nStrings.finishButtonText}
            </cs-button>
          `}
        </div>
      </div>
    ` : nothing;

    return html`
      <div class="wrapper">
        <div class="elementWrapper">
          <slot></slot>
        </div>
        ${hotspotButton}
        ${popoverContent}
      </div>
    `;
  }
}
