/// <reference types="cypress" />

describe('XHR- XML, HTTP, Request', () => {

// XHR, Javascript ile sunulmus bir API'dir
// Web sitesini es zamanli olarak arka planda calisan olanlari takip etmemize yarar

    const requestUrl = 'https://jsonplaceholder.cypress.io/comments'

    it('XHR Example 1', () => {
        cy.request(requestUrl).should((response) => {
            console.log(response);
        
            assert.equal(response.status, 200);
            expect(response.statusText).to.eq('OK')
        
        })
    })


})