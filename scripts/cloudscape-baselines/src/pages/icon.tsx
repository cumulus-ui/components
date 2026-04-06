import Icon from '@cloudscape-design/components/icon';

const ICON_NAMES = [
  'add-plus', 'anchor-link', 'angle-left', 'angle-right', 'angle-up', 'angle-down',
  'arrow-left', 'arrow-right', 'arrow-up', 'arrow-down', 'bug', 'calendar',
  'check', 'close', 'copy', 'download', 'edit', 'envelope', 'external',
  'file', 'filter', 'folder', 'gen-ai', 'globe', 'heart', 'history',
  'key', 'lock-private', 'menu', 'notification', 'pause', 'play',
  'refresh', 'remove', 'search', 'security', 'send', 'settings', 'share',
  'star', 'star-filled', 'status-info', 'status-positive', 'status-negative',
  'status-warning', 'thumbs-up', 'thumbs-down', 'upload', 'user-profile',
] as const;

const SIZES = ['small', 'normal', 'medium', 'big', 'large'] as const;
const VARIANTS = ['normal', 'subtle', 'disabled', 'inverted', 'link', 'success', 'error', 'warning'] as const;

const sectionStyle: React.CSSProperties = { marginBottom: 24, padding: 16, border: '1px solid #e9ebed', borderRadius: 8 };
const h3Style: React.CSSProperties = { marginTop: 0, marginBottom: '1em', fontSize: 14, lineHeight: 1.15, color: '#687078', textTransform: 'uppercase', letterSpacing: 0.5 };

export default function IconPermutations() {
  return (
    <div style={{ display: 'block', padding: 24, fontFamily: 'system-ui, sans-serif', lineHeight: 1.15 }}>
      <h2 style={{ marginTop: 0, marginBottom: '0.83em', lineHeight: 1.15 }}>Icon — Permutations</h2>

      <section style={sectionStyle}>
        <h3 style={h3Style}>All Built-in Icons (normal size)</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
          {ICON_NAMES.map(name => (
            <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, padding: 8, minWidth: 80, border: '1px solid #f0f0f0', borderRadius: 4 }}>
              <Icon name={name} />
              <span style={{ fontSize: 10, color: '#687078', textAlign: 'center', wordBreak: 'break-all' }}>{name}</span>
            </div>
          ))}
        </div>
      </section>

      <section style={sectionStyle}>
        <h3 style={h3Style}>Sizes</h3>
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          {SIZES.map(size => (
            <div key={size} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, padding: 8, minWidth: 80, border: '1px solid #f0f0f0', borderRadius: 4 }}>
              <Icon name="settings" size={size} />
              <span style={{ fontSize: 10, color: '#687078', textAlign: 'center', wordBreak: 'break-all' }}>{size}</span>
            </div>
          ))}
        </div>
      </section>

      <section style={sectionStyle}>
        <h3 style={h3Style}>Variants</h3>
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          {VARIANTS.map(variant =>
            variant === 'inverted' ? (
              <div key={variant} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, padding: 8, minWidth: 80, border: '1px solid #f0f0f0', borderRadius: 4, background: '#0f141a' }}>
                <Icon name="settings" variant={variant} />
                <span style={{ fontSize: 10, color: '#fff', textAlign: 'center', wordBreak: 'break-all' }}>{variant}</span>
              </div>
            ) : (
              <div key={variant} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, padding: 8, minWidth: 80, border: '1px solid #f0f0f0', borderRadius: 4 }}>
                <Icon name="settings" variant={variant} />
                <span style={{ fontSize: 10, color: '#687078', textAlign: 'center', wordBreak: 'break-all' }}>{variant}</span>
              </div>
            )
          )}
        </div>
      </section>

      <section style={sectionStyle}>
        <h3 style={h3Style}>With ARIA Label (accessible)</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
          <Icon name="search" ariaLabel="Search" />
          <Icon name="close" ariaLabel="Close dialog" />
          <Icon name="notification" ariaLabel="3 new notifications" />
        </div>
      </section>

      <section style={sectionStyle}>
        <h3 style={h3Style}>URL-based Icon</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
          <Icon url="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><circle cx='8' cy='8' r='7' fill='%23006ce0'/></svg>" ariaLabel="Custom blue circle" />
        </div>
      </section>
    </div>
  );
}
