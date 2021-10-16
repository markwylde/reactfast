# reactfast
A method of building testable react apps that are written in typescript and promote a fast and simply development workflow.

## Getting started
```
git clone https://github.com/markwylde/reactfast.git
cd reactfast
npm i
```

## Starting
You can build and serve the app using npm:

```
npm run start
```

Then visit http://localhost:8000 in your browser.

## Linting
The project uses semistandard (via eslint) which can be tested using:

```
npm run lint
```

## Tests
You can run the tests via npm:

```
npm run test
```

This will give you coverage checking and run all your tests.

However, during TDD, you will probably want a faster iteration:

```
node -r sucrase/register tests
```

This will run the two example tests in around 0.2 seconds.
