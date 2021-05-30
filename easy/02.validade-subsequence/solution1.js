QUnit.module("Validade Subsequence");
QUnit.test("isValidSubsequence", function (assert) {
    const array = [5, 1, 22, 25, 6, -1, 8, 10];
    const sequence = [1, 6, -1, 10];
    assert.deepEqual(isValidSubsequence(array, sequence), true);
});

// Time: O(n), Space: O(1)
function isValidSubsequence(array, sequence) {
    let i = 0; // índice da sequencia
    // varro o array de entrada
    for (const a of array) {
        // se encontrei 
        if (a === sequence[i]) {
            // avanço para procurar o próximo na sequencia
            i += 1;
        }
        // se avacei na sequencia até o fim
        if (i === sequence.length) {
            // todos os números foram encontrados
            return true;
        }
    }
    return false;
}
