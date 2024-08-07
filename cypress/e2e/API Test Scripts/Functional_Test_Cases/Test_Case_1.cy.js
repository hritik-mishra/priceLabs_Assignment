//------- Test Case 1 -------- Verify API responses

describe('API Testing', () => {
    it('should return correct response for valid requests', () => {
      cy.request('GET', '/api/multicalendar').then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('data');
      });
    });
  });
  