import { expect, test } from "vitest";
import { BTree, postOrderNonRecursive } from "../btree/btree";

test("post order non recursive 🐝", () => {
  const tree: BTree<string> = {
    node: "A",
    left: {
      node: "B",
      left: {
        node: "D",
      },
      rigth: {
        node: "E"
      }
    },
    rigth: {
      node: "C",
      rigth: {
        node: "F"
      },

    }
  }
  const toList = postOrderNonRecursive(tree);

  expect(toList).toEqual(["D", "B", "E", "A", "C", "F"]);
})
