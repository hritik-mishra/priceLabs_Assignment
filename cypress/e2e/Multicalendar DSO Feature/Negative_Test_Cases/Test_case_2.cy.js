//------ Test Case-2 -------- Network failure simulation

describe('Multicalendar DSO Negative Test', () => {
    beforeEach(() => {
        cy.visit('/signin');
        cy.get('input[id="user_email"]').type(Cypress.env('email'));
        cy.get('input[name="user[password]"]').type(Cypress.env('password'));
        cy.get('input[type="submit"]').click();
      cy.get('a[href="/multicalendar-dso"]').click();
    });
  
    it('should handle network failure gracefully', () => {
      cy.intercept('POST', '/api/multicalendar', { forceNetworkError: true }).as('postCalendarData');
      cy.get('.add-new-entry').click();
      cy.fixture('testData').then((data) => {
        cy.get('input[name="entry-name"]').type(data.validEvent.name);
        cy.get('input[name="entry-date"]').type(data.validEvent.date);
      });
      cy.get('button[type="submit"]').click();
      cy.wait('@postCalendarData');
      cy.get('.network-error').should('be.visible');
    });
  });
  