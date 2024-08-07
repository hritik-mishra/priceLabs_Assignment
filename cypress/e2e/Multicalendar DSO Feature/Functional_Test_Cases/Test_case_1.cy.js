//------- Test case 1 -------- Checking that Multicalendar DSO page loads correctly

describe('Multicalendar DSO Feature', () => {
    beforeEach(() => {
      cy.visit('/signin');
      cy.get('input[id="user_email"]').type(Cypress.env('email'));
      cy.get('input[name="user[password]"]').type(Cypress.env('password'));
      cy.get('input[type="submit"]').click();
      cy.get('a[href="/multicalendar-dso"]').click();
    });
  
    it('should load the Multicalendar DSO page with expected elements', () => {
      cy.url().should('include', '/multicalendar-dso');
      cy.get('.multicalendar').should('be.visible');
    });
  });
