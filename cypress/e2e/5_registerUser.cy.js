

// Automate the register user scenario 


describe("Register Page", ()=>{


 // test case 1 with valid details 
 
 it("TC001- Register user with valid details", ()=>{

// step 1 -  open url 

cy.visit("https://dd-demo-tau.vercel.app/register.html");

// step 2 -  header validation 
cy.get("h1").should('be.visible').and('have.text', "Register Page");

// step 3 - enter username and validation 

const usernameInput = cy.get("#userName"); // find element

usernameInput.should('be.visible').and('be.enabled'); // validation
let userNameData = "Demo";
usernameInput.type(userNameData); // user action

// step 4 - enter email and validation 



// step 5 - enter password and validation 

// step 6 - click on login button and validation 




 });





});