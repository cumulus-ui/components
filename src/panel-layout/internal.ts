import { css, html, nothing, type TemplateResult } from 'lit';
import { property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import { CsBaseElement } from '../internal/base-element.js';
import { fireNonCancelableEvent } from '../internal/events.js';
import { componentStyles, sharedStyles } from './styles.js';
import type { PanelLayoutProps } from './interfaces.js';

const hostStyles = css`:host { display: block; block-size: 100%; }`;

const handleStyles = css`
.handle-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: col-resize;
  user-select: none;
  -webkit-user-select: none;
  inline-size: 8px;
  flex-shrink: 0;
}
.handle-wrapper:hover .handle-bar {
  background-color: var(--color-border-item-focused, #006ce0);
}
.handle-bar {
  inline-size: 2px;
  block-size: 24px;
  border-radius: 1px;
  background-color: var(--color-border-divider-default, #c6c6cd);
  transition: background-color 120ms ease-out;
}
.handle-wrapper:focus-visible {
  outline: 2px solid var(--color-border-item-focused, #006ce0);
  outline-offset: -2px;
  border-radius: var(--border-radius-control-default-focus-ring, 4px);
}
`;

const KEYBOARD_RESIZE_STEP = 10;
const MIN_DEFAULT = 100;

export class CsPanelLayoutInternal extends CsBaseElement {
  static override styles = [sharedStyles, componentStyles, handleStyles, hostStyles];

  @property({ type: String, reflect: true, attribute: 'panel-position' })
  panelPosition: PanelLayoutProps.PanelPosition = 'side-end';

  @property({ type: Number, attribute: 'default-panel-size' })
  defaultPanelSize?: number;

  @property({ type: Number, attribute: 'panel-size' })
  panelSize?: number;

  @property({ type: Number, attribute: 'min-panel-size' })
  minPanelSize?: number;

  @property({ type: Number, attribute: 'max-panel-size' })
  maxPanelSize?: number;

  @property({ type: Boolean, reflect: true })
  resizable = false;

  @property({ type: String, reflect: true })
  display: PanelLayoutProps.Display = 'all';

  @property({ attribute: false })
  panelFocusable?: PanelLayoutProps.FocusableConfig;

  @property({ attribute: false })
  mainFocusable?: PanelLayoutProps.FocusableConfig;

  @property({ attribute: false })
  i18nStrings?: PanelLayoutProps.I18nStrings;

  @state()
  private _internalSize = 280;

  @state()
  private _dragging = false;

  private _dragStartX = 0;
  private _dragStartSize = 0;

  override connectedCallback(): void {
    super.connectedCallback();
    if (this.defaultPanelSize != null) {
      this._internalSize = this.defaultPanelSize;
    }
  }

  private get _effectiveSize(): number {
    const raw = this.panelSize ?? this._internalSize;
    const min = this.minPanelSize ?? MIN_DEFAULT;
    const max = this.maxPanelSize ?? Infinity;
    return Math.max(min, Math.min(max, raw));
  }

  private _clampSize(size: number): number {
    const min = this.minPanelSize ?? MIN_DEFAULT;
    const max = this.maxPanelSize ?? Infinity;
    return Math.max(min, Math.min(max, size));
  }

  private _fireResize(panelSize: number): void {
    const totalSize = this.clientWidth;
    const detail: PanelLayoutProps.PanelResizeDetail = { totalSize, panelSize };
    fireNonCancelableEvent(this, 'panelResize', detail);
    fireNonCancelableEvent(this, 'layoutChange', detail);
  }

  private _onPointerDown = (e: PointerEvent): void => {
    if (!this.resizable) return;
    e.preventDefault();
    this._dragging = true;
    this._dragStartX = e.clientX;
    this._dragStartSize = this._effectiveSize;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  private _onPointerMove = (e: PointerEvent): void => {
    if (!this._dragging) return;
    const dx = e.clientX - this._dragStartX;
    const delta = this.panelPosition === 'side-start' ? dx : -dx;
    const newSize = this._clampSize(this._dragStartSize + delta);
    this._internalSize = newSize;
  };

  private _onPointerUp = (e: PointerEvent): void => {
    if (!this._dragging) return;
    this._dragging = false;
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    this._fireResize(this._effectiveSize);
  };

  private _onKeyDown = (e: KeyboardEvent): void => {
    if (!this.resizable) return;
    let delta = 0;
    if (this.panelPosition === 'side-start') {
      if (e.key === 'ArrowRight') delta = KEYBOARD_RESIZE_STEP;
      else if (e.key === 'ArrowLeft') delta = -KEYBOARD_RESIZE_STEP;
    } else {
      if (e.key === 'ArrowLeft') delta = KEYBOARD_RESIZE_STEP;
      else if (e.key === 'ArrowRight') delta = -KEYBOARD_RESIZE_STEP;
    }
    if (delta !== 0) {
      e.preventDefault();
      const newSize = this._clampSize(this._effectiveSize + delta);
      this._internalSize = newSize;
      this._fireResize(newSize);
    }
  };

  public focusResizeHandle(): void {
    const handle = this.shadowRoot?.querySelector('.handle-wrapper') as HTMLElement | null;
    handle?.focus();
  }

  private _renderHandle(): TemplateResult | typeof nothing {
    if (!this.resizable || this.display !== 'all') return nothing;

    const ariaLabel = this.i18nStrings?.resizeHandleAriaLabel ?? 'Resize panel';
    const tooltip = this.i18nStrings?.resizeHandleTooltipText;

    return html`
      <div
        class="handle-wrapper"
        role="separator"
        aria-orientation="vertical"
        aria-valuenow=${this._effectiveSize}
        aria-valuemin=${this.minPanelSize ?? MIN_DEFAULT}
        aria-valuemax=${this.maxPanelSize ?? this.clientWidth}
        aria-label=${ariaLabel}
        title=${tooltip ?? nothing}
        tabindex="0"
        @pointerdown=${this._onPointerDown}
        @pointermove=${this._onPointerMove}
        @pointerup=${this._onPointerUp}
        @keydown=${this._onKeyDown}
      >
        <div class="handle-bar"></div>
      </div>
    `;
  }

  override render(): TemplateResult {
    const rootClasses = {
      'root': true,
      [`display-${this.display}`]: true,
    };

    const panelStyle: Record<string, string> = {};
    if (this.display === 'all') {
      panelStyle['inline-size'] = `${this._effectiveSize}px`;
    }

    const panelFocusAttrs: Record<string, string | undefined> = {};
    if (this.panelFocusable) {
      panelFocusAttrs['tabindex'] = '0';
      if (this.panelFocusable.ariaLabel) panelFocusAttrs['aria-label'] = this.panelFocusable.ariaLabel;
      if (this.panelFocusable.ariaLabelledby) panelFocusAttrs['aria-labelledby'] = this.panelFocusable.ariaLabelledby;
    }

    const mainFocusAttrs: Record<string, string | undefined> = {};
    if (this.mainFocusable) {
      mainFocusAttrs['tabindex'] = '0';
      if (this.mainFocusable.ariaLabel) mainFocusAttrs['aria-label'] = this.mainFocusable.ariaLabel;
      if (this.mainFocusable.ariaLabelledby) mainFocusAttrs['aria-labelledby'] = this.mainFocusable.ariaLabelledby;
    }

    const panelFirst = this.panelPosition === 'side-start';

    const panelSection = html`
      <div class="panel" style=${styleMap(panelStyle)}>
        ${!panelFirst ? html`<div class="handle">${this._renderHandle()}</div>` : nothing}
        <div
          class="panel-content"
          tabindex=${this.panelFocusable ? '0' : nothing}
          aria-label=${this.panelFocusable?.ariaLabel ?? nothing}
          aria-labelledby=${this.panelFocusable?.ariaLabelledby ?? nothing}
        >
          <slot name="panel"></slot>
        </div>
        ${panelFirst ? html`<div class="handle">${this._renderHandle()}</div>` : nothing}
      </div>
    `;

    const mainSection = html`
      <div
        class="content"
        tabindex=${this.mainFocusable ? '0' : nothing}
        aria-label=${this.mainFocusable?.ariaLabel ?? nothing}
        aria-labelledby=${this.mainFocusable?.ariaLabelledby ?? nothing}
      >
        <slot name="main"></slot>
      </div>
    `;

    return html`
      <div class=${classMap(rootClasses)}>
        ${panelFirst ? panelSection : mainSection}
        ${panelFirst ? mainSection : panelSection}
      </div>
    `;
  }
}
