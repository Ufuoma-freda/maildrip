import { beforeEach } from "mocha";
import { LoginPage } from "../../pages/maildrip/login_page";
import {routes} from "../../support/routes";
import {userCredentials} from "../../support/userCredentials";


const login = new LoginPage

describe('Login', () => {

  beforeEach(() => { 
    cy.visit('app.maildrip.io') 
  })
  
  
  it ('Login with Google', () => {
    login.googleLogin('app.maildrip.io')
  })
  
  it ('Login with empty fields', () => {
    login.clickLoginButton();
    cy.contains('Please input your email!').should('be.visible');
    cy.contains('Please input your password!').should('be.visible');
  })
  
  
  it.only ('Login with unregistered email address', () => {
    //cy.get("input[placeholder = 'Email']").type("ufuoma@gmail.com")
    //cy.get("input[placeholder = 'Password']").type("Password2@")
    login.inputEmail(userCredentials.email_unregistered);
    login.inputPassword(userCredentials.password_valid);
    login.clickLoginButton();
    //cy.url().should('eq', 'https://app.maildrip.io/login');
    cy.url().should('eq', routes.login);
    //cy.contains('Sorry, an error occured').should('be.visible');
  });
  

  it ('Login with valid email/invalid password', () => {
    login.inputEmail(userCredentials.email_valid);
    login.inputPassword(userCredentials.password_invalid);
    login.clickLoginButton();
    cy.url().should('eq', routes.login);
    //cy.contains('Sorry, an error occured').should('be.visible');
  });


  it ('Login with white space in email', () => {
    login.inputEmail(userCredentials.email_whitespace);
    login.inputPassword(userCredentials.password_valid);
    login.clickLoginButton();
    cy.contains('Please input your email!').should('be.visible');
  });
  
  
  it ('Login with valid credentials', () => {
    login.inputEmail(userCredentials.email_valid);
    login.inputPassword(userCredentials.password_valid);
    login.clickLoginButton();
    cy.url().should('eq', routes.dashboard);
  });
})