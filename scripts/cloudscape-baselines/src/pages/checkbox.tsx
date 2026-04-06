import Checkbox from '@cloudscape-design/components/checkbox';

export default function CheckboxPermutations() {
  return (
    <div style={{ display: 'block', padding: 24, fontFamily: 'system-ui, sans-serif', lineHeight: 1.15 }}>
      <h2 style={{ marginTop: 0, marginBottom: '0.83em', lineHeight: 1.15 }}>Checkbox — Permutations</h2>

      <section style={{ marginBottom: 24, padding: 16, border: '1px solid #e9ebed', borderRadius: 8 }}>
        <h3 style={{ marginTop: 0, marginBottom: '1em', fontSize: 14, lineHeight: 1.15, color: '#687078', textTransform: 'uppercase' as const, letterSpacing: 0.5 }}>Default</h3>
        <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 12 }}>
          <Checkbox checked={false} onChange={() => {}}>Unchecked</Checkbox>
        </div>
      </section>

      <section style={{ marginBottom: 24, padding: 16, border: '1px solid #e9ebed', borderRadius: 8 }}>
        <h3 style={{ marginTop: 0, marginBottom: '1em', fontSize: 14, lineHeight: 1.15, color: '#687078', textTransform: 'uppercase' as const, letterSpacing: 0.5 }}>Checked</h3>
        <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 12 }}>
          <Checkbox checked={true} onChange={() => {}}>Checked</Checkbox>
        </div>
      </section>

      <section style={{ marginBottom: 24, padding: 16, border: '1px solid #e9ebed', borderRadius: 8 }}>
        <h3 style={{ marginTop: 0, marginBottom: '1em', fontSize: 14, lineHeight: 1.15, color: '#687078', textTransform: 'uppercase' as const, letterSpacing: 0.5 }}>Indeterminate</h3>
        <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 12 }}>
          <Checkbox checked={false} indeterminate={true} onChange={() => {}}>Indeterminate</Checkbox>
        </div>
      </section>

      <section style={{ marginBottom: 24, padding: 16, border: '1px solid #e9ebed', borderRadius: 8 }}>
        <h3 style={{ marginTop: 0, marginBottom: '1em', fontSize: 14, lineHeight: 1.15, color: '#687078', textTransform: 'uppercase' as const, letterSpacing: 0.5 }}>Disabled</h3>
        <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 12 }}>
          <Checkbox checked={false} disabled={true} onChange={() => {}}>Disabled unchecked</Checkbox>
          <Checkbox checked={true} disabled={true} onChange={() => {}}>Disabled checked</Checkbox>
          <Checkbox checked={false} indeterminate={true} disabled={true} onChange={() => {}}>Disabled indeterminate</Checkbox>
        </div>
      </section>

      <section style={{ marginBottom: 24, padding: 16, border: '1px solid #e9ebed', borderRadius: 8 }}>
        <h3 style={{ marginTop: 0, marginBottom: '1em', fontSize: 14, lineHeight: 1.15, color: '#687078', textTransform: 'uppercase' as const, letterSpacing: 0.5 }}>Read Only</h3>
        <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 12 }}>
          <Checkbox checked={true} readOnly={true} onChange={() => {}}>Read-only checked</Checkbox>
        </div>
      </section>

      <section style={{ marginBottom: 24, padding: 16, border: '1px solid #e9ebed', borderRadius: 8 }}>
        <h3 style={{ marginTop: 0, marginBottom: '1em', fontSize: 14, lineHeight: 1.15, color: '#687078', textTransform: 'uppercase' as const, letterSpacing: 0.5 }}>With Description</h3>
        <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 12 }}>
          <Checkbox checked={false} description="Additional info about this option" onChange={() => {}}>With description</Checkbox>
          <Checkbox checked={true} description="This option is currently active" onChange={() => {}}>Checked with description</Checkbox>
        </div>
      </section>

      <section style={{ marginBottom: 24, padding: 16, border: '1px solid #e9ebed', borderRadius: 8 }}>
        <h3 style={{ marginTop: 0, marginBottom: '1em', fontSize: 14, lineHeight: 1.15, color: '#687078', textTransform: 'uppercase' as const, letterSpacing: 0.5 }}>With ARIA Label</h3>
        <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 12 }}>
          <Checkbox checked={false} ariaLabel="Accept terms and conditions" onChange={() => {}}>Accept T&amp;C</Checkbox>
        </div>
      </section>
    </div>
  );
}
