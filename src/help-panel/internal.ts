import { css, html, type TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import { CsBaseElement } from '../internal/base-element.js';
import { componentStyles, sharedStyles } from './styles.js';
import '../spinner/index.js';

const hostStyles = css`:host { display: block; }`;

export class CsHelpPanelInternal extends CsBaseElement {
  static override styles = [sharedStyles, componentStyles, hostStyles];

  @property({ type: Boolean, reflect: true })
  loading = false;

  @property({ type: String })
  loadingText = 'Loading content';

  override render(): TemplateResult {
    if (this.loading) {
      return html`
        <div class="help-panel">
          <div class="loading">
            <cs-spinner size="normal"></cs-spinner>
            <span>${this.loadingText}</span>
          </div>
        </div>
      `;
    }

    return html`
      <div class="help-panel">
        <div class="header">
          <slot name="header"></slot>
        </div>
        <div class="content">
          <slot></slot>
        </div>
        <div class="footer">
          <slot name="footer"></slot>
        </div>
      </div>
    `;
  }
}
