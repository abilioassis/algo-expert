QUnit.module("Tournament Winner");
QUnit.test("nomeDaFuncao", function (assert) {
    const competitions = [
        ['HTML', 'C#'],
        ['C#', 'Python'],
        ['Python', 'HTML'],
    ];
    const results = [0, 0, 1];
    const expected = 'Python';
    assert.deepEqual(tournamentWinner(competitions, results), expected);
});

// Time: O(n + k) | Space: O(k), k = number of teams
function tournamentWinner(competitions, results) {
    const WIN_POINT = 3;
    const winers = new Map();
    // varro as competições
    for (let idx = 0; idx < competitions.length; idx++) {
        // pego uma competição
        const competition = competitions[idx];
        // pego um resultado
        const result = results[idx];
        // determino o vencedor
        const winer = competition[1-result];
        // salvo o vencedor e sua pontuação
        if (winers.has(winer)) { // se o vencedor já ganhou outras vezes
            // acrescento 3 pontos
            const actualPoints = winers.get(winer);
            const newPoints = actualPoints + WIN_POINT;
            winers.set(winer, newPoints);
        } else { // o vencedor não ganhou nenhuma vez
            // salvo o vencedor e sua pontuação
            winers.set(winer, WIN_POINT);
        }
    }
    // varro winers e determino o vencedor
    let maxPoints = 0;
    let winer = '';
    for (let [team, points] of winers) {
        if (points > maxPoints) {
            maxPoints = points;
            winer = team;
        }
    }
    return winer;
}

