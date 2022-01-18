/// <reference types="cypress" />

describe('Paylinn Bank', () => {
    
    it('paylinn login test', () => {

        cy.visit('https://www.paylinn.com/')

        // Sign In'e click
        cy.contains('Sign In').click()

        cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
        .type('User')

        cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
        .type('user')

        cy.get('.MuiButton-label').click()

        // giris yapildigini onayla
        cy.get('.header__nav > :nth-child(1) > .header__lineOne')
        .should('contain.text', 'Wezcome')

    })


})
