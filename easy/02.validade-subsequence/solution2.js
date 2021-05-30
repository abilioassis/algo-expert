QUnit.module("Validade Subsequence");
QUnit.test("isValidSubsequence", function (assert) {
    const array = [5, 1, 22, 25, 6, -1, 8, 10];
    const sequence = [1, 6, -1, 10];
    assert.deepEqual(isValidSubsequence(array, sequence), true);
});

// Time: O(n), Space: O(1)
function isValidSubsequence(array, sequence) {
    let seqIdx = 0; // índice da sequencia
    // varro o array de entrada
    for (const a of array) {
        // se avacei na sequencia até o fim, saio do loop, pois a sequencia foi encontrada
        if (seqIdx === sequence.length) break;
        else { // senão, continuo procurando
            // se encontrei, avanço para procurar o próximo na sequencia
            if (a === sequence[seqIdx]) seqIdx++;
        }
    }
    return (seqIdx === sequence.length);
}
