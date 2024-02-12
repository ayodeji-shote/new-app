
describe("Navigation home page", () => {
    beforeEach('Runs each of the intercepts before the page loads ',()=>{
        cy.intercept('GET', '/buyer', { fixture: 'buyer' })
        cy.intercept('GET', '/seller', { fixture:'seller' })
        cy.intercept('GET', '/property', { fixture: 'property' })
        cy.intercept('GET', '/booking', { fixture: 'booking' })
    });
   it('Should navigate to the home page when clicked', () => {
    cy.visit("http://localhost:3000");
    cy.get("[data-cy=navigate]").contains("Home Page").click();
    cy.url().should("include", "/Home");
   });

   it('Should navigate to the buyer page when clicked', () => {
     cy.visit("http://localhost:3000/BView");
     cy.get("[data-cy=BuyerFirstName]").contains("Buyers").click();
     cy.url().should("include", "/BView");
    });

    it('Should navigate to the seller page when clicked', () => {
        cy.visit("http://localhost:3000/View");
         cy.get("[data-cy=SellerFirstName]").contains("Sellers").click();
         cy.url().should("include", "/View");
        });

    it('Should navigate to the property page when clicked', () => {
        cy.visit("http://localhost:3000/PView");
            cy.get("[data-cy=Property]").contains("Property").click();
            cy.url().should("include", "/PView");
        });

        
    it('Should navigate to the booking page when clicked', () => {
        cy.visit("http://localhost:3000/BOView");
            cy.get("[data-cy=Booking]").contains("Booking").click();
            cy.url().should("include", "/BOView");
        });
});

