QUnit.module("Sorted Squared Array");
QUnit.test("sortedSquaredArray", function (assert) {
    const input1 = [1, 2, 3, 5, 6, 8, 9];
    const expected1 = [1, 4, 9, 25, 36, 64, 81];
    //assert.deepEqual(sortedSquaredArray(input1), expected1);

    const input2 = [-2, -1, 0, 5, 6, 8, 9];
    const expected2 = [0, 1, 4, 25, 36, 64, 81];
    assert.deepEqual(sortedSquaredArray(input2), expected2);
});
// Time: O(n), Space: O(n)
function sortedSquaredArray(array) {
    const result = new Array(array.length).fill(0);
    // se o array de entrada está ordenado
    // os maiores números (em valor absoluto)
    // estão nas extremidades
    let leftIdx = 0;
    let rigthIdx = array.length - 1;

    for (let idx = array.length - 1; idx >= 0; idx--) {
        const leftValue = array[leftIdx];
        const rigthValue = array[rigthIdx];

        if (Math.abs(leftValue) > Math.abs(rigthValue)) {
            result[idx] = leftValue ** 2;
            leftIdx += 1;
        } else {
            result[idx] = rigthValue ** 2;
            rigthIdx -= 1;
        }
    }
    return result;
}