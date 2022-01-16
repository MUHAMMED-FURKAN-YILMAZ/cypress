describe("Navigation", () => {
  it.skip("back,forward,refresh", () => {
    // it.skip -> testi test blogunda calistirmaz, atlar. ignore() gibi
    // it.only -> yalnizca bu testi calistirir

    cy.visit("https://qa-environment.koalaresorthotels.com/");

    cy.wait(2000); // hard wait
    cy.contains("Log in").click();

    // onceki sayfaya git
    // 1)
    //cy.go("back");

    // 2)
    cy.go(-1);
    cy.wait(2000);

    // ileria git
    // 1)
    //cy.go("forward");

    // 2)
    cy.go(1);
    cy.wait(2000);

    // sayfayi yeniden yukleme
    cy.reload(); // seleniumdaki refresh()
  });

  it("Chained (Zincirleme) navigation", () => {
    cy.visit("https://qa-environment.koalaresorthotels.com/");

    cy.contains("Log in")
    .click()
    .go("back")
    .go("forward")
    .go("back");

    cy.pause();
    // bu methodla test buraya gelir ve devam ettirene kadar durur. 

    cy
    .reload(true)
    .contains("Log in")
    .should("be.visible");

  });
});
