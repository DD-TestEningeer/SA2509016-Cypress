// Web Element Interactions

describe("Web Element Interactions Demo", () => {
  // test case

  it("TC01 - User Actions ", () => {
    // open home page
    cy.visit("https://dd-demo-tau.vercel.app/web_elements.html");

    // type()
    cy.get("#textInputField").type("DemoText");

    // click() => button/link
    cy.get('a[href="#5-radio"]').click();

    // check() => radio button
    cy.get("#maleRadio").check();

    // check() => checkbox
    cy.get("#subscribeChk").check();

     // uncheck() => checkbox
    cy.get("#subscribeChk").uncheck();
  });
});
