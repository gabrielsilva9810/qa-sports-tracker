Cypress.Commands.add('safeApiRequest', (url) => {
    return cy.request({
        method: 'GET',
        url,
        headers: {
            Authorization: `Bearer ${Cypress.env('API_SOCCER_KEY')}`,
        },
        failOnStatusCode: false,
    }).then((res) => {
        if (res.status === 429) {
            cy.log(`⚠️ Limite de requisições atingido para endpoint ${url}, pulando teste.`);
            return null;
        }
        expect(res.status).to.eq(200);
        return res.body;
    });
});
