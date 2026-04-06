import LiveRegion from '@cloudscape-design/components/live-region';

const sectionStyle: React.CSSProperties = { marginBottom: 24, padding: 16, border: '1px solid #e9ebed', borderRadius: 8 };
const h3Style: React.CSSProperties = { marginTop: 0, marginBottom: '1em', fontSize: 14, lineHeight: 1.15, color: '#687078', textTransform: 'uppercase', letterSpacing: 0.5 };

export default function LiveRegionPermutations() {
  return (
    <div style={{ display: 'block', padding: 24, fontFamily: 'system-ui, sans-serif', lineHeight: 1.15 }}>
      <h2 style={{ marginTop: 0, marginBottom: '0.83em', lineHeight: 1.15 }}>Live Region — Permutations</h2>

      <section style={sectionStyle}>
        <h3 style={h3Style}>Polite (visible)</h3>
        <LiveRegion>
          Polite announcement
        </LiveRegion>
        <br />
        <button>Update polite</button>
      </section>

      <section style={sectionStyle}>
        <h3 style={h3Style}>Assertive (visible)</h3>
        <LiveRegion assertive>
          Assertive announcement
        </LiveRegion>
        <br />
        <button>Update assertive</button>
      </section>

      <section style={sectionStyle}>
        <h3 style={h3Style}>Hidden (screen reader only)</h3>
        <LiveRegion hidden>
          Hidden announcement for screen readers
        </LiveRegion>
        <p>The live region above is visually hidden but available to screen readers.</p>
      </section>

      <section style={sectionStyle}>
        <h3 style={h3Style}>Span tag</h3>
        <LiveRegion tagName="span">
          Inline live region with span tag
        </LiveRegion>
      </section>
    </div>
  );
}
