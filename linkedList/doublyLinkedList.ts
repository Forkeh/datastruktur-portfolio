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

        const oldTail = this.tail;
        this.tail = this.tail.prev;

        if (this.tail) {
            this.tail.next = null;
        } else {
            this.head = null;
        }
        this.length--;

        return oldTail.data;
    }

    removeFirst() {
        if (!this.head) return;

        const oldHead = this.head;
        this.head = this.head.next;

        if (this.head) {
            this.head.prev = null;
        }

        this.length--;

        return oldHead.data;
    }

    removeNode(node: NodeDoubly<T>) {
        if (!this.head) return;

        let current: NodeDoubly<T> | null = this.head;

        while (current && current !== node) {
            current = current.next;
        }

        if (current === node) {
            const nodePrev = current.prev;

            const nodeNext = current.next;

            if (nodePrev) {
                nodePrev.next = nodeNext;
            } else {
                this.head = nodeNext;
            }

            if (nodeNext) {
                nodeNext.prev = nodePrev;
            } else {
                this.tail = nodePrev;
            }

            this.length--;
        }
    }

    insertBeforeNode(newNode: NodeDoubly<T>, existingNode: NodeDoubly<T>) {
        if (!this.head) return;

        let current: NodeDoubly<T> | null = this.head;

        while (current && current !== existingNode) {
            current = current.next;
        }

        if (current === existingNode) {
            const nodePrev = current.prev;

            current.prev = newNode;
            newNode.next = current;
            newNode.prev = nodePrev;

            if (nodePrev) {
                nodePrev.next = newNode;
            } else {
                this.head = newNode;
            }
            this.length++;
        }
    }

    insertAfterNode(newNode: NodeDoubly<T>, existingNode: NodeDoubly<T>) {
        if (!this.head) return;

        let current: NodeDoubly<T> | null = this.head;

        while (current && current !== existingNode) {
            current = current.next;
        }

        if (current === existingNode) {
            const nodeNext = current.next;

            current.next = newNode;
            newNode.prev = current;
            newNode.next = nodeNext;

            if (nodeNext) {
                nodeNext.prev = newNode;
            } else {
                this.tail = newNode;
            }
            this.length++;
        }
    }
}
