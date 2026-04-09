import { css, html, nothing, type TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { CsBaseElement } from '../internal/base-element.js';
import { fireNonCancelableEvent } from '../internal/events.js';
import { componentStyles, sharedStyles } from './styles.js';
import type { ProgressBarProps } from './interfaces.js';
import '../status-indicator/index.js';

const hostStyles = css`:host { display: block; }`;

const inventedStyles = css`
  .label {
    font-size: var(--font-body-m-size, 14px);
    font-weight: var(--font-body-m-weight, 400);
    color: var(--color-text-body-default, #0f141a);
    margin-block-end: var(--space-xxs, 4px);
  }
  .description {
    font-size: var(--font-body-s-size, 12px);
    color: var(--color-text-body-secondary, #5f6b7a);
    margin-block-end: var(--space-xs, 8px);
  }
  .result-button-trigger {
    display: inline-block;
    margin-block-start: var(--space-xs, 8px);
    background: none;
    border: none;
    padding: 0;
    color: var(--color-text-button-inline-icon-default, #006ce0);
    cursor: pointer;
    font-size: inherit;
  }
  .result-button-trigger:hover {
    color: var(--color-text-button-inline-icon-hover, #002b66);
    text-decoration: underline;
  }
`;

export class CsProgressBarInternal extends CsBaseElement {
  static override styles = [sharedStyles, componentStyles, hostStyles, inventedStyles];

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
    fireNonCancelableEvent(this, 'resultButtonClick', {});
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
        <div class=${classMap({
          'label': true,
          'label-flash': this.variant === 'flash',
          'label-key-value': this.variant === 'key-value',
        })}>
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
          <div class=${classMap({
            'result-state': true,
            'with-result-button': !!this.resultButtonText,
            'result-container-error': this.status === 'error',
            'result-container-success': this.status === 'success',
          })}>
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
