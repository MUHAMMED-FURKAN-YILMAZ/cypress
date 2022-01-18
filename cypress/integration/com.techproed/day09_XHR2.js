/// <reference types="cypress" />

describe("XHR- XML, HTTP, Request", () => {
  // XHR, Javascript ile sunulmus bir API'dir
  // Web sitesini es zamanli olarak arka planda calisan olanlari takip etmemize yarar

  const requestUrl = "https://jsonplaceholder.cypress.io/comments";

  it("XHR Example 2", () => {
    cy.request("POST", requestUrl, {
      userId: 501,
      title: "Cypress cok kolay",
      body: "JavaScript daha da kolay",
    }).then((response) => {
      console.log(response);
      expect(response.status).to.eq(201);
      expect(response).property('body').to.contain({title:'Cypress cok kolay'});
      expect(response.body).property('userId').to.be.a('number')
    });


  });
});
