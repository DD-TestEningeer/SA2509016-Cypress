

// User login with valid details 

describe("Login Page Test Suite", ()=>{


// Test Case 1 

it("TC001 - Verify the login page title", ()=>{

 // step 1 - open url  
  cy.log("1) User navigates to the login page");
  cy.visit("https://dd-demo-tau.vercel.app/login.html");

 // step 2 - title validation using explicit assertions
  cy.log("2) Verify the login page title ");
  cy.title().then((actPageTitle)=>{

    expect(actPageTitle).include("Login Page");

  });

 // step 3 - check if Register is button is visible 

 // implicit assertion 
// cy.contains("Register").should('be.visible');

cy.contains("Register").should('be.visible').and('contain.text',"Register");

// Explicit assertion
cy.contains("Register").then((registerLinkElement) => {
  cy.log("3) The assertion added for the register link");
  expect(registerLinkElement).to.be.visible;
  expect(registerLinkElement.text()).to.eq("Register");
//   registerLinkElement.click();
});


// step 4) check for the email/username field visibility and then type data 

// implicit assert 
// cy.get('#username').should('be.visible').type("Demo");

// explicit assert 

cy.get('#username').then((userNameElement)=>{       // assertion 

expect(userNameElement).to.be.visible;
// cy.wrap(userNameElement).type('Demo2');

});

cy.get('#username').type("Demo3");










});




});