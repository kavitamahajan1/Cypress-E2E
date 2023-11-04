export class productList{

    weblocators ={

        SPGPlan:'#DIV60001 > .nonAgency .btn',
        AssuredWealthGoal:'#DIV60053 > .nonAgency .btn',
        GuaranteedPensionGoal:'#DIV60044 > .nonAgency .btn',
        LifeLongAssure: '#DIV60007 > .nonAgency .btn',
        FutureWealthGainII:'#DIV60014 > .nonAgency .btn',
        GuaranteedIncomeGoal_V09:'#DIV60018 > .nonAgency .btn',
        POSGoalSuraksha_V10:'#DIV60020 > .nonAgency .btn',
        FlexiIncomeGoal:'#DIV60037 > .nonAgency .btn',
        LongLifeGoal:'#DIV60013 > .nonAgency .btn',
        EliteAssure:'#DIV60067 > .nonAgency .btn',
        IncomeAssure:'#DIV60003 > .nonAgency .btn'

    }

    openURL(){
        cy.visit(Cypress.env('URL'))
    }

    selectSPGPlan(planName){
        cy.get(this.weblocators.SPGPlan).click();
    }
    selectAssuredWealthGoalPlan(planName){
        cy.get(this.weblocators.AssuredWealthGoal).click();
    }

    selectGuaranteedPensionGoalPlan(planName){
        cy.get(this.weblocators.GuaranteedPensionGoal).click();
    }

    selectLifeLongAssurePlan(planName){
        cy.get(this.weblocators.LifeLongAssure).click();
    }

    selectFutureWealthGainIIPlan(planName){
        cy.get(this.weblocators.FutureWealthGainII).click();
    }

    selectGuaranteedIncomeGoal_V09Plan(planName){
        cy.get(this.weblocators.GuaranteedIncomeGoal_V09).click();
    }
    selectPOSGoalSuraksha_V10Plan(planName){
        cy.get(this.weblocators.POSGoalSuraksha_V10).click();
    }
    selectFlexiIncomeGoalPlan(planName){
        cy.get(this.weblocators.FlexiIncomeGoal).click();
    }
    selectLongLifeGoalPlan(planName){
        cy.get(this.weblocators.LongLifeGoal).click();
    }
    selectEliteAssurePlan(planName){
        cy.get(this.weblocators.EliteAssure).click();
    }
    selectIncomeAssurePlan(planName){
        cy.get(this.weblocators.IncomeAssure).click();
    }
    
}