import { expect, test } from "vitest";
import { BTree, preOrder } from "../btree/btree";

test("pre order 👿", () => {
  const tree: BTree<number> = {
    node: 1,
    left: { node: 2, left: { node: 3 }, rigth: { node: 4 } },
    rigth: { node: 5, left: { node: 6 } },
  }
  expect([1, 2, 3, 4, 5, 6]).toEqual(preOrder(tree))
})

