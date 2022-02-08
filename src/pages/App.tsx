import React from 'react';
import HomePage from './Home';
import DynamicPage from './Dynamic';
import SEOPage from './SEO';
import NotFound from './NotFound';

export function App () {
  if (location.pathname === '/') {
    return (
      <HomePage />
    )
  }

  if (location.pathname === '/dynamic') {
    return (
      <DynamicPage></DynamicPage>
    )
  }

  if (location.pathname === '/seo') {
    return (
      <SEOPage></SEOPage>
    )
  }

  return <NotFound />
}

export default App;
