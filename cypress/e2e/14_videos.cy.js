

// capture the videos for test cases

describe("Video Recording Demo", ()=>{


    it("Test Case 1 - Open Url ", ()=>{

   // open url 
   cy.visit("https://www.automationtesting.co.uk/dropdown.html");

   // header validation    
   cy.get("#content").should('not.be.visible'); // fail

   // manual wait
    cy.wait(10000);


    });



});