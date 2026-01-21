

// assert for explicit assertions 


describe("Demo for assert - explicit assertion", ()=>{

  
    it("TC1- Pass Case ", ()=>{

     assert.isTrue(true);       

    });



    it("TC2- Fail Case ", ()=>{

     assert.isTrue(false);       

    });


 it("TC3 - Login Page ", ()=>{

 
    cy.visit("https://dd-demo-tau.vercel.app/login.html");

    // get page title 

    // const actTitle = cy.title();
    const expTitle = "Login Page";


 cy.title().then((actTitle)=>{

     assert.equal(actTitle, expTitle);

 });

 
 // find the login button and check for validation 

 cy.get('button').then((loginBtn)=>{

 const actText = loginBtn.text();

 assert.equal(actText, "Login");

 });
 
    



    });




});