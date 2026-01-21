// Navigation Commands

describe(" Navigation Commands Demo", () => {
  it("Page Navigation Commands ", () => {
    // login page
    cy.visit("https://dd-demo-tau.vercel.app/login.html");

    // // click on the Register button => register page
    cy.contains("Register").click();

    // // navigate back to login
    cy.go("back");

    // // navigate forward
    cy.go("forward");

    // refresh page
    cy.reload();
  });
});
