describe('Interacting With Elements', () => {

    beforeEach(() => {

        cy.visit('/');

        cy.wait(2000);

    });

    it('should copy install command to clipboard', () => {

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
