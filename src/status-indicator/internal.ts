import { css, html, type TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { CsBaseElement } from '../internal/base-element.js';
import { componentStyles, sharedStyles } from './styles.js';
import type { StatusIndicatorProps } from './interfaces.js';
import '../icon/index.js';
import '../spinner/index.js';

const hostStyles = css`:host { display: inline-flex; }`;

const iconNameMap: Record<string, string> = {
  'success': 'status-positive',
  'error': 'status-negative',
  'warning': 'status-warning',
  'info': 'status-info',
  'stopped': 'status-stopped',
  'pending': 'status-pending',
  'in-progress': 'status-in-progress',
};

export class CsStatusIndicatorInternal extends CsBaseElement {
  static override styles = [sharedStyles, componentStyles, hostStyles];

  @property({ type: String, reflect: true })
  type: StatusIndicatorProps.Type = 'success';

  @property({ type: String })
  colorOverride?: StatusIndicatorProps.Color;

  @property({ type: Boolean })
  wrapText = true;

  override render(): TemplateResult {
    const rootClasses: Record<string, boolean> = {
      'root': true,
      [`status-${this.type}`]: true,
    };

    if (this.colorOverride) {
      rootClasses[`color-override-${this.colorOverride}`] = true;
    }

    const iconContent = this.type === 'loading'
      ? html`<cs-spinner size="normal"></cs-spinner>`
      : html`<cs-icon name=${iconNameMap[this.type] || 'status-info'} size="small"></cs-icon>`;

    return html`
      <span class=${classMap(rootClasses)}>
        <span class="container display-inline">
          <span class="icon">
            ${iconContent}
          </span>
          <span class=${classMap({ 'display-inline': true, 'overflow-ellipsis': !this.wrapText })}><slot></slot></span>
        </span>
      </span>
    `;
  }
}
