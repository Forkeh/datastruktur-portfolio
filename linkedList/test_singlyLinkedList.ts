import { SinglyLinkedList } from "./singlyLinkedList";
import { Node } from "./node";

console.log("RUNNING");

const data1 = { prop: 1 };
const data2 = { prop: 2 };
const data3 = { prop: 3 };

const node1 = new Node(data1);
const singlyLinkedList = new SinglyLinkedList(node1);
singlyLinkedList.add(data2);
singlyLinkedList.add(data3);

singlyLinkedList.printList();

console.log("from index:", singlyLinkedList.get(0));

// const firstNode = singlyLinkedList.getFirstNode();
// console.log("firstNode", firstNode);

// console.log("NextNode:", singlyLinkedList.getNextNode(firstNode));

// console.log("Last:", singlyLinkedList.getLast());

// singlyLinkedList.remove(data2);

// singlyLinkedList.printList();

// singlyLinkedList.remove(data1);

// singlyLinkedList.printList();
// console.log("Last:", singlyLinkedList.getLast());
