describe('Star Wars game Test', () => {
  beforeEach('visit standard localhost', () => {
    cy.visit('http://localhost:4200');
    cy.request('GET', 'https://swapi.dev/api/films/1/');
  });

  it('Toggle test', () => {
    cy.get('.mat-slide-toggle-bar').click();
    cy.get('button').click();
    cy.contains('1');
  });
});
