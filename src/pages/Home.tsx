import React from 'react';
import Header from '../components/Header';

export function HomePage () {
  return (
    <div>
      <Header />
      <h1>What's this all about then?</h1>
      <p>
        This is an example of a small, lightweight, fast
        React project that doesn't need to be server rendered.
      </p>
    </div>
  );
}

export default HomePage;
