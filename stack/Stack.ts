class NodeStack<T> {
    data: T;
    next: NodeStack<T> | null;

    constructor(data: T) {
        this.data = data;
        this.next = null;
    }
}

class Stack<T> {
    tail: NodeStack<T> | null;
    count: number;

    constructor() {
        this.tail = null;
        this.count = 0;
    }

    printStack() {
        let current: NodeStack<T> | null = this.tail;

        console.log("\nStack");
        console.log("============");
        console.log("tail: ", this.tail?.data);
        console.log("Length: ", this.count);
        console.log("============");

        if (!current) {
            console.log("List is empty!");
            return;
        }

        while (current) {
            console.log("node: ", current.data, "next:", current.next?.data || null);

            current = current.next;
        }
    }

    push(data: T): void {
        const newNode = new NodeStack(data);

        newNode.next = this.tail;
        this.tail = newNode;
        this.count++;
    }

    pop(): T | null {
        if (!this.tail) return null;

        const topOfStack = this.tail;

        this.tail = topOfStack?.next;
        this.count--;

        return topOfStack?.data;
    }

    peek(): T | null {
        return this.tail ? this.tail.data : null;
    }

    size(): number {
        return this.count;
    }

    get(index: number): T | null {
        if (!this.tail || index >= this.count || index < 0) return null;

        let current: NodeStack<T> | null = this.tail;
        let curIndex = 0;

        while (current && curIndex !== index) {
            current = current.next;
            curIndex++;
        }
        return current ? current.data : null;
    }
}

export { Stack, NodeStack };
