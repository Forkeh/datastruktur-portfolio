import { Queue } from "./queue";

const data1 = { row: 0, col: 0 };
const data2 = { row: 1, col: 1 };
const data3 = { row: 2, col: 2 };

const queue = new Queue();

// queue.dump();
queue.enqueue(data1);
queue.enqueue(data2);
queue.enqueue(data3);
console.log("peek:", queue.peek());
console.log("size", queue.size());
console.log("get", queue.get(2));

// queue.dump();
// console.log("dequeue:", queue.dequeue());
// queue.dump();
// console.log("dequeue:", queue.dequeue());
// queue.dump();
// console.log("dequeue:", queue.dequeue());
// queue.dump();
