// Cypress Hooks

// before, beforeEach, after, afterEach

describe("Cypress Hooks", () => {
  beforeEach(() => {
    cy.log("This is beforeEach hook");
  });

  afterEach(() => {
    cy.log("This is afterEach hook");
  });

  before(() => {
    cy.log("This is before hook");
  });

  after(() => {
    cy.log("This is after hook");
  });

  it("TC-001", () => {
    cy.log("TC001");
  });

  it("TC-002", () => {
    cy.log("TC002");
  });
});
