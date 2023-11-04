import { productList } from "../../Pages/ProductList"
import {quickQuote} from "../../Pages/QuickQuote"

const productObj = new productList();
const quoteObj = new quickQuote();

import LLAData from '../../fixtures/LifeLongAssureData.json';

describe('Test LifeLong Assure Plan', ()=>{
    it('LifeLong Assure Plan Testcase1',()=>{
        productObj.openURL()
        productObj.selectLifeLongAssurePlan(LLAData.Planname)
        quoteObj.selectTitle(LLAData.Title)
        quoteObj.enterFirstName(LLAData.Firstname)
        quoteObj.enterLastName(LLAData.Lastname)
        quoteObj.enterMobileNo(LLAData.MobileNo)
        quoteObj.enterEmail(LLAData.Email)
        quoteObj.clickCalculate()  
        quoteObj.enterSMICName(LLAData.SMICName)
        quoteObj.enterSMContactNo(LLAData.SMICContact)
        quoteObj.clickSubmit()
        quoteObj.clickBackBtn()

    })
})
