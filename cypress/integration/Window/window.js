import { Given,When,And } from "cypress-cucumber-preprocessor/steps";
import windowPage from '../../page/windowPage';

When('Testing Validate EndPoint Window',async function(){
    
    await windowPage.validateEndPointWindow()
});

And('Testing Validate EndPoint Document',async function(){
    
    await windowPage.validateEndPointDocument()
});

And('Testing Validate EndPoint Title',async function(){
    
    await windowPage.validateEndPointTitle()
});






