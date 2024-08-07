//------- Test Case 1 -------- Handle non-existent endpoint

describe('API Testing', () => {
    it('should return 404 for non-existent endpoints', () => {
      cy.request({
        method: 'GET',
        url: '/api/nonexistent',
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(404);
      });
    });
  });
  