import { h, Component } from 'preact';
import Header from '../components/Header.tsx';

export function AboutPage () {
  return (
    <div>
      <Header />
      <h1>About this site</h1>
      <p>
        I believe that we can build amazing, fast, lightweight websites using
        entirely client rendered code, without any server side rendering.
      </p>
      <p>
        This is a demonstration of a site that is search engine optimised, will
        be indexed well by Google, and score highly in the lighthouse and core
        web vital tests.
      </p>
      <p>
        In many cases your site will score higher than with server rendering,
        because you can host the entire thing on a CDN.
      </p>
    </div>
  );
}

export default AboutPage;
