class assertionsPage{
    constructor() {
        this._element = {
           
            navbarElemnts:() => cy.get('.traversal-breadcrumb'),
            listElementOfCloset:() => cy.get('.traversal-list')
		}
    }
    async validateEndPointEach(){
        cy.get('.connectors-each-ul>li')
        .each(function($el, index, $list){
        //   console.log($el, index, $list)
        })
        
    }
    async validateEndPointIts(){
        await cy.get('.connectors-its-ul>li')
        .its('length').then(($el)=>{
            console.log($el)
        })
       

     }
     async validateEndPointFocused(){

      await cy.get('.misc-form').find('#name').click()
      cy.focused().should('have.id', 'name')

      await cy.get('.misc-form').find('#description').click()
      cy.focused().should('have.id', 'description')
       

   }

   
    
}
module.exports = new assertionsPage();