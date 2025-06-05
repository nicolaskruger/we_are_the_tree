export type BTree<T> = {
  node: T,
  rigth?: BTree<T>,
  left?: BTree<T>
};

export type GoTree = 'go_left' | 'go_right';

export const toListleftOrder = <T>(
  tree: BTree<T>,
  list?: T[]
) => {
  list = list ? list : [];
  list.push(tree.node);
  if (tree.left) toListleftOrder(tree.left, list);
  if (tree.rigth) toListleftOrder(tree.rigth, list);
  return list;
}

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
