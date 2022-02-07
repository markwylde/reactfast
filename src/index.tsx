import React from 'react';
import ReactDOM from 'react-dom';

import App from './pages/App';

document.addEventListener('DOMContentLoaded', function () {
  const container = document.body.children[0];
  ReactDOM.render(<App />, container);
  document.title = 'ReactFast';
});
