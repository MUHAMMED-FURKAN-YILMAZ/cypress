describe("CheckBoxes", () => {

  it("checking single box", () => {
    cy.visit("http://automationpractice.com/index.php");

    //cy.get('.sf-menu > :nth-child(1) > [href="http://automationpractice.com/index.php?id_category=3&controller=category"]').click()
    cy.get(".sf-with-ul").first().click();

    // tikli olmadigini test et
    cy.get("#layered_category_4").should("not.be.checked");
    //should("not.be.checked")-> checked olmadigini assert ediyor T/F

    //tikla
    cy.get("#layered_category_4").check() 
    // check() -> checkler (tiklar)

     // tikli oldugunu test et
    cy.get("#layered_category_4").should("be.checked");
    //should("be.checked")-> checked oldugunu assert ediyor T/F

    // tiki kaldir ve tikli olmadigini kontrol et
    cy.get("#layered_category_4").uncheck().should("not.be.checked"); 
    //uncheck() -> uncheckler (tiki kaldirir)
  });

  it("check adll checkboxes", () => {

    cy.visit("http://automationpractice.com/index.php");

    cy.get(".sf-with-ul").first().click();

    // tum checkbox'lari isaretle
    cy.get("input[type='checkbox']").check()
    cy.wait(2000)

    // tum checkbox'lardan isareleri kaldir
    cy.get("input[type='checkbox']").uncheck()
  })



  it.only("click", () => {

    cy.visit("http://automationpractice.com/index.php");

    cy.get(".sf-with-ul").first().click();

    //cy.get("input[type='checkbox']").click()
    // click() -> methodu 1 elementi click etmek icin kullanilir
    // eger birden fazla ise ya ustteki gibi check() kullanmaliyiz
    // yada { multiple: true } kodunu yazmaliyiz 

    cy.get("input[type='checkbox']").click({ multiple: true })
    // click({ multiple: true }) -> bu sekilde click()'i coklu 
    // sekilde uygulayabiliriz

    //Assert
    // 1)
    cy.get("input[type='checkbox']").should("be.checked")

    // 2)
    cy.get("input[type='checkbox']").first().should("be.checked")

    // 3)
    cy.get("input[type='checkbox']").first().parent().should("have.class", "checked")
    // should("have.class", "xxx") 
    // checkbox isaretlendiginde parentinde isaretlendigine dair yeni 
    //  bir attribute ortaya cikabiliyor. Burada onu kontrol ediyoruz

    // 4)
    // should("have.id", "xxx") 

    // 5)
    // should("have.type", "xxx") 
    


  })

  

});
