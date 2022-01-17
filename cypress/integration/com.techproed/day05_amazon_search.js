describe("amazon search", () => {

  it("search", () => {

    cy.uncaught();
    cy.amazonSearch("imac");

    cy.get('.a-color-state').should('have.text', '"imac"')
    cy.get('.a-color-state').should('include.text', 'imac')
    cy.get('.a-color-state').should('contains.text', 'imac')

  });
});
