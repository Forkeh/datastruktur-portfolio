import { SinglyLinkedList } from "./singlyLinkedList";
import { Node } from "./node";

console.log("RUNNING");

const data1 = { prop: 1 };
const data2 = { prop: 2 };
const data3 = { prop: 3 };
const data4 = { prop: 4 };

const node1 = new Node(data1);
const singlyLinkedList = new SinglyLinkedList(node1);
singlyLinkedList.add(data2);
singlyLinkedList.add(data3);

singlyLinkedList.printList();
singlyLinkedList.clear();
singlyLinkedList.printList();


// console.log("firstNode:", singlyLinkedList.getFirstNode());

// const firstNode = singlyLinkedList.getFirstNode();
// console.log("firstNode", firstNode);

// console.log("NextNode:", singlyLinkedList.getNextNode(firstNode));

// console.log("Last:", singlyLinkedList.getLast());

// singlyLinkedList.printList();

// singlyLinkedList.remove(data1);

// singlyLinkedList.printList();
// console.log("Last:", singlyLinkedList.getLast());
