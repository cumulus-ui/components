import { html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { PermutationsPageBase } from '../base.js';
import '../../../src/panel-layout/index.js';

@customElement('panel-layout-permutations-page')
export class PanelLayoutPermutationsPage extends PermutationsPageBase {
  static override styles = [...PermutationsPageBase.styles, css`
    .layout-container {
      height: 200px;
      border: 1px solid #ccc;
    }
    .panel-content, .main-content {
      padding: 16px;
    }
    .panel-content { background: #f0fbff; }
    .main-content { background: #fafafa; }
    `];

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
