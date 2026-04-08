import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../../../src/key-value-pairs/index.js';

@customElement('key-value-pairs-permutations-page')
export class KeyValuePairsPermutationsPage extends LitElement {
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
      margin-top: 0;
      margin-bottom: 1em;
      font-size: 14px;
      line-height: 1.15;
      color: #687078;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
  `;

  override render() {
    const singleColumn = [
      { type: 'pair' as const, label: 'Instance ID', value: 'i-0123456789abcdef0' },
      { type: 'pair' as const, label: 'State', value: 'Running' },
      { type: 'pair' as const, label: 'Type', value: 't3.micro' },
    ];

    const multiColumn = [
      { type: 'pair' as const, label: 'Name', value: 'web-server-01' },
      { type: 'pair' as const, label: 'Instance ID', value: 'i-0123456789abcdef0' },
      { type: 'pair' as const, label: 'Instance type', value: 't3.micro' },
      { type: 'pair' as const, label: 'Availability zone', value: 'us-east-1a' },
      { type: 'pair' as const, label: 'State', value: 'Running' },
      { type: 'pair' as const, label: 'Launch time', value: '2024-01-15 10:30 UTC' },
    ];

    const withGroups = [
      {
        type: 'group' as const,
        title: 'Instance details',
        items: [
          { type: 'pair' as const, label: 'Instance ID', value: 'i-abc123' },
          { type: 'pair' as const, label: 'Type', value: 't3.large' },
        ],
      },
      {
        type: 'group' as const,
        title: 'Network',
        items: [
          { type: 'pair' as const, label: 'VPC', value: 'vpc-12345' },
          { type: 'pair' as const, label: 'Subnet', value: 'subnet-67890' },
        ],
      },
    ];

    return html`
      <h2>Key-Value Pairs — Permutations</h2>

      <section>
        <h3>Single Column</h3>
        <cs-key-value-pairs .items=${singleColumn} columns=${1}></cs-key-value-pairs>
      </section>

      <section>
        <h3>Three Columns</h3>
        <cs-key-value-pairs .items=${multiColumn} columns=${3}></cs-key-value-pairs>
      </section>

      <section>
        <h3>With Groups (2 columns)</h3>
        <cs-key-value-pairs .items=${withGroups} columns=${2}></cs-key-value-pairs>
      </section>
    `;
  }
}

export const tagName = 'key-value-pairs-permutations-page';
