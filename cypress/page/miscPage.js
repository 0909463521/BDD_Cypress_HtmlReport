class assertionsPage{
    constructor() {
        this._element = {
           
            navbarElemnts:() => cy.get('.traversal-breadcrumb'),
            listElementOfCloset:() => cy.get('.traversal-list')
		}
    }
    async validateEndPointEnd(){
       await cy.get('.misc-table').within(() => {
            // ends the current chain and yields null
            cy.contains('Cheryl').click().end()
          
            // queries the entire table again
          })
        
    }
    async validateEndPointExecuteCommand(){
        await cy.exec('echo Jane Lane')
        .its('stdout').should('contain', 'Jane Lane')
      
         

     }
     async validateEndPointFocused(){

      await cy.get('.misc-form').find('#name').click()
      cy.focused().should('have.id', 'name')

      await cy.get('.misc-form').find('#description').click()
      cy.focused().should('have.id', 'description')
       

   }

   
    
}
module.exports = new assertionsPage();