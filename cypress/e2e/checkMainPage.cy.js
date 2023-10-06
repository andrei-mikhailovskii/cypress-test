describe('Check Main Page sections', () => {

    beforeEach(() => {

        cy.visit('/');
    
      });

    it('should log weekly downloads quantity', () => {

        cy.get('h2:contains("Loved by OSS")')
          .scrollIntoView()
          .should('be.visible');

        cy.contains('Weekly downloads')
          .parent()
          .find('div.font-bold')
          .invoke('text')
          .invoke('match', /(?<downloadsCount>[\d\.]+)M\+/)
          .its('groups.downloadsCount', { timeout: 0 }).then((downloadsCount) => {
            cy.log(`Weekly downloads (million): ${downloadsCount}`);
          });

      });

  });
