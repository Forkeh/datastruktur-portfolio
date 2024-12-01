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
    root;

    constructor(root) {
        this.root = root;
    }

    dump() {
        console.log("Tree Structure:");
        traverse(this.root);

        function traverse(node, depth = 0) {
            if (!node) return;

            console.log(`${" ".repeat(depth * 2)}- ${node.value}`);
            for (const child of node.childNodes) {
                traverse(child, depth + 1);
            }
        }
    }

    addValue(value) {
        const newNode = new Node(value);
        this.root.appendChild(newNode);
    }

    findValue(value) {
        return this.bfs(value);
    }

    removeValue(value) {
        const foundNode = this.bfs(value);

        if (!foundNode) {
            console.log(`Node with value ${value} not found.`);
            return;
        }

        if (foundNode.parent) {
            foundNode.parent.removeChild(foundNode);
        }

        foundNode.childNodes.forEach((child) => foundNode.removeChild(child));

        foundNode.parent = null;
    }

    bfs(value) {
        const queue = [this.root];

        while (queue.length) {
            // console.log("--- QUEUE ---");
            // console.log(queue);

            const current = queue.shift();

            if (current.value === value) {
                return current;
            }

            if (current.childNodes) {
                current.childNodes.forEach((child) => queue.push(child));
            }
        }
        return null;
    }
}
