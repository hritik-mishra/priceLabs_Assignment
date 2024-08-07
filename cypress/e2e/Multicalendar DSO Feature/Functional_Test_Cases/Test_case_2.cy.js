//------ Test case 2 -------- Validating interactions with Multicalendar

describe('Multicalendar DSO Feature', () => {
    beforeEach(() => {
      cy.visit('/signin');
      cy.get('input[id="user_email"]').type(Cypress.env('email'));
      cy.get('input[name="user[password]"]').type(Cypress.env('password'));
      cy.get('input[type="submit"]').click();
      cy.get('a[href="/multicalendar-dso"]').click();
    });
  
    it('should handle interactions with the Multicalendar', () => {
      cy.get('.multicalendar').click();
      cy.get('.calendar-item').first().click();
      cy.get('.selected-date').should('be.visible');
    });
  });
  