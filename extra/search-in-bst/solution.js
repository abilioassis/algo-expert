class BST {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

const root = new BST(15);
root.left = new BST(6);
root.right = new BST(18);
root.left.left = new BST(3);
root.left.right = new BST(7);
root.right.left = new BST(17);
root.right.right = new BST(20);
root.left.left.left = new BST(2);
root.left.left.right = new BST(4);
root.left.right.right = new BST(13);
root.left.right.right.left = new BST(9);

QUnit.module("Search BST");
QUnit.test("InOrder", function (assert) {
    console.log('InOrder:');
    //assert.deepEqual(traverseInOrder(root1), undefined);
    assert.deepEqual(traverseInOrder(root), undefined);
    console.log('-------------------');
});
QUnit.test("PreOrder", function (assert) {
    console.log('PreOrder:');
    //assert.deepEqual(traversePreOrder(root1), undefined);    
    assert.deepEqual(traversePreOrder(root), undefined);
    console.log('-------------------');
});
QUnit.test("PosOrder", function (assert) {
    console.log('PosOrder:');
    //assert.deepEqual(traversePosOrder(root1), undefined);
    assert.deepEqual(traversePosOrder(root), undefined);
    console.log('-------------------');
});

QUnit.test("FindKey", function (assert) {
    console.log('FindKey:');
    assert.deepEqual(findKey(root, 7), 7);
    assert.deepEqual(findKey(root, 9), 9);
    assert.deepEqual(findKey(root, 20), 20);
    assert.deepEqual(findKey(root, 1), null);
    console.log('-------------------');
});

// Time: O(n) | Space: O(1)
function traverseInOrder(tree) {
    // base case
    if (tree === null) return null;
    // recursão
    traverseInOrder(tree.left);
    console.log(tree.key);
    traverseInOrder(tree.right);
}

// Time: O(n) | Space: O(1)
function traversePreOrder(tree) {
    // base case
    if (tree === null) return null;
    // recursão
    console.log(tree.key);
    traversePreOrder(tree.left);
    traversePreOrder(tree.right);
}

// Time: O(n) | Space: O(1)
function traversePosOrder(tree) {
    // base case
    if (tree === null) return null;
    // recursão
    traversePosOrder(tree.left);
    traversePosOrder(tree.right);
    console.log(tree.key);
}

// Time: O(n) | Space: O(h), h = height
function findKey(tree, key) {
    // base cases
    if (tree === null) return null;
    if (key === tree.key) return key;
    if (key < tree.key) {
        return findKey(tree.left, key);
    } else {
        return findKey(tree.right, key);
    }
}

// Time: O(n) | Space: O(1)
function findKey2(tree, key) {
    while (tree != null) {
        if (tree.key === key) {
            return key;
        } else if (key < tree.key) {
            tree = tree.left;
        } else {
            tree = tree.right;
        }
    }
    // retorna null se não achar
    return null;
}