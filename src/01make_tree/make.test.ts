import { expect, test } from 'vitest';
import { GoTree, BTree, insert } from '../btree/btree';



test("make it 🐂", () => {
  expect(true).toBe(true);

  const tree: BTree<string> = { node: "A" };
  const compare = (tree: string, input: string): GoTree =>
    input < tree ? 'go_left' : 'go_right';

  insert(tree, "B", compare);
})
