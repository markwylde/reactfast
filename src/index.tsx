import { h, Component, render } from 'preact';

import App from './App';

const container = document.body.children[0];
render(<App />, container);
document.title = 'ReactFast';
