describe('Check Main Page sections', () => {

    beforeEach(() => {

        cy.visit('/');
    
      });

    it('Checks weekly downloads quantity', () => {

        cy.get('h2:contains("Loved by OSS")')
        .scrollIntoView()
        .should('be.visible');

        cy.contains('Weekly downloads')
        .parent()
        .find('div.font-bold')
        .invoke('text')
        .then((text) => {
          const match = text.match(/([\d\.]+)M\+/);
          if (match) {
            const downloads = match[1];
            cy.log(`Weekly downloads (million): ${downloads}`);
          } else {
            cy.log('Weekly downloads not found.');
          }
        });

    });

});
