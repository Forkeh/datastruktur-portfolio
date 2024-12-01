import { Node, Tree } from "./Tree.js";

const root = new Node(null, [], null);

const node01 = new Node(root, [], 1);
const node02 = new Node(root, [], 2);
const node03 = new Node(node01, [], 3);
const node04 = new Node(node01, [], 4);
const node05 = new Node(node02, [], 5);
const node06 = new Node(node03, [], 6);

root.childNodes.push(node01, node02);
node01.parent = root;
node02.parent = root;
node01.childNodes.push(node03, node04);
node02.childNodes.push(node05);
node03.childNodes.push(node06);

console.log("FIRST CHILD: ", root.firstChild());
console.log("LAST CHILD: ", root.lastChild());
console.log("HAS CHILD NODES: ", root.hasChildNodes());
