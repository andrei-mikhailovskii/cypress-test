Cypress._.times(30, () => {
describe('Click NPM Install Cypress button', () => {

    beforeEach(() => {

        cy.visit('/');

        cy.wait(3000); 

        cy.get('[aria-label="Cookie Consent Banner"]').then((banner) => {
            if (banner.is(':visible')) {
                cy.contains('Reject All').click();
            }
        });
        //cy.wait(1000); 
    
    });

    it('Checks if info copied to clipboard', () => {

        cy.get('button:contains("npm install cypress")')
        .should('be.visible')
        .click();

        //cy.wait(1000); 

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
})