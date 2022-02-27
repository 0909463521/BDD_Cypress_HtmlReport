class actionsPage{
    constructor() {
        this._element = {
           
            navbarElemnts:() => cy.get('.traversal-breadcrumb'),
            listElementOfCloset:() => cy.get('.traversal-list')
		}
    }
    async validateEndPointType(){
        await cy.get('.action-email')
        .type('fake@email.com').should('have.value', 'fake@email.com')
      
        // .type() with special character sequences
        .type('{del}{selectall}{backspace}')
      
        await cy.get('.action-disabled')
        // Ignore error checking prior to type
        // like whether the input is visible or disabled
        .type('disabled error checking', { force: true })
        .should('have.value', 'disabled error checking')
    }

    async validateEndPointFocus(){
        await cy.get('.action-focus').focus()
        .should('have.class', 'focus')
        .prev().should('have.attr', 'style', 'color: orange;')
    }

    async validateEndPointBlur(){
        // làm mờ
        await cy.get('.action-blur').type('About to blur').blur()
        .should('have.class', 'error')
        .prev().should('have.attr', 'style', 'color: red;')
    }
    async validateEndPointClickCanvas(){
        // làm mờ
        let canvas = await cy.get('#action-canvas').then(function(objCanvas) {
            var width = objCanvas.prop("width")
            var height = objCanvas.prop("height")
            var style = objCanvas.prop("style")

            cy.log("Width: "+width)
            cy.log("Height: "+height)
            cy.log("Style :"+style)

            cy.get('#action-canvas').click(0, height/2)
            cy.get('#action-canvas').click(width, height/2)
            cy.get('#action-canvas').click(width/2, 0)
            cy.get('#action-canvas').click(width/2, height)

            cy.get('#action-canvas').click(width/2, height/2)

            cy.get('.action-labels>.label').click({ multiple: true })

        })
 
    }

    async validateEndPointDoubleClick(){
        await cy.get('.action-div')
        .dblclick()
        .should('not.be.visible')
        
        await cy.get('.action-input-hidden')
        .clear()
        .type("User test Double Click")
        .should('be.visible')

    }
    async validateEndPointRightClick(){
      await cy.get('.rightclick-action-div')
      .rightclick()
      .should('not.be.visible')

      await cy.get('.rightclick-action-input-hidden')
      .clear()
      .type("User test Right Click")
      .should('be.visible')

    }
    async validateEndPointCheckedAndUnChecked(){
      await cy.get('.action-checkboxes [type="checkbox"]').not('[disabled]')
        .check().should('be.checked')
        
      
      await cy.get('.action-radios [type="radio"]').not('[disabled]')
        .check().should('be.checked')
      
      // .check() accepts a value argument
      await cy.get('.action-radios [type="radio"]')
        .check('radio1').should('be.checked')
      
      // .check() accepts an array of values
      await cy.get('.action-multiple-checkboxes [type="checkbox"]')
        .check(['checkbox1', 'checkbox2']).should('be.checked')
        .uncheck('checkbox1')

    //Uncheck all
    await cy.get('.action-checkboxes [type="checkbox"]').not('[disabled]')
    .uncheck()
    .should('not.be.checked')
 
    }

    async validateEndPointSelectAndUnSelect(){
        await cy.get('.action-select')
        .select('apples')
        .should('have.value', 'fr-apples')

        await cy.get('.action-select-multiple')
        .select(['apples', 'oranges', 'bananas'])
        // when getting multiple values, invoke "val" method first
        .invoke('val')
        .should('deep.equal', ['fr-apples', 'fr-oranges', 'fr-bananas'])

    }

    async validateEndPointScrollToView(){
        await cy.get('#scroll-horizontal button')
        .should('not.be.visible')
        .scrollIntoView()
        .should('be.visible')

        await cy.get('#scroll-vertical button')
        .should('not.be.visible')
        .scrollIntoView()
        .should('be.visible')
        

        // tự động  scroll trái + phải đến cái nút
        await cy.get('#scroll-both button')
        .should('not.be.visible')
        .scrollIntoView()
        .should('be.visible')

    }
    async validateEndPointScrollTo(){
        await cy.scrollTo('bottom')

        await cy.get('#scrollable-horizontal').scrollTo('right')

  
        await cy.get('#scrollable-vertical').scrollTo(250, 250)

       
        await cy.get('#scrollable-both').scrollTo('75%', '25%')

      
        await cy.get('#scrollable-vertical').scrollTo('center', { easing: 'linear' })

        await cy.get('#scrollable-both').scrollTo('center', { duration: 2000 })
    }

    async validateEndPointTrigger(){
       await cy.get('.trigger-input-range')
        .invoke('val', 100)
        .trigger('change')
        .get('input[type=range]').siblings('p')
        .should('have.text', '25')
    }



    



}
module.exports = new actionsPage();