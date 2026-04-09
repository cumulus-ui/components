import { html, nothing, type TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { CsBaseElement } from '../internal/base-element.js';
import { fireNonCancelableEvent } from '../internal/events.js';
import { componentStyles, sharedStyles } from './styles.js';
import type { LinkProps } from './interfaces.js';

export class CsLinkInternal extends CsBaseElement {
  static override styles = [sharedStyles, componentStyles];

  @property({ type: String })
  href = '';

  @property({ type: String, reflect: true })
  variant: LinkProps.Variant = 'secondary';

  @property({ type: Boolean, reflect: true })
  external = false;

  @property({ type: String })
  target?: string;

  @property({ type: String })
  fontSize: LinkProps.FontSize = 'body-m';

  @property({ type: String })
  color?: LinkProps.Color;

  @property({ type: String })
  override ariaLabel: string | null = null;

  @property({ type: String })
  rel?: string;

  private _resolvedTarget(): string | undefined {
    if (this.target) return this.target;
    if (this.external && this.href) return '_blank';
    return undefined;
  }

  private _resolvedRel(): string | undefined {
    if (this.rel) return this.rel;
    const target = this._resolvedTarget();
    if (target === '_blank') return 'noopener noreferrer';
    return undefined;
  }

  override connectedCallback(): void {
    super.connectedCallback();
    this.addEventListener('click', this._onHostClick);
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.removeEventListener('click', this._onHostClick);
  }

  private _onHostClick = (e: MouseEvent): void => {
    if (e instanceof CustomEvent) return;

    const detail: LinkProps.FollowDetail = {
      href: this.href || undefined,
      external: this.external,
      target: this._resolvedTarget(),
    };
    fireNonCancelableEvent(this, 'follow', detail);
  };

  focus(options?: FocusOptions): void {
    const inner = this.shadowRoot?.querySelector<HTMLElement>('.link');
    inner?.focus(options);
  }

  override render(): TemplateResult {
    const isLink = !!this.href;

    const linkClasses = {
      'link': true,
      [`variant-${this.variant}`]: true,
      'button': !isLink,
      [`font-size-${this.fontSize}`]: true,
      'color-inverted': this.color === 'inverted',
    };

    const externalIcon = this.external
      ? html`<span class="icon-wrapper"><span class="icon"><cs-icon name="external" size="inherit"></cs-icon></span></span>`
      : nothing;

    if (isLink) {
      return html`<a
          class=${classMap(linkClasses)}
          href=${this.href}
          target=${ifDefined(this._resolvedTarget())}
          rel=${ifDefined(this._resolvedRel())}
          aria-label=${ifDefined(this.ariaLabel || undefined)}
        ><slot></slot>${externalIcon}</a>`;
    }

    return html`<button
        class=${classMap(linkClasses)}
        type="button"
        aria-label=${ifDefined(this.ariaLabel || undefined)}
      ><slot></slot>${externalIcon}</button>`;
  }
}
