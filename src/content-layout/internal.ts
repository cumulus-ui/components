import { css, html, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { CsBaseElement } from '../internal/base-element.js';
import { componentStyles, sharedStyles } from './styles.js';

const hostStyles = css`:host { display: block; }`;

export class CsContentLayoutInternal extends CsBaseElement {
  static override styles = [sharedStyles, componentStyles, hostStyles];

  @property({ type: Boolean })
  disableOverlap = false;

  @property({ type: String })
  headerVariant: 'default' | 'high-contrast' | 'divider' = 'default';

  @property({ type: Boolean })
  defaultPadding = false;

  @property({ type: Number })
  maxContentWidth?: number;

  @property({ type: String })
  headerBackgroundStyle?: string;

  private _hasHeader = false;

  private _onHeaderSlotChange(e: Event): void {
    const slot = e.target as HTMLSlotElement;
    this._hasHeader = slot.assignedNodes({ flatten: true }).length > 0;
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
    };

    const backgroundClasses = {
      'background': true,
      'has-default-background': !this.headerBackgroundStyle,
      'is-overlap-disabled': this.disableOverlap,
    };

    return html`
      <div class=${classMap(layoutClasses)}>
        <div class=${classMap(backgroundClasses)}>
          ${this.headerBackgroundStyle
            ? html`<div class="header-background" style="background: ${this.headerBackgroundStyle}"></div>`
            : nothing}
        </div>
        <div class=${classMap(headerClasses)}>
          <slot name="header" @slotchange=${this._onHeaderSlotChange}></slot>
        </div>
        <div class="content">
          <slot></slot>
        </div>
      </div>
    `;
  }
}
