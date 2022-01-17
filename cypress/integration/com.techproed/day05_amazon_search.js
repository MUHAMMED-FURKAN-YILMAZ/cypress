describe("amazon search", () => {

  it("search", () => {
    cy.visit("https://www.amazon.com/");

    cy.get('#twotabsearchtextbox').type('imac')
    cy.get('#nav-search-submit-button').click()



  });
});
