import { css, html, type TemplateResult } from 'lit';
import { property, state } from 'lit/decorators.js';
import { CsBaseElement } from '../internal/base-element.js';
import { fireNonCancelableEvent } from '../internal/events.js';
import { sharedStyles } from '../internal/styles/shared.js';
import '../alert/index.js';
import '../button/index.js';

const hostStyles = css`:host { display: contents; }`;

export class CsErrorBoundaryInternal extends CsBaseElement {
  static override styles = [sharedStyles, hostStyles];

  @property({ type: String, attribute: 'error-boundary-id' })
  errorBoundaryId = '';

  @state()
  private _hasError = false;

  override updated(): void {
    if (this.errorBoundaryId) {
      this.setAttribute('data-awsui-boundary-id', this.errorBoundaryId);
    } else {
      this.removeAttribute('data-awsui-boundary-id');
    }
  }

  protected override performUpdate(): void {
    try {
      super.performUpdate();
    } catch (e: unknown) {
      const error = e instanceof Error ? e : new Error(String(e));
      this._hasError = true;

      fireNonCancelableEvent(this, 'error', {
        error,
        errorBoundaryId: this.errorBoundaryId || undefined,
      });
    }
  }

  private _retry = (): void => {
    this._hasError = false;
  };

  override render(): TemplateResult {
    if (this._hasError) {
      return html`
        <div class="error-boundary">
          <cs-alert type="error" .visible=${true}>
            <span slot="header">Something went wrong</span>
            An error occurred. Please try refreshing.
            <cs-button slot="action" @click=${this._retry}>Retry</cs-button>
          </cs-alert>
        </div>
      `;
    }

    return html`<div class="error-boundary"><slot></slot></div>`;
  }
}
