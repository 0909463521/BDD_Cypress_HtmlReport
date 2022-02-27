import { Given,When,And } from "cypress-cucumber-preprocessor/steps";
import traversalPage from '../../page/traversalPage';

When('Testing Child Element in Navbar',async function(){
    
    await traversalPage.validateChildElementNavbar()
});

And('Testing Validate EndPoint Closet',async function(){
    await traversalPage.validateEndpointCloset();
});

And('Testing Validate EndPoint Equal',async function(){
    await traversalPage.validateEndPointEqual();
});
And('Testing Validate EndPoint Filter',async function(){
    await traversalPage.validateEndPointFilter();
});
And('Testing Validate EndPoint Find',async function(){
    await traversalPage.validateEndPointFind();
})
And('Testing Validate EndPoint Last',async function(){
    await traversalPage.validateEndPointLast();
})
And('Testing Validate EndPoint Next',async function(){
    await traversalPage.validateEndPointNext();
})
And('Testing Validate EndPoint Next All',async function(){
    await traversalPage.validateEndPointNextAll();
})
And('Testing Validate EndPoint Next Until',async function(){
    await traversalPage.validateEndPointNextUntil();
})
And('Testing Validate EndPoint Not',async function(){
    await traversalPage.validateEndPointNot();
})
And('Testing Validate EndPoint Parent',async function(){
    await traversalPage.validateEndPointParent();
})
And('Testing Validate EndPoint Parents Until',async function(){
    await traversalPage.validateEndPointParentsUntil();
})
And('Testing Validate EndPoint Sibling',async function(){
    await traversalPage.validateEndPointSiblings();
})
And('Testing Validate EndPoint Click Canvas',async function(){
    await traversalPage.validateEndPointSiblings();
})


