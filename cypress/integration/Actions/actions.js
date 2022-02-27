import { Given,When,And } from "cypress-cucumber-preprocessor/steps";
import actionsPage from '../../page/actionsPage';

When('Testing Validate EndPoint Type',async function(){
    
    await actionsPage.validateEndPointType()
});

And('Testing Validate EndPoint Focus',async function(){
    
    await actionsPage.validateEndPointFocus()
});

And('Testing Validate EndPoint Blur',async function(){
    
    await actionsPage.validateEndPointBlur()
});

And('Testing Validate EndPoint Click Canvas',async function(){
    
    await actionsPage.validateEndPointClickCanvas()
});
And('Testing Validate EndPoint Double Click',async function(){
    
    await actionsPage.validateEndPointDoubleClick()
});
And('Testing Validate EndPoint Right Click',async function(){
    
    await actionsPage.validateEndPointRightClick()
});
And('Testing Validate EndPoint Checked And Unchecked',async function(){
    
    await actionsPage.validateEndPointCheckedAndUnChecked()
});
And('Testing Validate EndPoint Select And UnSelect',async function(){
    
    await actionsPage.validateEndPointSelectAndUnSelect()
});
And('Testing Validate EndPoint Scroll To View',async function(){
    
    await actionsPage.validateEndPointScrollToView()
});
And('Testing Validate EndPoint Scroll To',async function(){
    
    await actionsPage.validateEndPointScrollTo()
});

And('Testing Validate EndPoint Trigger',async function(){
    
    await actionsPage.validateEndPointTrigger()
});


