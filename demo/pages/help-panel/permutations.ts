import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../../../src/help-panel/index.js';

@customElement('help-panel-permutations-page')
export class HelpPanelPermutationsPage extends LitElement {
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
    section > h3 {
      margin-top: 0; margin-bottom: 1em;
      font-size: 14px; line-height: 1.15;
      color: #687078; text-transform: uppercase; letter-spacing: 0.5px;
    }
    cs-help-panel {
      max-width: 340px;
      border: 1px solid #e9ebed;
    }
  `;

  override render() {
    return html`
      <h2>HelpPanel — Permutations</h2>

      <section>
        <h3>Default</h3>
        <cs-help-panel>
          <h3 slot="header">Instance types</h3>
          <p>When you launch an instance, the instance type determines the hardware.</p>
          <h4>General purpose</h4>
          <p>General purpose instances provide a balance of compute, memory, and networking.</p>
          <ul slot="footer">
            <li><a href="https://docs.example.com">Documentation</a></li>
          </ul>
        </cs-help-panel>
      </section>

      <section>
        <h3>Loading State</h3>
        <cs-help-panel loading loading-text="Loading help content..."></cs-help-panel>
      </section>

      <section>
        <h3>Minimal Content</h3>
        <cs-help-panel>
          <h3 slot="header">Help</h3>
          <p>Select a resource to see its help content.</p>
        </cs-help-panel>
      </section>
    `;
  }
}

export const tagName = 'help-panel-permutations-page';
