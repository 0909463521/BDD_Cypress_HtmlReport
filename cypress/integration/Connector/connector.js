import { Given,When,And } from "cypress-cucumber-preprocessor/steps";
import connectorPage from '../../page/connectorPage';

When('Testing Validate EndPoint Each',async function(){
    
    await connectorPage.validateEndPointEach()
});

And('Testing Validate EndPoint Its',async function(){
    
    await connectorPage.validateEndPointIts()
});

And('Testing Validate EndPoint Focused',async function(){
    
    await connectorPage.validateEndPointFocused()
});






