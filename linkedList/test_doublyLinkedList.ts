import DoublyLinkedList from "./doublyLinkedList";
import NodeDoubly from "./nodeDoubly";

console.log("RUNNING");

const data1 = { prop: 1 };
const data2 = { prop: 2 };
const data3 = { prop: 3 };
const data4 = { prop: 4 };
const data5 = { prop: 5 };

const node1 = new NodeDoubly(data1);
const node2 = new NodeDoubly(data2);
const node3 = new NodeDoubly(data3);
const node4 = new NodeDoubly(data4);
const node5 = new NodeDoubly(data5);

const list = new DoublyLinkedList(node1);

list.dumpList();
list.addNodeFirst(node2);
list.dumpList();
list.addNodeFirst(node3);
list.dumpList();
list.insertBeforeNode(node4, node3);
list.dumpList();
list.insertAfterNode(node5, node1);
list.dumpList();
list.swapNodes(node5, node4);
list.dumpList();
