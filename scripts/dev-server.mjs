import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';

const types = new Map([
  ['.html', 'text/html; charset=utf-8'],
  ['.css', 'text/css; charset=utf-8'],
  ['.js', 'text/javascript; charset=utf-8'],
  ['.svg', 'image/svg+xml'],
]);
const root = process.cwd();
const server = createServer(async (request, response) => {
  try {
    const requested = new URL(request.url ?? '/', 'http://localhost').pathname;
    const safePath = normalize(requested === '/' ? '/index.html' : requested).replace(/^\/+/, '');
    const file = join(root, safePath);
    const contents = await readFile(file);
    response.writeHead(200, { 'Content-Type': types.get(extname(file)) ?? 'application/octet-stream' });
    response.end(contents);
  } catch {
    response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('Not found');
  }
});
server.listen(4173, '0.0.0.0', () => console.log('Rattracker dev server running at http://localhost:4173'));
