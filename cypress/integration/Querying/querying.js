import { Given,When,And } from "cypress-cucumber-preprocessor/steps";
import queryingPage from '../../page/queryingPage';

When('Testing Button',async function(){
    await queryingPage.clickButton()
});

And('Testing Validate Attribute',async function(){
    await queryingPage.validateAttributeDataTestId();
});

And('Testing Validate List',async function(){
    await queryingPage.validateList();
});
And('Testing Validate Child Element',async function(){
    await queryingPage.validateChildElementForm();
})

