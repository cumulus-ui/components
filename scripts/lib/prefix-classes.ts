export function prefixClasses(css: string, fwd: Record<string, string>, prefix: string): string {
  const semanticNames = Object.keys(fwd);
  const escaped = semanticNames.map(n => n.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const pattern = new RegExp(`\\.(?:${escaped.join('|')})(?=[^a-zA-Z0-9-]|$)`, 'g');
  return css.replace(pattern, (match) => `.${prefix}--${match.slice(1)}`);
}
