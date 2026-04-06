import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../../../src/box/index.js';

@customElement('box-permutations-page')
export class BoxPermutationsPage extends LitElement {
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
    .row {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
  `;

  override render() {
    return html`
      <h2>Box — Permutations</h2>

      <section>
        <h3>Variants</h3>
        <div class="row">
          <cs-box variant="h1">Heading 1</cs-box>
          <cs-box variant="h2">Heading 2</cs-box>
          <cs-box variant="h3">Heading 3</cs-box>
          <cs-box variant="h4">Heading 4</cs-box>
          <cs-box variant="h5">Heading 5</cs-box>
          <cs-box variant="p">Paragraph text</cs-box>
          <cs-box variant="strong">Strong text</cs-box>
          <cs-box variant="small">Small text</cs-box>
          <cs-box variant="code">Code text</cs-box>
          <cs-box variant="pre">Preformatted text</cs-box>
          <cs-box variant="samp">Sample output</cs-box>
        </div>
      </section>

      <section>
        <h3>Special Variants</h3>
        <div class="row">
          <cs-box variant="awsui-key-label">Key Label</cs-box>
          <cs-box variant="awsui-gen-ai-label">Gen AI Label</cs-box>
          <cs-box variant="awsui-value-large">Large Value</cs-box>
          <cs-box variant="awsui-inline-code">inline code</cs-box>
        </div>
      </section>

      <section>
        <h3>Colors</h3>
        <div class="row">
          <cs-box color="inherit">Inherit color</cs-box>
          <cs-box color="text-label">Label color</cs-box>
          <cs-box color="text-body-secondary">Secondary body</cs-box>
          <cs-box color="text-status-error">Error status</cs-box>
          <cs-box color="text-status-success">Success status</cs-box>
          <cs-box color="text-status-info">Info status</cs-box>
          <cs-box color="text-status-warning">Warning status</cs-box>
        </div>
      </section>

      <section>
        <h3>Font Sizes</h3>
        <div class="row">
          <cs-box fontSize="body-s">Body small</cs-box>
          <cs-box fontSize="body-m">Body medium</cs-box>
          <cs-box fontSize="heading-xs">Heading XS</cs-box>
          <cs-box fontSize="heading-s">Heading S</cs-box>
          <cs-box fontSize="heading-m">Heading M</cs-box>
          <cs-box fontSize="heading-l">Heading L</cs-box>
          <cs-box fontSize="heading-xl">Heading XL</cs-box>
          <cs-box fontSize="display-l">Display L</cs-box>
        </div>
      </section>

      <section>
        <h3>Font Weights</h3>
        <div class="row">
          <cs-box fontWeight="light">Light weight</cs-box>
          <cs-box fontWeight="normal">Normal weight</cs-box>
          <cs-box fontWeight="bold">Bold weight</cs-box>
          <cs-box fontWeight="heavy">Heavy weight</cs-box>
        </div>
      </section>

      <section>
        <h3>Display</h3>
        <div>
          <cs-box display="inline" variant="span">Inline 1</cs-box>
          <cs-box display="inline" variant="span">Inline 2</cs-box>
          <cs-box display="inline-block" variant="span">Inline-block</cs-box>
        </div>
      </section>

      <section>
        <h3>Text Alignment</h3>
        <div class="row">
          <cs-box textAlign="left">Left aligned</cs-box>
          <cs-box textAlign="center">Center aligned</cs-box>
          <cs-box textAlign="right">Right aligned</cs-box>
        </div>
      </section>

      <section>
        <h3>Tag Override</h3>
        <div class="row">
          <cs-box variant="h1" tagOverride="span">H1 variant rendered as span</cs-box>
        </div>
      </section>
    `;
  }
}

export const tagName = 'box-permutations-page';
