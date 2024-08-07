//------- Test Case 1 -------- Invalid request


describe('API Testing', () => {
    it('should return error for invalid requests', () => {
      cy.fixture('testData').then((data) => {
        cy.request({
          method: 'POST',
          url: '/api/multicalendar',
          body: data.invalidEvent,
          failOnStatusCode: false
        }).then((response) => {
          expect(response.status).to.eq(400);
          expect(response.body).to.have.property('error');
        });
      });
    });
  });
  