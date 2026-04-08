import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../../../src/breadcrumb-group/index.js';

@customElement('breadcrumb-group-permutations-page')
export class BreadcrumbGroupPermutationsPage extends LitElement {
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
  `;

  private _simpleItems = [
    { text: 'Home', href: '/' },
    { text: 'Services', href: '/services' },
    { text: 'EC2', href: '/services/ec2' },
  ];

  private _deepItems = [
    { text: 'Home', href: '/' },
    { text: 'Services', href: '/services' },
    { text: 'EC2', href: '/services/ec2' },
    { text: 'Instances', href: '/services/ec2/instances' },
    { text: 'i-0123456789abcdef0', href: '/services/ec2/instances/i-0123456789abcdef0' },
  ];

  private _singleItem = [
    { text: 'Home', href: '/' },
  ];

  override render() {
    return html`
      <h2>BreadcrumbGroup — Permutations</h2>

      <section>
        <h3>Simple Breadcrumbs</h3>
        <cs-breadcrumb-group .items=${this._simpleItems}></cs-breadcrumb-group>
      </section>

      <section>
        <h3>Deep Hierarchy</h3>
        <cs-breadcrumb-group .items=${this._deepItems}></cs-breadcrumb-group>
      </section>

      <section>
        <h3>Single Item</h3>
        <cs-breadcrumb-group .items=${this._singleItem}></cs-breadcrumb-group>
      </section>

      <section>
        <h3>Custom Aria Label</h3>
        <cs-breadcrumb-group .items=${this._simpleItems} aria-label="Navigation path"></cs-breadcrumb-group>
      </section>
    `;
  }
}

export const tagName = 'breadcrumb-group-permutations-page';
