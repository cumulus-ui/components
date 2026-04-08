import '@cumulus-ui/styles/index.css';
import { LitElement, html, nothing } from 'lit';
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
  'icon-provider/permutations': () => import('./pages/icon-provider/permutations.js') as Promise<PageModule>,
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
  'app-layout/permutations': () => import('./pages/app-layout/permutations.js') as Promise<PageModule>,
  'hotspot/permutations': () => import('./pages/hotspot/permutations.js') as Promise<PageModule>,
  'tutorial-panel/permutations': () => import('./pages/tutorial-panel/permutations.js') as Promise<PageModule>,
  'file-token-group/permutations': () => import('./pages/file-token-group/permutations.js') as Promise<PageModule>,
  'item-card/permutations': () => import('./pages/item-card/permutations.js') as Promise<PageModule>,
  'panel-layout/permutations': () => import('./pages/panel-layout/permutations.js') as Promise<PageModule>,
  's3-resource-selector/permutations': () => import('./pages/s3-resource-selector/permutations.js') as Promise<PageModule>,
};

interface ComponentCategory {
  label: string;
  items: string[];
}

const componentCategories: ComponentCategory[] = [
  {
    label: 'Layout',
    items: ['app-layout', 'column-layout', 'content-layout', 'grid', 'panel-layout', 'space-between', 'split-panel'],
  },
  {
    label: 'Navigation',
    items: [
      'breadcrumb-group', 'side-navigation', 'tabs', 'top-navigation',
      'pagination', 'anchor-navigation', 'segmented-control',
    ],
  },
  {
    label: 'Inputs',
    items: [
      'select', 'multiselect', 'autosuggest', 'slider', 'toggle',
      'checkbox', 'radio-group', 'tiles', 'toggle-button', 'file-input',
      'prompt-input', 'date-input', 'date-picker', 'date-range-picker',
      'calendar',
    ],
  },
  {
    label: 'Display',
    items: [
      'badge', 'box', 'icon', 'spinner', 'status-indicator', 'link',
      'token', 'token-group', 'file-token-group', 'progress-bar', 'steps', 'key-value-pairs',
      'table', 'cards', 'item-card', 'flashbar', 'alert', 'list', 'tree-view',
    ],
  },
  {
    label: 'Containers',
    items: [
      'container', 'header', 'expandable-section', 'modal', 'form',
      'form-field', 'wizard', 'popover', 'tooltip',
    ],
  },
  {
    label: 'Actions',
    items: ['button', 'button-dropdown', 'button-group', 'copy-to-clipboard'],
  },
  {
    label: 'Editors',
    items: [
      'attribute-editor', 'tag-editor', 'code-editor', 'file-upload',
      'file-dropzone', 'collection-preferences', 'property-filter',
      's3-resource-selector',
    ],
  },
  {
    label: 'Tutorial',
    items: ['annotation-context', 'hotspot', 'tutorial-panel', 'help-panel'],
  },
  {
    label: 'Utilities',
    items: ['error-boundary', 'live-region', 'text-content', 'drawer'],
  },
];

const availableComponents = new Set(
  Object.keys(pageLoaders)
    .filter(k => k.endsWith('/permutations'))
    .map(k => k.replace('/permutations', ''))
    .filter(k => k !== '_test'),
);

@customElement('demo-app')
export class DemoApp extends LitElement {
  @state() private _route: Route | null = null;
  @state() private _error = '';
  @state() private _pageElement: HTMLElement | null = null;
  @state() private _darkMode = false;
  @state() private _compactMode = false;

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
      this._syncBodyClasses();
      return;
    }

    applyMode(route.mode);
    this._darkMode = route.mode === 'dark';
    this._syncBodyClasses();
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

  private _onDarkToggle = (e: Event): void => {
    this._darkMode = (e.target as HTMLInputElement).checked;
    this._syncBodyClasses();
  };

  private _onCompactToggle = (e: Event): void => {
    this._compactMode = (e.target as HTMLInputElement).checked;
    this._syncBodyClasses();
  };

  private _syncBodyClasses(): void {
    document.body.classList.toggle('awsui-dark-mode', this._darkMode);
    document.body.classList.toggle('awsui-compact-mode', this._compactMode);
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

  private _renderToolbar() {
    return html`
      <div class="demo-toolbar">
        <a class="demo-toolbar__title" href="#/">Cumulus UI</a>
        <div class="demo-toolbar__controls">
          <label class="demo-toolbar__toggle">
            <input
              type="checkbox"
              .checked=${this._darkMode}
              @change=${this._onDarkToggle}
            />
            Dark mode
          </label>
          <label class="demo-toolbar__toggle">
            <input
              type="checkbox"
              .checked=${this._compactMode}
              @change=${this._onCompactToggle}
            />
            Compact
          </label>
        </div>
      </div>
    `;
  }

  private _renderGallery() {
    return html`
      <div class="demo-gallery">
        <div class="demo-gallery__hero">
          <h1 class="demo-gallery__heading">Component Gallery</h1>
          <p class="demo-gallery__subtitle">
            ${availableComponents.size} components &middot;
            Pick a component to view its permutations
          </p>
        </div>

        <div class="demo-gallery__grid">
          ${componentCategories.map(cat => this._renderCategory(cat))}
        </div>
      </div>
    `;
  }

  private _renderCategory(cat: ComponentCategory) {
    const available = cat.items.filter(name => availableComponents.has(name));
    if (available.length === 0) return nothing;

    return html`
      <section class="demo-category">
        <h2 class="demo-category__heading">${cat.label}</h2>
        <div class="demo-category__list">
          ${available.map(name => html`
            <a class="demo-component-card" href=${`#/light/${name}/permutations`}>
              <span class="demo-component-card__name">${name}</span>
            </a>
          `)}
        </div>
      </section>
    `;
  }

  override render(): unknown {
    if (!this._route) {
      return html`
        ${this._renderToolbar()}
        ${this._renderGallery()}
      `;
    }

    if (this._error) {
      return html`
        ${this._renderToolbar()}
        <p style="color:red; padding: 24px;">${this._error}</p>
      `;
    }

    return html`
      ${this._renderToolbar()}
      <div id="page-slot"></div>
    `;
  }
}
