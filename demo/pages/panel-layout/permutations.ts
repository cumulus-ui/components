import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../../../src/panel-layout/index.js';

@customElement('panel-layout-permutations-page')
export class PanelLayoutPermutationsPage extends LitElement {
  static override styles = css`
    :host {
      display: block;
      padding: 24px;
      font-family: system-ui, sans-serif;
      line-height: 1.15;
    }
    h2 { margin-top: 0; margin-bottom: 0.83em; line-height: 1.15; }
    section {
      margin-bottom: 24px;
      padding: 16px;
      border: 1px solid #e9ebed;
      border-radius: 8px;
    }
    section h3 {
      margin-top: 0; margin-bottom: 1em;
      font-size: 14px; line-height: 1.15;
      color: #687078; text-transform: uppercase; letter-spacing: 0.5px;
    }
    .layout-container {
      height: 200px;
      border: 1px solid #ccc;
    }
    .panel-content, .main-content {
      padding: 16px;
    }
    .panel-content { background: #f0fbff; }
    .main-content { background: #fafafa; }
  `;

  override render() {
    return html`
      <h2>Panel Layout — Permutations</h2>

      <section>
        <h3>Side-end (default)</h3>
        <div class="layout-container">
          <cs-panel-layout .defaultPanelSize=${200}>
            <div slot="main" class="main-content">Main content area</div>
            <div slot="panel" class="panel-content">Panel content</div>
          </cs-panel-layout>
        </div>
      </section>

      <section>
        <h3>Side-start</h3>
        <div class="layout-container">
          <cs-panel-layout panel-position="side-start" .defaultPanelSize=${200}>
            <div slot="main" class="main-content">Main content area</div>
            <div slot="panel" class="panel-content">Panel on the left</div>
          </cs-panel-layout>
        </div>
      </section>

      <section>
        <h3>Resizable</h3>
        <div class="layout-container">
          <cs-panel-layout resizable .defaultPanelSize=${250} .minPanelSize=${150} .maxPanelSize=${400}>
            <div slot="main" class="main-content">Main content — drag the handle to resize</div>
            <div slot="panel" class="panel-content">Resizable panel</div>
          </cs-panel-layout>
        </div>
      </section>

      <section>
        <h3>Panel-only display</h3>
        <div class="layout-container">
          <cs-panel-layout display="panel-only">
            <div slot="main" class="main-content">Hidden main</div>
            <div slot="panel" class="panel-content">Only panel is visible</div>
          </cs-panel-layout>
        </div>
      </section>

      <section>
        <h3>Main-only display</h3>
        <div class="layout-container">
          <cs-panel-layout display="main-only">
            <div slot="main" class="main-content">Only main content is visible</div>
            <div slot="panel" class="panel-content">Hidden panel</div>
          </cs-panel-layout>
        </div>
      </section>
    `;
  }
}

export const tagName = 'panel-layout-permutations-page';
