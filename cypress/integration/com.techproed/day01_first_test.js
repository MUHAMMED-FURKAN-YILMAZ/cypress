describe("My First Test", () => {
  // -> describe testi tanimlamak icin kullanilir
  // describe ('isim','test icin olusturulacak fonksiyonlar')

  it("URL Testi", () => {
    // it -> mocha'dan gelir
    // test'i tanimliyoruz. @Test gibi
    // it('Testin ismi', 'olusturulacak fonksiyonlar')

    //URL adresinde google var mi?

    cy.visit("https://www.google.com/");
    // visit('site adresi') siteye gider
    // selenium'daki get gibi

    cy.url().should("include", "google");
    // url() url testi icin kullanilir.
    //should('include(iceriyor mu)','xxx')
  });

  // 2. Test olusturma

  it("Title Test", () => {
    //Title'da Goggle var mi ?
    cy.visit("https://www.google.com/");
    cy.title().should("equal", "Google");
  });
});
