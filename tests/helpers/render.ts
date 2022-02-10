import * as preact from 'preact';
import { parseHTML } from 'linkedom';

declare const global: any;

export function render (component: JSX.Element) {
  const dom = parseHTML(`
    <!doctype html>
    <html lang="en">
      <head>
        <title>Render</title>
      </head>
      <body>
        <app></app>
      </body>
    </html>
  `);

  global.window = dom.window;
  global.document = dom.document;

  global.window.location = {
    pathname: '/dynamic'
  };

  const container = dom.document.body.children[0];

  preact.render(component, container);

  function findByText (text: string) {
    const elements = Array.from(
      container.querySelectorAll('*')
    );

    return elements.filter(
      (element: Element) : Boolean => {
        return element.textContent === text;
      }
    )[0];
  }

  dom.findByText = findByText;
  dom.container = container;

  return dom;
}

export default render;
