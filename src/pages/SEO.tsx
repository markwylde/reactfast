import { h, Component, render } from 'preact';
import Header from '../components/Header';

export function SEO () {
  return (
    <div>
      <Header />
      <h1>How does SEO work?</h1>
      <p>
        Yeah, SEO is fine with this app. But you need to make sure
        you use a host/cdn that is capabile of always returning an
        index.html page with 200 status.
      </p>
    </div>
  );
}

export default SEO;
