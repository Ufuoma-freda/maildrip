import { LoginPage } from "../../pages/maildrip/login_page";
import { CampaignPage } from "../../pages/maildrip/campaign_page";
import routes from "../../support/routes";
import userCredentials from "../../support/userCredentials";


const login = new LoginPage
const campaign = new CampaignPage

describe('Campaign', () => {

  beforeEach(() => {
    cy.intercept('GET', routes["drip campaigns"], (req) => {
      delete req.headers['if-none-match'];
    }).as('campaigns');

    cy.intercept('POST',"https://api.maildrip.io/api/v1/campaigns", (req) => {
      delete req.headers['if-none-match'];
    }).as('createcampaigns');

    cy.intercept('DELETE',"https://api.maildrip.io/api/v1/campaigns/*", (req) => {
      delete req.headers['if-none-match'];
    }).as('deletecampaigns');
    
    

    cy.visit('app.maildrip.io').then(()=>{
      
      login.inputEmail(userCredentials.email_valid);
      login.inputPassword(userCredentials.password_valid);
      login.clickLoginButton();
    })

  });


  it.only ('Create & Delete Campaign', () => {
    cy.url().should('eq', routes.dashboard);
    campaign.createCampaign('Drip Campaign');
    console.log(routes["drip campaigns"])
    cy.wait('@createcampaigns').its('response.statusCode').should('eq', 201);
    campaign.deleteCampaign();
    cy.wait('@deletecampaigns').its('response.statusCode').should('eq', 200);
  })

})