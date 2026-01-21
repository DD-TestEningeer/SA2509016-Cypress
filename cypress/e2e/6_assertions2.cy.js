//  2) Explicit Assertions

// expect & assert
// expect use

describe("My First Test", () => {
 
 /*
    it("1) Pass Case", () => {
    // actual result  // expected result
    expect(true).to.equal(false); // fail
  });

  it("2) Pass Case ", () => {
    // actual       // expected
    expect(true).to.equal(true); // pass

    expect("Demo").to.equal("Demo");
  });

*/
 it("3) Verify the login page title ", ()=>{


    // open url 
    cy.visit("https://dd-demo-tau.vercel.app/login.html");

    // implicit assertion
    cy.title().should('include', 'Login Page');

    // explicit assertion 
  
    cy.title().then((actTitle)=>{   

     expect(actTitle).to.include("Login Page");   

    //  console.log(actTitle);
    // output cypress runner window 
    cy.log("The current page title is : " + actTitle); 


    });









 });

});
