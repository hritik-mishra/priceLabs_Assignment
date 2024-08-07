//------- Test case 3 ------ Checking data population in Multicalendar

describe('Multicalendar DSO Feature', () => {
    beforeEach(() => {
      cy.visit('/signin');
      cy.get('input[id="user_email"]').type(Cypress.env('email'));
      cy.get('input[name="user[password]"]').type(Cypress.env('password'));
      cy.get('input[type="submit"]').click();
      cy.get('a[href="/multicalendar-dso"]').click();
    });
  
    it('should display data correctly in the Multicalendar', () => {
      cy.get('.multicalendar').find('.calendar-item').should('have.length.greaterThan', 0);
    });
  });
