// Smoke test for the production build. Run `npm run build` first, then `npm test`.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const dist = join(process.cwd(), 'dist');
const html = () => readFileSync(join(dist, 'index.html'), 'utf8');

test('build produced dist/index.html', () => {
  assert.ok(existsSync(join(dist, 'index.html')), 'dist/index.html is missing; run npm run build first');
});

test('page has a title, a single h1 and the profile name', () => {
  const page = html();
  assert.match(page, /<title>[^<]*Christian Omara[^<]*<\/title>/);
  assert.equal((page.match(/<h1[\s>]/g) || []).length, 1, 'expected exactly one <h1>');
});

test('every section linked from the page exists', () => {
  const page = html();
  for (const id of ['about', 'projects', 'achievements', 'contact']) {
    assert.match(page, new RegExp(`id="${id}"`), `section #${id} is missing`);
  }
  const anchors = [...page.matchAll(/href="#([^"]+)"/g)].map((m) => m[1]);
  for (const id of anchors) assert.match(page, new RegExp(`id="${id}"`), `link to #${id} has no target`);
});

test('every local asset referenced by the page exists in dist', () => {
  const page = html();
  const refs = [...page.matchAll(/(?:src|href)="(\/[^"#?]*)"/g)].map((m) => m[1]).filter((r) => r !== '/');
  assert.ok(refs.length > 0, 'expected local asset references');
  for (const ref of refs) assert.ok(existsSync(join(dist, decodeURI(ref))), `missing ${ref}`);
});
