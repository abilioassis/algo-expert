QUnit.module("Non Constructible Cchange");
QUnit.test("nonConstructibleChange", function (assert) {
    // Teste 1
    const input1 = [5, 7, 1, 1, 2, 3, 22];
    const expected1 = 20;
    assert.deepEqual(nonConstructibleChange(input1), expected1);
    // Teste 2
    const input2 = [1, 1, 1, 1, 1];
    const expected2 = 6;
    assert.deepEqual(nonConstructibleChange(input2), expected2);


});

// Time: O(nlog(n)) | Space: O(1)
function nonConstructibleChange(coins) {
    // ordeno a entrada em ordem crescente
    coins.sort((a, b) => a - b);
    let trocoAtual = 0;
    for (let coin of coins) {
        if (coin > trocoAtual + 1) {
            return trocoAtual + 1;
        }
        trocoAtual += coin;
    }
    return trocoAtual + 1;
}
