import { productList } from "../../Pages/ProductList"
import {quickQuote} from "../../Pages/QuickQuote"

const productObj = new productList();
const quoteObj = new quickQuote();

import SPGData from '../../fixtures/SmartProtectionGoalData.json'

describe('Test SPG Plan', ()=>{
    it('SPG Plan Testcase1',()=>{
        productObj.openURL()
        productObj.selectSPGPlan(SPGData.Planname)
        quoteObj.selectTitle(SPGData.Title)
        quoteObj.enterFirstName(SPGData.Firstname)
        quoteObj.enterLastName(SPGData.Lastname)
        quoteObj.enterMobileNo(SPGData.MobileNo)
        quoteObj.enterEmail(SPGData.Email)
        quoteObj.enterPincode(SPGData.Pincode)
        quoteObj.clickSPGCalculate()  
        quoteObj.enterSMICName(SPGData.SMICName)
        quoteObj.enterSMContactNo(SPGData.SMICContact)
        quoteObj.clickSubmit()
    
        quoteObj.clickSPGBackBtn()
    })
})