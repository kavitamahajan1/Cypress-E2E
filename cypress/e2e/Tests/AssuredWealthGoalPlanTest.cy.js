import { productList } from "../../Pages/ProductList"
import {quickQuote} from "../../Pages/QuickQuote"

const productObj = new productList();
const quoteObj = new quickQuote();

import AWGData from '../../fixtures/AssuredWealthGoalData.json'

describe('Test Assured Wealth Goal Plan', ()=>{
    it('AWG Plan Testcase1',()=>{
        productObj.openURL()
        productObj.selectAssuredWealthGoalPlan(AWGData.Planname)
        quoteObj.selectTitle(AWGData.Title)
        quoteObj.enterFirstName(AWGData.Firstname)
        quoteObj.enterLastName(AWGData.Lastname)
        quoteObj.enterMobileNo(AWGData.MobileNo)
        quoteObj.enterEmail(AWGData.Email)
        quoteObj.clickCalculate()  
        quoteObj.enterSMICName(AWGData.SMICName)
        quoteObj.enterSMContactNo(AWGData.SMICContact)
        quoteObj.clickSubmit()
        quoteObj.clickBackBtn()

    })
})
