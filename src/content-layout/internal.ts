import { css, html, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import { CsBaseElement } from '../internal/base-element.js';
import { componentStyles, sharedStyles } from './styles.js';

const hostStyles = css`
  :host { display: block; }
  .high-contrast { color: #ffffff; }
`;
export class CsContentLayoutInternal extends CsBaseElement {
  static override styles = [sharedStyles, componentStyles, hostStyles];

  @property({ type: Boolean, attribute: 'disable-overlap' })
  disableOverlap = false;

  @property({ type: String, attribute: 'header-variant' })
  headerVariant: 'default' | 'high-contrast' | 'divider' = 'default';

  @property({ type: Boolean, attribute: 'default-padding' })
  defaultPadding = false;

  @property({ type: Number, attribute: 'max-content-width' })
  maxContentWidth?: number;

  @property({ type: String, attribute: 'header-background-style' })
  headerBackgroundStyle?: string;

  private _hasHeader = true;
  private _hasNotifications = false;
  private _hasBreadcrumbs = false;
  private _hasSecondaryHeader = false;

  override firstUpdated(): void {
    const slot = this.shadowRoot?.querySelector('slot[name="header"]') as HTMLSlotElement | null;
    if (slot) {
      const hasHeader = slot.assignedNodes({ flatten: true }).length > 0;
      if (this._hasHeader !== hasHeader) {
        this._hasHeader = hasHeader;
        this.requestUpdate();
      }
    }
  }

  private _onHeaderSlotChange(e: Event): void {
    const slot = e.target as HTMLSlotElement;
    this._hasHeader = slot.assignedNodes({ flatten: true }).length > 0;
    this.requestUpdate();
  }

  private _onNotificationsSlotChange(e: Event): void {
    const slot = e.target as HTMLSlotElement;
    this._hasNotifications = slot.assignedNodes({ flatten: true }).length > 0;
    this.requestUpdate();
  }

  private _onBreadcrumbsSlotChange(e: Event): void {
    const slot = e.target as HTMLSlotElement;
    this._hasBreadcrumbs = slot.assignedNodes({ flatten: true }).length > 0;
    this.requestUpdate();
  }

  private _onSecondaryHeaderSlotChange(e: Event): void {
    const slot = e.target as HTMLSlotElement;
    this._hasSecondaryHeader = slot.assignedNodes({ flatten: true }).length > 0;
    this.requestUpdate();
  }

  override render() {
    const layoutClasses = {
      'layout': true,
      'is-overlap-disabled': this.disableOverlap || !this._hasHeader,
      'is-visual-refresh': true,
      'has-header': this._hasHeader,
      'default-padding': this.defaultPadding,
    };

    const headerClasses = {
      'header-wrapper': true,
      'with-divider': this.headerVariant === 'divider',
      'high-contrast': this.headerVariant === 'high-contrast',
    };

    const backgroundClasses = {
      'background': true,
      'has-default-background': !this.headerBackgroundStyle,
      'is-overlap-disabled': this.disableOverlap,
    };

    const layoutStyle = this.maxContentWidth
      ? { '--awsui-content-layout-max-content-width': `${this.maxContentWidth}px` }
      : { '--awsui-content-layout-max-content-width': '100%' };

    return html`
      <div class=${classMap(layoutClasses)} style=${styleMap(layoutStyle)}>
        <div class=${classMap(backgroundClasses)}>
          ${this.headerBackgroundStyle
            ? html`<div class="header-background" style=${styleMap({ background: this.headerBackgroundStyle || '' })}></div>`
            : nothing}
        </div>
        ${this._hasNotifications
          ? html`<div class="notifications"><slot name="notifications" @slotchange=${this._onNotificationsSlotChange}></slot></div>`
          : html`<slot name="notifications" @slotchange=${this._onNotificationsSlotChange} style="display:none"></slot>`}
        ${this._hasBreadcrumbs
          ? html`<div class="breadcrumbs"><slot name="breadcrumbs" @slotchange=${this._onBreadcrumbsSlotChange}></slot></div>`
          : html`<slot name="breadcrumbs" @slotchange=${this._onBreadcrumbsSlotChange} style="display:none"></slot>`}
        <div class=${classMap(headerClasses)}>
          <slot name="header" @slotchange=${this._onHeaderSlotChange}></slot>
          ${this._hasSecondaryHeader
            ? html`<div class="secondary-header"><slot name="secondary-header" @slotchange=${this._onSecondaryHeaderSlotChange}></slot></div>`
            : html`<slot name="secondary-header" @slotchange=${this._onSecondaryHeaderSlotChange} style="display:none"></slot>`}
        </div>
        <div class="content">
          <slot></slot>
        </div>
      </div>
    `;
  }
}
