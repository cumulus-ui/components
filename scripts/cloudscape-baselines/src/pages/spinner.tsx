import Spinner from '@cloudscape-design/components/spinner';

const sectionStyle: React.CSSProperties = { marginBottom: 24, padding: 16, border: '1px solid #e9ebed', borderRadius: 8 };
const h3Style: React.CSSProperties = { marginTop: 0, marginBottom: '1em', fontSize: 14, lineHeight: 1.15, color: '#687078', textTransform: 'uppercase', letterSpacing: 0.5 };

export default function SpinnerPermutations() {
  return (
    <div style={{ display: 'block', padding: 24, fontFamily: 'system-ui, sans-serif', lineHeight: 1.15 }}>
      <h2 style={{ marginTop: 0, marginBottom: '0.83em', lineHeight: 1.15 }}>Spinner — Permutations</h2>

      <section style={sectionStyle}>
        <h3 style={h3Style}>Sizes</h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <Spinner size="normal" />
          <Spinner size="big" />
          <Spinner size="large" />
        </div>
      </section>

      <section style={sectionStyle}>
        <h3 style={h3Style}>Variants</h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <Spinner variant="normal" />
          <Spinner variant="disabled" />
          <div style={{ background: '#0f1b2a', padding: 12, borderRadius: 4 }}>
            <Spinner variant="inverted" />
          </div>
        </div>
      </section>

      <section style={sectionStyle}>
        <h3 style={h3Style}>All Combinations</h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <Spinner size="normal" variant="normal" />
          <Spinner size="big" variant="normal" />
          <Spinner size="large" variant="normal" />
          <Spinner size="normal" variant="disabled" />
          <Spinner size="big" variant="disabled" />
          <Spinner size="large" variant="disabled" />
        </div>
      </section>
    </div>
  );
}
