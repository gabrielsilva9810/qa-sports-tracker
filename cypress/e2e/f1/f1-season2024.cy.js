describe('F1 - Season 2024', () => {
  it('List all Grand Prix', () => {
    cy.request('https://ergast.com/api/f1/2024.json').then((res) => {
      const races = res.body.MRData.RaceTable.Races;
      races.forEach((race) => {
        cy.log(`🏁 ${race.round} - ${race.raceName} - ${race.date}`);
      });
    });
  });

  it('List all winners', () => {
    cy.request('https://ergast.com/api/f1/2024/results/1.json?limit=1000').then((res) => {
      const races = res.body.MRData.RaceTable.Races;
      races.forEach((race) => {
        const winner = race.Results[0].Driver;
        cy.log(`🏆 ${race.raceName} - ${winner.givenName} ${winner.familyName}`);
      });
    });
  });

  it('Show championship standings', () => {
    cy.request('https://ergast.com/api/f1/2024/driverStandings.json').then((res) => {
      const standings = res.body.MRData.StandingsTable.StandingsLists[0].DriverStandings;
      standings.forEach((driver, index) => {
        cy.log(`#${index + 1} - ${driver.Driver.givenName} ${driver.Driver.familyName}: ${driver.points} pts`);
      });
      cy.log(`🏆 Campeão: ${standings[0].Driver.givenName} ${standings[0].Driver.familyName}`);
    });
  });
});