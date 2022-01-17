// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//! ***************************************************************
//! npm install --save-dev cypress@9.2.0

// Cypress.Commands.add() -> komut ekle, tanimla

// /automationpractice.com -1 giris icin tanimlandi
Cypress.Commands.add("login", (email, password) => {
  cy.visit("http://automationpractice.com/index.php");
  cy.get(".login").click();
  cy.get("#email").type(email);
  cy.get("#passwd").type(password);
  cy.get("#SubmitLogin > span").click();
});

// 'uncaught:exception' hata mesajini almamak icin 
Cypress.Commands.add('uncaught', () => { 

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })

})


// Amazon arama: girilen urun icin arama yapacak
Cypress.Commands.add("amazonSearch", (productName) => {
  cy.visit("https://www.amazon.com/");
  cy.get("#twotabsearchtextbox").type(productName);
  cy.get("#nav-search-submit-button").click();
});


//! ****************************************

// Dosya yuklemek icin
// https://www.npmjs.com/package/cypress-file-upload
// npm install --save-dev cypress-file-upload
import 'cypress-file-upload';

