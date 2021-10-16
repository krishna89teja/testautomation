class Util{

    verifyElementExist(selector,timeout,reverse = false){
        selector.waitForExist({ timeout, reverse })
        expect(selector).toBeDisplayed();
    }
    EnterInputText(selector,inputtext){
        verifyElementExist(selector,5000);
        selector.setValue(inputtext);
    }
    verifyElementText(selector,expectedText){
        expect(selector).toHaveText(expectedText);
    }
    clickElement(selector){
        selector.click();
    }
    selectDate(date){
        let dd = date.split('/')[0];
        let mm = date.split('/')[1];
        let yy = date.split('/')[2];

    }
}
module.exports = new Util();