import { h, Component } from 'preact';
import test from 'basictap';

import render from './helpers/render';
import App from '../src/pages/App';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

test('App - has header', t => {
  t.plan(1);

  const { container } = render(<App />);

  t.ok(container.textContent?.includes('ReactFast'), 'has header');
});

test('App - has default first item', t => {
  t.plan(1);

  const { container } = render(<App />);

  t.ok(container.textContent?.includes('first item'), 'has first item');
});

test('App - adds a new item', async t => {
  t.plan(2);

  const { container, findByText, Event } = render(<App />);

  const addButton = findByText('Add Item');

  addButton.dispatchEvent(new Event('click'));

  await sleep(100);

  t.ok(container.textContent?.includes('first item'), 'has first item');
  t.ok(container.textContent?.includes('second item'), 'has second item');
});
