

// Screenshots

// element screenshot 
// complete webpage 


describe("Screenshots Demo", ()=>{


// test case 
it("Test Case 1 - Select Options from drop-down", ()=>{

// open url 
cy.visit("https://www.automationtesting.co.uk/dropdown.html");

// verify the page title 
cy.title().should('include', "Dropdown Menus");

// verify the page url 
cy.url().should('include', "/dropdown.html");

// Compete webpage screenshot 
cy.screenshot("HomePage");
// manual waits 
cy.wait(5000);

// drop-down selection
// <option value="bmw">BMW</option>
cy.get("#cars").select("BMW"); // visible text

// element specific screenshot  - dropdown
cy.get("#cars").screenshot("Dropdown");

cy.wait(5000);

cy.get("#cars").select("ford"); // value 

cy.wait(5000);

cy.get("#cars").select(3); // index

cy.wait(5000);

// log the info
cy.log("The completed");







});


});