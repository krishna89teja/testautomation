const launchpage = require('../pages/launch.page');
const authenticationpage = require('../pages/authentication.page')
describe("End to End scenario",()=>{
    it("Launch the website",()=>{
        //launchpage.launchURL();
        browser.url("http://automationpractice.com/index.php");
        browser.pause(10000);
    })
    it("Register on the website",()=>{
        launchpage.verifyLogoDisplayed();
        launchpage.clickOnSignIn();
    })
    it("Enter personal details on authentication page",()=>{
        authenticationpage.verifyAuthenticationHeader();
        authenticationpage.enterNewAccountEmailAddress("rohit.sharma@cricket.com");
        authenticationpage.clickOnCreateAnAccount();
    })
    it("wait",async()=>{
        await browser.pause(6000);
    })
})