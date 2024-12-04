import { BinarySearchTree, BSTNode } from "./BinarySearchTree.js";

const comparatorNumbers = (a, b) => a - b;
const comparatorStrings = (a, b) => a.localeCompare(b);
const tree = new BinarySearchTree(comparatorStrings);

// tree.add(5);
// tree.add(3);
// tree.add(7);
// tree.add(2);
// tree.add(6);
// tree.add(4);
// tree.add(1);
tree.add("F");
tree.add("B");
tree.add("G");
tree.add("A");
tree.add("D");
tree.add("I");
tree.print();
console.log(tree.first());
console.log(tree.last());
tree.traverse();
const node3 = tree.root.left;
// const node8 = tree.root.right.right;
// console.log(node);

// tree.dfs(node2);
// tree.replaceChild(node7, node8, newNode);
tree.print();
console.log(tree.skew(node3));
// tree.add(-1);
// tree.add(8);
// tree.add(9);
tree.add("C");
tree.add("E");
tree.print();
// tree.add(10);
tree.add("H");
tree.print();
// tree.add(11);
tree.add("J");
tree.print();
// tree.add(12);
tree.print();
console.log(tree.contains("A"));


