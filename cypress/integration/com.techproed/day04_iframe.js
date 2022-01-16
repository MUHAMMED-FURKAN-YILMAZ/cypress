import 'cypress-iframe';
// cypress runner'inin iframe ile iletisime gecmesi icin gerekli 
// olan kodlari tanimlar

describe("iframes", () => {

//seleniumdaki mvn repository'si gibi repository ekleyebiliyoruz (npmjs'den)
// npmjs -> search (cypress-iframe) -> pick (cypress-iframe)
// -> installation "npm install -D cypress-iframe" copy -> terminal
// -> new terminal -> paste + ENTER
// Ardindan ust satira import etmeliyiz  yada 
// support icindeki commands.js'e import etmeliyiz 

    it("iframe", () => {

        cy.visit("https://the-internet.herokuapp.com/iframe")

        cy.get('h3').should("contain","Editor");

        cy.frameLoaded(cy.get('#mce_0_ifr'));
        // frameLoaded(iframeLocate) -> yukaridaki import sayesinde 
        // bu methodu kullanip iframe'i locate edip yukluyoruz
        // driver.switchTo().iframe("mce_0_ifr") ->saelenium

        cy.iframe().find("p").clear()
        // Artik ust satirda locate'ini aldigimiz iframe'e 
        // cy.iframe() -> iframe'e git
        // .find() ->  "p" tag'ini bul
        // .clear() -> icini temizle

        // iframe icine "Hello World" yazdir
        cy.iframe().find("p").type("Hello World")

        cy.get('.large-4 > div > a').should("contain.text","Elemental Selenium")
        //! cypresste diger elementlere ulasmak icin iframe'den cikis yapmaya gerek yok..   

        cy.get('.large-4 > div > a').should("contain.text","Elemental Selenium").click()
        // -> new tab acildi. buraya erisimimiz henuz yok. 
        // Cevabi day04_multiple_windows.js file'inda

    })



})