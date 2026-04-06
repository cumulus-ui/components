import { LitElement, html, type PropertyValues } from 'lit';
import { property, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { styleMap } from 'lit/directives/style-map.js';
import { computePosition, flip, offset, shift, size, type Placement } from '@floating-ui/dom';
import { fireNonCancelableEvent } from '../../events.js';
import { sharedStyles } from '../../styles/shared.js';
import { dropdownStyles } from './styles.js';

export class CsDropdownInternal extends LitElement {
  static override styles = [sharedStyles, dropdownStyles];

  @property({ type: Boolean, reflect: true })
  open = false;

  @property({ type: Number })
  minWidth?: number;

  @property({ type: Number })
  maxWidth?: number;

  @property({ type: Boolean })
  expandToViewport = false;

  @property({ type: String, attribute: 'content-role' })
  contentRole?: string;

  @property({ type: String, attribute: 'content-aria-label' })
  contentAriaLabel?: string;

  @property({ type: String, attribute: 'content-aria-labelledby' })
  contentAriaLabelledby?: string;

  @property({ type: String, attribute: 'content-aria-describedby' })
  contentAriaDescribedby?: string;

  @query('.cs-dropdown__trigger')
  private _triggerEl!: HTMLElement;

  @query('.cs-dropdown__content-wrapper')
  private _contentWrapperEl!: HTMLElement;

  private _cleanupOutsideClick: (() => void) | null = null;

  override connectedCallback(): void {
    super.connectedCallback();
    this._boundKeyDown = this._onKeyDown.bind(this);
    this.addEventListener('keydown', this._boundKeyDown);
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    if (this._boundKeyDown) {
      this.removeEventListener('keydown', this._boundKeyDown);
    }
    this._removeOutsideClickListener();
  }

  private _boundKeyDown: ((e: KeyboardEvent) => void) | null = null;

  override updated(changed: PropertyValues): void {
    super.updated(changed);
    if (changed.has('open')) {
      if (this.open) {
        this._updatePosition();
        this._addOutsideClickListener();
      } else {
        this._removeOutsideClickListener();
      }
    }
  }

  private async _updatePosition(): Promise<void> {
    if (!this._triggerEl || !this._contentWrapperEl) return;

    const middleware = [
      offset(4),
      flip({ padding: 8 }),
      shift({ padding: 8 }),
    ];

    if (this.maxWidth) {
      middleware.push(
        size({
          apply: ({ availableWidth }) => {
            Object.assign(this._contentWrapperEl.style, {
              maxWidth: `${Math.min(this.maxWidth!, availableWidth)}px`,
            });
          },
        })
      );
    }

    const strategy = this.expandToViewport ? 'fixed' : 'absolute';

    const { x, y } = await computePosition(
      this._triggerEl,
      this._contentWrapperEl,
      {
        placement: 'bottom-start' as Placement,
        strategy,
        middleware,
      }
    );

    Object.assign(this._contentWrapperEl.style, {
      left: `${x}px`,
      top: `${y}px`,
    });
  }

  private _onKeyDown(e: KeyboardEvent): void {
    if (e.key === 'Escape' && this.open) {
      e.stopPropagation();
      fireNonCancelableEvent(this, 'escape', undefined);
    }
  }

  private _addOutsideClickListener(): void {
    this._removeOutsideClickListener();

    const handler = (e: MouseEvent) => {
      const path = e.composedPath();
      if (!path.includes(this)) {
        fireNonCancelableEvent(this, 'outsideClick', null);
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

  private _onContentFocusIn = (e: FocusEvent): void => {
    fireNonCancelableEvent(this, 'focusEnter', {
      target: e.target,
      relatedTarget: e.relatedTarget,
    });
  };

  private _onContentFocusOut = (e: FocusEvent): void => {
    fireNonCancelableEvent(this, 'focusLeave', {
      target: e.target,
      relatedTarget: e.relatedTarget,
    });
  };

  override render() {
    const wrapperClasses = {
      'cs-dropdown__content-wrapper': true,
      'cs-dropdown__content-wrapper--open': this.open,
      'cs-dropdown__content-wrapper--expand-to-viewport': this.expandToViewport,
    };

    const contentStyles: Record<string, string | undefined> = {};
    if (this.minWidth) contentStyles.minWidth = `${this.minWidth}px`;
    if (this.maxWidth) contentStyles.maxWidth = `${this.maxWidth}px`;

    return html`
      <div class="cs-dropdown__trigger">
        <slot name="trigger"></slot>
      </div>
      <div class=${classMap(wrapperClasses)}>
        <div
          class="cs-dropdown__content"
          role=${ifDefined(this.contentRole)}
          aria-label=${ifDefined(this.contentAriaLabel)}
          aria-labelledby=${ifDefined(this.contentAriaLabelledby)}
          aria-describedby=${ifDefined(this.contentAriaDescribedby)}
          style=${styleMap(contentStyles)}
          @focusin=${this._onContentFocusIn}
          @focusout=${this._onContentFocusOut}
        >
          <slot name="header"></slot>
          <slot name="content"></slot>
          <slot name="footer"></slot>
        </div>
      </div>
    `;
  }
}
