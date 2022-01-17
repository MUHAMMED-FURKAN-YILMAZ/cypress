describe('hooks', () => {

    before(() => {
        console.log('BEFORE METHOD CALISTI');
    })

    beforeEach(() => {
        console.log('BEFORE EACH METHOD CALISTI');
        cy.visit("https://qa-environment.koalaresorthotels.com/");
    })
    
    after(() => {
        console.log('AFTER METHOD CALISTI');
    })

    afterEach(() => {
        console.log('AFTER EACH METHOD CALISTI');
        cy.url().should('include', 'Account/Logon')
    })

    it('test 1', () => {

        cy.contains('Log in').click()        
    })


})
