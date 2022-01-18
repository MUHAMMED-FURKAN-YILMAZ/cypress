/// <reference types="cypress" />

describe('Paylinn Bank', () => {

    before(function () {
        cy.fixture('creds').then(function (data) {
            this.data= data;
        })
    })

    
    it('paylinn login test', function () {

        cy.visit('https://www.paylinn.com/')

        // Sign In'e click
        cy.contains('Sign In').click()

        cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
        .type(this.data.username)

        // username girildigini dogrula
        // value attribute dogrulayacagiz

        cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
        .should('have.attr','value', this.data.username)

        cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
        .type(this.data.password)

       // password girildigini dogrula

       cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
       .should('have.attr','value', this.data.password)

        cy.get('.MuiButton-label').click()

        // giris yapildigini onayla
        cy.get('.header__nav > :nth-child(1) > .header__lineOne')
        .should('contain.text', 'Welcome')

        // giris yapildigini coklu assert etme
        cy.get('.header__nav')
        .should('contain.text', 'Welcome')
        .and('contain.text','React')
        .and('contain.text','Logout')
        .and('contain.text',this.data.username)

    })


})
