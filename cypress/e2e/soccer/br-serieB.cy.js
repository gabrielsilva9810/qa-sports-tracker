describe('BR - Serie B Championship', () => {
    it('Should list all rounds of the championship', () => {
        cy.safeApiRequestSoccer('https://api.api-futebol.com.br/v1/campeonatos/14/rodadas').then((body) => {
            if (!body) return;
            body.forEach((rodada) => {
                cy.log(`📅 Round ${rodada.numero} - ${rodada.nome}`);
            });
        });
    });

    it('Should list the top scorers of Série B', () => {
        cy.safeApiRequestSoccer('https://api.api-futebol.com.br/v1/campeonatos/14/artilharia').then((body) => {
            if (!body) return;

            body.forEach((player, index) => {
                const pos = index + 1;
                const nome = player.atleta.nome_popular;
                const time = player.time.nome_popular;
                const gols = player.gols;

                cy.log(`🎯 ${pos}º - ${nome} (${time}) - ${gols} gol(s)`);
            });
        });
    });

    it('Should show the current standings of Série B', () => {
        cy.safeApiRequestSoccer('https://api.api-futebol.com.br/v1/campeonatos/14/tabela').then((body) => {
            if (!body) return;
            body.forEach((team) => {
                cy.log(`${team.posicao}º - ${team.time.nome_popular} (${team.pontos} pts)`);
            });
        });
    });
});
