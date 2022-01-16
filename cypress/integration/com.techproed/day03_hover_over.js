describe("hover over", () => {

    it("move over", () => {

        cy.visit("https://www.amazon.com/")

        cy.get('.icp-nav-link-inner').trigger('mouseover');
        // trigger("mouseover")-> mouse'u elementin uzerine goturuyor(hareket ettiriyor)
        // https://docs.cypress.io/api/commands/trigger#Arguments ->
        // sitesinden cesitli trigger actionlarina bakabilirsin
       
        // change country/region' a tikla
        cy.contains('Change country/region').click()

        // select Canada
        //cy.get('.a-dropdown-prompt').select('Canada')
        /*
        <span class="a-dropdown-prompt"> United States </span>
        Yukaridaki locater bu tag icerisinde geciyor.
        Ancak cy.select() kodu kullanirken locaterlarin <span></span>
        icerisinde olmamasi lazim
        */
       
        cy.get("#icp-selected-country").select("Canada",{force: true})
       // bu da once hata verdi ama cypress bize {force: true} 
       // kullanmamizi onerdi ve uygulayinca bu sefer secti
       // dropdown elementleri acmaya zorlamak icin kullandik
        

    })



})