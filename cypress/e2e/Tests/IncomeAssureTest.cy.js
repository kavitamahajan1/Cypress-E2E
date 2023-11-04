import { productList } from "../../Pages/ProductList"
import {quickQuote} from "../../Pages/QuickQuote"

const productObj = new productList();
const quoteObj = new quickQuote();

import IAData from '../../fixtures/IncomeAssureData.json';

describe('Test Income Assure Plan', ()=>{
    it('Income Assure Plan Testcase1',()=>{
        productObj.openURL()
        productObj.selectIncomeAssurePlan(IAData.Planname)
        quoteObj.selectTitle(IAData.Title)
        quoteObj.enterFirstName(IAData.Firstname)
        quoteObj.enterLastName(IAData.Lastname)
        quoteObj.enterMobileNo(IAData.MobileNo)
        quoteObj.enterEmail(IAData.Email)
        quoteObj.clickCalculate()  
        quoteObj.enterSMICName(IAData.SMICName)
        quoteObj.enterSMContactNo(IAData.SMICContact)
        quoteObj.clickSubmit()
        quoteObj.clickBackBtn()

    })
})
