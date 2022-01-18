describe("Crystal Key Hotel", () => {
  it("Test 1", () => {
    cy.visit("https://qa-environment.koalaresorthotels.com/");

    // login
    // 1. yol
     cy.get("#navLogon > .nav-link").click();

    // 2. yol
    //cy.contains("Log in").click();
    // contains() metni text olarak buluyor

    //username: 'Manager'
    cy.get("#UserName").type("Manager");
    //driver.findElement(BycssLocator("#UserName")).sendKeys("manager");

    //password: 'Manager1!'
    cy.get("#Password").type("Manager1!");

    cy.get("#btnSubmit").click();
  });
});
