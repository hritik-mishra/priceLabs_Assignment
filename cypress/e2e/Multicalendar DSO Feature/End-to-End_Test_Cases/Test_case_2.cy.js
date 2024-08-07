//------- Test Case-2 ------ Workflow for creating, updating, and saving in Multicalendar

describe('Multicalendar DSO End-to-End', () => {
    beforeEach(() => {
        cy.visit('/signin');
        cy.get('input[id="user_email"]').type(Cypress.env('email'));
        cy.get('input[name="user[password]"]').type(Cypress.env('password'));
        cy.get('input[type="submit"]').click();
      cy.get('a[href="/multicalendar-dso"]').click();
    });
  
    it('should create, update, and save data in the Multicalendar', () => {
      cy.get('.add-new-entry').click();
      cy.fixture('testData').then((data) => {
        cy.get('input[name="entry-name"]').type(data.validEvent.name);
        cy.get('input[name="entry-date"]').type(data.validEvent.date);
      });
      cy.get('button[type="submit"]').click();
  
      cy.get('.calendar-item').first().click();
      cy.get('input[name="entry-name"]').clear().type('Updated Event');
      cy.get('button[type="submit"]').click();
  
      cy.get('.calendar-item').first().should('contain', 'Updated Event');
    });
  });
  