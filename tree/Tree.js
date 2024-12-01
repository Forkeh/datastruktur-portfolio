export class Node {
    parent = null;
    childNodes = [];
    value;

    constructor(value) {
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
        child.parent = this;
        this.childNodes.push(child);
    }

    removeChild(child) {
        const index = this.childNodes.indexOf(child);
        if (index > -1) {
            this.childNodes.splice(index, 1);
        }
    }

    replaceChild(newChild, oldChild) {
        const index = this.childNodes.indexOf(oldChild);

        if (index !== -1) {
            newChild.parent = this;
            this.childNodes[index] = newChild;
            oldChild.parent = null;
        }
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
