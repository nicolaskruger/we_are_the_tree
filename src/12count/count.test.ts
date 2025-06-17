import { expect, test } from "vitest";
import { BTree, count } from "../btree/btree";

test("count 💴", () => {
  const tree: BTree<number> = {
    node: 0,
    left: {
      node: 1,
      left: {
        node: 3
      },
      rigth: {
        node: 4
      }
    },
    rigth: {
      node: 2,
      left: {
        node: 5
      },
      rigth: {
        node: 6
      }
    }
  }
  expect(count(tree)).toBe(7)
})
