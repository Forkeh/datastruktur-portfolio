import NodeDoubly from "./nodeDoubly";

export default class DoublyLinkedList<T> {
    head: NodeDoubly<T> | null;
    tail: NodeDoubly<T> | null;
    length: number;

    constructor(head: NodeDoubly<T>) {
        this.head = head;
        this.tail = null;
        this.length = 1;
    }

    dumpList() {
        let current: NodeDoubly<T> | null = this.head;

        console.log("Length:", this.length);

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

            current = current.next;
        }
    }

    addFirst(data: T) {
        const node = new NodeDoubly(data);

        this.addNodeFirst(node);
    }

    addNodeFirst(newNode: NodeDoubly<T>) {
        if (this.head !== null) {
            this.head.prev = newNode;
        }
        newNode.next = this.head;
        this.head = newNode;

        this.length++;
    }

    addLast(data: T) {
        const node = new NodeDoubly(data);

        this.addNodeLast(node);
    }

    addNodeLast(newNode: NodeDoubly<T>) {
        if (this.head === null) {
            this.head = newNode;
        }

        let current = this.head;

        while (current.next) {
            current = current.next;
        }

        current.next = newNode;
        newNode.prev = current;

        this.length++;
    }
}
