import { expect, test } from "vitest";
import { BTree, innorder } from "../btree/btree";

test("innorder 📺", () => {
  const bTree: BTree<number> = {
    node: 4,
    left: {
      node: 2,
      left: {
        node: 1,
      },
      rigth: {
        node: 3
      }
    }
    , rigth: {
      node: 6,
      rigth: {
        node: 7
      }
      , left: {
        node: 5
      }
    }
  }
  expect([1, 2, 3, 4, 5, 6, 7]).toEqual(innorder(bTree))
})
