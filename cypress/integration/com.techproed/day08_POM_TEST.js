/// <reference types="cypress" />

// Cypress onermesi icin ya ustteki sekilde her clasa yazilir yada
// alttaki satiri support/jsconfig.json dosyasi olusturup icine atariz
//{
//  "include": ["./node_modules/cypress", "cypress/**/*.js"]
//}

import HomePage from '../pageObjectRepository/HomePage'
import LoginPage from '../pageObjectRepository/LoginPage'


describe('Paylinn Bank', () => {

    before(function () {
        cy.fixture('creds').then(function (data) {
            this.data= data;
        })
    })

    
    it('paylinn login test', function () {

        // page object olusturma
        const homePage = new HomePage()
        const loginPage = new LoginPage()

        cy.visit('https://www.paylinn.com/')

        // Sign In'e click
        homePage.getSigninLink().click()

        // username gir
        loginPage.getUserNameBox().type(this.data.username)

        // username girildigini dogrula
        loginPage.getUserNameBox()
        .should('have.attr','value', this.data.username)

        // password gir
        loginPage.getPasswordBox().type(this.data.password)

       // password girildigini dogrula
        loginPage.getPasswordBox()
       .should('have.attr','value', this.data.password)

        // login button click
        loginPage.getLoginButton().click()

        // giris yapildigini onayla
        loginPage.getWelcomeText()
        .should('contain.text', 'Welcome')

        // giris yapildigini coklu assert etme
        loginPage.getNavbarHeader()
        .should('contain.text', 'Welcome')
        .and('contain.text','React')
        .and('contain.text','Logout')
        .and('contain.text',this.data.username)

    })

})
