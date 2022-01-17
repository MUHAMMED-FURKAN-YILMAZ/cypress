describe('custom method', () => {
    
    it('login', () => {

    // artik cy.methodName ile commands.js'te tanimlanan methodlara 
    // frameworkun her yerinden ulasabilirim
       cy.login('123murat123@gmail.com','123murat123')
        // cy.methodName('parametre1', 'parametre2')



    })

    it.only('negative login', () => {
        
        cy.login('murat123@gmail.com','123murat123')
        cy.contains('Authentication failed.').should('be.visible')
        cy.url().should('include','controller=authentication')

       cy.screenshot()
      // bu methodla screenshot aldik

    })

})