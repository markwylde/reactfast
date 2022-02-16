import { h, Component } from 'preact';
import test from 'basictap';

import render from './helpers/render.ts';
import App from '../src/App.tsx';

test('App - has header', async t => {
  t.plan(1);

  const { findByText } = render(<App />);

  await t.waitFor(() => {
    t.ok(findByText('ReactFast'));
  });
});

test('App - has default first item', async t => {
  t.plan(1);

  const { findByText } = render(<App />);
  await t.waitFor(() => {
    t.ok(findByText('ReactFast'), 'has first item');
  });
});

test('App - adds a new item', async t => {
  t.plan(2);

  const { findByText, Event } = render(<App />);

  await t.waitFor(() => {
    t.ok(findByText('first item'), 'has first item');
  });

  const addButton = findByText('Add Item');
  addButton.dispatchEvent(new Event('click'));

  await t.waitFor(() => {
    t.ok(findByText('item 2'), 'has second item');
  });
});
