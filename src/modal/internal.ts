import { css, html, type TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { CsBaseElement } from '../internal/base-element.js';
import { fireNonCancelableEvent } from '../internal/events.js';
import { componentStyles, sharedStyles } from './styles.js';
import type { ModalProps } from './interfaces.js';
import '../button/index.js';
import '../icon/index.js';

const hostStyles = css`:host { display: block; }`;

export class CsModalInternal extends CsBaseElement {
  static override styles = [sharedStyles, componentStyles, hostStyles];

  @property({ type: Boolean })
  visible = false;

  @property({ type: String })
  size: ModalProps.Size = 'medium';

  @property({ type: String })
  header = '';

  @property({ type: String })
  closeAriaLabel = 'Close';

  @property({ type: Boolean })
  disableContentPaddings = false;

  @property({ type: String })
  position: ModalProps.Position = 'center';

  private _hasFooter = false;

  private _onFooterSlotChange = (e: Event): void => {
    const slot = e.target as HTMLSlotElement;
    this._hasFooter = slot.assignedNodes({ flatten: true }).length > 0;
    this.requestUpdate();
  };

  override connectedCallback(): void {
    super.connectedCallback();
    this.addEventListener('keydown', this._onKeyDown);
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.removeEventListener('keydown', this._onKeyDown);
  }

  private _onKeyDown = (e: KeyboardEvent): void => {
    if (e.key === 'Escape' && this.visible) {
      e.stopPropagation();
      this._dismiss('keyboard');
    }
  };

  private _onBackdropClick = (e: MouseEvent): void => {
    // Only dismiss if click target is the backdrop itself (root overlay)
    if (e.target === e.currentTarget) {
      this._dismiss('overlay');
    }
  };

  private _onCloseClick = (): void => {
    this._dismiss('closeButton');
  };

  private _dismiss(reason: string): void {
    const detail: ModalProps.DismissDetail = { reason };
    fireNonCancelableEvent(this, 'dismiss', detail);
  }

  override render(): TemplateResult {
    const rootClasses = {
      'root': true,
      'hidden': !this.visible,
    };

    const focusLockClasses = {
      'focus-lock': true,
      [`position-${this.position}`]: true,
    };

    const dialogClasses = {
      'dialog': true,
      [this.size]: true,
    };

    const contentClasses = {
      'content': true,
      'no-paddings': this.disableContentPaddings,
    };

    const footerClasses = {
      'footer': true,
      'footer--rounded': true,
    };

    return html`
      <div
        class=${classMap(rootClasses)}
        @click=${this._onBackdropClick}
      >
        <div class=${classMap(focusLockClasses)}>
          <div
            class=${classMap(dialogClasses)}
            role="dialog"
            aria-modal="true"
            aria-label=${ifDefined(this.header || undefined)}
          >
            <div class="container">
              <div class="header">
                <div style="display:flex;align-items:center;justify-content:space-between;width:100%">
                  <div style="flex:1;min-width:0">
                    <slot name="header">${this.header}</slot>
                  </div>
                  <cs-button
                    variant="icon"
                    icon-name="close"
                    aria-label=${this.closeAriaLabel}
                    @click=${this._onCloseClick}
                  ></cs-button>
                </div>
              </div>

              <div class=${classMap(contentClasses)}>
                <slot></slot>
              </div>

              ${this._hasFooter
                ? html`<div class=${classMap(footerClasses)}><slot name="footer" @slotchange=${this._onFooterSlotChange}></slot></div>`
                : html`<slot name="footer" @slotchange=${this._onFooterSlotChange} style="display:none"></slot>`}
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
