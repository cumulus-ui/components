import { css, html, nothing, type TemplateResult } from 'lit';
import { property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { CsBaseElement } from '../internal/base-element.js';
import { fireNonCancelableEvent } from '../internal/events.js';
import { componentStyles, sharedStyles } from './styles.js';
import type { ExpandableSectionProps } from './interfaces.js';
import '../icon/index.js';

const hostStyles = css`:host { display: block; }`;

export class CsExpandableSectionInternal extends CsBaseElement {
  static override styles = [sharedStyles, componentStyles, hostStyles];

  @property({ type: String, reflect: true })
  variant: ExpandableSectionProps.Variant = 'default';

  @property({ type: Boolean, reflect: true })
  expanded?: boolean;

  @property({ type: Boolean })
  defaultExpanded = false;

  @property({ type: String })
  headerText = '';

  @property({ type: String })
  headerDescription = '';

  @property({ type: String })
  headerCounter = '';

  @property({ type: String })
  headingTagOverride?: ExpandableSectionProps.HeadingTag;

  @property({ type: String })
  headerAriaLabel?: string;

  @property({ type: Boolean })
  disableContentPaddings = false;

  @state()
  private _internalExpanded = false;

  private _initialized = false;

  private get _isExpanded(): boolean {
    if (this.expanded !== undefined) return this.expanded;
    return this._internalExpanded;
  }

  override connectedCallback(): void {
    super.connectedCallback();
    if (!this._initialized) {
      this._internalExpanded = this.defaultExpanded;
      this._initialized = true;
    }
  }

  private _toggle(): void {
    const newExpanded = !this._isExpanded;
    this._internalExpanded = newExpanded;
    const detail: ExpandableSectionProps.ChangeDetail = { expanded: newExpanded };
    fireNonCancelableEvent(this, 'change', detail);
  }

  private _onHeaderClick = (): void => {
    this._toggle();
  };

  private _onHeaderKeyDown = (e: KeyboardEvent): void => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      this._toggle();
    }
  };

  private _renderHeadingContent(): TemplateResult {
    const headerTextContent = html`
      <span class="header-text">${this.headerText}</span>
      ${this.headerCounter
        ? html`<span class="header-counter">&nbsp;${this.headerCounter}</span>`
        : nothing}
    `;
    return headerTextContent;
  }

  private _renderHeading(): TemplateResult {
    const tag = this.headingTagOverride;
    const content = this._renderHeadingContent();

    const headingClasses = {
      'header-wrapper': true,
    };

    if (!tag) {
      return html`<div class=${classMap(headingClasses)}>${content}</div>`;
    }

    switch (tag) {
      case 'h1':
        return html`<h1 class=${classMap(headingClasses)}>${content}</h1>`;
      case 'h3':
        return html`<h3 class=${classMap(headingClasses)}>${content}</h3>`;
      case 'h4':
        return html`<h4 class=${classMap(headingClasses)}>${content}</h4>`;
      case 'h5':
        return html`<h5 class=${classMap(headingClasses)}>${content}</h5>`;
      default:
        return html`<h2 class=${classMap(headingClasses)}>${content}</h2>`;
    }
  }

  private _isContainerVariant(): boolean {
    return this.variant === 'container' || this.variant === 'stacked';
  }

  override render(): TemplateResult {
    const expanded = this._isExpanded;
    const isContainer = this._isContainerVariant();

    const rootClasses = {
      'root': true,
    };

    const wrapperClasses = {
      'wrapper': true,
      [`wrapper-${this.variant}`]: true,
      'wrapper-expanded': expanded,
      'click-target': true,
    };

    const iconClasses = {
      'icon': true,
      'expanded': expanded,
    };

    const iconContainerClasses = {
      'icon-container': true,
      'icon-container-container': isContainer,
    };

    const buttonClasses = {
      'expand-button': true,
      'focusable': true,
      [isContainer ? 'header-container-button' : 'header-button']: true,
    };

    const contentClasses = {
      'content': true,
      [`content-${this.variant}`]: true,
      'content-expanded': expanded,
    };

    const headerActionsWrapperClasses = {
      'header-actions-wrapper': true,
    };

    return html`
      <div class=${classMap(rootClasses)}>
        <div class=${classMap(headerActionsWrapperClasses)}>
          <div
            class=${classMap(wrapperClasses)}
            role="button"
            tabindex="0"
            aria-expanded=${expanded ? 'true' : 'false'}
            aria-label=${this.headerAriaLabel ?? this.headerText}
            @click=${this._onHeaderClick}
            @keydown=${this._onHeaderKeyDown}
          >
            <div class=${classMap(buttonClasses)}>
              <div class=${classMap(iconContainerClasses)}>
                <span class=${classMap(iconClasses)}>
                  <cs-icon name="caret-down-filled"></cs-icon>
                </span>
              </div>
            </div>
            <div class=${isContainer ? 'header-container' : 'header-text-wrapper'}>
              ${this._renderHeading()}
              ${this.headerDescription
                ? html`<span class="header-description">${this.headerDescription}</span>`
                : nothing}
            </div>
          </div>
          <slot name="headerActions"></slot>
        </div>
        <div class=${classMap(contentClasses)}>
          <slot></slot>
        </div>
      </div>
    `;
  }
}
