import { css, html, nothing, type TemplateResult } from 'lit';
import { property, state } from 'lit/decorators.js';
import { createRef, ref, type Ref } from 'lit/directives/ref.js';
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

  @property({ type: String })
  position: TooltipProps.Position = 'top';

  @property({ type: String })
  content = '';

  @state()
  private _visible = false;

  private _triggerRef: Ref<HTMLElement> = createRef();
  private _bodyRef: Ref<HTMLElement> = createRef();

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
    if (this._visible && this._triggerRef.value && this._bodyRef.value) {
      await this._updatePosition();
    }
  }

  private async _updatePosition(): Promise<void> {
    const trigger = this._triggerRef.value;
    const body = this._bodyRef.value;
    if (!trigger || !body) return;

    const placement: Placement = this.position;

    const { x, y } = await computePosition(trigger, body, {
      placement,
      middleware: [offset(8), flip(), shift({ padding: 8 })],
    });

    Object.assign(body.style, {
      position: 'absolute',
      left: `${x}px`,
      top: `${y}px`,
    });
  }

  override render(): TemplateResult {
    return html`
      <div class="tooltip--root">
        <div
          ${ref(this._triggerRef)}
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
              ${ref(this._bodyRef)}
              role="tooltip"
              id=${this._tooltipId}
              style="position: absolute"
            >
              ${this.content}
            </div>
          `
          : nothing}
      </div>
    `;
  }
}
