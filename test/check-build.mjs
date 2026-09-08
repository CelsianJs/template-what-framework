import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { gzipSync } from 'node:zlib';

const dist = resolve(import.meta.dirname, '../dist');
const html = readFileSync(resolve(dist, 'index.html'), 'utf8');
assert.match(html, /<title>Your What app<\/title>/);
assert.match(html, /name="description"/);
assert.doesNotMatch(html, /\/src\/main\.tsx/);
const assets = readdirSync(resolve(dist, 'assets'));
const js = assets.filter(file => file.endsWith('.js'));
assert.ok(js.length > 0, 'production JavaScript must exist');
let compressed = 0;
for (const asset of js) {
  const code = readFileSync(resolve(dist, 'assets', asset));
  compressed += gzipSync(code).length;
  assert.doesNotMatch(code.toString(), /https?:\/\/fonts\./);
}
assert.ok(compressed < 20 * 1024, `starter JavaScript exceeded 20 KiB gzip: ${compressed}`);
for (const match of html.matchAll(/(?:src|href)="(\/assets\/[^"?#]+)"/g)) {
  readFileSync(resolve(dist, `.${match[1]}`));
}
console.log(`Production assets verified; JavaScript ${(compressed / 1024).toFixed(2)} KiB gzip.`);
