import { css, html, nothing, type TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { CsBaseElement } from '../internal/base-element.js';
import { fireNonCancelableEvent } from '../internal/events.js';
import { componentStyles, sharedStyles } from './styles.js';
import type { TopNavigationProps } from './interfaces.js';
import '../icon/index.js';
import '../button-dropdown/index.js';

const hostStyles = css`:host { display: block; }`;

export class CsTopNavigationInternal extends CsBaseElement {
  static override styles = [sharedStyles, componentStyles, hostStyles];

  @property({ type: Object })
  identity!: TopNavigationProps.Identity;

  @property({ type: Array })
  utilities: ReadonlyArray<TopNavigationProps.Utility> = [];

  @property({ type: Object })
  i18nStrings: TopNavigationProps.I18nStrings = {};

  private _onIdentityClick(e: MouseEvent): void {
    const isModified = e.button !== 0 || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey;
    if (isModified) return;

    fireNonCancelableEvent(this as unknown as HTMLElement, 'identityClick', {
      href: this.identity?.href,
    });
  }

  private _onUtilityButtonClick(utility: TopNavigationProps.ButtonUtility, _e: MouseEvent): void {
    fireNonCancelableEvent(this as unknown as HTMLElement, 'utilityClick', {
      type: utility.type,
      text: utility.text,
      href: utility.href,
    });
  }

  private _renderIdentity(): TemplateResult | typeof nothing {
    if (!this.identity) return nothing;

    const hasLogo = !!this.identity.logo;
    const identityClasses = {
      'identity': true,
      'no-logo': !hasLogo,
    };

    return html`
      <div class=${classMap(identityClasses)}>
        <a
          class="identity-link"
          href=${ifDefined(this.identity.href)}
          @click=${(e: MouseEvent) => this._onIdentityClick(e)}
        >
          ${hasLogo
            ? html`<img class="logo" src=${this.identity.logo!.src} alt=${ifDefined(this.identity.logo!.alt)} />`
            : nothing
          }
          ${this.identity.title
            ? html`<span class="title">${this.identity.title}</span>`
            : nothing
          }
        </a>
      </div>
    `;
  }

  private _renderButtonUtility(utility: TopNavigationProps.ButtonUtility): TemplateResult {
    const isPrimary = utility.variant === 'primary-button';
    const wrapperClasses = {
      'utility-wrapper': true,
      'utility-type-button-link': !isPrimary,
      'utility-type-button-primary-button': isPrimary,
    };

    if (utility.href) {
      return html`
        <div class=${classMap(wrapperClasses)}>
          <a
            class="overflow-menu-control overflow-menu-control-link"
            href=${utility.href}
            target=${ifDefined(utility.target)}
            rel=${ifDefined(utility.rel || (utility.target === '_blank' ? 'noopener noreferrer' : undefined))}
            aria-label=${ifDefined(utility.ariaLabel)}
            @click=${(e: MouseEvent) => this._onUtilityButtonClick(utility, e)}
          >
            ${utility.iconName
              ? html`<span class="utility-link-icon"><cs-icon name=${utility.iconName}></cs-icon></span>`
              : nothing
            }
            ${utility.text ? html`<span>${utility.text}</span>` : nothing}
            ${utility.external
              ? html`<span class="utility-button-external-icon"><cs-icon name="external" size="inherit"></cs-icon></span>`
              : nothing
            }
          </a>
        </div>
      `;
    }

    return html`
      <div class=${classMap(wrapperClasses)}>
        <button
          type="button"
          class="overflow-menu-control"
          aria-label=${ifDefined(utility.ariaLabel)}
          @click=${(e: MouseEvent) => this._onUtilityButtonClick(utility, e)}
        >
          ${utility.iconName
            ? html`<span class="utility-link-icon"><cs-icon name=${utility.iconName}></cs-icon></span>`
            : nothing
          }
          ${utility.text ? html`<span>${utility.text}</span>` : nothing}
        </button>
      </div>
    `;
  }

  private _renderMenuDropdownUtility(utility: TopNavigationProps.MenuDropdownUtility): TemplateResult {
    const wrapperClasses = {
      'utility-wrapper': true,
      'utility-type-menu-dropdown': true,
    };

    return html`
      <div class=${classMap(wrapperClasses)}>
        <cs-button-dropdown
          .items=${utility.items}
          variant="normal"
          aria-label=${ifDefined(utility.ariaLabel)}
        >
          ${utility.iconName
            ? html`<cs-icon name=${utility.iconName}></cs-icon>`
            : nothing
          }
          ${utility.text ?? ''}
        </cs-button-dropdown>
      </div>
    `;
  }

  private _renderUtility(utility: TopNavigationProps.Utility): TemplateResult {
    if (utility.type === 'menu-dropdown') {
      return this._renderMenuDropdownUtility(utility);
    }
    return this._renderButtonUtility(utility);
  }

  override render(): TemplateResult {
    return html`
      <nav class="top-navigation" aria-label=${ifDefined(this.ariaLabel || 'Site')}>
        <div class="padding-box">
          ${this._renderIdentity()}
          <div class="inputs">
            <div class="search">
              <slot name="search"></slot>
            </div>
          </div>
          <div class="utilities">
            ${this.utilities.map(u => this._renderUtility(u))}
          </div>
        </div>
      </nav>
    `;
  }
}
