import { h, Component } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import LoadingPage from './pages/Loading';
''
async function getPageByPathname (pathname) {
  if (window.location.pathname === '/') {
    return (await import('./pages/Home')).default
  }

  if (window.location.pathname === '/seo') {
    return (await import('./pages/SEO')).default
  }

  if (window.location.pathname === '/about') {
    return (await import('./pages/About')).default
  }

  if (window.location.pathname === '/dynamic') {
    return (await import('./pages/Dynamic')).default
  }

  return (await import('./pages/NotFound')).default
}

export function App () {
  const [page, setPage] = useState({ Component: LoadingPage });
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
