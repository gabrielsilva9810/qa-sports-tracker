describe('BR - Serie B Championship', () => {
    it('Should list all rounds of the championship', () => {

        cy.request({
            method: 'GET',
            url: 'https://api.api-futebol.com.br/v1/campeonatos/14/rodadas',
            headers: {
                Authorization: `Bearer ${Cypress.env('API_SOCCER_KEY')}`,
            },
        }).then((res) => {
            expect(res.status).to.eq(200);
            res.body.forEach((rodada) => {
                cy.log(`📅 Round ${rodada.numero} - ${rodada.nome}`);
            });
        });
    });

    it('Should list all teams in Série B', () => {
        cy.request({
            method: 'GET',
            url: 'https://api.api-futebol.com.br/v1/campeonatos/14/times',
            headers: {
                Authorization: `Bearer ${Cypress.env('API_SOCCER_KEY')}`,
            },
        }).then((res) => {
            expect(res.status).to.eq(200);
            res.body.forEach((team) => {
                cy.log(`🛡️ ${team.nome_popular}`);
            });
        });
    });

    it('Should show the current standings of Série B', () => {
        cy.request({
            method: 'GET',
            url: 'https://api.api-futebol.com.br/v1/campeonatos/14/tabela',
            headers: {
                Authorization: `Bearer ${Cypress.env('API_SOCCER_KEY')}`,
            },
        }).then((res) => {
            expect(res.status).to.eq(200);
            res.body.forEach((team) => {
                cy.log(`${team.posicao}º - ${team.time.nome_popular} (${team.pontos} pts)`);
            });
        });
    });
});
