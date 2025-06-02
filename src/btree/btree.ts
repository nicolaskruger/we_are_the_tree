export type BTree<T> = {
  node: T,
  rigth?: BTree<T>,
  left?: BTree<T>
};

export type GoTree = 'go_left' | 'go_right';

export const insert = <T>(
  tree: BTree<T>,
  node: T,
  comparer: (treeNode: T, inputNode: T) => GoTree) => {
  const go = comparer(tree.node, node);

  const sw: { [key in GoTree]: () => void } = {
    go_left: () => {
      if (!tree.left) tree.left = { node };
      else insert(tree.left, node, comparer);
    },
    go_right: () => {
      if (!tree.rigth) tree.rigth = { node };
      else insert(tree.rigth, node, comparer)
    }
  }

  sw[go]();
}
