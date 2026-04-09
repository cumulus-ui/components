import { css, html, nothing, type TemplateResult } from 'lit';
import { property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { CsBaseElement } from '../internal/base-element.js';
import { fireNonCancelableEvent } from '../internal/events.js';
import { componentStyles, sharedStyles } from './styles.js';
import type { TabsProps } from './interfaces.js';

const hostStyles = css`:host { display: block; }`;

export class CsTabsInternal extends CsBaseElement {
  static override styles = [sharedStyles, componentStyles, hostStyles];

  @property({ attribute: false })
  tabs: ReadonlyArray<TabsProps.Tab> = [];

  @property({ type: String, reflect: true })
  activeTabId = '';

  @property({ type: String, reflect: true })
  variant: TabsProps.Variant = 'default';

  @property({ type: Boolean, reflect: true })
  disableContentPaddings = false;

  @property({ type: Boolean, reflect: true })
  fitHeight = false;

  @property({ type: String })
  override ariaLabel: string | null = null;

  @property({ type: String })
  ariaLabelledby: string | null = null;

  @state()
  private _internalActiveTabId = '';

  private get _resolvedActiveTabId(): string {
    if (this.activeTabId) return this.activeTabId;
    if (this._internalActiveTabId) return this._internalActiveTabId;
    const first = this.tabs.find(t => !t.disabled);
    return first?.id ?? '';
  }

  private _selectTab(tab: TabsProps.Tab): void {
    if (tab.disabled) return;
    const detail: TabsProps.ChangeDetail = {
      activeTabId: tab.id,
      activeTabHref: tab.href,
    };
    this._internalActiveTabId = tab.id;
    fireNonCancelableEvent(this, 'change', detail);
  }

  private _onTabKeyDown = (e: KeyboardEvent): void => {
    const enabledTabs = this.tabs.filter(t => !t.disabled);
    if (enabledTabs.length === 0) return;

    const currentId = this._resolvedActiveTabId;
    const currentIndex = enabledTabs.findIndex(t => t.id === currentId);

    let nextIndex = -1;

    if (e.key === 'ArrowRight') {
      e.preventDefault();
      nextIndex = currentIndex < enabledTabs.length - 1 ? currentIndex + 1 : 0;
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      nextIndex = currentIndex > 0 ? currentIndex - 1 : enabledTabs.length - 1;
    } else if (e.key === 'Home') {
      e.preventDefault();
      nextIndex = 0;
    } else if (e.key === 'End') {
      e.preventDefault();
      nextIndex = enabledTabs.length - 1;
    }

    if (nextIndex >= 0) {
      const nextTab = enabledTabs[nextIndex];
      this._selectTab(nextTab);
      const allButtons = this.shadowRoot?.querySelectorAll<HTMLElement>('[role="tab"]');
      allButtons?.forEach(btn => {
        if (btn.getAttribute('data-tab-id') === nextTab.id) {
          btn.focus();
        }
      });
    }
  };

  private _renderTab(tab: TabsProps.Tab): TemplateResult {
    const isActive = tab.id === this._resolvedActiveTabId;
    const isDisabled = !!tab.disabled;

    const headerContainerClasses = {
      'tabs-tab-header-container': true,
      'tabs-tab-active': isActive,
      'tabs-tab-disabled': isDisabled,
      'refresh': true,
    };

    const linkClasses = {
      'tabs-tab-link': true,
      'tabs-tab-active': isActive,
      'tabs-tab-disabled': isDisabled,
      'refresh': true,
    };

    return html`
      <li class=${classMap({ 'tabs-tab': true, 'tabs-tab-focusable': true })} role="presentation">
        <div class=${classMap(headerContainerClasses)}>
          <a
            role="tab"
            class=${classMap(linkClasses)}
            aria-selected=${isActive ? 'true' : 'false'}
            aria-disabled=${isDisabled ? 'true' : 'false'}
            aria-controls=${`panel-${tab.id}`}
            tabindex=${isActive && !isDisabled ? 0 : -1}
            data-tab-id=${tab.id}
            href=${tab.href ?? 'javascript:void(0)'}
            @click=${(e: MouseEvent) => {
              if (!tab.href || !(e.ctrlKey || e.metaKey || e.shiftKey || e.altKey)) {
                e.preventDefault();
              }
              if (!isDisabled) this._selectTab(tab);
            }}
            @keydown=${this._onTabKeyDown}
          >
            <span class="tabs-tab-label">${tab.label}</span>
          </a>
        </div>
      </li>
    `;
  }

  override render(): TemplateResult {
    const activeId = this._resolvedActiveTabId;

    const rootClasses = {
      'root': true,
      'tabs': true,
      'fit-height': this.fitHeight,
    };

    const headerClasses = {
      'tabs-header': true,
      'tabs-header-with-divider': true,
    };

    const contentWrapperClasses = {
      'tabs-content-wrapper': true,
      'with-paddings': this.variant === 'default' && !this.disableContentPaddings,
    };

    const containerContentWrapperClasses = {
      'tabs-container-content-wrapper': true,
      'with-paddings': (this.variant === 'container' || this.variant === 'stacked') && !this.disableContentPaddings,
    };

    const isContainerVariant = this.variant === 'container' || this.variant === 'stacked';

    return html`
      <div class=${classMap(rootClasses)}>
        <div class=${classMap(headerClasses)}>
          <div class="tab-header-scroll-container">
            <ul class="tabs-header-list" role="tablist"
              aria-label=${ifDefined(this.ariaLabel || undefined)}
              aria-labelledby=${ifDefined(!this.ariaLabel && this.ariaLabelledby ? this.ariaLabelledby : undefined)}>
              ${this.tabs.map(tab => this._renderTab(tab))}
            </ul>
          </div>
        </div>
        <div class=${classMap(contentWrapperClasses)}>
          ${isContainerVariant
            ? html`<div class=${classMap(containerContentWrapperClasses)}>
                ${this.tabs.map(tab => html`
                  <div
                    role="tabpanel"
                    id=${`panel-${tab.id}`}
                    class=${classMap({
                      'tabs-content': true,
                      'tabs-content-active': tab.id === activeId,
                    })}
                    aria-labelledby=${tab.id}
                    tabindex=${tab.id === activeId ? 0 : -1}
                  >
                    <slot name=${tab.id}></slot>
                    ${tab.content != null && tab.id === activeId
                      ? html`<span>${tab.content}</span>`
                      : nothing}
                  </div>
                `)}
              </div>`
            : this.tabs.map(tab => html`
                <div
                  role="tabpanel"
                  id=${`panel-${tab.id}`}
                  class=${classMap({
                    'tabs-content': true,
                    'tabs-content-active': tab.id === activeId,
                  })}
                  aria-labelledby=${tab.id}
                  tabindex=${tab.id === activeId ? 0 : -1}
                >
                  <slot name=${tab.id}></slot>
                  ${tab.content != null && tab.id === activeId
                    ? html`<span>${tab.content}</span>`
                    : nothing}
                </div>
              `)
          }
        </div>
      </div>
    `;
  }
}
