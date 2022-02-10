import { h, Component, render } from 'preact';
import Header from '../components/Header';

export function NotFound () {
  const meta = document.createElement('meta')
  meta.name = 'robots';
  meta.content = 'noindex';
  document.head.append(meta);

  return (
    <div>
      <Header />
      <h1>Page Not Found</h1>
      <p>The page you are trying to access could not be found.</p>
      <h2>Curious about SEO?</h2>
      <p>
        This page (like every page on the site) is returned from the server
        with a 200 status code. But, this isn't exactly great for SEO.
      </p>
      <p>
        But never fear. There is a <code>meta</code> tag on this page to 
        set <code>robots</code> to <code>noindex</code>. This means Google, and other
        compliant search engines, will not index this page.
      </p>
    </div>
  );
}

export default NotFound;
