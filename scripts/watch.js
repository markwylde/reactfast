#!/usr/bin/env node

import {
  cleanupDist,
  buildCss,
  buildJs,
  buildHtml,
  buildStatic
} from './build.js';

import { extname } from 'path';
import chokidar from 'chokidar';

const extentions = {
  '.tsx': buildJs,
  '.jsx': buildJs,
  '.ts': buildJs,
  '.js': buildJs,
  '.css': buildCss,
  '.txt': buildStatic,
  '.html': buildHtml
};

async function main () {
  await cleanupDist();

  await Promise.all([
    buildStatic(),
    buildCss(),
    buildJs(),
    buildHtml()
  ]);

  chokidar.watch('./src', {
    ignoreInitial: true
  }).on('all', async (event, path) => {
    const ext = extname(path);
    const builder = extentions[ext];

    if (builder) {
      console.log(new Date(), path, 'triggered', builder.name + '()');
      builder();
    }
  });
}

main();
