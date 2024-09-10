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

const list = new DoublyLinkedList(node1);

list.dumpList();
list.addFirst(data2);
list.dumpList();
list.addLast(data3);
list.dumpList();
list.removeLast()
list.dumpList();
// doublyLinkedList.removeFirst()
// doublyLinkedList.dumpList();
list.addFirst(list.removeFirst()!);
list.dumpList();
list.removeNode(node1);
list.dumpList();
