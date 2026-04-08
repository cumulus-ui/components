import { css, html, nothing, type TemplateResult } from 'lit';
import { property, query, state } from 'lit/decorators.js';
import { computePosition, flip, offset, shift, type Placement } from '@floating-ui/dom';
import { CsBaseElement } from '../internal/base-element.js';
import { generateUniqueId } from '../internal/hooks/use-unique-id.js';
import { sharedStyles } from '../internal/styles/shared.js';
import { tooltipStyles } from '../internal/styles/tooltip.js';
import type { TooltipProps } from './interfaces.js';

const hostStyles = css`
  :host {
    display: inline-block;
    position: relative;
  }
`;

export class CsTooltipInternal extends CsBaseElement {
  static override styles = [sharedStyles, tooltipStyles, hostStyles];

  @property({ type: String, reflect: true })
  position: TooltipProps.Position = 'top';

  @property({ type: String })
  content = '';

  @state()
  private _visible = false;

  @query('.tooltip-trigger')
  private _triggerEl!: HTMLElement;

  @query('.tooltip-body')
  private _bodyEl!: HTMLElement | null;

  private _tooltipId = generateUniqueId('tooltip');
  private _showTimeout: ReturnType<typeof setTimeout> | null = null;

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this._clearShowTimeout();
  }

  private _clearShowTimeout(): void {
    if (this._showTimeout !== null) {
      clearTimeout(this._showTimeout);
      this._showTimeout = null;
    }
  }

  private _show = (): void => {
    this._clearShowTimeout();
    this._showTimeout = setTimeout(() => {
      this._visible = true;
      this._showTimeout = null;
    }, 100);
  };

  private _hide = (): void => {
    this._clearShowTimeout();
    this._visible = false;
  };

  override async updated(): Promise<void> {
    if (this._visible && this._triggerEl && this._bodyEl) {
      await this._updatePosition();
    }
  }

  private async _updatePosition(): Promise<void> {
    if (!this._triggerEl || !this._bodyEl) return;

    const placement: Placement = this.position;

    const { x, y } = await computePosition(
      this._triggerEl,
      this._bodyEl,
      {
        placement,
        middleware: [offset(8), flip(), shift({ padding: 8 })],
      }
    );

    Object.assign(this._bodyEl.style, {
      position: 'absolute',
      left: `${x}px`,
      top: `${y}px`,
    });
  }

  override render(): TemplateResult {
    return html`
      <div class="tooltip--root">
        <div
          class="tooltip-trigger"
          aria-describedby=${this._visible ? this._tooltipId : nothing}
          @mouseenter=${this._show}
          @mouseleave=${this._hide}
          @focusin=${this._show}
          @focusout=${this._hide}
        >
          <slot></slot>
        </div>
        ${this._visible && this.content
          ? html`
            <div
              class="tooltip-body"
              role="tooltip"
              id=${this._tooltipId}
            >
              ${this.content}
            </div>
          `
          : nothing}
      </div>
    `;
  }
}
