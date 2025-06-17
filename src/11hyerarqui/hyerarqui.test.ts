import { expect, test } from "vitest";
import { BTree, hyerarqui } from "../btree/btree";

test("hyerarqui 🔫", () => {
  const tree: BTree<number> = {
    node: 1,
    left: { node: 2, left: { node: 3 }, rigth: { node: 4 } },
    rigth: { node: 5, left: { node: 6 } },
  }
  expect([[1], [2, 5], [3, 4, 6]]).toEqual(hyerarqui(tree))
})
