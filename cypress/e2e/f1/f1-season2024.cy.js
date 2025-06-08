describe('Seasons 2024 | F1', () => {

  // ⚠️ Testes desativados temporariamente devido à descontinuação da Ergast F1 API
  // A API está fora do ar desde JUNHO/2025, resultando em ERR_CONNECTION_REFUSED.
  // Por isso, os testes relacionados foram pulados usando `it.skip()` para evitar falsas falhas.
  // Caso a API volte ou seja substituída, os testes podem ser reativados ou migrados.


  it.skip('List all Grand Prix', () => {
    cy.safeApiRequestF1('https://ergast.com/api/f1/2024.json').then((res) => {
      const races = res.body.MRData.RaceTable.Races;
      races.forEach((race) => {
        cy.log(`🏁 ${race.round} - ${race.raceName} - ${race.date}`);
      });
    });
  });

  it.skip('List all winners', () => {
    cy.safeApiRequestF1('https://ergast.com/api/f1/2024/results/1.json?limit=1000').then((res) => {
      const races = res.body.MRData.RaceTable.Races;
      races.forEach((race) => {
        const winner = race.Results[0].Driver;
        cy.log(`🏆 ${race.raceName} - ${winner.givenName} ${winner.familyName}`);
      });
    });
  });

  it.skip('Show championship standings', () => {
    cy.safeApiRequestF1('https://ergast.com/api/f1/2024/driverStandings.json').then((res) => {
      const standings = res.body.MRData.StandingsTable.StandingsLists[0].DriverStandings;
      standings.forEach((driver, index) => {
        cy.log(`#${index + 1} - ${driver.Driver.givenName} ${driver.Driver.familyName}: ${driver.points} pts`);
      });
      cy.log(`🏆 Campeão: ${standings[0].Driver.givenName} ${standings[0].Driver.familyName}`);
    });
  });

  it.skip('List all pole positions of the season', () => {
    cy.safeApiRequestF1('https://ergast.com/api/f1/2024/qualifying/1.json?limit=1000').then((body) => {
      const races = body.MRData.RaceTable.Races;

      races.forEach((race) => {
        const qualifyingResults = race.QualifyingResults;
        if (qualifyingResults && qualifyingResults[0]) {
          const pole = qualifyingResults[0].Driver;
          cy.log(`🎯 Pole - ${race.raceName}: ${pole.givenName} ${pole.familyName}`);
        } else {
          cy.log(`🎯 Pole - ${race.raceName}: Dados indisponíveis`);
        }
      });
    });
  });
});