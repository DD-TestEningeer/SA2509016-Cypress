

// Types of assertions 

// 1) Implicit => should, and
// 2) Explicit => expect, assert


// 1) Implicit => should, and

describe("1) Implicit => should, and", ()=>{


 // test case 1  => use of should 
 
 it("TC001- Verify the login scenario ", ()=>{

// open url 
const baseUrl = "https://dd-demo-tau.vercel.app/login.html";
cy.visit(baseUrl);

// find the header text and check if element is visible or not 

cy.contains("Login Page").should('be.visible'); // pass


// cy.get("#username").should('not.be.visible'); // fail

cy.get("label[for='password']").should('have.text', "Password:");

cy.get("label[for='password']").should('contain.text', "Pass");


// use of should and keywords
cy.get("button").should('be.enabled').and('contain.text', "Login").click();


 });





});