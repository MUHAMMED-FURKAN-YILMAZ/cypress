import '@4tw/cypress-drag-drop'
// drag and drop icin plugin indiriyoruz ve import ediyoruz

describe('drag and drop', () => {

    it('double click', () => {

        cy.visit('https://www.testandquiz.com/selenium/testing.html')

        // double click
        cy.get('#dblClkBtn').dblclick()

        // sag click
        cy.get('#dblClkBtn').rightclick()

    })



    
})
