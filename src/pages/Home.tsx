import { h, Component } from 'preact';
import Header from '../components/Header.tsx';

export function HomePage () {
  return (
    <div>
      <Header />
      <h1>What's this all about then my?</h1>
      <p>
        This is an example of a small, lightweight, fast
        React project that doesn't need to be server rendered.
      </p>
    </div>
  );
}

export default HomePage;
