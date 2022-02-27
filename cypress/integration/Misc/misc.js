import { Given,When,And } from "cypress-cucumber-preprocessor/steps";
import miscPage from '../../page/miscPage';

When('Testing Validate EndPoint End',async function(){
    
    await miscPage.validateEndPointEnd()
});

And('Testing Validate EndPoint ExecuteCommand',async function(){
    
    await miscPage.validateEndPointExecuteCommand()
});

And('Testing Validate EndPoint Focused',async function(){
    
    await miscPage.validateEndPointFocused()
});






