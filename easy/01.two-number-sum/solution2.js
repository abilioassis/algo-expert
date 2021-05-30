QUnit.module("Two Number Sun");
QUnit.test("twoNumberSum", function (assert) {
    let array = [3, 5, -4, 8, 11, 1, -1, 6];
    let targetSum = 10;
    assert.deepEqual(twoNumberSum(array, targetSum), [-1, 11]);
});

// Time: O(n), Space: O(n)
function twoNumberSum(array, targetSum) {
    let y = 0;
    const hm = new Map(); // a hash map
    for (let x of array) {
        y = targetSum - x;
        if (hm.has(y)) {
            return [x, y];
        } else {
            hm.set(x, true);
        }
    }
    return [];
}
