//------ Test Case-1 ------- Navigation to Multicalendar DSO and perform actions

describe('Multicalendar DSO End-to-End', () => {
    beforeEach(() => {
      cy.visit('/signin');
      cy.get('input[id="user_email"]').type(Cypress.env('email'));
      cy.get('input[name="user[password]"]').type(Cypress.env('password'));
      cy.get('input[type="submit"]').click();
    });
  
    it('should navigate and perform actions in the Multicalendar DSO', () => {
      cy.get('a[href="https://pricelabs.co/pricing?filtered_view=1&listings=5d0a4acba5dbf000106e1b71&pms_name=stays&open_calendar=true"]').click();
      cy.get('button[class="btn dropdown-toggle btn-light"]').click();
      cy.get('.calendar-item').first().click();
      cy.get('.selected-date').should('be.visible');
    });
  });
  