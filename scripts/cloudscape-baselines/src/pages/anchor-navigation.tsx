import AnchorNavigation from '@cloudscape-design/components/anchor-navigation';
import { useState } from 'react';

const sectionStyle: React.CSSProperties = { marginBottom: 24, padding: 16, border: '1px solid #e9ebed', borderRadius: 8 };
const h3Style: React.CSSProperties = { marginTop: 0, marginBottom: '1em', fontSize: 14, lineHeight: 1.15, color: '#687078', textTransform: 'uppercase', letterSpacing: 0.5 };

const ANCHORS = [
  { text: 'Overview', href: '#overview', level: 1 as const },
  { text: 'Getting Started', href: '#getting-started', level: 1 as const },
  { text: 'Installation', href: '#installation', level: 2 as const },
  { text: 'Configuration', href: '#configuration', level: 2 as const },
  { text: 'Advanced Usage', href: '#advanced-usage', level: 1 as const, info: 'New' },
  { text: 'API Reference', href: '#api-reference', level: 1 as const },
];

export default function AnchorNavigationPermutations() {
  const [activeEvent, setActiveEvent] = useState('');

  return (
    <div style={{ display: 'block', padding: 24, fontFamily: 'system-ui, sans-serif', lineHeight: 1.15 }}>
      <h2 style={{ marginTop: 0, marginBottom: '0.83em', lineHeight: 1.15 }}>AnchorNavigation — Permutations</h2>

      <section style={sectionStyle}>
        <h3 id="scroll-spy-heading" style={h3Style}>Default with Scroll Spy</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 24 }}>
          <AnchorNavigation
            anchors={ANCHORS}
            ariaLabelledby="scroll-spy-heading"
            onFollow={({ detail }) => setActiveEvent(`follow: ${detail.text}`)}
          />
          <div style={{ maxHeight: 400, overflowY: 'auto', scrollBehavior: 'smooth' }} tabIndex={0} role="region" aria-label="Documentation content">
            <div id="overview" style={{ padding: '24px 0', minHeight: 150, borderBottom: '1px solid #e9ebed' }}><h4>Overview</h4><p>Introduction to the component library.</p></div>
            <div id="getting-started" style={{ padding: '24px 0', minHeight: 150, borderBottom: '1px solid #e9ebed' }}><h4>Getting Started</h4><p>Quick start guide.</p></div>
            <div id="installation" style={{ padding: '24px 0', minHeight: 150, borderBottom: '1px solid #e9ebed' }}><h4>Installation</h4><p>Install via npm.</p></div>
            <div id="configuration" style={{ padding: '24px 0', minHeight: 150, borderBottom: '1px solid #e9ebed' }}><h4>Configuration</h4><p>Configure your project.</p></div>
            <div id="advanced-usage" style={{ padding: '24px 0', minHeight: 150, borderBottom: '1px solid #e9ebed' }}><h4>Advanced Usage</h4><p>Advanced patterns and techniques.</p></div>
            <div id="api-reference" style={{ padding: '24px 0', minHeight: 150, borderBottom: '1px solid #e9ebed' }}><h4>API Reference</h4><p>Full API documentation.</p></div>
          </div>
        </div>
        {activeEvent && (
          <div style={{ marginTop: 8, fontSize: 13, color: '#687078' }}>Event: {activeEvent}</div>
        )}
      </section>

      <section style={sectionStyle}>
        <h3 id="controlled-heading" style={h3Style}>Controlled (activeHref)</h3>
        <AnchorNavigation
          anchors={ANCHORS}
          activeHref="#configuration"
          ariaLabelledby="controlled-heading"
        />
      </section>
    </div>
  );
}
