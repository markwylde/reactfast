import { h, Component } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import LoadingPage from './pages/Loading.tsx';

async function getPageByPathname (pathname) {
  if (pathname === '/') {
    const pageModule = await import('./pages/Home.tsx');
    return pageModule.default;
  }

  if (pathname === '/seo') {
    const pageModule = await import('./pages/SEO.tsx');
    return pageModule.default;
  }

  if (pathname === '/about') {
    const pageModule = await import('./pages/About.tsx');
    return pageModule.default;
  }

  if (pathname === '/dynamic') {
    const pageModule = await import('./pages/Dynamic.tsx');
    return pageModule.default;
  }

  const pageModule = await import('./pages/NotFound.tsx');
  return pageModule.default;
}

export function App () {
  const [page, setPage] = useState({ Component: LoadingPage });
  const Component = page?.Component;

  useEffect(() => {
    getPageByPathname(window.location.pathname)
      .then(newPage => {
        setPage({ Component: newPage });
      });
  }, [window.location.pathname]);

  return Component && <Component />;
}

export default App;
