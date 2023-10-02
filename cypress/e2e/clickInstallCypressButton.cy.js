describe('Click NPM Install Cypress button', () => {

    // cy.visit('/');

    it('Checks if NPM Install Cypress button is clicked', () => {
        cy.visit('https://www.cypress.io/');
        cy.get('astro-island > .border')
        .should('be.visible')
        .click();

        cy.wait(1000);

        cy.get('.slide-out-enter-to > .whitespace-nowrap')
        .should('be.visible')
        .click()
        .then(() => {
            cy.window().then((win) => {
                win.navigator.clipboard.readText().then((text) => {
                    expect(text).to.eq('npm install cypress --save-dev');
                })
            })
        })

    })

})