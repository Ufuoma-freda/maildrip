import selectors from "../../support/selectors"

export class LoginPage {
    
    googleLogin (URL){
        cy.visit(URL)
        cy.get(selectors.google_button).first().click()
    }

    inputEmail (email){
        cy.get(selectors.email_field).type(email)
    }

    inputPassword (password){
        cy.get(selectors.password_field).type(password)
    } 
    
    clickLoginButton () {
        cy.get(selectors.login_button).click()
    }
}