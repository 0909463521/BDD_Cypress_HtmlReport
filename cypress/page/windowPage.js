class windowPage{
    constructor() {
        this._element = {
           
            navbarElemnts:() => cy.get('.traversal-breadcrumb'),
            listElementOfCloset:() => cy.get('.traversal-list')
		}
    }
    async validateEndPointWindow(){
        await cy.window().should('have.property', 'top')

    }

    async validateEndPointDocument(){
        await cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
       
    }

    async validateEndPointTitle(){
        await cy.title()
        .should('include', 'Kitchen Sink')
    }

    
}
module.exports = new windowPage();