import { productList } from "../../Pages/ProductList"
import {quickQuote} from "../../Pages/QuickQuote"

const productObj = new productList();
const quoteObj = new quickQuote();

import FWGIIData from '../../fixtures/FutureWealthGain_II_Data.json';

describe('Test Future Wealth Gain II Plan', ()=>{
    it('Future Wealth Gain II Plan Testcase1',()=>{
        productObj.openURL()
        productObj.selectFutureWealthGainIIPlan(FWGIIData.Planname)
        quoteObj.selectTitle(FWGIIData.Title)
        quoteObj.enterFirstName(FWGIIData.Firstname)
        quoteObj.enterLastName(FWGIIData.Lastname)
        quoteObj.enterMobileNo(FWGIIData.MobileNo)
        quoteObj.enterEmail(FWGIIData.Email)
        quoteObj.selectFundChoice1(FWGIIData.EquityGrowthFund)
        quoteObj.clickCalculate()  
        quoteObj.enterSMICName(FWGIIData.SMICName)
        quoteObj.enterSMContactNo(FWGIIData.SMICContact)
        quoteObj.clickSubmit()
        quoteObj.clickBackBtn()
    })
})
