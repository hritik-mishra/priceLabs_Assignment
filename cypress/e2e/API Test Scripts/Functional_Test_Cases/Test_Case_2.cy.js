//------- Test Case 2 -------- Verify data creation

describe('API Testing', () => {
    it('should create new data correctly', () => {
      cy.fixture('testData').then((data) => {
        cy.request('POST', '/api/multicalendar', data.validEvent).then((response) => {
          expect(response.status).to.eq(201);
          expect(response.body).to.have.property('id');
        });
      });
    });
  });
  