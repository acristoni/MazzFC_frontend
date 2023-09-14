/* eslint-disable no-undef */
describe('Google animal', () => {
  it('Should search a animal and show details about found animal', () => {
      cy.visit('http://localhost:3000/')

      let urlResult;
      let titleResult;
      let descriptionResult;

      let urlDetails;
      let titleDetails;
      let descriptionDetails;

      cy.get('#SearchInput').type('dog')
      cy.get('#SearchButton').click();
      cy.get('.Result').first().click();

      cy.end()
  })
})