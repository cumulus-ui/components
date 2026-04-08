import { css, html, nothing, type TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { CsBaseElement } from '../internal/base-element.js';
import { fireNonCancelableEvent } from '../internal/events.js';
import { componentStyles, sharedStyles } from './styles.js';
import type { ProgressBarProps } from './interfaces.js';
import '../status-indicator/index.js';

const hostStyles = css`:host { display: block; }`;

export class CsProgressBarInternal extends CsBaseElement {
  static override styles = [sharedStyles, componentStyles, hostStyles];

  @property({ type: Number })
  value: number = 0;

  @property({ type: String, reflect: true })
  status: ProgressBarProps.Status = 'in-progress';

  @property({ type: String, reflect: true })
  variant: ProgressBarProps.Variant = 'standalone';

  @property({ type: String })
  resultButtonText?: string;

  @property({ type: String })
  override ariaLabel: string | null = null;

  @property({ type: String })
  ariaLabelledby?: string;

  @property({ type: String })
  ariaDescribedby?: string;

  private get _clampedValue(): number {
    return Math.round(Math.min(100, Math.max(0, this.value ?? 0)));
  }

  private _onResultButtonClick(): void {
    fireNonCancelableEvent(this as unknown as HTMLElement, 'resultButtonClick', null);
  }

  override render(): TemplateResult {
    const isInProgress = this.status === 'in-progress';
    const clamped = this._clampedValue;

    const rootClasses = {
      'root': true,
      [`variant-${this.variant}`]: true,
    };

    const progressClasses = {
      'progress': true,
      'complete': clamped >= 100,
    };

    const statusType = this.status === 'success' ? 'success' : 'error';

    return html`
      <div class=${classMap(rootClasses)}>
        <div class="label">
          <slot name="label"></slot>
        </div>
        <div class="description">
          <slot name="description"></slot>
        </div>

        ${isInProgress ? html`
          <div class="progress-container">
            <progress
              class=${classMap(progressClasses)}
              value=${clamped}
              max="100"
              aria-label=${this.ariaLabel || 'Progress'}
              aria-valuenow=${clamped}
              aria-valuemin=${0}
              aria-valuemax=${100}
            ></progress>
            <span class="percentage-container">${clamped}%</span>
          </div>
        ` : html`
          <div class="result-state ${this.resultButtonText ? 'with-result-button' : ''}">
            <cs-status-indicator type=${statusType}>
              <slot name="resultText"></slot>
            </cs-status-indicator>
            ${this.resultButtonText && this.variant !== 'flash' ? html`
              <span class="result-button">
                <button
                  type="button"
                  class="result-button-trigger"
                  @click=${this._onResultButtonClick}
                >${this.resultButtonText}</button>
              </span>
            ` : nothing}
          </div>
        `}

        <div class="additional-info word-wrap">
          <slot name="additionalInfo"></slot>
        </div>
      </div>
    `;
  }
}
