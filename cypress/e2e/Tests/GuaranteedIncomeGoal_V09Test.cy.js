import { productList } from "../../Pages/ProductList"
import {quickQuote} from "../../Pages/QuickQuote"

const productObj = new productList();
const quoteObj = new quickQuote();

import GIGV09Data from '../../fixtures/GuaranteedIncomeGoal_V09Data.json';

describe('Test Guaranteed Income Goal_V09 Plan', ()=>{
    it('Guaranteed Income Goal_V09 Plan Testcase1',()=>{
        productObj.openURL()
        productObj.selectGuaranteedIncomeGoal_V09Plan(GIGV09Data.Planname)
        quoteObj.selectTitle(GIGV09Data.Title)
        quoteObj.enterFirstName(GIGV09Data.Firstname)
        quoteObj.enterLastName(GIGV09Data.Lastname)
        quoteObj.enterMobileNo(GIGV09Data.MobileNo)
        quoteObj.enterEmail(GIGV09Data.Email)
        quoteObj.clickCalculate()  
        quoteObj.enterSMICName(GIGV09Data.SMICName)
        quoteObj.enterSMContactNo(GIGV09Data.SMICContact)
        quoteObj.clickSubmit()
        quoteObj.clickBackBtn()

    })
})
