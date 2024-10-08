export default class NodeDoubly<T> {
    data: T | null;
    prev: NodeDoubly<T> | null;
    next: NodeDoubly<T> | null;

    constructor(data: T) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}
