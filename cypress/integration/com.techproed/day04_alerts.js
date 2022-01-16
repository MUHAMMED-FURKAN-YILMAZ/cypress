describe("allerts", () => {

    it.skip("alert test", () => {

        // Cypress otomatik olarak allert button tiklamalarini onaylar

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.get(':nth-child(1) > button').click()

        cy.get('#result').should("have.text","You successfully clicked an alert")
    })


    it.skip("accept alert Test", () => {

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        //2. butona tikliyoruz (click for JS Confirm)
        cy.get(':nth-child(2) > button').click()
        // 2 secenek cikiyor iptal/tamam
        // cypress otomatik olarak tamam'i kabul ediyor

        cy.get('#result').should("have.text","You clicked: Ok")
    })


    it.skip("dismiss alert Test", () => {

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.get(':nth-child(2) > button').click()
        /* 
        cypress otomatik olarak tamam butonuna tikladi 
        ama iptal butonunu secmek istiyoruz
        browser kontrolu icin on() fonksiyonunu kullanacagiz
        on() -> jquery bir fonksiyondur
        */

        /* window(object):confirm(functionality)
        bu methodla window pop up'i 'ok' disinda bir sey yapacaksak
        kullaniyoruz
        */
        cy.on('window:confirm', (str) => {

            return false;
            // return true -£ default olarak tamam'a tikla demek
        })

        cy.get('#result').should("have.text","You clicked: Cancel")
    })


    it.only("entering text on the allert", () => {

        // 3. button'a tikla (XClick for JS Prompt)
        // 'Hi' yaz. OK'a tikla
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.window()// pop up pencereleri kontrol ediyoruz
        .then(($windowElement) => {
            //($windowElement) bu fonksiyonun amaci propmt'a bilgi girisi    

            cy.stub($windowElement, 'prompt').returns('Hi')
            // stumb(x)->ile prompt'a 
            //.returns(y) -> y'yi dondur

            cy.wait(2000)
            cy.get(':nth-child(3) > button').click()
        })
        
        cy.get('#result').should("have.text","You entered: Hi")


    })


})