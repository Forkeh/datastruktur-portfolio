import DoublyLinkedList from "./doublyLinkedList";
import NodeDoubly from "./nodeDoubly";

console.log("RUNNING");

const data1 = { prop: 1 };
const data2 = { prop: 2 };
const data3 = { prop: 3 };
const data4 = { prop: 4 };

const node1 = new NodeDoubly(data1);
const node2 = new NodeDoubly(data2);
const node3 = new NodeDoubly(data3);

const doublyLinkedList = new DoublyLinkedList(node1);

doublyLinkedList.dumpList();
doublyLinkedList.addFirst(data2);
doublyLinkedList.dumpList();
doublyLinkedList.addLast(data3);
doublyLinkedList.dumpList();
