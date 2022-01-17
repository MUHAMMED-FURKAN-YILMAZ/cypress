describe('file upload', () => {
    
    it.skip('tek dosya yukleme', () => {

        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')

        // attach()-> importumuz ile birlikte foto yukleyebiliyoruz
            cy.wait(1000)
        // 1-)
        //cy.get('#filesToUpload').attachFile('gustavo-campos-B87zMorEZRo-unsplash.jpg')

        // 2)
        const path1= 'gustavo-campos-B87zMorEZRo-unsplash.jpg'
        cy.get('#filesToUpload').attachFile(path1)

        cy.get('#fileList > li').should('include.text', path1)
        cy.contains(path1).should('be.visible')


    })

    it.skip('coklu dosya yukleme', () => {
        
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')

        const path1= 'gustavo-campos-B87zMorEZRo-unsplash.jpg'
        const path2= 'hanson-lu-QV0AinhRU2c-unsplash.jpg'
        const path3= 'sebastian-pociecha-kvOh4m2CraQ-unsplash.jpg'

        // attachFile() chain seklinde olabilir

        // ancak burada 3 dosya da tek tek yukleniyor ama onceki siliniyor

        cy.get('#filesToUpload')
        .attachFile(path1).wait(2000)
        .attachFile(path2).wait(2000)
        .attachFile(path3).wait(2000)
    })

    it.skip('coklu dosya yukleme', () => {
        
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')

    // Burada liste seklinde 3'u de ayni anda yuklenmis oluyor. oncekiler silinmiyor
        const path1= 'gustavo-campos-B87zMorEZRo-unsplash.jpg'
        const path2= 'hanson-lu-QV0AinhRU2c-unsplash.jpg'
        const path3= 'sebastian-pociecha-kvOh4m2CraQ-unsplash.jpg'

        cy.get('#filesToUpload')
        .attachFile([path1, path2, path3])
    })

    it('override file name', () => {
        
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')

    // Burada liste seklinde 3'u de ayni anda yuklenmis oluyor. oncekiler silinmiyor
        const path1= 'gustavo-campos-B87zMorEZRo-unsplash.jpg'
      //  const path2= 'hanson-lu-QV0AinhRU2c-unsplash.jpg'
      //  const path3= 'sebastian-pociecha-kvOh4m2CraQ-unsplash.jpg'

        cy.get('#filesToUpload')
        .attachFile({filePath: path1, fileName: 'ferrariPitStop.pdf'})
    // burada istedigim image'i attach ettim ama istedigim isimle yuklenmesini sagladim
    
        cy.contains('ferrariPitStop.pdf').should('be.visible')

        cy.get('#fileList > li').should('have.text','ferrariPitStop.pdf')
        cy.get('#fileList > li').should('include.text','ferrari')
    })

})