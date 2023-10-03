describe('Click NPM Install Cypress button', () => {

    beforeEach(() => {

        cy.intercept('GET', '/').as('initial');
        cy.visit('/');
        cy.wait('@initial');
    
      });

    it('Checks if info copied to clipboard', () => {

        cy.get('button:contains("npm install cypress")')
        .should('be.visible')
        .click();

        cy.get('[data-cy="modal-install-copy"]')
        .should('be.visible')
        .click()
        .then(() => {
            cy.window().then((win) => {
                win.navigator.clipboard.readText().then((text) => {
                    expect(text).to.eq('npm install cypress --save-dev');
                })
            })
        });

    });

});
