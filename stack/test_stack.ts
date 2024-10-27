import { Stack } from "./Stack";

const data1 = 1;
const data2 = 2;
const data3 = 3;
const data4 = 4;

const stack = new Stack();

// stack.printStack();
stack.push(data1);
stack.push(data2);
stack.push(data3);
stack.push(data4);
stack.printStack();
console.log("Peek: ", stack.peek());
// console.log("Pop: ", stack.pop());
// console.log("Pop: ", stack.pop());
stack.printStack();
console.log("Size: ", stack.size());
console.log("Index at: ", stack.get(2));
