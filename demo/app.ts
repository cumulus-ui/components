import '@cloudscape-design/global-styles/index.css';
import 'cloudscape-tokens';
import { LitElement, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { parseHash, applyMode, type Route } from './router.js';

type PageModule = { tagName: string };
type PageLoader = () => Promise<PageModule>;

// Add new demo pages here — esbuild needs static import paths for code splitting
const pageLoaders: Record<string, PageLoader> = {
  '_test/permutations': () => import('./pages/_test/permutations.js') as Promise<PageModule>,
  'checkbox/permutations': () => import('./pages/checkbox/permutations.js') as Promise<PageModule>,
  'checkbox/form-submit': () => import('./pages/checkbox/form-submit.js') as Promise<PageModule>,
  'spinner/permutations': () => import('./pages/spinner/permutations.js') as Promise<PageModule>,
  'badge/permutations': () => import('./pages/badge/permutations.js') as Promise<PageModule>,
  'live-region/permutations': () => import('./pages/live-region/permutations.js') as Promise<PageModule>,
  'icon/permutations': () => import('./pages/icon/permutations.js') as Promise<PageModule>,
  'radio-group/permutations': () => import('./pages/radio-group/permutations.js') as Promise<PageModule>,
  'radio-group/form-submit': () => import('./pages/radio-group/form-submit.js') as Promise<PageModule>,
  'tiles/permutations': () => import('./pages/tiles/permutations.js') as Promise<PageModule>,
  'tiles/form-submit': () => import('./pages/tiles/form-submit.js') as Promise<PageModule>,
  'list/permutations': () => import('./pages/list/permutations.js') as Promise<PageModule>,
  'tree-view/permutations': () => import('./pages/tree-view/permutations.js') as Promise<PageModule>,
  'box/permutations': () => import('./pages/box/permutations.js') as Promise<PageModule>,
  'grid/permutations': () => import('./pages/grid/permutations.js') as Promise<PageModule>,
  'space-between/permutations': () => import('./pages/space-between/permutations.js') as Promise<PageModule>,
  'text-content/permutations': () => import('./pages/text-content/permutations.js') as Promise<PageModule>,
  'file-dropzone/permutations': () => import('./pages/file-dropzone/permutations.js') as Promise<PageModule>,
  'anchor-navigation/permutations': () => import('./pages/anchor-navigation/permutations.js') as Promise<PageModule>,
};

@customElement('demo-app')
export class DemoApp extends LitElement {
  @state() private _route: Route | null = null;
  @state() private _error = '';
  @state() private _pageElement: HTMLElement | null = null;

  // Light DOM: Playwright needs to query through demo page elements
  override createRenderRoot(): this {
    return this;
  }

  override connectedCallback(): void {
    super.connectedCallback();
    window.addEventListener('hashchange', this._onHashChange);
    this._onHashChange();
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    window.removeEventListener('hashchange', this._onHashChange);
  }

  private _onHashChange = (): void => {
    const route = parseHash(window.location.hash);
    this._route = route;
    this._error = '';
    this._pageElement = null;

    if (!route) {
      applyMode('light');
      return;
    }

    applyMode(route.mode);
    this._loadPage(route.component, route.variant);
  };

  private async _loadPage(component: string, variant: string): Promise<void> {
    const key = `${component}/${variant}`;
    const loader = pageLoaders[key];
    if (!loader) {
      this._error = `Page not found: ${key}`;
      return;
    }
    try {
      const mod = await loader();
      this._pageElement = document.createElement(mod.tagName);
    } catch (err) {
      this._error = `Failed to load: ${key}`;
      console.error(err);
    }
  }

  override updated(): void {
    const slot = this.querySelector('#page-slot');
    if (slot) {
      slot.innerHTML = '';
      if (this._pageElement) {
        slot.appendChild(this._pageElement);
      }
    }
  }

  override render(): unknown {
    if (!this._route) {
      const components = Object.keys(pageLoaders)
        .filter(k => k.endsWith('/permutations'))
        .map(k => k.replace('/permutations', ''))
        .filter(k => k !== '_test')
        .sort();

      return html`
        <div style="padding:24px">
          <h1>Cumulus UI Demo</h1>
          <p>Navigate to a component page using the hash route:</p>
          <code>#/light/checkbox</code>
          <ul>
            ${components.map(name => html`
              <li>
                <a href=${`#/light/${name}`}>${name}</a>
                ${' | '}
                <a href=${`#/dark/${name}`}>${name} (dark)</a>
              </li>
            `)}
          </ul>
        </div>
      `;
    }

    if (this._error) {
      return html`<p style="color:red">${this._error}</p>`;
    }

    return html`<div id="page-slot"></div>`;
  }
}
