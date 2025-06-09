import { expect, test } from "vitest"
import { linked, BTree } from "../btree/btree"

test("linked 🐫", () => {
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
  const link = linked(tree);

  expect(link.length).toBe(6);

  expect(JSON.stringify(link)).toBe(JSON.stringify(["A", "B", "D", "E", "C", "F"]))
})
