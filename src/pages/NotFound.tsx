import React from 'react';
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
    </div>
  );
}

export default NotFound;
