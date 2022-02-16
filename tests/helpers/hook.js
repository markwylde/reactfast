import fs from 'fs';
import { fileURLToPath } from 'node:url';
import esbuild from 'esbuild';

export async function load (url, context, defaultLoad) {
  if (url.endsWith('.tsx')) {
    const pathname = fileURLToPath(url);
    const contents = fs.readFileSync(pathname, 'utf8');

    const result = await esbuild.transform(contents, {
      loader: 'tsx',
      jsxFactory: 'h'
    });

    return {
      format: 'module',
      source: result.code
    };
  }

  if (url.endsWith('.ts')) {
    const pathname = fileURLToPath(url);
    const contents = fs.readFileSync(pathname, 'utf8');

    const result = await esbuild.transform(contents, {
      loader: 'ts'
    });

    return {
      format: 'module',
      source: result.code
    };
  }

  return defaultLoad(url, context, defaultLoad);
}
