/* eslint-disable no-undef */
describe('Viewing the buyers', () => {
  beforeEach('Runs each of the intercepts before the page loads ',()=>{
    cy.server();
    cy.intercept('GET', '/buyer', { fixture: 'buyer' })
});
it('Should navigate to the buyer page when clicked', () => {
  cy.visit("http://localhost:3000/BView");
  cy.get("[data-cy=BuyerFirstName]").contains("Buyers").click();
  cy.url().should("include", "/BView");
 });
 it('Should navigate to the Add buyer form when clicked', () => {
  cy.get("a").contains("Add a Buyer").click();
  cy.url().should("include", "/BAdd");
})

it('Once at the submission page fill in the field and actually submit', () => {
  cy.url().should("include", "/BAdd");
  const newBuyer = {
    firstName: 'John',
    surname: 'Doe',
    address: '123 Main Street',
    postcode: 'AB159CD',
    phone: '012345',
    id: Date.now()
  }
  cy.intercept("POST", "http://localhost:3001/buyer", {
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBuyer),
    }).as("addBuyerInfo");
  cy.get('input#Buyerfname').should('have.attr', 'placeholder', 'First Name').as("firstName").type(Date.now());
  cy.get('input#Buyersname').should('have.attr', 'placeholder', 'Last Name').as("surname").type(Date.now());
  cy.get('input#Buyeraddress').should('have.attr', 'placeholder', 'Address').as("address").type(Date.now());
  cy.get('input#Buyerpostcode').should('have.attr', 'placeholder', 'Postcode').as("postcode").type(Date.now());
  cy.get('input#Buyerphone').should('have.attr', 'placeholder', 'Phone').as("phone").type(Date.now());
  cy.get('input.Submitbutton').click();
    cy.wait('@addBuyerInfo')
    let lengthval = 0;
    cy.readFile('cypress/fixtures/buyer.json').then((data) => {
      const combinedbuyer = data.concat(newBuyer);
      cy.writeFile('cypress/fixtures/buyer.json', JSON.stringify(combinedbuyer))
      lengthval = combinedbuyer.length-1;
      cy.get("[data-cy=buyerdetails]").should("have.length", lengthval);
    })
    // cy.writeFile('cypress/fixtures/buyer.json').then( JSON.stringify(newBuyer));
  // cy.url().should("include", "/BView");

});
})
