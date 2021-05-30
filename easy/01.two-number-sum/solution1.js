QUnit.module("Two Number Sun");
QUnit.test("twoNumberSum", function (assert) {
    let array = [3, 5, -4, 8, 11, 1, -1, 6];
    let targetSum = 10;
    assert.deepEqual(twoNumberSum(array, targetSum), [11, -1]);
});

// Time: O(n^2), Space: O(1)
function twoNumberSum(array, targetSum) {
    let a = 0, b = 0;
    // i vai até o penúltimo elemento
    for (let i = 0; i < array.length - 1; i++) {
        a = array[i];
        // j vai até o último elemento
        for (let j = i + 1; j < array.length; j++) {
            b = array[j];
            if (a + b === targetSum) {
                return [a, b];
            }
        }
    }
    return [];
}
