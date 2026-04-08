import { css, html, nothing, type TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { CsBaseElement } from '../internal/base-element.js';
import { fireNonCancelableEvent } from '../internal/events.js';
import { componentStyles, sharedStyles } from './styles.js';
import type { WizardProps } from './interfaces.js';
import '../button/index.js';
import '../spinner/index.js';

const hostStyles = css`:host { display: block; }`;

export class CsWizardInternal extends CsBaseElement {
  static override styles = [sharedStyles, componentStyles, hostStyles];

  @property({ attribute: false })
  steps: ReadonlyArray<WizardProps.Step> = [];

  @property({ type: Number })
  activeStepIndex = 0;

  @property({ type: Boolean })
  allowSkipTo = false;

  @property({ type: String })
  submitButtonText = 'Submit';

  @property({ type: Boolean })
  isLoadingNextStep = false;

  @property({ attribute: false })
  i18nStrings: WizardProps.I18nStrings = {};

  private get _cancelText(): string {
    return this.i18nStrings?.cancelButton ?? 'Cancel';
  }

  private get _previousText(): string {
    return this.i18nStrings?.previousButton ?? 'Previous';
  }

  private get _nextText(): string {
    return this.i18nStrings?.nextButton ?? 'Next';
  }

  private get _submitText(): string {
    return this.submitButtonText
      ?? this.i18nStrings?.submitButton
      ?? 'Submit';
  }

  private get _optionalText(): string {
    return this.i18nStrings?.optional ?? '- optional';
  }

  private get _clampedIndex(): number {
    const max = Math.max(0, this.steps.length - 1);
    return Math.min(Math.max(0, this.activeStepIndex), max);
  }

  private get _isLastStep(): boolean {
    return this._clampedIndex === this.steps.length - 1;
  }

  private _onCancel(): void {
    fireNonCancelableEvent(this, 'cancel', {});
  }

  private _onPrevious(): void {
    if (this._clampedIndex > 0) {
      fireNonCancelableEvent<WizardProps.NavigateDetail>(this, 'navigate', {
        requestedStepIndex: this._clampedIndex - 1,
        reason: 'previous',
      });
    }
  }

  private _onNext(): void {
    if (this._isLastStep) {
      fireNonCancelableEvent(this, 'submit', {});
    } else {
      fireNonCancelableEvent<WizardProps.NavigateDetail>(this, 'navigate', {
        requestedStepIndex: this._clampedIndex + 1,
        reason: 'next',
      });
    }
  }

  private _onStepClick(index: number): void {
    if (index < this._clampedIndex) {
      fireNonCancelableEvent<WizardProps.NavigateDetail>(this, 'navigate', {
        requestedStepIndex: index,
        reason: 'step',
      });
    }
  }

  private _stepNumberLabel(n: number): string {
    return this.i18nStrings?.stepNumberLabel?.(n) ?? `Step ${n}`;
  }

  private _renderNavigation(): TemplateResult {
    const activeIdx = this._clampedIndex;
    const navLabel = this.i18nStrings?.navigationAriaLabel ?? 'Steps';

    return html`
      <nav class="navigation refresh" aria-label=${navLabel}>
        <ul class="refresh" role="list">
          ${this.steps.map((step, i) => {
            const isActive = i === activeIdx;
            const isEnabled = i < activeIdx;
            const isDisabled = i > activeIdx;
            const classes = {
              'active': isActive,
              'enabled': isEnabled,
              'disabled': isDisabled,
            };
            const stepNum = i + 1;
            const optionalLabel = step.isOptional ? ` ${this._optionalText}` : '';

            return html`
              <li class=${classMap(classes)}>
                <hr aria-hidden="true" />
                <span class="number">${this._stepNumberLabel(stepNum)}</span>
                <a
                  class="navigation-link"
                  role=${isEnabled ? 'button' : 'text'}
                  tabindex=${isEnabled ? '0' : '-1'}
                  aria-current=${isActive ? 'step' : nothing}
                  aria-disabled=${isDisabled ? 'true' : nothing}
                  @click=${isEnabled ? () => this._onStepClick(i) : nothing}
                  @keydown=${isEnabled ? (e: KeyboardEvent) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      this._onStepClick(i);
                    }
                  } : nothing}
                >
                  <span class="circle"></span>
                  <span class="title">${step.title}${optionalLabel}</span>
                </a>
              </li>
            `;
          })}
        </ul>
      </nav>
    `;
  }

  private _renderFormHeader(): TemplateResult {
    const step = this.steps[this._clampedIndex];
    if (!step) return html``;
    const optionalLabel = step.isOptional ? ` ${this._optionalText}` : '';

    return html`
      <div class="form-header">
        <div class="form-header-content">
          <h2 class="form-header-component-wrapper" tabindex="-1">
            ${this._stepNumberLabel(this._clampedIndex + 1)}
            <span>${step.title}${optionalLabel}</span>
          </h2>
          ${step.description ? html`<p>${step.description}</p>` : nothing}
        </div>
      </div>
    `;
  }

  private _renderFormContent(): TemplateResult {
    const step = this.steps[this._clampedIndex];
    if (!step) return html``;

    return html`
      <div class="form-component">
        ${step.errorText ? html`
          <cs-alert type="error" aria-label=${this.i18nStrings?.errorIconAriaLabel ?? 'Error'}>
            ${step.errorText}
          </cs-alert>
        ` : nothing}
        <div class="step-content">${step.content}</div>
      </div>
    `;
  }

  private _renderActionButtons(): TemplateResult {
    const isFirst = this._clampedIndex === 0;

    return html`
      <div class="action-buttons">
        <div class="action-buttons-left">
          <cs-button
            variant="link"
            @click=${() => this._onCancel()}
          >${this._cancelText}</cs-button>
        </div>
        <div class="action-buttons-right">
          ${!isFirst ? html`
            <cs-button
              variant="normal"
              @click=${() => this._onPrevious()}
            >${this._previousText}</cs-button>
          ` : nothing}
          <cs-button
            variant="primary"
            ?loading=${this.isLoadingNextStep}
            @click=${() => this._onNext()}
          >${this._isLastStep ? this._submitText : this._nextText}</cs-button>
        </div>
      </div>
    `;
  }

  override render(): TemplateResult {
    if (this.steps.length === 0) {
      return html`<div class="root"></div>`;
    }

    return html`
      <div class="root">
        <div class="wizard refresh" role="group">
          ${this._renderNavigation()}
          <div class="form refresh">
            ${this._renderFormHeader()}
            ${this._renderFormContent()}
          </div>
        </div>
        ${this._renderActionButtons()}
      </div>
    `;
  }
}
