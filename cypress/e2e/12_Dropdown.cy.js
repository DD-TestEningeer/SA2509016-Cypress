


//  Drop-down handling 

describe("Drop-down handling Demo", ()=>{


// test case 
it("Test Case 1 - Select Options from drop-down", ()=>{

// open url 
cy.visit("https://www.automationtesting.co.uk/dropdown.html");

// verify the page title 
cy.title().should('include', "Dropdown Menus");

// verify the page url 
cy.url().should('include', "/dropdown.html");

// manual waits 
cy.wait(5000);

// drop-down selection
// <option value="bmw">BMW</option>
cy.get("#cars").select("BMW"); // visible text

cy.wait(5000);

cy.get("#cars").select("ford"); // value 

cy.wait(5000);

cy.get("#cars").select(3); // index

cy.wait(5000);

// log the info
cy.log("The completed");







});


});