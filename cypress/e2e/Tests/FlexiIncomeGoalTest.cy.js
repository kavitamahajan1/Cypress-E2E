import { productList } from "../../Pages/ProductList"
import {quickQuote} from "../../Pages/QuickQuote"

const productObj = new productList();
const quoteObj = new quickQuote();

import FIGData from '../../fixtures/FlexiIncomeGoalData.json';

describe('Test POS Goal Suraksha_V10 Plan', ()=>{
    it('POS Goal Suraksha_V10 Plan Testcase1',()=>{
        productObj.openURL()
        productObj.selectFlexiIncomeGoalPlan(FIGData.Planname)
        quoteObj.selectTitle(FIGData.Title)
        quoteObj.enterFirstName(FIGData.Firstname)
        quoteObj.enterLastName(FIGData.Lastname)
        quoteObj.enterMobileNo(FIGData.MobileNo)
        quoteObj.enterEmail(FIGData.Email)
        quoteObj.clickCalculate()  
        quoteObj.enterSMICName(FIGData.SMICName)
        quoteObj.enterSMContactNo(FIGData.SMICContact)
        quoteObj.clickSubmit()
        quoteObj.clickBackBtn()
    })
})
