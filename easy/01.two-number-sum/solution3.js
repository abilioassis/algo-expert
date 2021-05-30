QUnit.module("Two Number Sun");
QUnit.test("twoNumberSum", function (assert) {
    let array = [3, 5, -4, 8, 11, 1, -1, 6];
    let targetSum = 10;
    assert.deepEqual(twoNumberSum(array, targetSum), [-1, 11]);
});

// Time: O(nlog(n)), Space: O(1)
function twoNumberSum(array, targetSum) {
    array.sort(function (a, b) { return a - b });
    let left = 0;
    let right = array.length - 1;
    let sum = 0;
    while (left < right) {
        sum = array[left] + array[right];
        if (sum === targetSum) {
            return [array[left], array[right]];
        } else if (sum < targetSum) {
            left += 1;
        } else if (sum > targetSum) {
            right -= 1;
        }
    }
    return [];
}
