import { BinarySearchTree, BSTNode } from "./BinarySearchTree.js";

const tree = new BinarySearchTree();

tree.add(5);
tree.add(3);
tree.add(7);
tree.add(2);
tree.add(6);
// tree.add(4);
tree.add(1);
// tree.add(9);
tree.print();
console.log(tree.contains(1));
console.log(tree.first());
console.log(tree.last());
tree.traverse();
const node7 = tree.root.left;
// const node8 = tree.root.right.right;
const newNode = new BSTNode(10);
// console.log(node);

// tree.dfs(node2);
// tree.replaceChild(node7, node8, newNode);
tree.print();
console.log(tree.skew(node7));

