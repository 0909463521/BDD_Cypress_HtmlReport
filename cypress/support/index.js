// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
const fs = require('fs');

https://github.com/qaboxletstest/cypress-cucumber-demo/blob/master/cypress/support/index.js
before(function () {
    cy.log("Before Feature");
})
after(function () {
    cy.log("After Feature");
     cy.exec('npm run emptyScreenshots').then((result) => {
            // yields the 'result' object
            // {
            //   code: 0,
            //   stdout: "Files successfully built",
            //   stderr: ""
            // }
            })  
})
afterEach(() => {

    console.log(window);
   
        const testState = window.testState;
        const stepResult = testState.runTests[testState.currentScenario.name][testState.currentStep];
        
        cy.screenshot(`${testState.currentScenario.name}`)
        cy.readFile(
            `cypress/screenshots/${Cypress.spec.name}/${testState.currentScenario.name}.png`,
            "base64")  
            .then((imgData) => {
                stepResult.attachment = {
                    data: imgData,
                    media: { type: "image/png" },
                    index: testState.currentStep,
                    testCase: testState.formatTestCase(testState.currentScenario),
                };
            }); 
       
});    