
describe('API and Frontend Integration', () => {
    it('should ensure API data is reflected on the frontend', () => {
      cy.request('GET', '/api/multicalendar').then((response) => {
        cy.visit('/multicalendar-dso');
        cy.get('.multicalendar').find('.calendar-item').should('contain', response.body.data[0].name);
      });
    });
  });
  