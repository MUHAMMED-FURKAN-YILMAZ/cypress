/// <reference types="cypress" />

describe("XHR- XML, HTTP, Request", () => {
  
    
    it("XHR Example 3", () => {
        cy.visit("https://example.cypress.io/commands/waiting")
     
        cy.intercept('GET', '**/comments/*').as('getComment')
        // intercept -> network'u dinle
        // as -> degisken atiyor. Daha sonra @ ile kullanilir

        cy.get('.network-btn').click()

        cy.wait('@getComment').its('response').then((response) => {
            console.log(response);

            assert.equal(response.statusCode,200,'Status Code Control')
        })
  
  
    });
  });