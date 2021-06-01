QUnit.module("Sorted Squared Array");
QUnit.test("sortedSquaredArray", function (assert) {
    const input1 = [1, 2, 3, 5, 6, 8, 9];
    const expected1 = [1, 4, 9, 25, 36, 64, 81];
    assert.deepEqual(sortedSquaredArray(input1), expected1);

    const input2 = [-2, -1, 0, 5, 6, 8, 9];
    const expected2 = [0, 1, 4, 25, 36, 64, 81];
    assert.deepEqual(sortedSquaredArray(input2), expected2);
});
// Time: O(nlog(n)), Space: O(n)
function sortedSquaredArray(array) {
    // instancio um array de resultado (r) com o tamanho exato
    // isso otimiza a inserção de novos elementos até o tamanho máximo
    const r = new Array(array.length).fill(0);
    for (let idx = 0; idx < array.length; idx++) {
        r[idx] = array[idx] ** 2;
    }
    // retorno o array ordenado
    return r.sort((a, b) => a - b);
}
