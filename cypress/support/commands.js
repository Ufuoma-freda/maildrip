// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


// let token;
  
    // cy.request({
    //   method: 'POST',
    //   url: 'https://api.maildrip.io/api/v1/users/login',
    //   body: {
    //     email: ('ufuoma.freda@charisol.io'),
    //     password: ('Password2@'),
    //   },
    // })
   
    // .then((response) => {

    //   token = response.body.token;
    //   cy.setCookie('token', token);
    //   cy.setCookie('firstTimeLog', 'false');
    //   cy.intercept('*', (req) => {
    //   req.headers['x-access-token'] = token;
    //   req.headers['Authorization'] = token;
    //   });
    // });