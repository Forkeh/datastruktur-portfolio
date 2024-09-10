import { Node } from "./node";

class SinglyLinkedList<T> {
    head: Node<T> | null;
    length: number;

    constructor(head: Node<T>) {
        this.head = head;
        this.length = 1;
    }

    printList() {
        let current: Node<T> | null = this.head;

        console.log("Length:", this.length);

        if (!current) {
            console.log("List is empty!");
        }

        while (current) {
            console.log("data: ", current.data, "next data:", current.next?.data);

            current = current.next;
        }
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
        return this.head?.data || null;
    }

    getLast() {
        if (!this.head) return null;

        let current = this.head;

        while (current.next) {
            current = current.next;
        }
        return current.data;
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

    getLastNode() {
        if (!this.head) return;

        let current = this.head;

        while (current.next) {
            current = current.next;
        }

        return current;
    }

    getNodeWith(data: T) {
        if (!this.head) return null;

        let current: Node<T> | null = this.head;

        while (current && current.data !== data) {
            current = current.next;
        }

        return current;
    }

    removeNode(node: Node<T>) {
        if (!this.head) return;

        if (this.head === node) {
            this.head = this.head.next;
            this.length--;
            return;
        }

        let current: Node<T> | null = this.head;

        while (current && current.next !== node) {
            current = current.next;
        }

        if (current && current.next === node) {
            current.next = current.next.next || null;
            this.length--;
        }
    }

    removeFirstNode() {
        if (!this.head) return;

        if (this.head.next) {
            this.head = this.head.next;
        } else {
            this.head = null;
        }
        this.length--;
    }

    removeLastNode() {
        if (!this.head) return;

        if (!this.head.next) {
            this.head = null;
            this.length--;
            return;
        }

        let current = this.head;

        while (current.next && current.next.next) {
            current = current.next;
        }

        current.next = null;
        this.length--;
    }

    insertAfter(nodeTarget: Node<T>, newNode: Node<T>) {
        if (!this.head) return;

        let current: Node<T> | null = this.head;

        while (current && current !== nodeTarget) {
            current = current.next;
        }

        if (current) {
            newNode.next = current.next;
            nodeTarget.next = newNode;
            this.length++;
        }
    }

    clear() {
        this.head = null;
        this.length = 0;
    }

    size() {
        return this.length;
    }
}

export { SinglyLinkedList };
