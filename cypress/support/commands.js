Cypress.Commands.add('safeApiRequestSoccer', (url) => {
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

Cypress.Commands.add('safeApiRequestNba', (url) => {
    return cy.request({
        method: 'GET',
        url,
        headers: {
            Authorization: `Bearer ${Cypress.env('NBA_API_KEY')}`,
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

Cypress.Commands.add('safeApiRequestF1', (url) => {
    return cy.request({
        method: 'GET',
        url,
        failOnStatusCode: false,
    }).then((res) => {
        if (!res || res.status === 0 || res.status === 502 || res.status === 503 || res.status === 429) {
            cy.log(`⚠️ Falha na conexão com ${url}. Ignorando teste.`);
            return null;
        }
        expect(res.status).to.eq(200);
        return res.body;
    });
});