import { css, html, nothing, type PropertyValues, type TemplateResult } from 'lit';
import { CsBaseElement } from '../internal/base-element.js';
import { property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { styleMap } from 'lit/directives/style-map.js';
import { fireNonCancelableEvent } from '../internal/events.js';
import { sharedStyles, componentStyles } from './styles.js';
import type { AnchorNavigationProps } from './interfaces.js';

const hostStyles = css`:host { display: block; }`;

export class CsAnchorNavigationInternal extends CsBaseElement {
  static override styles = [sharedStyles, componentStyles, hostStyles];

  @property({ attribute: false })
  anchors: AnchorNavigationProps.Anchor[] = [];

  @property({ type: String })
  activeHref?: string;

  @property({ type: Number })
  scrollSpyOffset = 0;

  @property({ type: String })
  ariaLabelledby?: string;

  @state()
  private _observedHref = '';

  private _observer: IntersectionObserver | null = null;
  private _sectionMap = new Map<string, IntersectionObserverEntry>();

  private get _isControlled(): boolean {
    return this.activeHref !== undefined;
  }

  private get _currentHref(): string {
    return this._isControlled ? (this.activeHref ?? '') : this._observedHref;
  }

  override connectedCallback(): void {
    super.connectedCallback();
    if (!this._isControlled) {
      this._setupScrollSpy();
    }
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this._teardownScrollSpy();
  }

  override willUpdate(changed: PropertyValues): void {
    super.willUpdate(changed);

    if (changed.has('activeHref')) {
      if (this._isControlled) {
        this._teardownScrollSpy();
      } else {
        this._setupScrollSpy();
      }
    }

    if (changed.has('anchors') && !this._isControlled) {
      this._teardownScrollSpy();
      this._setupScrollSpy();
    }
  }

  private _setupScrollSpy(): void {
    this._teardownScrollSpy();

    const topMargin = this.scrollSpyOffset;
    this._observer = new IntersectionObserver(
      (entries) => this._handleIntersection(entries),
      {
        rootMargin: `-${topMargin}px 0px 0px 0px`,
        threshold: [0, 0.1, 0.5, 1],
      }
    );

    for (const anchor of this.anchors) {
      const id = anchor.href.replace(/^#/, '');
      const target = document.getElementById(id);
      if (target) {
        this._observer.observe(target);
      }
    }
  }

  private _handleIntersection(entries: IntersectionObserverEntry[]): void {
    for (const entry of entries) {
      this._sectionMap.set(entry.target.id, entry);
    }

    let topMostId = '';
    let topMostY = Infinity;

    for (const [id, entry] of this._sectionMap) {
      if (entry.isIntersecting && entry.boundingClientRect.top < topMostY) {
        topMostY = entry.boundingClientRect.top;
        topMostId = id;
      }
    }

    if (topMostId && `#${topMostId}` !== this._observedHref) {
      this._observedHref = `#${topMostId}`;
      const anchor = this.anchors.find((a) => a.href === this._observedHref);
      if (anchor) {
        fireNonCancelableEvent(this, 'activeHrefChange', anchor);
      }
    }
  }

  private _teardownScrollSpy(): void {
    this._observer?.disconnect();
    this._observer = null;
    this._sectionMap.clear();
  }

  private _onAnchorClick(_e: MouseEvent, anchor: AnchorNavigationProps.Anchor): void {
    fireNonCancelableEvent(this, 'follow', anchor);
  }

  private _buildTree(anchors: AnchorNavigationProps.Anchor[]): { anchor: AnchorNavigationProps.Anchor; children: AnchorNavigationProps.Anchor[] }[] {
    const groups: { anchor: AnchorNavigationProps.Anchor; children: AnchorNavigationProps.Anchor[] }[] = [];

    for (const anchor of anchors) {
      if (anchor.level <= 1) {
        groups.push({ anchor, children: [] });
      } else if (groups.length > 0) {
        groups[groups.length - 1].children.push(anchor);
      }
    }

    return groups;
  }

  private _renderAnchorLink(anchor: AnchorNavigationProps.Anchor): TemplateResult {
    const isActive = this._currentHref === anchor.href;
    const indent = 18 + Math.max(0, anchor.level - 1) * 16;

    return html`
      <li class=${classMap({
        'anchor-item': true,
        'anchor-item--active': isActive,
      })}>
        <a
          class=${classMap({
            'anchor-link': true,
            'anchor-link--active': isActive,
          })}
          href=${anchor.href}
          aria-current=${ifDefined(isActive ? 'location' : undefined)}
          @click=${(e: MouseEvent) => this._onAnchorClick(e, anchor)}
        >
          <span class="anchor-link-text" style=${styleMap({ 'padding-inline-start': indent + 'px' })}>${anchor.text}</span>
          ${anchor.info
            ? html`<span class="anchor-link-info">${anchor.info}</span>`
            : nothing}
        </a>
      </li>
    `;
  }

  override render() {
    const groups = this._buildTree(this.anchors);

    return html`
      <nav
        class="root"
        aria-labelledby=${ifDefined(this.ariaLabelledby)}
      >
        <ol class="anchor-list" role="list">
          ${groups.map(({ anchor, children }) => {
            const isActive = this._currentHref === anchor.href;

            if (children.length === 0) {
              return this._renderAnchorLink(anchor);
            }

            return html`
              <li class=${classMap({
                'anchor-item': true,
                'anchor-item--active': isActive,
              })}>
                <a
                  class=${classMap({
                    'anchor-link': true,
                    'anchor-link--active': isActive,
                  })}
                  href=${anchor.href}
                  aria-current=${ifDefined(isActive ? 'location' : undefined)}
                  @click=${(e: MouseEvent) => this._onAnchorClick(e, anchor)}
                >
                  <span class="anchor-link-text" style="padding-inline-start:18px">${anchor.text}</span>
                  ${anchor.info
                    ? html`<span class="anchor-link-info">${anchor.info}</span>`
                    : nothing}
                </a>
                <ol class="anchor-list">
                  ${children.map(child => this._renderAnchorLink(child))}
                </ol>
              </li>
            `;
          })}
        </ol>
      </nav>
    `;
  }
}
