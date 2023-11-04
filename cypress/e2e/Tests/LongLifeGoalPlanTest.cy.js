import { productList } from "../../Pages/ProductList"
import {quickQuote} from "../../Pages/QuickQuote"

const productObj = new productList();
const quoteObj = new quickQuote();

import LLGData from '../../fixtures/LongLifeGoalData.json';

describe('Test LongLife Goal Plan', ()=>{
    it('LongLife Goal Plan Testcase1',()=>{
        productObj.openURL()
        productObj.selectLongLifeGoalPlan(LLGData.Planname)
        quoteObj.selectTitle(LLGData.Title)
        quoteObj.enterFirstName(LLGData.Firstname)
        quoteObj.enterLastName(LLGData.Lastname)
        quoteObj.enterMobileNo(LLGData.MobileNo)
        quoteObj.enterEmail(LLGData.Email)
        quoteObj.clickCalculate()  
        quoteObj.enterSMICName(LLGData.SMICName)
        quoteObj.enterSMContactNo(LLGData.SMICContact)
        quoteObj.clickSubmit()
        quoteObj.clickBackBtn()

    })
})
