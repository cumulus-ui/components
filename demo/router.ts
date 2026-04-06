export interface Route {
  mode: 'light' | 'dark';
  component: string;
  variant: string;
}

export function parseHash(hash: string): Route | null {
  const match = hash.match(/^#\/(light|dark)\/([^/]+)(?:\/([^/]+))?$/);
  if (!match) return null;
  return {
    mode: match[1] as 'light' | 'dark',
    component: match[2],
    variant: match[3] || 'permutations',
  };
}

export function applyMode(mode: 'light' | 'dark'): void {
  // awsui-dark-mode: Cloudscape design token class that toggles dark theme
  if (mode === 'dark') {
    document.body.classList.add('awsui-dark-mode');
  } else {
    document.body.classList.remove('awsui-dark-mode');
  }
}
