describe('Click NPM Install Cypress button', () => {

    beforeEach(() => {

        cy.intercept('POST', 'https://cloud.cypress.io/graphql').as('graphql');
        cy.visit('/');
        cy.wait('@graphql');

        cy.get('[aria-label="Cookie Consent Banner"]').then((banner) => {
            if (banner.is(':visible')) {
                cy.contains('Reject All').click();
            }
        });
    
    });

    it('Checks if info copied to clipboard', () => {

        cy.get('button:contains("npm install cypress")')
        .should('be.visible')
        .click();

        cy.wait(2000);

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
