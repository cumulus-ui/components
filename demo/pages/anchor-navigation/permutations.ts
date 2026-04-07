import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import '../../../src/anchor-navigation/index.js';
import type { AnchorNavigationProps } from '../../../src/anchor-navigation/index.js';

const ANCHORS: AnchorNavigationProps.Anchor[] = [
  { text: 'Overview', href: '#overview', level: 1 },
  { text: 'Getting Started', href: '#getting-started', level: 1 },
  { text: 'Installation', href: '#installation', level: 2 },
  { text: 'Configuration', href: '#configuration', level: 2 },
  { text: 'Advanced Usage', href: '#advanced-usage', level: 1, info: 'New' },
  { text: 'API Reference', href: '#api-reference', level: 1 },
];

@customElement('anchor-navigation-permutations-page')
export class AnchorNavigationPermutationsPage extends LitElement {
  static override styles = css`
    :host {
      display: block;
      padding: 24px;
      font-family: system-ui, sans-serif;
      line-height: 1.15;
    }
    h2 {
      margin-top: 0;
      margin-bottom: 0.83em;
      line-height: 1.15;
    }
    section {
      margin-bottom: 24px;
      padding: 16px;
      border: 1px solid #e9ebed;
      border-radius: 8px;
    }
    section h3 {
      margin-top: 0;
      margin-bottom: 1em;
      font-size: 14px;
      line-height: 1.15;
      color: #687078;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .layout {
      display: grid;
      grid-template-columns: 200px 1fr;
      gap: 24px;
    }
    .content-area {
      max-height: 400px;
      overflow-y: auto;
      scroll-behavior: smooth;
    }
    .content-area > div {
      padding: 24px 0;
      min-height: 150px;
      border-bottom: 1px solid #e9ebed;
    }
  `;

  @state()
  private _activeEvent = '';

  private _onFollow(e: CustomEvent<AnchorNavigationProps.Anchor>): void {
    this._activeEvent = `follow: ${e.detail.text}`;
  }

  override render() {
    return html`
      <h2>AnchorNavigation — Permutations</h2>

      <section>
        <h3 id="scroll-spy-heading">Default with Scroll Spy</h3>
        <div class="layout">
          <cs-anchor-navigation
            .anchors=${ANCHORS}
            ariaLabelledby="scroll-spy-heading"
            @follow=${this._onFollow}
          ></cs-anchor-navigation>
          <div class="content-area" tabindex="0" role="region" aria-label="Documentation content">
            <div id="overview"><h4>Overview</h4><p>Introduction to the component library.</p></div>
            <div id="getting-started"><h4>Getting Started</h4><p>Quick start guide.</p></div>
            <div id="installation"><h4>Installation</h4><p>Install via npm.</p></div>
            <div id="configuration"><h4>Configuration</h4><p>Configure your project.</p></div>
            <div id="advanced-usage"><h4>Advanced Usage</h4><p>Advanced patterns and techniques.</p></div>
            <div id="api-reference"><h4>API Reference</h4><p>Full API documentation.</p></div>
          </div>
        </div>
        ${this._activeEvent
          ? html`<div style="margin-top:8px; font-size:13px; color:#687078">Event: ${this._activeEvent}</div>`
          : ''}
      </section>

      <section>
        <h3 id="controlled-heading">Controlled (activeHref)</h3>
        <cs-anchor-navigation
          .anchors=${ANCHORS}
          active-href="#configuration"
          aria-labelledby="controlled-heading"
        ></cs-anchor-navigation>
      </section>
    `;
  }
}

export const tagName = 'anchor-navigation-permutations-page';
