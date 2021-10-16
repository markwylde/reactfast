import React from 'react';
import { Simulate } from 'react-dom/test-utils';
import test from 'basictap';

import render from './helpers/render';
import App from '../src/pages/App';

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

test('App - adds a new item', t => {
  t.plan(2);

  const { container, findByText } = render(<App />);

  const addButton = findByText('Add Item');
  Simulate.click(addButton);

  t.ok(container.textContent?.includes('first item'), 'has first item');
  t.ok(container.textContent?.includes('second item'), 'has second item');
});
