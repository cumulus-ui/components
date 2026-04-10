import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { PermutationsPageBase } from '../base.js';
import '../../../src/breadcrumb-group/index.js';

@customElement('breadcrumb-group-permutations-page')
export class BreadcrumbGroupPermutationsPage extends PermutationsPageBase {

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
