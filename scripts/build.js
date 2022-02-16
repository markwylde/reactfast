#!/usr/bin/env node

import esbuild from 'esbuild';
import fs from 'fs';
import path from 'path';
import glob from 'glob';

const copyFile = async (filePath) => {
  const destPath = path.resolve('dist', filePath.slice(6));

  await fs.promises.mkdir(path.dirname(destPath), { recursive: true });
  await fs.promises.copyFile(filePath, destPath);
};

export async function cleanupDist () {
  await fs.promises.rm('./dist', { recursive: true, force: true });
  await fs.promises.mkdir('./dist');
}

export async function buildJs () {
  const result = await esbuild.build({
    jsxFactory: 'h',
    splitting: true,
    format: 'esm',
    minify: true,
    bundle: true,
    entryPoints: ['./src/index.tsx'],
    outdir: 'dist',
    sourcemap: true,
    metafile: true,
    jsxFragment: 'Component',
    loader: {
      '.svg': 'file',
      '.gif': 'file',
      '.png': 'file',
      '.js': 'jsx'
    }
  });
  fs.writeFileSync('meta.json', JSON.stringify(result.metafile, null, 2));
}

export async function buildCss () {
  await esbuild.build({
    entryPoints: ['./src/index.css'],
    bundle: true,
    sourcemap: true,
    outfile: './dist/index.css',
    loader: {
      '.svg': 'file',
      '.png': 'file'
    }
  });
}

export async function buildStatic () {
  glob('./src/**.txt', (errors, files) => files.forEach(copyFile));
}

export async function buildHtml () {
  let html = await fs.promises.readFile('./src/index.html', 'utf8');

  html = html.replace('{BASE_URL}', process.env.BASE_URL || '/');

  await Promise.all([
    fs.promises.writeFile('./dist/index.html', html),
    fs.promises.writeFile('./dist/404.html', html)
  ]);
}

export default async function main () {
  await cleanupDist();

  await Promise.all([
    buildStatic(),
    buildCss(),
    buildJs(),
    buildHtml()
  ]);
}

const isMain = import.meta.url === `file://${process.argv[1]}`;
if (isMain) {
  main(false);
}
