describe("Login", () => {
  const notValidEmail = "qwert@gmail.com";
  const notValidPassword = "qwer";

  const validEmail = "cypress_test_1@gmail.com";
  const validPassword = "admin_123";

  it.skip("login negatif", () => {
    cy.visit("https://test.iyikisordun.com/login.php");

    cy.get('[type="email"]').type(notValidEmail);
    cy.get('[type="password"]').type(notValidPassword);
    cy.get(".btn").click();

    cy.get("#fail").should("include.text", "Girdiğiniz bilgiler hatalıdır.");
    // get("#fail")-> fail olmasini bekledigimiz durumlari assert ederiz
    // bir locator'un icindeki yaziyi kontrol ederken "include.text"..
  });

  it("login pozitive", () => {
    cy.visit("https://test.iyikisordun.com/login.php");

    cy.get('[type="email"]').type(validEmail);
    cy.get('[type="password"]').type(validPassword);
    cy.get(".btn").click();

    cy.get(".m-0").should("have.text", "Dashboard");
    cy.url().should("include", "index.php");
    // url'de "include" kullanilir.. "include.text" olmaz cunku text degil url
  });
});
