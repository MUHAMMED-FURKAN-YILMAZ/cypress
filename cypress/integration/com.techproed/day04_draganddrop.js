import '@4tw/cypress-drag-drop'
// drag and drop icin plugin indiriyoruz ve import ediyoruz

describe('drag and drop', () => {

    it('double click', () => {

        cy.visit('https://www.testandquiz.com/selenium/testing.html')

        // double click
        cy.get('#dblClkBtn').dblclick()

        // sag click
        cy.get('#dblClkBtn').rightclick()

        //! allertun icindeki yaziyi assert etmeliyiz 

        cy.on('window:alert', (str) => {
            // Assert 
            // 1)
            expect(str).to.equal('hi, JavaTpoint Testing')

            // 2)
            expect(str).to.eq('hi, JavaTpoint Testing')

            // 3)
            expect(str).to.contains('hi, JavaTpoint Testing') 
        // burada should() ile assert edemeyiz . cunku cy.on() ile 
        // pop up a eistik sayfada degiliz
        })
        

    })

    it('drag and drop', () => {
    // 1) Terminalden: npm install --save-dev @4tw/cypress-drag-drop
    // 2) import '@4tw/cypress-drag-drop'     

        cy.visit('https://www.testandquiz.com/selenium/testing.html')

        cy.get('#sourceImage').drag('#targetDiv');
        // suruklenenin ve surukleyecegimizin locatini yaziyoruz
        // get('suruklenecek element').drag('suruklenen yer') 

    })
    
})
