class traversalPage{
    constructor() {
        this._element = {
           
            navbarElemnts:() => cy.get('.traversal-breadcrumb'),
            listElementOfCloset:() => cy.get('.traversal-list')
		}
    }
    async validateChildElementNavbar(){
        await this._element.navbarElemnts()
        .children('.active')
        .should('contain','Data');

    }
    async validateEndpointCloset(){
        //
        await this._element.listElementOfCloset()
        .closest('div')
        .should('have.class', 'well')
    }
    async validateEndPointEqual(){
       await cy.get('.traversal-list>li')
       .eq(0)
       .should('contain', 'tabby')
       .closest('div')
       .should('have.class', 'well')
    }
    async validateEndPointFilter(){
        await cy.get('.traversal-nav>li')
        .filter('.active')
        .should('contain', 'About')

    }
    async validateEndPointFind(){
       let result  = await cy.get('.traversal-pagination')
        .find('li')
        .last()
        .should('contain','»')
    }
    async validateEndPointLast(){
        let result = await cy.get('.traversal-table')
        .find('tbody')
        .find('tr')
        .last()
        .should('contain', 'Doe')
    }
    async validateEndPointNext(){
        let result = await cy.get('.traversal-ul > li')
        .next()
        .should('have.class', 'second')
    }
    async validateEndPointNextAll(){
        let result = await cy.get('.traversal-next-all')
        .contains('oranges')
        .nextAll().should('have.length', 3)
    }
    async validateEndPointNextUntil(){
        await cy.get('#veggies')
        .nextUntil('#nuts').should('have.length', 3)
    }
    async validateEndPointNot(){
        await cy.get('.traversal-disabled .btn')
        .not('[disabled]')
        .should('not.contain', 'Disabled')
        .and('contain','Button')
    }
    async validateEndPointParent(){
        await cy.get('.traversal-mark')
        .parent()
        .should('contain', 'Morbi leo risus')
        .parent()
        .should('have.class','well')
    }
    async validateEndPointParents(){
        cy.get('.traversal-cite')
        .parents()
        .should('match', 'blockquote')
    }
    async validateEndPointParentsUntil(){
        await cy.get('.clothes-nav')
        .find('.active')
        .parentsUntil('.clothes-nav')
        .should('have.length', 2)
    }
    async validateEndPointSiblings(){
        await cy.get('.traversal-pills')
        .find('.active')
        .siblings()
        .should('have.length', 2)
    }



}
module.exports = new traversalPage();