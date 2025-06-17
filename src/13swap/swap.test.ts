import { expect, test } from "vitest";
import { BTree, swap } from "../btree/btree";

test("swap 🦉", () => {
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
  swap(tree)
  expect(tree.node).toBe("🦉")
  expect(tree.rigth?.node).toBe("💴")
  expect(tree.rigth?.rigth?.node).toBe("🐂")
  expect(tree.left?.node).toBe("💿")
  expect(tree.left?.left?.node).toBe("⚡")
})
