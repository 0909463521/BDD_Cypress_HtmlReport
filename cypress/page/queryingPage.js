class queryingPage{
    constructor() {
        this._element = {
           
            txtDataTestId:() => cy.get('[data-test-id="test-example"]'),
            clickBtn:() => cy.get('#query-btn'),
            listElement:() => cy.get('.query-list'),
            formElement:() => cy.get('.query-form')
		}
    }
    async clickButton(){
        await this._element.clickBtn()
        .should('contain', 'Button')
        .click()
    }
    async validateAttributeDataTestId(){
        //
        await this._element.txtDataTestId()
        .should('have.attr', 'data-test-id', 'test-example')
        .and('have.css', 'position', 'static')
        .invoke('text').then((text) => {
            expect(text.trim()).equal('Div with data-test-id')
        });

        await this._element.txtDataTestId()
        .contains('Div with data-test-id')
    }
    async validateList(){
        await this._element.listElement()
        .contains('apples').should('have.class', 'first')
        
        await this._element.listElement()
        .contains('ul', 'oranges')
        .should('have.class', 'query-list')

    }
    async validateChildElementForm(){
        await this._element.formElement()
        .within(() => {
            cy.get('input:first')
            .should('have.attr', 'placeholder', 'Email')
            .and('have.id','inputEmail')
            .type("demo@gmail.com")
            cy.get('input:last')
            .should('have.attr', 'placeholder', 'Password')
            .and('have.id','inputPassword')
            .type("demopassword")
            // chuyển ra thằng parent = với thằng this._element.formElement()
            cy.root().should('have.class','query-form')
        })

    }

}
module.exports = new queryingPage();