

/* eslint-disable no-undef */


describe('Viewing the sellers', () => {

  beforeEach("Visit the seller page", () => {
    cy.intercept('GET', '/seller', { fixture: 'seller' })
    
    cy.visit("http://localhost:3000/View");
  });
  it('Visit the seller page', () => {

     
    // Visit the page
    // Fills out the form
    cy.get("h1").contains("Sellers")
    cy.get("li")
    // cy.wait('@sellers')
  })
})
