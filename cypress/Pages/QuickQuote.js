export class quickQuote{

    weblocators ={

        Title:'#ddlLifeAssuredTitle',
        FirstName:'#psffirstname',
        LastName:'#psflastname',
        MobileNo:'#psftxtMobileNo',
        Email:'#psfemail',
        PinCode:'#PinCode',
        FundChoice1:'#fundPer1',
        InvestmentAmountexcludingGST:'#dynPREMIUM_WITHOUT_FAM_BEN',
        SPGCalculateBtn:'.CalculateBtn:nth-child(2)',
        CalculateBtn:'#validateBtnID',
        SM_IC_Name:'#userNameID',
        SM_IC_Contact:'#phoneNoID',
        SubmitBtn:'.modalBtn_1',
        SPGBackBtn:'.btnBack',
        BackBtn:'#btnBack'
    }
    selectTitle(title){
        cy.get(this.weblocators.Title).select(title);
    }
    enterFirstName(firstName){
        cy.get(this.weblocators.FirstName).type(firstName);
    }

    enterLastName(lastName){
        cy.get(this.weblocators.LastName).type(lastName);
    }
    enterMobileNo(mobileNo){
        cy.get(this.weblocators.MobileNo).type(mobileNo);
    }
    enterEmail(email){
        cy.get(this.weblocators.Email).type(email);
    }
    enterPincode(pin){
        cy.get(this.weblocators.PinCode).type(pin);
    }
    selectFundChoice1(equityGrowth){
        cy.get(this.weblocators.FundChoice1).select(equityGrowth);
    }

    enterInvestmentAmountExcludingGST(InvestmentAmt){
        cy.get(this.weblocators.InvestmentAmountexcludingGST).type(InvestmentAmt)
    }
    clickSPGCalculate(){
        cy.get(this.weblocators.SPGCalculateBtn).click();
    }
    clickCalculate(){
        cy.get(this.weblocators.CalculateBtn).click();
    }
    enterSMICName(smName){
        cy.get(this.weblocators.SM_IC_Name).type(smName);
    }
    enterSMContactNo(smContactNo){
        cy.get(this.weblocators.SM_IC_Contact).type(smContactNo);
    }
    clickSubmit(){
        cy.get(this.weblocators.SubmitBtn).click();
       // cy.wait(10000)
    }

    addonsSelection(sa){
        cy.get('#check_yes70006').click();
        cy.get('#rSA70006').type(sa);
    }
    
    // clickBackBtn(){
    //     cy.get(this.weblocators.BackBtn).each((ele)=>{
    //         //cy.log(ele.text());
    //         if(ele.text()=== 'Back'){
    //             cy.wrap(ele).click()}
    //         else
    //         cy.log(ele.text());
    //     })
    // }

    clickSPGBackBtn(){
        cy.get(this.weblocators.SPGBackBtn).click()
    }

    clickBackBtn(){
        cy.wait(5000)
        cy.get(this.weblocators.BackBtn).click()
    }

}
