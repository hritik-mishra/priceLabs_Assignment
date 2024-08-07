//------ Test Case-1 ------ Invalid data in Multicalendar

describe('Multicalendar DSO Negative Test', () => {
    beforeEach(() => {
        cy.visit('/signin');
        cy.get('input[id="user_email"]').type(Cypress.env('email'));
        cy.get('input[name="user[password]"]').type(Cypress.env('password'));
        cy.get('input[type="submit"]').click();
      cy.get('a[href="/multicalendar-dso"]').click();
    });
  
    it('should handle invalid data in the Multicalendar', () => {
      cy.get('.add-new-entry').click();
      cy.fixture('testData').then((data) => {
        cy.get('input[name="entry-name"]').type(data.invalidEvent.name);
        cy.get('input[name="entry-date"]').type(data.invalidEvent.date);
      });
      cy.get('button[type="submit"]').click();
      cy.get('.error-message').should('be.visible');
    });
  });
  