const { addHook } = require('sucrase/dist/register');

addHook('.tsx', {
  transforms: ['imports', 'typescript', 'jsx'],
  jsxPragma: 'h',
  jsxFragmentPragma: 'Container'
});
addHook('.ts', {
  transforms: ['imports', 'typescript']
});
