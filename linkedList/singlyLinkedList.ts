import { Node } from "./node";

class SinglyLinkedList<T> {
    head: Node<T>;
    length: number;

    constructor(head: Node<T>) {
        this.head = head;
        this.length = 1;
    }

    add(data: T) {
        const newNode = new Node(data);

        newNode.next = this.head;

        this.head = newNode;

        this.length++;
    }

    remove(data: T) {
        if (!this.head) return;

        // If the head node itself holds the data to be deleted
        if (this.head.data === data) {
            if (this.head.next) {
                this.head = this.head.next;
            } else {
                this.head.next = null;
            }
            this.length--;
            return;
        }

        let current = this.head;

        // Find the node before the node we want to remove
        while (current.next && current.next.data !== data) {
            current = current?.next;
        }

        // If the node to be deleted was found
        if (current.next) {
            current.next = current.next.next;
            this.length--;
        }
    }

    getFirst() {
        return this.head.data;
    }

    getLast() {
        let current = this.head;

        while (current.next) {
            current = current.next;
        }
        return current.data;
    }

    printList() {
        let current: Node<T> | null = this.head;

        console.log("Length:", this.length);

        while (current) {
            console.log("data: ", current.data, "next data:", current.next?.data);

            current = current.next;
        }
    }

    get(index: number) {
        if (this.length <= index) {
            console.error("Index out of bounds");
            return null;
        }

        let currentIndex = 0;
        let current = this.head;

        while (currentIndex < index) {
            current = current?.next || current;
            currentIndex++;
        }

        return current;
    }

    getFirstNode() {
        return this.head;
    }

    getNextNode(node: Node<T>) {
        let current: Node<T> | null = this.head;

        while (current && node !== current) {
            current = current.next;
        }

        return current?.next || null;
    }
}

export { SinglyLinkedList };
