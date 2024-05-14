import selectors from "../../support/selectors"

export class CampaignPage {
    
    createCampaign (title){
        cy.get('button[data-uf-button="button"]').click({ force: true })
        cy.get("div[product-tutor-id='sidebar-campaigns']").click();
        cy.get('[data-test="create-btn"]').click();
        cy.wait (2000)
        cy.get('#basic_name').type(title);
        cy.get('[data-test="create-campaign"]').click(); 
    }

    deleteCampaign (){
        //cy.get('[data-uf-button="button"]').click();
       // cy.url().should('eq', routes.dashboard);
        //cy.get('.sidebar__menu__item__text.sidebar-mobile.revealMe').eq(2).click();
        cy.get('[alt="trash icon"]').eq(0).click({ force: true });
        cy.get('.delete-submit').click({ force: true });
    }
}