let Util = require('../helpers/util');
class AccountCreation{
    get header(){ return $("//h1[text()='Create an account']")}

    verifyHeader(){
        Util.verifyElementExist(this.header);
    }
    enterpersonalInformation(details){
        let element = null;
        let id = null;
        for(const key of Object.keys(details)){
            switch(key.toLowerCase()){
                case "fistname":
                    element = $("//input[@id='customer_firstname']")
                    Util.EnterInputText(element,details[key]);
                    break;
                case "lastname":
                    element = $("//input[@id='customer_firstname']")
                    Util.EnterInputText(element,details[key]);
                    break;
                case "email":
                    element = $("//input[@id='email']")
                    Util.EnterInputText(element,details[key]);
                    break;
                case "password":
                    element = $("//input[@id='passwd']")
                    Util.EnterInputText(element,details[key]);
                    break;
                case "firstname":
                    element = $("//input[@id='firstname']")
                    Util.EnterInputText(element,details[key]);
                case "lastname":
                    element = $("//input[@id='lastname']")
                    Util.EnterInputText(element,details[key]);
                case "company":
                    element = $("//input[@id='company']")
                    Util.EnterInputText(element,details[key]);
                case "address":
                    element = $("//input[@id='address1']")
                    Util.EnterInputText(element,details[key]);
                case "city":
                    element = $("//input[@id='city']")
                    Util.EnterInputText(element,details[key]);
                    break;
                case "zip":
                    element = $("//input[@id='postcode']")
                    Util.EnterInputText(element,details[key]);
                    break;
                case "homephone":
                    element = $("//input[@id='phone']")
                    Util.EnterInputText(element,details[key]);
                    break;
                case "mobilephone":
                    element = $("//input[@id='phone_mobile']")
                    Util.EnterInputText(element,details[key]);
                    break;
                case "aliasaddress":
                    element = $("//input[@id='alias']")
                    Util.EnterInputText(element,details[key]);
                    break;
            }
        }
    }
    selectDataValue(date){
        //Util.EnterInputText
    }
}
module.exports = new AccountCreation();
