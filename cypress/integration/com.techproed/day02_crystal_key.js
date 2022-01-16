describe("Koala Resort Hotel", () => {
  it("Test Case1", () => {
    cy.visit("https://qa-environment.koalaresorthotels.com/");

    cy.contains("Log in").click();

    // ASSERTION

    // 1) should("include","")
    cy.url().should("include", "Account/Logon");
    // url "Account/Logon" iceriyor mu

    // 2) should("have.text", "")
    cy.get("#navLogon > .nav-link").should("have.text", "Log in");
    // "have.text"-> bu locate icinde "Log in" diye bir text var mi

    // 3) should("be.visible")
    cy.get(".row > .mb-4").should("be.visible");
    // "be.visible" -> bu locate gorunur mu

    // 4) should("equal","")
    cy.title().should("equal", "KoalaResortHotels - Log in");
    // title buna esit mi

    // 5) should("include.text", "")
    cy.get(".row > .mb-4").should("include.text", "Log in");
    // "include.text" -> bu locate icindeki text'te "Log in" var mi
    // burada "have.text" de ayni sonucu verir
  });
});
