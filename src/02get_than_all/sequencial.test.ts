import { expect, test } from "vitest"
import { BTree, sequencial } from "../btree/btree"
test("sequencia 🦆", () => {
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

  const seq = sequencial(tree);
  console.log(seq);

  expect(seq.length).toBe(6);

  expect(JSON.stringify(seq)).toBe(JSON.stringify(["A", "B", "C", "D", "E", "F"]));
})

