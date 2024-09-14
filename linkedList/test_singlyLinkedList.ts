import { SinglyLinkedList } from "./singlyLinkedList";
import { NodeSingly } from "./nodeSingly";

console.log("RUNNING");

const data1 = { prop: 1 };
const data2 = { prop: 2 };
const data3 = { prop: 3 };
const data4 = { prop: 4 };

const node1 = new NodeSingly(data1);
const nodeNew = new NodeSingly(data4);

const singlyLinkedList = new SinglyLinkedList();

singlyLinkedList.add(data1);
singlyLinkedList.add(data2);
singlyLinkedList.add(data3);

const node = singlyLinkedList.getLastNode();

singlyLinkedList.printList();
singlyLinkedList.insertAfter(node!, nodeNew);
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
