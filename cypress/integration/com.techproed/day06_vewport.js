describe("", () => {
  it.skip("iphone8", () => {
    cy.visit("https://www.amazon.com/");

    cy.viewport("iphone-8");
    cy.screenshot();
  });

  it.skip("imac", () => {

    cy.visit("https://www.amazon.com/");

    cy.viewport('macbook-15');
    cy.screenshot()

  });

  it("custom", () => {

    cy.visit("https://www.amazon.com/");

    cy.viewport(2500,1500);
    cy.screenshot()

  });
});
