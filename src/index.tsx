import { h, Component, render } from 'preact';

import App from './pages/App';

document.addEventListener('DOMContentLoaded', function () {
  const container = document.body.children[0];
  render(<App />, container);
  document.title = 'ReactFast';
});
