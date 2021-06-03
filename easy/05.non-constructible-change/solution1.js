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

function nonConstructibleChange(coins) {
    const hashChange = new Map();
    // ordeno a entrada em ordem decrescente
    coins.sort((a, b) => b - a);
    // calculo o número de linhas da tabela verdade
    const n = 2 ** coins.length;
    // monto a tabela verdade
    for (let idx = 0; idx < n; idx++) {
        // gero o número binário -- adicionando zeros à esquerda, se necessário
        const mask = getMask(idx, coins.length);
        // aplico a máscara ao vetor gerando o troco
        const change = getChange(coins, mask);
        // armazeno o troco na hash table, caso não exista
        if (!hashChange.has(change)) {
            hashChange.set(change, true);
        }
    }
    // analiso a hash table e retorno o troco
    return getImpossibleChange(hashChange);
}

const getMask = function (dec, n) {
    return dec.toString(2).padStart(n, 0);
}

const getChange = function (arr, mask) {
    let r = 0;
    // varro o array e multiplico pela máscara
    for (let idx = 0; idx < arr.length; idx++) {
        r = r + arr[idx] * mask[idx];
    }
    return r;
}

const getImpossibleChange = function(hashChange) {
    // varro a tabela de troco e retorno o primeiro inteiro que não existir
    let i;
    for (i = 0; i < hashChange.size; i++) {
        if (!hashChange.has(i)) {
            return i;
        }
    }
    // se de 0..size os trocos podem ser fornecidos
    // então o menor troco que não pode ser fornecido
    // é uma unidade superior ao maior troco da tabela
    return i;
}