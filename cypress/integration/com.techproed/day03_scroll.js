describe("scroll", () => {
  it("scroll into view", () => {
    cy.visit("https://qa-environment.koalaresorthotels.com/");

    cy.wait(2000);
    cy.get(".col-md-7 > .mb-4").scrollIntoView();
    // locate'e scroll yapar o locate'e gider

    cy.wait(2000);
    cy.get(
      ":nth-child(9) > .container > .justify-content-center > .col-md-7 > h2"
    ).scrollIntoView();

    cy.wait(2000);
    cy.get(".col-md-7 > h2 > span");

    cy.wait(2000);
    cy.scrollTo("top"); // en uste git
    
    cy.wait(2000);
    cy.scrollTo("bottom"); // en alta git

    cy.wait(2000);
    cy.scrollTo(0, 1000); // 1000 px down
    
    cy.wait(2000);
    cy.scrollTo(0,-500); // 500 px up
    

  });
});
