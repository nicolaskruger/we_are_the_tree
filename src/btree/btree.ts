export type BTree<T> = {
  node: T,
  rigth?: BTree<T>,
  left?: BTree<T>
};
export type GoTree = 'go_left' | 'go_right';

export const preOrder = <T>(tree?: BTree<T>): T[] => {
  if (!tree) return []
  return [tree.node, ...preOrder(tree.left), ...preOrder(tree.rigth)]
}
export const hyerarqui = <T>(tree: BTree<T>, weight?: number, lines?: T[][]) => {
  weight = weight ? weight : 0;
  lines = lines ? lines : []
  const wLine = lines[weight] || []
  lines[weight] = [...wLine, tree.node]
  if (tree.left) hyerarqui(tree.left, weight + 1, lines)
  if (tree.rigth) hyerarqui(tree.rigth, weight + 1, lines)
  return lines;
}
export const sequencial = <T>(tree: BTree<T>, list?: T[]): T[] => {
  list = list ? list : [tree.node];

  if (tree.left) list.push(tree.left.node)
  if (tree.rigth) list.push(tree.rigth.node)
  if (tree.left) sequencial(tree.left, list)
  if (tree.rigth) sequencial(tree.rigth, list)

  return list;
}

const _redoLinked = <T>(list: T[], tree?: BTree<T>, stack?: BTree<T>[]): BTree<T> | null => {
  if (!list.length) return null;
  tree = tree ? tree : { node: list.pop()! };
  stack = stack ? stack : [];
  const left = list.pop();
  const rigth = list.pop();
  if (left) {
    insert(tree, left, () => "go_left");
    if (tree?.left) stack!.push(tree!.left!);
  }
  if (rigth) {
    insert(tree, rigth, () => "go_right");
    if (tree?.rigth) stack!.push(tree!.rigth!);
  }
  const subTree = stack.pop();
  if (subTree)
    _redoLinked(list, subTree, stack)
  return tree;
}
export const innorder = <T>(tree?: BTree<T>): T[] => {
  if (!tree) return [];
  return [...innorder(tree.left), tree.node, ...innorder(tree.rigth)];
}
export const linked = <T>(tree: BTree<T>, list?: T[]): T[] => {
  list = list ? list : [];

  list.push(tree.node);

  if (tree.left) linked(tree.left, list)
  if (tree.rigth) linked(tree.rigth, list)

  return list;
}

export const redoLinked = <T>(list: T[], tree?: BTree<T>, stack?: BTree<T>[]): BTree<T> | null => {
  return _redoLinked(list.reverse())
}

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

export const postOrderNonRecursive = <T>(tree: BTree<T>): T[] => {
  const resultList: T[] = [];
  const cacheTreeList: BTree<T>[] = [tree];
  let refTree: BTree<T> = tree;

  const goLeft = (refTree: BTree<T>) => {
    while (refTree.left) {
      // cacheTreeList.push(refTree);
      if (refTree.left) {
        cacheTreeList.push(refTree.left);
        refTree = refTree.left;
      }
    }
  }

  while (cacheTreeList.length) {
    goLeft(refTree)
    refTree = cacheTreeList.pop()!;
    resultList.push(refTree.node);
    if (refTree.rigth) {
      cacheTreeList.push(refTree.rigth)
      refTree = refTree.rigth;
    }
  }
  return resultList;
}

export const count = <T>(tree?: BTree<T>): number => {
  return tree ? 1 + count(tree.left) + count(tree.rigth) : 0;
}
export const swap = <T>(tree: BTree<T>) => {
  const left = tree?.left;
  const rigth = tree?.rigth;
  tree.left = rigth;
  tree.rigth = left;
  if (rigth) swap(rigth);
  if (left) swap(left);
}
export const printree = <T>(tree?: BTree<T>, n?: number) => {
  if (!tree) return
  n = n ? n : 1;
  const t = "\t".repeat(n);
  console.log(`${t} node : ${tree.node}`)
  if (tree.left) {
    console.log(`${t} left :`)
    printree(tree.left, n + 1);
  }
  if (tree.rigth) {
    console.log(`${t} rigth :`)
    printree(tree.rigth, n + 1)
  }
}

