let Util = require('../helpers/util');
class Authentication{
    get header() {return $("//h1[text()='Authentication']")}
    get newAccountHeader() {return $("//h3[text()='Create an account']")}

    verifyAuthenticationHeader(){
        Util.verifyElementExist(this.header);
    }
    verifyCreateAnAccountHeader(){
        Util.verifyElementExist(this.newAccountHeader);
    }
    enterNewAccountEmailAddress(email){
        let emailInputText = $("//input[@id='email_create']");
        Util.EnterInputText(emailInputText,email);
    }
    clickOnCreateAnAccount(){

    }
}
module.exports = new Authentication();