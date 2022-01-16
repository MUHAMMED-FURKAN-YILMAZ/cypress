describe("multiple windows", () => {

  it.skip("removing target", () => {
    cy.visit("https://the-internet.herokuapp.com/windows");

    cy.wait(2000);
    // 1. YOL 
//! Cypressi de yeni acilan tab'da kullanamayiz.
//! bu sebeple burada soyle bir sey yapiyoruz. Yeni acilan tab'in yeni  
//! sekmede degil simdiki sekmede acilmasini saglamaliyiz. Bunu da bizi  
//! yeni tab'e gonderen html kodu olan target="_blank" i silerek yapabiliriz
    cy.get(".example > a").invoke("removeAttr", "target").click();
    // invoke= cagirmak
    // invoke('removeAttr','Attribute Name') -> locate'den "Attribute Name"i siler

    cy.get('h3').should('have.text', 'New Window')
});


    it('Yeni urlde acma', () => {

        cy.visit("https://the-internet.herokuapp.com/windows");

        cy.wait(2000);
    
        // 2. YOL 
        cy
        .get(".example > a")
        .then((element) => {
            const newURL = element.prop('href')

            cy.visit(newURL);
        })
        // prop() jquery'de attribute degerini alan bir method'dur
        // prop() 'href' degerini yani normalde tiklayinca gidecegimiz url'yi
        // alip bir degiskene atadik. Ardinden o url'yi visit ettik
        // yeni tab actirmadan simdiki tab'den devam ettik 
        // bir nevi kandirmis olduk 

        cy.get('h3').should('have.text', 'New Window')

    })

});
