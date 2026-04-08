import '@cumulus-ui/styles/index.css';
import { LitElement, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { parseHash, applyMode, type Route } from './router.js';

type PageModule = { tagName: string };
type PageLoader = () => Promise<PageModule>;

// Add new demo pages here — esbuild needs static import paths for code splitting
const pageLoaders: Record<string, PageLoader> = {
  '_test/permutations': () => import('./pages/_test/permutations.js') as Promise<PageModule>,
  'button/permutations': () => import('./pages/button/permutations.js') as Promise<PageModule>,
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
  'alert/permutations': () => import('./pages/alert/permutations.js') as Promise<PageModule>,
  'tooltip/permutations': () => import('./pages/tooltip/permutations.js') as Promise<PageModule>,
  'popover/permutations': () => import('./pages/popover/permutations.js') as Promise<PageModule>,
  'error-boundary/permutations': () => import('./pages/error-boundary/permutations.js') as Promise<PageModule>,
  'link/permutations': () => import('./pages/link/permutations.js') as Promise<PageModule>,
  'status-indicator/permutations': () => import('./pages/status-indicator/permutations.js') as Promise<PageModule>,
  'toggle/permutations': () => import('./pages/toggle/permutations.js') as Promise<PageModule>,
  'pagination/permutations': () => import('./pages/pagination/permutations.js') as Promise<PageModule>,
  'column-layout/permutations': () => import('./pages/column-layout/permutations.js') as Promise<PageModule>,
  'content-layout/permutations': () => import('./pages/content-layout/permutations.js') as Promise<PageModule>,
  'form-field/permutations': () => import('./pages/form-field/permutations.js') as Promise<PageModule>,
  'token/permutations': () => import('./pages/token/permutations.js') as Promise<PageModule>,
  'token-group/permutations': () => import('./pages/token-group/permutations.js') as Promise<PageModule>,
  'container/permutations': () => import('./pages/container/permutations.js') as Promise<PageModule>,
  'header/permutations': () => import('./pages/header/permutations.js') as Promise<PageModule>,
  'flashbar/permutations': () => import('./pages/flashbar/permutations.js') as Promise<PageModule>,
  'toggle-button/permutations': () => import('./pages/toggle-button/permutations.js') as Promise<PageModule>,
  'slider/permutations': () => import('./pages/slider/permutations.js') as Promise<PageModule>,
  'prompt-input/permutations': () => import('./pages/prompt-input/permutations.js') as Promise<PageModule>,
  'copy-to-clipboard/permutations': () => import('./pages/copy-to-clipboard/permutations.js') as Promise<PageModule>,
  'file-input/permutations': () => import('./pages/file-input/permutations.js') as Promise<PageModule>,
  'tabs/permutations': () => import('./pages/tabs/permutations.js') as Promise<PageModule>,
  'expandable-section/permutations': () => import('./pages/expandable-section/permutations.js') as Promise<PageModule>,
  'select/permutations': () => import('./pages/select/permutations.js') as Promise<PageModule>,
  'multiselect/permutations': () => import('./pages/multiselect/permutations.js') as Promise<PageModule>,
  'button-dropdown/permutations': () => import('./pages/button-dropdown/permutations.js') as Promise<PageModule>,
  'button-group/permutations': () => import('./pages/button-group/permutations.js') as Promise<PageModule>,
  'breadcrumb-group/permutations': () => import('./pages/breadcrumb-group/permutations.js') as Promise<PageModule>,
  'autosuggest/permutations': () => import('./pages/autosuggest/permutations.js') as Promise<PageModule>,
  'segmented-control/permutations': () => import('./pages/segmented-control/permutations.js') as Promise<PageModule>,
  'cards/permutations': () => import('./pages/cards/permutations.js') as Promise<PageModule>,
  'collection-preferences/permutations': () => import('./pages/collection-preferences/permutations.js') as Promise<PageModule>,
  'progress-bar/permutations': () => import('./pages/progress-bar/permutations.js') as Promise<PageModule>,
  'steps/permutations': () => import('./pages/steps/permutations.js') as Promise<PageModule>,
  'key-value-pairs/permutations': () => import('./pages/key-value-pairs/permutations.js') as Promise<PageModule>,
  'property-filter/permutations': () => import('./pages/property-filter/permutations.js') as Promise<PageModule>,
  'table/permutations': () => import('./pages/table/permutations.js') as Promise<PageModule>,
  'form/permutations': () => import('./pages/form/permutations.js') as Promise<PageModule>,
  'modal/permutations': () => import('./pages/modal/permutations.js') as Promise<PageModule>,
  'file-upload/permutations': () => import('./pages/file-upload/permutations.js') as Promise<PageModule>,
  'calendar/permutations': () => import('./pages/calendar/permutations.js') as Promise<PageModule>,
  'date-input/permutations': () => import('./pages/date-input/permutations.js') as Promise<PageModule>,
  'date-picker/permutations': () => import('./pages/date-picker/permutations.js') as Promise<PageModule>,
  'date-range-picker/permutations': () => import('./pages/date-range-picker/permutations.js') as Promise<PageModule>,
  'attribute-editor/permutations': () => import('./pages/attribute-editor/permutations.js') as Promise<PageModule>,
  'tag-editor/permutations': () => import('./pages/tag-editor/permutations.js') as Promise<PageModule>,
  'wizard/permutations': () => import('./pages/wizard/permutations.js') as Promise<PageModule>,
  'code-editor/permutations': () => import('./pages/code-editor/permutations.js') as Promise<PageModule>,
  'top-navigation/permutations': () => import('./pages/top-navigation/permutations.js') as Promise<PageModule>,
  'side-navigation/permutations': () => import('./pages/side-navigation/permutations.js') as Promise<PageModule>,
  'help-panel/permutations': () => import('./pages/help-panel/permutations.js') as Promise<PageModule>,
  'drawer/permutations': () => import('./pages/drawer/permutations.js') as Promise<PageModule>,
  'split-panel/permutations': () => import('./pages/split-panel/permutations.js') as Promise<PageModule>,
  'annotation-context/permutations': () => import('./pages/annotation-context/permutations.js') as Promise<PageModule>,
  'hotspot/permutations': () => import('./pages/hotspot/permutations.js') as Promise<PageModule>,
  'tutorial-panel/permutations': () => import('./pages/tutorial-panel/permutations.js') as Promise<PageModule>,
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
