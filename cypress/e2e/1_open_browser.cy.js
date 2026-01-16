// file name => file_name.cy.js

// How to add test suite ?

// test suite name , callback function
describe("First Test Suite", () => {
  // How to add test case to the test suite ?

  // test case title, callback function
  it("TC001-Open URL1", () => {
    // where to the test steps

    // 1) open browser
    cy.visit("www.google.com"); // visit => open the url
    // cy => driver instance
  });

  it("TC002-Open URL2", () => {
    // where to the test steps

    // 1) open browser
    cy.visit("www.amazon.com"); // visit => open the url
    // cy => driver instance
  });
});
