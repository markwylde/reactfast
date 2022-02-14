import { h, Component } from 'preact';
import { useEffect, useState } from 'preact/hooks';

async function getPageByPathname (pathname) {
  if (window.location.pathname === '/') {
    return (await import('./Home')).default
  }

  if (window.location.pathname === '/seo') {
    return (await import('./SEO')).default
  }

  if (window.location.pathname === '/about') {
    return (await import('./About')).default
  }

  if (window.location.pathname === '/dynamic') {
    return (await import('./Dynamic')).default
  }

  return (await import('./NotFound')).default
}

export function App () {
  const [page, setPage] = useState(null);
  const Component = page?.Component;

  useEffect(() => {
    getPageByPathname(window.location.pathname)
      .then(newPage => {
        setPage({ Component: newPage });
      })
  }, [window.location.pathname])

  return Component && <Component />
}

export default App;
