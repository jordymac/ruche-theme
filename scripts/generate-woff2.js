#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const ttf2woff2 = require('ttf2woff2');
const otf2ttf = require('otf2ttf');

async function walk(dir) {
  const entries = await fs.promises.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) await walk(full);
    else if (e.isFile()) {
      const ext = path.extname(e.name).toLowerCase();
      if (ext === '.ttf' || ext === '.otf') {
        await convertFont(full, ext);
      }
    }
  }
}

async function convertFont(filePath, ext) {
  try {
    const dir = path.dirname(filePath);
    const base = path.basename(filePath, ext);
    const outPath = path.join(dir, base + '.woff2');
    if (fs.existsSync(outPath)) {
      console.log('SKIP (exists):', outPath);
      return;
    }
    const buffer = await fs.promises.readFile(filePath);
    let ttfBuffer;
    if (ext === '.otf') {
      // convert otf -> ttf
      ttfBuffer = Buffer.from(otf2ttf(buffer));
    } else {
      ttfBuffer = buffer;
    }
    // convert ttf buffer to woff2
    const woff2Buffer = ttf2woff2(ttfBuffer);
    await fs.promises.writeFile(outPath, woff2Buffer);
    console.log('CREATED', outPath);
  } catch (err) {
    console.error('ERROR converting', filePath, (err && err.message) || err);
  }
}

(async () => {
  const start = path.join(__dirname, '..', 'assets', 'fonts');
  if (!fs.existsSync(start)) {
    console.error('fonts folder not found at', start);
    process.exit(1);
  }
  await walk(start);
})();
