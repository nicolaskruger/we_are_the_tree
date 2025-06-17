import { test } from "vitest";
import { BTree, printree, } from "../btree/btree";

test("print 🐮", () => {
  const tree: BTree<string> = {
    node: "🦉",
    left: {
      node: "💴",
      left: {
        node: "🐂"
      }
    },
    rigth: {
      node: "💿",
      rigth: {
        node: "⚡"
      }
    },
  }
  printree(tree)
})
