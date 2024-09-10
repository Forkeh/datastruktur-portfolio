import NodeDoubly from "./nodeDoubly";

export default class DoublyLinkedList<T> {
    head: NodeDoubly<T> | null;
    tail: NodeDoubly<T> | null;
    length: number;

    constructor(head: NodeDoubly<T>) {
        this.head = head;
        this.tail = this.head;
        this.length = 1;
    }

    dumpList() {
        let current: NodeDoubly<T> | null = this.head;

        console.log("Linked List");
        console.log("============");
        console.log("head", this.head?.data);
        console.log("tail", this.tail?.data);
        console.log("Length:", this.length);
        console.log("============");

        if (!current) {
            console.log("List is empty!");
        }

        while (current) {
            console.log(
                "prev:",
                current.prev?.data || null,
                "data: ",
                current.data,
                "next:",
                current.next?.data || null
            );

            // console.log("node:", current.data);
            // console.log("---------------");
            // console.log("prev:", current.prev?.data || null);
            // console.log("next:", current.next?.data || null);

            current = current.next;
        }
    }

    addFirst(data: T) {
        const node = new NodeDoubly(data);

        this.addNodeFirst(node);
    }

    addNodeFirst(newNode: NodeDoubly<T>) {
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }

        this.length++;
    }

    addLast(data: T) {
        const node = new NodeDoubly(data);

        this.addNodeLast(node);
    }

    addNodeLast(newNode: NodeDoubly<T>) {
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail!.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        this.length++;
    }

    removeLast() {
        if (!this.tail) return;

        this.tail = this.tail.prev;

        if (this.tail) {
            this.tail.next = null;
        } else {
            this.head = null;
        }
        this.length--;
    }

    removeFirst() {
        if (!this.head) return;

        this.head = this.head.next;

        if (this.head) {
            this.head.prev = null;
        }

        this.length--;
    }
}
