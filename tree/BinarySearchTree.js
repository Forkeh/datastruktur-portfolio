export class BinarySearchTree {
    root;
    size;
    constructor() {}

    add(item) {
        // If the tree is empty, create a new node and set it as the root
        if (!this.root) {
            this.root = new BSTNode(item, null);
            this.size = 1;
            return;
        }

        // Otherwise, find the correct place to insert the new node
        let current = this.root;
        let parent = null;

        while (current && current.item !== item) {
            parent = current;
            if (item < current.item) {
                current = current.left;
            } else {
                current = current.right;
            }
            // If the item is already in the tree, return
            if (current && current.item === item) {
                return;
            }
        }

        // Create the new node and append it to the parent
        const newNode = this.createChild(item, parent);
        if (item < parent.item) {
            parent.left = newNode;
        } else {
            parent.right = newNode;
        }

        // Update the height of the parent node
        this.maintain(parent);

        //TODO
        // Rebalance the tree
        // this.rebalance(parent);

        // Increment the size of the tree
        this.size++;
    }

    contains(item) {
        let current = this.root;
        while (current) {
            if (item === current.item) {
                return true;
            } else if (item < current.item) {
                current = current.left;
            } else {
                current = current.right;
            }
        }

        return false;
    }

    first() {
        // If the tree is empty, return null
        if (!this.root) {
            return null;
        }

        // Otherwise, find the left-most node
        let current = this.root;
        while (current.left) {
            current = current.left;
        }

        return current.item;
    }

    last() {
        // If the tree is empty, return null
        if (!this.root) {
            return null;
        }

        // Otherwise, find the right-most node
        let current = this.root;
        while (current.right) {
            current = current.right;
        }

        return current.item;
    }

    traverse() {
        // If the tree is empty, return an empty array
        if (!this.root) {
            return [];
        }

        // Otherwise, traverse the tree in-order
        const result = [];
        const stack = [];
        let current = this.root;
        while (current || stack.length) {
            while (current) {
                stack.push(current);
                current = current.left;
            }
            current = stack.pop();
            result.push(current.item);
            current = current.right;
        }
        console.log(result);
    }

    print() {
        // Print the tree in a nice way - by creating a (jagged) 2D array of the tree
        // each level (starting from root) is an array in the array that doubles in size from the previous level

        // breaks if the tree is too deep - but that's a problem for another day

        // Use DFS to fill array with values
        const treeArray = [];
        let height = 0; // and while we're at it, calculate the height of the tree
        buildTreeArray(this.root, 0, 0);

        // Does a Depth-First-Scan of the Tree,
        // keeping track of the current depth (how far down from the top)
        // and the current indent (how far right from the (possible) left-most node at this depth)
        // stores the node values in a 2D array
        function buildTreeArray(node, depth, indent) {
            if (!node) {
                return;
            }
            height = Math.max(height, depth);
            // insert this node value in the 2D array
            if (!treeArray[depth]) treeArray[depth] = [];
            treeArray[depth][indent] = node.item;
            // visit its children - remember to double indent
            buildTreeArray(node.left, depth + 1, indent * 2);
            buildTreeArray(node.right, depth + 1, indent * 2 + 1);
        }

        // Apparently I'm not smart enough to calculate these, so here's a pre-calculated list
        const indentations = [1, 2, 5, 11, 23, 46, 93];

        let treeString = " ";
        // Display array - one level at a time
        for (let depth = 0; depth < treeArray.length; depth++) {
            const values = treeArray[depth];

            // Calculate indent for this depth (or find it in the pre-calculated table)
            let currentHeight = height - depth; // currentHeight is the distance from the bottom of the tree
            let indent = indentations[currentHeight];

            // Only display tree structure if we are not at the top
            if (depth > 0) {
                // Loop through half the values - and show a subtree with left and right
                for (let i = 0; i < values.length / 2; i++) {
                    treeString += " ".repeat(indent);
                    // Only show sub-tree if there are some values below
                    if (values[i * 2] != undefined || values[i * 2 + 1] != undefined) {
                        treeString += "┌";
                        treeString += "─".repeat(indent > 1 ? indent : 0);
                        treeString += "┴";
                        treeString += "─".repeat(indent > 1 ? indent : 0);
                        treeString += "┐";
                    } else {
                        treeString += "   " + "  ".repeat(indent > 1 ? indent : 0);
                    }
                    treeString += " ".repeat(indent);
                    // add a single space before the next "block"
                    treeString += " ";
                }
                // and finalize the current line
                treeString += "\n";
            }

            // Indent numbers one less than their "tree drawings"
            // Unless it is the first one, then it is two (or maybe three) less ... mystic math!
            if (depth == 0) {
                treeString += " ".repeat(indent - 2);
            } else {
                treeString += " ".repeat(indent - 1);
            }

            // display values
            for (let i = 0; i < values.length; i++) {
                // if both children are undefined, don't show any of then
                // if only one child is, show it as underscores _
                const showUndefined = !values[i - (i % 2)] && !values[i - (i % 2) + 1] ? " " : "_";
                // if depth is lowest (height-1) - pad values to two characters
                if (depth == height) {
                    treeString += String(values[i] ?? showUndefined.repeat(2)).padStart(2, " ");
                    // and add a single space
                    treeString += " ";
                } else {
                    // otherwise center values in block of three
                    treeString += String(values[i] ?? showUndefined.repeat(3))
                        .padEnd(2, " ")
                        .padStart(3, " ");

                    // and add twice the indentation of spaces + 1 in the middle
                    treeString += " ".repeat(indent - 1);
                    treeString += " ";
                    treeString += " ".repeat(indent - 1);
                }
            }

            // finalize the value-line
            treeString += "\n";
        }

        console.log(treeString);
    }

    // ----- Internal methods to operate on nodes ----- //

    createChild(item, parent = null) {
        return new BSTNode(item, parent);
    }

    replaceChild(parent, oldChild, newChild) {
        if (parent.left === oldChild) {
            parent.left = newChild;
        } else {
            parent.right = newChild;
        }

        if (newChild) {
            newChild.parent = parent;
            newChild.left = oldChild.left;
            newChild.right = oldChild.right;

            if (oldChild.left) {
                oldChild.left.parent = newChild;
            }

            if (oldChild.right) {
                oldChild.right.parent = newChild;
            }
        }

        this.updateHeight(newChild);
    }

    // TODO Unused?
    // dfs(node) {
    //     if (!node) {
    //         return;
    //     }

    //     this.dfs(node.left);
    //     console.log(node.item);
    //     this.dfs(node.right);
    // }

    updateHeight(node) {
        // Calculate the height of the node based on the height of its children
        const leftHeight = node.left ? node.left.height : -1;
        const rightHeight = node.right ? node.right.height : -1;
        node.height = 1 + Math.max(leftHeight, rightHeight);
    }

    skew(node) {
        let leftHeight = node.left ? node.left.height : -1;
        let rightHeight = node.right ? node.right.height : -1;
        return rightHeight - leftHeight;
    }

    rotateRight(node) {
        //TODO
    }

    rebalance(node) {
        //TODO
    }

    maintain(node) {
        //TODO
        this.updateHeight(node);
        const skew = this.skew(node);

         if (skew < -1) {
             console.log(`Træ er skævt mod venstre ved ${node.item}!`);
         } else if (skew > 1) {
             console.log(`Træ er skævt mod højre ved ${node.item}!`);
         }

        if (node.parent) {
            this.maintain(node.parent);
        }
    }
}

export class BSTNode {
    item;
    parent;
    left;
    right;
    height;
    constructor(item, parent = null) {
        this.item = item;
        this.parent = parent;
        this.height = 0;
        this.left = null;
        this.right = null;
    }

    leftChild() {
        return this.left;
    }

    rightChild() {
        return this.right;
    }

    hasChildNodes() {
        return this.left || this.right;
    }

    appendChild(child) {
        if (child.item < this.item) {
            this.left = child;
        } else {
            this.right = child;
        }
    }

    removeChild(child) {
        if (child.item < this.item) {
            this.left = null;
        } else {
            this.right = null;
        }
    }
}
