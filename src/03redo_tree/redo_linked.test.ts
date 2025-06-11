import { expect, test } from "vitest";
import { redoLinked, linked, BTree } from "../btree/btree";

test("redo linked 🐀", () => {
  const list = (): string[] => ["A", "B", "C", "D", "E", "F", "G"];
  const tree = redoLinked(list())!;
  const out = linked(tree);

  console.log(tree);

  expect(JSON.stringify(list())).toBe(JSON.stringify(out))
})
