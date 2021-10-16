let Util = require('../helpers/util');

class LaunchPage{
    get logo() {return $("//img[@alt='My Store']")}
    get signIn() {return $('=Sign in')}

    async launchURL(){
        console.log("launchurl()");
        let websiteURL = "http://automationpractice.com/index.php"
        await browser.url(websiteURL);
    }
    verifyLogoDisplayed(){
        Util.verifyElementExist(this.logo,30000);
    }
    clickOnSignIn(){
        Util.clickElement(this.signIn);
    }

}
module.exports = new LaunchPage();