class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(values, i = 0) {
        if (i >= values.length) return;
        const queue = [this];
        while (queue.length > 0) {
            let current = queue.shift();
            if (current.left === null) {
                current.left = new BinaryTree(values[i]);
                break;
            }
            queue.push(current.left);
            if (current.right === null) {
                current.right = new BinaryTree(values[i]);
                break;
            }
            queue.push(current.right);
        }
        this.insert(values, i + 1);
        return this;
    }
}


QUnit.module("Branch Sums");
QUnit.test("branchSums", function (assert) {
    const tree = new BinaryTree(1).insert([2, 3, 4, 5, 6, 7, 8, 9, 10]);
    assert.deepEqual(branchSums(tree), [15, 16, 18, 10, 11]);
});

// Time: O(n) | Space: O(n)
function branchSums(root) {
    const resultado = [];
    let somatorioBranch = 0;

    somarBranch(root, somatorioBranch, resultado);
    return resultado;
}

const somarBranch = function(no, sb, r) {
    if (!no) return;

    let newsb = sb + no.value;
    if (!no.left && !no.right) {
        r.push(newsb);
        return;
    }
    somarBranch(no.left, newsb, r);
    somarBranch(no.right, newsb, r);
}