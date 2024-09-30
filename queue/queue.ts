class QueueNode<T> {
    data: T;
    next: QueueNode<T> | null;

    constructor(data: T) {
        this.data = data;
        this.next = null;
    }
}

export class Queue<T> {
    private head: QueueNode<T> | null;
    private tail: QueueNode<T> | null;
    private length: number;

    constructor() {
        this.head = null;
        this.tail = this.head;
        this.length = 0;
    }

    dump() {
        let current: QueueNode<T> | null = this.head;

        console.log("Queue");
        console.log("============");
        console.log("head", this.head?.data);
        console.log("tail", this.tail?.data);
        console.log("Length:", this.length);
        console.log("============");

        if (!current) {
            console.log("List is empty!");
        }

        while (current) {
            console.log("data: ", current.data, "next:", current.next?.data || null);

            current = current.next;
        }
    }

    enqueue(data: T) {
        const newNode = new QueueNode(data);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            let current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = newNode;
            this.tail = newNode;
        }

        this.length++;
    }

    dequeue() {
        if (!this.head) return null;

        const currHead = this.head;
        this.head = currHead.next;

        if (!this.head) {
            this.tail = null;
        }

        currHead.next = null;

        this.length--;

        return currHead.data;
    }

    peek() {
        return this.head?.data;
    }

    size() {
        return this.length;
    }

    get(index: number) {
        if (!this.head) return;

        if (index >= this.length) {
            throw new Error("Index out of bounds");
        }

        let current = this.head;
        let curIndex = 0;

        while (current.next && curIndex !== index) {
            current = current.next;
            curIndex++;
        }
        return current;
    }
}
