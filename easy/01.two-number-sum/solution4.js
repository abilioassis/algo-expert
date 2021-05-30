QUnit.module("Two Number Sun");
QUnit.test("twoNumberSum", function (assert) {
    let array = [3, 5, -4, 8, 11, 1, -1, 6];
    let targetSum = 10;
    assert.deepEqual(twoNumberSum(array, targetSum), [11, -1]);
});

// Time: O(n), Space: O(1)
function twoNumberSum(array, targetSum) {
    let y = 0;
    for (let x of array) {
        y = targetSum - x;
        if (array.indexOf(y) !== -1 && (x !== y)) {
            return [x, y];
        }
    }
    return [];
}
