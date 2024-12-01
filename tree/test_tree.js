import { Node, Tree } from "./Tree.js";

const root = new Node(null);

const tree = new Tree(root);

const node01 = new Node(1);
const node02 = new Node(2);
const node03 = new Node(3);
const node04 = new Node(4);
const node05 = new Node(5);
const node06 = new Node(6);

root.appendChild(node01);
root.appendChild(node02);
node01.appendChild(node03);
node01.appendChild(node04);
node02.appendChild(node05);
node04.appendChild(node06);

console.log("FIRST CHILD: ", node04.firstChild());
console.log("LAST CHILD: ", node04.lastChild());
console.log("HAS CHILD NODES: ", node04.hasChildNodes());

// node01.removeChild(node03);
// node01.replaceChild(node03, node04);
tree.addValue(7);
console.log(tree.findValue(6));
tree.removeValue(4);
tree.dump();
