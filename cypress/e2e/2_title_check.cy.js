

// test suite
describe('My First Cypress Test', () => {



    // test case 1
  it('TC001 - Visits the Example Page and checks title', () => {

    // test steps / code / logic 

    // open the url
    cy.visit('https://example.cypress.io')

    // page title validation
    cy.title().should('include', 'Cypress') // pass
  })



    // test case 2
  it('TC002- Visits the Example Page and checks title', () => {

    // test steps / code / logic 

    // open the url
    cy.visit('https://example.cypress.io')

    // page title validation
    cy.title().should('include', 'Google') // fail
  })



})