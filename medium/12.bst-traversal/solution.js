class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

QUnit.module("BST Traversal");
QUnit.test("nomeDaFuncao", function (assert) {
    const root = new BST(10);
    root.left = new BST(5);
    root.left.left = new BST(2);
    root.left.left.left = new BST(1);
    root.left.right = new BST(5);
    root.right = new BST(15);
    root.right.right = new BST(22);
    assert.deepEqual(inOrderTraverse(root, []), [1, 2, 5, 5, 10, 15, 22]);
    assert.deepEqual(preOrderTraverse(root, []), [10, 5, 2, 1, 5, 15, 22]);
    assert.deepEqual(postOrderTraverse(root, []), [1, 2, 5, 5, 22, 15, 10]);
});


function inOrderTraverse(tree, array) {
    if (tree != null) {
        inOrderTraverse(tree.left, array);
        array.push(tree.value);
        inOrderTraverse(tree.right, array);
    }
    return array;
}

function preOrderTraverse(tree, array) {
    if (tree != null) {
        array.push(tree.value);
        preOrderTraverse(tree.left, array);
        preOrderTraverse(tree.right, array);
    }
    return array;
}

function postOrderTraverse(tree, array) {
    if (tree != null) {
        postOrderTraverse(tree.left, array);
        postOrderTraverse(tree.right, array);
        array.push(tree.value);
    }
    return array;
}
