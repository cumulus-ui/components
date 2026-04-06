import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../../../src/text-content/index.js';

@customElement('text-content-permutations-page')
export class TextContentPermutationsPage extends LitElement {
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
    section > h3 {
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
    return html`
      <h2>TextContent — Permutations</h2>

      <section>
        <h3>Headings</h3>
        <cs-text-content>
          <h1>Heading 1</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
          <h4>Heading 4</h4>
          <h5>Heading 5</h5>
        </cs-text-content>
      </section>

      <section>
        <h3>Paragraphs</h3>
        <cs-text-content>
          <p>This is a paragraph of body text. It demonstrates the default styling applied by TextContent.</p>
          <p>This is a second paragraph showing spacing between paragraphs.</p>
        </cs-text-content>
      </section>

      <section>
        <h3>Mixed Content</h3>
        <cs-text-content>
          <h2>Section Title</h2>
          <p>Here is some introductory text for this section.</p>
          <h3>Subsection</h3>
          <p>More detailed content under the subsection with <strong>bold text</strong> and <em>italic text</em>.</p>
        </cs-text-content>
      </section>

      <section>
        <h3>Code</h3>
        <cs-text-content>
          <p>Use <code>npm install</code> to install dependencies.</p>
          <pre>const x = 42;
console.log(x);</pre>
        </cs-text-content>
      </section>

      <section>
        <h3>Lists</h3>
        <cs-text-content>
          <ul>
            <li>Unordered item 1</li>
            <li>Unordered item 2</li>
            <li>Unordered item 3</li>
          </ul>
          <ol>
            <li>Ordered item 1</li>
            <li>Ordered item 2</li>
            <li>Ordered item 3</li>
          </ol>
        </cs-text-content>
      </section>

      <section>
        <h3>Small &amp; Blockquote</h3>
        <cs-text-content>
          <small>This is small text, often used for captions or legal text.</small>
          <blockquote>This is a blockquote with a left border accent.</blockquote>
        </cs-text-content>
      </section>

      <section>
        <h3>Horizontal Rule</h3>
        <cs-text-content>
          <p>Content before the rule.</p>
          <hr>
          <p>Content after the rule.</p>
        </cs-text-content>
      </section>
    `;
  }
}

export const tagName = 'text-content-permutations-page';
