class NodeSingly<T> {
    data: T;
    next: NodeSingly<T> | null;

    constructor(data: T) {
        this.data = data;
        this.next = null;
    }
}

export { NodeSingly };
