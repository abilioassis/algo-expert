// This is the class of the input tree. Do not edit.
class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const root = new BST(10);
root.left = new BST(5);
root.left.left = new BST(2);
root.left.left.left = new BST(1);
root.left.right = new BST(6);
root.right = new BST(15);
root.right.left = new BST(13);
root.right.left.right = new BST(14);
root.right.right = new BST(22);

QUnit.module("Find Value in BST");
QUnit.test("findValueInBst", function (assert) {
    assert.deepEqual(findValueInBst(root, 10), 10);
    assert.deepEqual(findValueInBst(root, 1), 1);
    assert.deepEqual(findValueInBst(root, 22), 22);
    assert.deepEqual(findValueInBst(root, 14), 14);
    assert.deepEqual(findValueInBst(root, 21), null);
    assert.deepEqual(findValueInBst(root, 3), null);
});

/* function findValueInBst(tree, target) {
    if (tree === null) return null;
    if (tree.value === target) return tree.value;
    if (target < tree.value) {
        return findValueInBst(tree.left, target);
    } else {
        return findValueInBst(tree.right, target);
    }
} */

function findValueInBst(tree, target) {
    let no = tree;
    while (no != null) {
        if (target === no.value) {
            return no.value;
        } else if (target < no.value) {
            no = no.left;
        } else {
            no = no.right;
        }
    }
    return null;
}

QUnit.module("Find Closest Value in BST");
QUnit.test("findClosestValueInBst", function (assert) {
    assert.deepEqual(findClosestValueInBst(root, 10), 10);
    assert.deepEqual(findClosestValueInBst(root, 14), 14);
    assert.deepEqual(findClosestValueInBst(root, 12), 13);
    assert.deepEqual(findClosestValueInBst(root, 16), 15);
});

function findClosestValueInBst(tree, target) {
    let no = tree, noMaisProximo = tree;
    let distancia = Math.abs(no.value - target);

    const atualizarNoMaisProximo = function() {
        if (no != null && (Math.abs(no.value - target) < distancia)) {
            distancia = Math.abs(no.value - target);
            noMaisProximo = no;
        }
    }

    while (no != null) {
        if (target === no.value) {
            return no.value;
        } else if (target < no.value) {
            no = no.left; 
            atualizarNoMaisProximo();
        } else {
            no = no.right;
            atualizarNoMaisProximo();
        }
    }
    return noMaisProximo.value;
}

QUnit.module("Find Minimum in BST");
QUnit.test("findMinimumInBst", function (assert) {
    assert.deepEqual(findMinimumInBst(root), 1);
});

function findMinimumInBst(tree) {
    if (tree === null) return null;
    // o valor mínimo estará sempre na subárvore à esquerda
    let minTree = tree;
    while (minTree.left != null) {
        minTree = minTree.left
    }
    return minTree.value;
}

QUnit.module("Find Maximum in BST");
QUnit.test("findMaximumInBst", function (assert) {
    assert.deepEqual(findMaximumInBst(root), 22);
});

function findMaximumInBst(tree) {
    if (tree === null) return null;
    // o valor máximo estará sempre na subárvore à direita
    let maxTree = tree;
    while (maxTree.right != null) {
        maxTree = maxTree.right;
    }
    return maxTree.value;
}

/*
Percorre todos os nós em ordem
*/
QUnit.module("Traverse BST");
QUnit.test("traverseBstInOrder", function (assert) {
    assert.deepEqual(traverseBstInOrder(root), null);
});
QUnit.test("traverseBstInPreOrder", function (assert) {
    assert.deepEqual(traverseBstInPreOrder(root), null);
});
QUnit.test("traverseBstInPosOrder", function (assert) {
    assert.deepEqual(traverseBstInPosOrder(root), null);
});


function traverseBstInOrder(tree) {
    if (tree != null) {
        traverseBstInOrder(tree.left);
        //console.log(tree.value);
        traverseBstInOrder(tree.right);
    }
}

function traverseBstInPreOrder(tree) {
    if (tree != null) {
        console.log(tree.value);
        traverseBstInPreOrder(tree.left);
        traverseBstInPreOrder(tree.right);
    }
}

function traverseBstInPosOrder(tree) {
    if (tree != null) {
        traverseBstInPosOrder(tree.left);
        traverseBstInPosOrder(tree.right);
        //console.log(tree.value);        
    }
}