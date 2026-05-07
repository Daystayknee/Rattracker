import { cp, mkdir, readFile, rm } from 'node:fs/promises';

await rm('dist', { recursive: true, force: true });
await mkdir('dist/src', { recursive: true });
await cp('index.html', 'dist/index.html');
await cp('src', 'dist/src', { recursive: true });
const html = await readFile('dist/index.html', 'utf8');
if (!html.includes('/src/main.js')) {
  throw new Error('Build validation failed: index.html must load /src/main.js');
}
console.log('Built static Rattracker dashboard to dist/');
