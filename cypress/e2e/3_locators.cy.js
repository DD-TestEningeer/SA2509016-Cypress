// Cypress locator strategies

require('cypress-xpath');

// Css selectors

// 2.1 By ID Selector

// test suite

describe("Cypress locator strategies", () => {
  // test case 1
/*
  it.only("1) Finding the Web Element By ID Selector", () => {
    // test steps => finding elements, assertions/validation

    // Navigate to url => https://dd-demo-tau.vercel.app/register.html

    const registerPageUrl = "https://dd-demo-tau.vercel.app/register.html";
    cy.visit(registerPageUrl);

    // find the username input field using id selector
    const userNameInput = cy.get("#userName"); // # is used for id attributes from elements
    userNameInput.type("Demo-User"); // type() => we can send data to the input elements

    // find the user email input field using id selector
    cy.get("#userEmail").type("demo@gmail.com");

    // find the password input field using id selector
    cy.get("#password").type("Test1234");
  });

  // to execute the specific test we use .only
  it("2) By Class Selector", () => {
    cy.visit("https://dd-demo-tau.vercel.app/playwright-practice.html");

    // find the element using class selector => dot symbol
    cy.get(".card");
    cy.get(".section-container");
  });



  it("3) By Tag  Selector", () => {
    cy.visit("https://dd-demo-tau.vercel.app/login.html");

    // find the element using tag selector
    cy.get("h1");

    cy.get("button");
  });






  it("4)By Attribute Selector ", () => {
    cy.visit("https://dd-demo-tau.vercel.app/login.html"); 

    // find the element using attribute based selector 

    // tagName[attribute="value"]
    cy.get("button[onclick='submitForm()']");

});


// 5) By *Data- Attribute (Recommended)*

// cy.get('[data-cy="login-button"]')

// [attribute = "value"]


// 6) By Text Content (cy.contains)

  it("6)By Text Content  ", () => {
    cy.visit("https://dd-demo-tau.vercel.app/login.html"); 

    // find element by text content 
    cy.contains("Register").click();

});



// 7)  Chained Locators (Parent → Child)

  it("7)  Chained Locators (Parent → Child)  ", () => {
    cy.visit("https://dd-demo-tau.vercel.app/login.html"); 

    // find find the parent element then child element 

    // cy.get('nav').contains("Textbox Test").click();

    cy.get("form[method='post']").find("#username").type("testUser");   
    

});

*/

  // 8) XPath Locators (Optional)
  it("8)  XPath Locators  ", () => {
    cy.visit("https://dd-demo-tau.vercel.app/login.html"); 

    // find the element using xpath 
// xpath - cypress
    cy.xpath("//h1");

    cy.xpath("//input[@id='username']").type("testData"); 

    cy.xpath("/html/body/form/input[2]").type("Test234");   

});


});
