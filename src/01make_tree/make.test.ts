import { expect, test } from 'vitest';
import { GoTree, BTree, insert, toListleftOrder } from '../btree/btree';



test("make it 🐂", () => {
  expect(true).toBe(true);

  const tree: BTree<string> = { node: "A" };
  const compare = (tree: string, input: string): GoTree =>
    input < tree ? 'go_left' : 'go_right';

  insert(tree, "B", compare);
})

test("do it 🐏", () => {

  const tree: BTree<string> = {
    node: "A",
    left: {
      node: "B",
      rigth: {
        node: "D"
      },
      left: {
        node: "C",
        left: {
          node: "E"
        }
      }
    }
  }
  const [a, b, c, e, d] = toListleftOrder(tree);

  expect(a).toBe("A");
  expect(b).toBe("B");
  expect(c).toBe("C");
  expect(d).toBe("D");
  expect(e).toBe("E");
  expect(d).toBe("D");
})
