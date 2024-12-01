export class Node {
    constructor(parent, childNodes, value) {
        this.parent = parent;
        this.childNodes = childNodes;
        this.value = value;
    }

    firstChild() {
        return this.childNodes[0];
    }

    lastChild() {
        return this.childNodes[this.childNodes.length - 1];
    }

    hasChildNodes() {
        return this.childNodes.length > 0;
    }

    appendChild(child) {
        //TODO
    }

    removeChild(child) {
        //TODO
    }

    replaceChild(newChild, oldChild) {
        //TODO
    }
}

export class Tree {
    constructor(root) {
        this.root = root;
    }

    dump() {
        //TODO
    }
}
