describe('NBA - Balldontlie API', () => {
    it('Should list some NBA players', () => {
        cy.safeApiRequestNba('https://api.balldontlie.io/v1/players?per_page=5').then((body) => {
            if (!body) return;
            cy.log('👟 Listing 5 NBA players:');
            body.data.forEach((player) => {
                cy.log(`🏀 ${player.first_name} ${player.last_name} - ${player.team.full_name}`);
            });
        });
    });

    it('Should list all NBA teams', () => {
        cy.safeApiRequestNba('https://api.balldontlie.io/v1/teams').then((body) => {
            if (!body) return;
            cy.log('📋 NBA Teams:');
            body.data.forEach((team) => {
                cy.log(`📍 ${team.full_name} (${team.abbreviation})`);
            });
        });
    });

    it('Should list some games from the 2022 NBA season', () => {
        cy.safeApiRequestNba('https://api.balldontlie.io/v1/games?seasons[]=2022&per_page=10').then((body) => {
            if (!body) return;
            cy.log('📅 NBA 2022 Season Games:');
            body.data.forEach((game) => {
                const date = new Date(game.date).toLocaleDateString('pt-BR');
                cy.log(`🗓️ ${date} - ${game.home_team.full_name} vs ${game.visitor_team.full_name} (${game.home_team_score} x ${game.visitor_team_score})`);
            });
        });
    });
});