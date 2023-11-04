import { productList } from "../../Pages/ProductList"
import {quickQuote} from "../../Pages/QuickQuote"

const productObj = new productList();
const quoteObj = new quickQuote();

import GPGData from '../../fixtures/GuaranteedPensionGoalData.json';

describe('Test Guaranteed Pension Goal Plan', ()=>{
    it('GPG Plan Testcase1',()=>{
        productObj.openURL()
        productObj.selectGuaranteedPensionGoalPlan(GPGData.Planname)
        quoteObj.selectTitle(GPGData.Title)
        quoteObj.enterFirstName(GPGData.Firstname)
        quoteObj.enterLastName(GPGData.Lastname)
        quoteObj.enterMobileNo(GPGData.MobileNo)
        quoteObj.enterEmail(GPGData.Email)
        quoteObj.clickCalculate()  
        quoteObj.enterSMICName(GPGData.SMICName)
        quoteObj.enterSMContactNo(GPGData.SMICContact)
        quoteObj.clickSubmit()
        quoteObj.clickBackBtn()

    })
})
