import { StrictMode, useEffect, useState, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { applyMode, Mode } from '@cloudscape-design/global-styles';
import '@cloudscape-design/global-styles/index.css';

const pages: Record<string, React.LazyExoticComponent<React.ComponentType>> = {
  checkbox: lazy(() => import('./pages/checkbox')),
  icon: lazy(() => import('./pages/icon')),
  box: lazy(() => import('./pages/box')),
  grid: lazy(() => import('./pages/grid')),
  'space-between': lazy(() => import('./pages/space-between')),
  'text-content': lazy(() => import('./pages/text-content')),
  spinner: lazy(() => import('./pages/spinner')),
  badge: lazy(() => import('./pages/badge')),
  'live-region': lazy(() => import('./pages/live-region')),
  'radio-group': lazy(() => import('./pages/radio-group')),
  tiles: lazy(() => import('./pages/tiles')),
  list: lazy(() => import('./pages/list')),
  'tree-view': lazy(() => import('./pages/tree-view')),
  'file-dropzone': lazy(() => import('./pages/file-dropzone')),
  'anchor-navigation': lazy(() => import('./pages/anchor-navigation')),
};

interface Route {
  mode: 'light' | 'dark';
  component: string;
  variant: string;
}

function parseHash(hash: string): Route | null {
  const match = hash.match(/^#\/(light|dark)\/([^/]+)(?:\/([^/]+))?$/);
  if (!match) return null;
  return { mode: match[1] as 'light' | 'dark', component: match[2], variant: match[3] || 'permutations' };
}

function App() {
  const [route, setRoute] = useState<Route | null>(() => parseHash(window.location.hash));

  useEffect(() => {
    const onHashChange = () => setRoute(parseHash(window.location.hash));
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    if (route) {
      applyMode(route.mode === 'dark' ? Mode.Dark : Mode.Light);
      if (route.mode === 'dark') {
        document.body.classList.add('awsui-dark-mode');
      } else {
        document.body.classList.remove('awsui-dark-mode');
      }
    }
  }, [route?.mode]);

  if (!route) {
    return (
      <div style={{ padding: 24 }}>
        <h1>Cloudscape Baselines</h1>
        <p>Navigate to a component page using the hash route:</p>
        <code>#/light/checkbox</code>
        <ul>
          {Object.keys(pages).sort().map(name => (
            <li key={name}>
              <a href={`#/light/${name}`}>{name}</a>
              {' | '}
              <a href={`#/dark/${name}`}>{name} (dark)</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  const PageComponent = pages[route.component];
  if (!PageComponent) {
    return <div style={{ padding: 24 }}>Unknown component: {route.component}</div>;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PageComponent />
    </Suspense>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
