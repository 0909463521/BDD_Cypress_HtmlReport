var reporter = require('cucumber-html-reporter');
const fs = require('fs');
const path = require("path");

const fsExtra = require('fs-extra')
var Promise = require("bluebird");

const directoryPath = path.join(__dirname, 'cypress/cucumber-json');

const directoryPathReport = path.join(__dirname, 'resultreport.json');



async function demo()
{
   
  try{
    
    var newReport = [];
    const files = await fs.readdirSync(directoryPath);
   
    console.log("demoooooo")
    console.log(files)
   for( var i = 0 ; i<files.length ; i++ )
   {
     
    const fullPath = path.join(directoryPath, files[i]);
    if (!(fullPath.includes('html') || fullPath.includes('DS_Store') || fullPath.includes('screenshots') )  ) {
      const data = fs.readFileSync(fullPath, "utf8");

      newReport = newReport.concat(JSON.parse(data));
      fs.unlinkSync(fullPath);

    }
   }
   console.log(newReport)

  await fs.writeFileSync('cypress/reports/resultreport.json', JSON.stringify(newReport));
  await generateHtmlReport();
  console.log("Done successfully!");
  
  }catch(err){

  }
 
}
async function generateHtmlReport()
{
    console.log("asd")
    var options = {
          theme: 'bootstrap',
          jsonFile: 'cypress/reports/resultreport.json',
          output: 'cypress/reports/cucumberreportsss.html',
          reportSuiteAsScenarios: true,
          launchReport: false,
          metadata: {
              "App Version":"0.3.2",
              "Test Environment": "STAGING",
              "Browser": "Chrome  54.0.2840.98",
              "Platform": "Windows 10",
              "Parallel": "Scenarios",
              "Executed": "Remote"
          }
        };
  
       await  reporter.generate(options);
       await fsExtra.emptyDirSync('./cypress/screenshots')


}
demo()