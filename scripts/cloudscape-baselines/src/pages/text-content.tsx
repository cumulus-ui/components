import TextContent from '@cloudscape-design/components/text-content';

const sectionStyle: React.CSSProperties = { marginBottom: 24, padding: 16, border: '1px solid #e9ebed', borderRadius: 8 };
const h3Style: React.CSSProperties = { marginTop: 0, marginBottom: '1em', fontSize: 14, lineHeight: 1.15, color: '#687078', textTransform: 'uppercase', letterSpacing: 0.5 };

export default function TextContentPermutations() {
  return (
    <div style={{ display: 'block', padding: 24, fontFamily: 'system-ui, sans-serif', lineHeight: 1.15 }}>
      <h2 style={{ marginTop: 0, marginBottom: '0.83em', lineHeight: 1.15 }}>TextContent — Permutations</h2>

      <section style={sectionStyle}>
        <h3 style={h3Style}>Headings</h3>
        <TextContent>
          <h1>Heading 1</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
          <h4>Heading 4</h4>
          <h5>Heading 5</h5>
        </TextContent>
      </section>

      <section style={sectionStyle}>
        <h3 style={h3Style}>Paragraphs</h3>
        <TextContent>
          <p>This is a paragraph of body text. It demonstrates the default styling applied by TextContent.</p>
          <p>This is a second paragraph showing spacing between paragraphs.</p>
        </TextContent>
      </section>

      <section style={sectionStyle}>
        <h3 style={h3Style}>Mixed Content</h3>
        <TextContent>
          <h2>Section Title</h2>
          <p>Here is some introductory text for this section.</p>
          <h3>Subsection</h3>
          <p>More detailed content under the subsection with <strong>bold text</strong> and <em>italic text</em>.</p>
        </TextContent>
      </section>

      <section style={sectionStyle}>
        <h3 style={h3Style}>Code</h3>
        <TextContent>
          <p>Use <code>npm install</code> to install dependencies.</p>
          <pre>{`const x = 42;\nconsole.log(x);`}</pre>
        </TextContent>
      </section>

      <section style={sectionStyle}>
        <h3 style={h3Style}>Lists</h3>
        <TextContent>
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
        </TextContent>
      </section>

      <section style={sectionStyle}>
        <h3 style={h3Style}>Small &amp; Blockquote</h3>
        <TextContent>
          <small>This is small text, often used for captions or legal text.</small>
          <blockquote>This is a blockquote with a left border accent.</blockquote>
        </TextContent>
      </section>

      <section style={sectionStyle}>
        <h3 style={h3Style}>Horizontal Rule</h3>
        <TextContent>
          <p>Content before the rule.</p>
          <hr />
          <p>Content after the rule.</p>
        </TextContent>
      </section>
    </div>
  );
}
