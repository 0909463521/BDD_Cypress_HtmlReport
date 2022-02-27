class assertionsPage{
    constructor() {
        this._element = {
           
            navbarElemnts:() => cy.get('.traversal-breadcrumb'),
            listElementOfCloset:() => cy.get('.traversal-list')
		}
    }
    async validateFindTextInElement(){
        let result = await cy.get('.assertions-p').find('p').then(
          ($p)=>{
            let texts = $p.map((i,el)=>{
              console.log( Cypress.$(el).text())
              return Cypress.$(el).text()

            })
          }
        )
        
        expect(texts).to.have.length(3)

     
        expect(texts, 'has expected text in each paragraph').to.deep.eq([
          'Some text from first p',
          'More text from second p',
          'And even more text from third p',
        ])
        

    }

   
    
}
module.exports = new assertionsPage();