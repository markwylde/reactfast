import { h, Component, render } from 'preact';
import HomePage from './Home';
import SEOPage from './SEO';
import AboutPage from './About';
import DynamicPage from './Dynamic';
import NotFound from './NotFound';

export function App () {
  if (location.pathname === '/') {
    return (
      <HomePage />
    )
  }

  if (location.pathname === '/seo') {
    return (
      <SEOPage></SEOPage>
    )
  }

  if (location.pathname === '/about') {
    return (
      <AboutPage></AboutPage>
    )
  }

  if (location.pathname === '/dynamic') {
    return (
      <DynamicPage></DynamicPage>
    )
  }

  return <NotFound />
}

export default App;
