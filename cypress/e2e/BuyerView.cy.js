

/* eslint-disable no-undef */


describe('Viewing the buyers', () => {
  it('Visit the buyer page', () => {
    cy.intercept('GET', '/buyer', { fixture: 'buyer' })
    cy.visit("http://localhost:3000/BView"); 
    cy.get("h1").contains("Buyers")
    cy.get("li")
    // cy.wait('@buyers')
  })
})
