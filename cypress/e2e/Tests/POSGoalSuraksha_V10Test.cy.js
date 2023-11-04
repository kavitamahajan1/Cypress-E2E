import { productList } from "../../Pages/ProductList"
import {quickQuote} from "../../Pages/QuickQuote"

const productObj = new productList();
const quoteObj = new quickQuote();

import POSGSV10IData from '../../fixtures/POSGoalSuraksha_V10Data.json';

describe('Test POS Goal Suraksha_V10 Plan', ()=>{
    it('POS Goal Suraksha_V10 Plan Testcase1',()=>{
        productObj.openURL()
        productObj.selectPOSGoalSuraksha_V10Plan(POSGSV10IData.Planname)
        quoteObj.selectTitle(POSGSV10IData.Title)
        quoteObj.enterFirstName(POSGSV10IData.Firstname)
        quoteObj.enterLastName(POSGSV10IData.Lastname)
        quoteObj.enterMobileNo(POSGSV10IData.MobileNo)
        quoteObj.enterEmail(POSGSV10IData.Email)
        quoteObj.clickCalculate()  
        quoteObj.enterSMICName(POSGSV10IData.SMICName)
        quoteObj.enterSMContactNo(POSGSV10IData.SMICContact)
        quoteObj.clickSubmit()
        quoteObj.clickBackBtn()
    })
})
