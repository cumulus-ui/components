import { css, html, nothing, type TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { CsBaseElement } from '../internal/base-element.js';
import { componentStyles, sharedStyles } from './styles.js';
import type { StepsProps } from './interfaces.js';
import '../icon/index.js';
import '../spinner/index.js';

const hostStyles = css`:host { display: block; }`;

const inventedStyles = css`
  .title {
    font-size: var(--font-size-body-m, 14px);
    font-weight: var(--font-weight-heading-s, 700);
    color: var(--color-text-body-default, #0f141a);
  }
`;

const iconNameMap: Record<string, string> = {
  'success': 'status-positive',
  'error': 'status-negative',
  'warning': 'status-warning',
  'info': 'status-info',
  'stopped': 'status-stopped',
  'pending': 'status-pending',
  'in-progress': 'status-in-progress',
};

export class CsStepsInternal extends CsBaseElement {
  static override styles = [sharedStyles, componentStyles, hostStyles, inventedStyles];

  @property({ attribute: false })
  steps: ReadonlyArray<StepsProps.Step> = [];

  @property({ type: String, reflect: true })
  orientation: StepsProps.Orientation = 'vertical';

  @property({ type: String })
  override ariaLabel: string | null = null;

  @property({ type: String })
  ariaLabelledby?: string;

  @property({ type: String })
  ariaDescribedby?: string;

  private _renderIcon(step: StepsProps.Step): TemplateResult {
    if (step.status === 'loading') {
      return html`<cs-spinner size="normal"></cs-spinner>`;
    }
    const iconName = iconNameMap[step.status] || 'status-info';
    return html`<cs-icon name=${iconName} size="small"></cs-icon>`;
  }

  private _renderVerticalStep(step: StepsProps.Step, index: number, total: number): TemplateResult {
    const isLast = index === total - 1;

    return html`
      <li class="container" role="listitem">
        <div class="header">
          <span
            class="icon"
            role="img"
            aria-label=${step.statusIconAriaLabel || step.status}
          >
            ${this._renderIcon(step)}
          </span>
          <span class="title">${step.header}</span>
        </div>
        ${!isLast ? html`<hr class="connector" aria-hidden="true" />` : nothing}
        ${step.details ? html`
          <div class="details">${step.details}</div>
        ` : nothing}
      </li>
    `;
  }

  private _renderHorizontalStep(step: StepsProps.Step, index: number, total: number): TemplateResult {
    const isLast = index === total - 1;

    return html`
      <li class="container" role="listitem">
        <div class="header">
          <span
            class="icon"
            role="img"
            aria-label=${step.statusIconAriaLabel || step.status}
          >
            ${this._renderIcon(step)}
          </span>
          ${!isLast ? html`<hr class="connector" aria-hidden="true" />` : nothing}
        </div>
        <div class="horizontal-header">
          <span class="title">${step.header}</span>
        </div>
        ${step.details ? html`
          <div class="details">${step.details}</div>
        ` : nothing}
      </li>
    `;
  }

  override render(): TemplateResult {
    const isHorizontal = this.orientation === 'horizontal';
    const rootClasses = {
      'root': true,
      'horizontal': isHorizontal,
    };
    const total = this.steps.length;

    return html`
      <div class=${classMap(rootClasses)}>
        <ol
          class="list"
          role="list"
          aria-label=${this.ariaLabel || 'Steps'}
        >
          ${this.steps.map((step, i) =>
            isHorizontal
              ? this._renderHorizontalStep(step, i, total)
              : this._renderVerticalStep(step, i, total)
          )}
        </ol>
      </div>
    `;
  }
}
