import ReactDOM from 'react-dom';
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

  const container = dom.document.body.children[0];

  ReactDOM.render(component, container);

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

  return {
    ...dom,
    findByText,
    container
  };
}

export default render;
