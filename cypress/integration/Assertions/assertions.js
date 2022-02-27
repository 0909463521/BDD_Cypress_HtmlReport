import { Given,When,And } from "cypress-cucumber-preprocessor/steps";
import assertionsPage from '../../page/assertionsPage';

When('Testing Validate Find Text In Element',async function(){
    
    await assertionsPage.validateFindTextInElement()
});

And('Testing Validate EndPoint Document',async function(){
    
    await assertionsPage.validateEndPointDocument()
});

And('Testing Validate EndPoint Title',async function(){
    
    await assertionsPage.validateEndPointTitle()
});






