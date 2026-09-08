import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { test } from 'node:test';
import ts from 'typescript';

const root = resolve(import.meta.dirname, '..');
const read = (file) => readFileSync(resolve(root, file), 'utf8');

test('the starter authors components in TSX, never the low-level element factory', () => {
  const files = readdirSync(resolve(root, 'src'), { recursive: true })
    .filter((file) => /\.[jt]sx?$/.test(file));
  assert.ok(files.includes('pages/index.tsx'), 'the editable home page must be TSX');
  assert.ok(files.includes('main.tsx'), 'the mount entry must use TSX');
  for (const file of files) {
    const source = ts.createSourceFile(file, read(`src/${file}`), ts.ScriptTarget.Latest, true);
    const visit = (node) => {
      if (ts.isImportSpecifier(node)) {
        assert.notEqual((node.propertyName ?? node.name).text, 'h', `${file}: no h import`);
      }
      if (ts.isCallExpression(node)) {
        const callee = node.expression;
        assert.ok(!(ts.isIdentifier(callee) && callee.text === 'h'), `${file}: no h calls`);
        assert.ok(!(ts.isPropertyAccessExpression(callee) && callee.name.text === 'h'), `${file}: no namespace h calls`);
      }
      ts.forEachChild(node, visit);
    };
    visit(source);
  }
  assert.match(read('src/pages/index.tsx'), /<main\b/);
  assert.match(read('src/main.tsx'), /mount\(<HomePage\s*\/>/);
});

test('the editable page keeps real navigation and a reactive example', () => {
  const page = read('src/pages/index.tsx');
  const counter = read('src/components/Counter.tsx');
  assert.match(page, /https:\/\/whatfw\.com\/docs\//);
  assert.match(page, /https:\/\/github\.com\/CelsianJs\/what-framework/);
  assert.match(counter, /signal\(0\)/);
  for (const label of ['Decrease count', 'Increase count', 'Reset']) {
    assert.ok(counter.includes(label));
  }
});
