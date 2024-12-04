import { BinarySearchTree } from "./BinarySearchTree.js";

export class AVLTree extends BinarySearchTree {
    constructor() {
        super();
    }

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
            if (this.comperatorfunction(item, current.item) < 0) {
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
        if (this.comperatorfunction(item, parent.item) < 0) {
            parent.left = newNode;
        } else {
            parent.right = newNode;
        }

        // Update the height of the parent node
        this.maintain(parent);

        // Increment the size of the tree
        this.size++;
    }

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
        const newRoot = node.left;
        const parent = node.parent;

        if (parent) {
            if (parent.left === node) {
                parent.left = newRoot;
            } else {
                parent.right = newRoot;
            }
        } else {
            this.root = newRoot;
        }

        node.left = newRoot.right;
        newRoot.right = node;

        this.updateHeight(node);
        this.updateHeight(newRoot);

        return newRoot;
    }

    rotateLeft(node) {
        const newRoot = node.right;
        const parent = node.parent;

        if (parent) {
            if (parent.left === node) {
                parent.left = newRoot;
            } else {
                parent.right = newRoot;
            }
        } else {
            this.root = newRoot;
        }

        node.right = newRoot.left;
        newRoot.left = node;

        this.updateHeight(node);
        this.updateHeight(newRoot);

        return newRoot;
    }

    rebalance(node) {
        const skew = this.skew(node);

        if (skew < -1) {
            if (this.skew(node.left) > 0) {
                node.left = this.rotateLeft(node.left);
            }
            this.rotateRight(node);
        } else if (skew > 1) {
            if (this.skew(node.right) < 0) {
                node.right = this.rotateRight(node.right);
            }
            this.rotateLeft(node);
        }
    }

    maintain(node) {
        this.updateHeight(node);
        const skew = this.skew(node);

        if (skew < -1) {
            console.log(`Træ er skævt mod venstre ved ${node.item}!`);
            this.rebalance(node);
        } else if (skew > 1) {
            console.log(`Træ er skævt mod højre ved ${node.item}!`);
            this.rebalance(node);
        }

        if (node.parent) {
            this.maintain(node.parent);
        }
    }
}
