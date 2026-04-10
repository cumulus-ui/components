import { css, html, nothing, type PropertyValues, type TemplateResult } from 'lit';
import { property, state, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { CsBaseElement } from '../internal/base-element.js';
import { computePosition, flip, offset, shift, type Placement } from '@floating-ui/dom';
import { componentStyles, sharedStyles } from './styles.js';
import type { PopoverProps } from './interfaces.js';
import '../button/index.js';

const hostStyles = css`:host { display: inline-block; position: relative; }`;

const POSITION_MAP: Record<string, Placement> = {
  top: 'top',
  right: 'right-start',
  bottom: 'bottom',
  left: 'left-start',
};

export class CsPopoverInternal extends CsBaseElement {
  static override styles = [sharedStyles, componentStyles, hostStyles];

  @property({ type: String })
  position: PopoverProps.Position = 'right';

  @property({ type: String })
  size: PopoverProps.Size = 'medium';

  @property({ type: Boolean, attribute: 'fixed-width' })
  fixedWidth = false;

  @property({ type: String, attribute: 'trigger-type' })
  triggerType: PopoverProps.TriggerType = 'text';

  @property({ type: String, attribute: 'trigger-aria-label' })
  triggerAriaLabel = '';

  @property({ type: Boolean, attribute: 'wrap-trigger-text' })
  wrapTriggerText = true;

  @property({ type: String })
  header = '';

  @property({ type: Boolean, attribute: 'dismiss-button' })
  dismissButton = true;

  @property({ type: String, attribute: 'dismiss-aria-label' })
  dismissAriaLabel = 'Close';

  @state()
  private _open = false;

  @query('.trigger')
  private _triggerEl!: HTMLElement;

  @query('.container')
  private _containerEl!: HTMLElement;

  private _cleanupOutsideClick: (() => void) | null = null;

  override connectedCallback(): void {
    super.connectedCallback();
    this.addEventListener('keydown', this._onKeyDown);
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.removeEventListener('keydown', this._onKeyDown);
    this._removeOutsideClickListener();
  }

  override updated(changed: PropertyValues): void {
    super.updated(changed);
    if (changed.has('_open')) {
      if (this._open) {
        this._updatePosition();
        this._addOutsideClickListener();
      } else {
        this._removeOutsideClickListener();
      }
    }
  }

  private _onTriggerClick = (): void => {
    this._open = !this._open;
  };

  private _onDismiss = (): void => {
    this._open = false;
  };

  private _onKeyDown = (e: KeyboardEvent): void => {
    if (e.key === 'Escape' && this._open) {
      e.stopPropagation();
      this._open = false;
    }
  };

  private async _updatePosition(): Promise<void> {
    await this.updateComplete;

    if (!this._triggerEl || !this._containerEl) return;

    const placement = POSITION_MAP[this.position] ?? 'right-start';

    const { x, y } = await computePosition(
      this._triggerEl,
      this._containerEl,
      {
        placement,
        strategy: 'fixed',
        middleware: [
          offset(12),
          flip({ padding: 8 }),
          shift({ padding: 8 }),
        ],
      }
    );

    Object.assign(this._containerEl.style, {
      left: `${x}px`,
      top: `${y}px`,
    });
  }

  private _addOutsideClickListener(): void {
    this._removeOutsideClickListener();

    const handler = (e: MouseEvent) => {
      const path = e.composedPath();
      if (!path.includes(this)) {
        this._open = false;
      }
    };

    requestAnimationFrame(() => {
      document.addEventListener('click', handler, true);
      this._cleanupOutsideClick = () => {
        document.removeEventListener('click', handler, true);
      };
    });
  }

  private _removeOutsideClickListener(): void {
    this._cleanupOutsideClick?.();
    this._cleanupOutsideClick = null;
  }

  override render(): TemplateResult {
    const isCustomTrigger = this.triggerType === 'custom';

    const triggerClasses = {
      'trigger': true,
      [`trigger-type-${this.triggerType}`]: true,
      'overflow-ellipsis': !this.wrapTriggerText,
    };

    const containerBodyClasses = {
      'container-body': true,
      [`container-body-size-${this.size}`]: true,
      'fixed-width': this.fixedWidth,
    };

    const bodyClasses = {
      'body': true,
      'has-dismiss': this.dismissButton,
    };

    return html`
      <div class="root">
        ${isCustomTrigger
          ? html`
            <div class=${classMap(triggerClasses)} @click=${this._onTriggerClick}>
              <slot></slot>
            </div>
          `
          : html`
            <button class=${classMap(triggerClasses)}
              aria-label=${ifDefined(this.triggerAriaLabel || undefined)}
              aria-expanded=${this._open}
              @click=${this._onTriggerClick}
            >
              <slot></slot>
            </button>
          `
        }
        ${this._open ? html`
          <div class="container">
            <div class=${classMap(containerBodyClasses)}>
              <div class="container-arrow">
                <div class="arrow">
                  <div class="arrow-outer"></div>
                  <div class="arrow-inner"></div>
                </div>
              </div>
              <div class=${classMap(bodyClasses)}>
                <div class="header-row">
                  <div class="header">${this.header}</div>
                  ${this.dismissButton ? html`
                    <div class="dismiss">
                      <div class="dismiss-control">
                        <cs-button variant="icon" icon-name="close"
                          aria-label=${this.dismissAriaLabel}
                          @click=${this._onDismiss}></cs-button>
                      </div>
                    </div>
                  ` : nothing}
                </div>
                <div class="content">
                  <slot name="content"></slot>
                </div>
              </div>
            </div>
          </div>
        ` : nothing}
      </div>
    `;
  }
}
