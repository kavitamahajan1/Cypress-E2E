import { productList } from "../../Pages/ProductList"
import {quickQuote} from "../../Pages/QuickQuote"

const productObj = new productList();
const quoteObj = new quickQuote();

import EAData from '../../fixtures/EliteAssureData.json';

describe('Test Elite Assure Plan', ()=>{
    it('Elite Assure Plan Testcase1',()=>{
        productObj.openURL()
        productObj.selectEliteAssurePlan(EAData.Planname)
        quoteObj.selectTitle(EAData.Title)
        quoteObj.enterFirstName(EAData.Firstname)
        quoteObj.enterLastName(EAData.Lastname)
        quoteObj.enterMobileNo(EAData.MobileNo)
        quoteObj.enterEmail(EAData.Email)
        quoteObj.enterInvestmentAmountExcludingGST(EAData.InvestmentAmountExcludingGST)
        quoteObj.clickCalculate()  
        quoteObj.enterSMICName(EAData.SMICName)
        quoteObj.enterSMContactNo(EAData.SMICContact)
        quoteObj.clickSubmit()
        quoteObj.clickBackBtn()
    })
})
