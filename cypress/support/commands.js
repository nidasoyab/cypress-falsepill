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
Cypress.Commands.add("SignUp", ()=>{
    let ranText = Math.random().toString(36).substring(7);
    cy.visit("/")
    cy.get('.site-menu-account__label').click()
    cy.get('.site-menu-account__link').contains('Create Account').click()
    cy.visit('/account/signup')
    
    cy.get('input[data-testid="first-name"]').type("Eddy")
    cy.get('input[data-testid="last-name"]').type("Schez")
    cy.get('input[name="phone_mask"]').type("6565665656")
    cy.get('input[data-testid="email-address"]').type('eddysnchz9+' + ranText + '@gmail.com')
    cy.get('input[name="password"]').type('Wad@@83gk3')
    cy.get('input[name="termsOfService"]').click({force:true})
   cy.get('form').then(form$ => {
     form$.on('submit', e => {
       e.preventDefault()
    })
   })
   
   cy.get('button[data-testid="btn-create-account"]').click()
  })

Cypress.Commands.add(
  'iframeLoaded',
  {prevSubject: 'element'},
  ($iframe) => {
      const contentWindow = $iframe.prop('contentWindow');
      return new Promise(resolve => {
          if (
              contentWindow &&
              contentWindow.document.readyState === 'complete'
          ) {
              resolve(contentWindow)
          } else {
              $iframe.on('load', () => {
                  resolve(contentWindow)
              })
          }
      })
  });


Cypress.Commands.add(
  'getInDocument',
  {prevSubject: 'document'},
  (document, selector) => Cypress.$(selector, document)
);

Cypress.Commands.add(
  'getWithinIframe',
  (targetElement) => cy.get('iframe').iframeLoaded().its('document').getInDocument(targetElement)
);
