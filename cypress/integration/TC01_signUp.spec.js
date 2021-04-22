/// <reference types="Cypress"/>

describe('signUp', () => {  
  beforeEach( ()=>{
    cy.SignUp()
  })
  
  it('CheckOut', ()=>{
    
    cy.wait(5000)
    cy.get(':nth-child(2) > .category').click()
    cy.get('ul.sub-category-links>li>a').contains('Feminine Care').click()
    cy.get("div[data-testid=product-card]>div>button").should('contain','Quick View').first().click({force: true})
    cy.get('.quantity-dropdown > .custom-dropdown > .ui').click()
    cy.get('div[role="option"]>span').contains('4').click({force:true})
    cy.get('div.quick-add-price-add > button[type="submit"]').click()
    cy.get('[data-testid=checkout]').click()
    cy.get('div[role="button"]>div').should('contain', 'Add new shipping address').first().click()
    cy.get('.style-module--shipping-form--1Na8q > [data-testid=opt-form-with-error] > form > .opt-form-with-error__l-right-10 > .Label-module--label--2JSVv > .TextInput-module--input-wrapper--Kd-BG > .TextInput-module--input--1_OT7').type('Eddy')
    cy.get('.style-module--shipping-form--1Na8q > [data-testid=opt-form-with-error] > form > .opt-form-with-error__l-left-10 > .Label-module--label--2JSVv > .TextInput-module--input-wrapper--Kd-BG > .TextInput-module--input--1_OT7').type('Sanchez')
    cy.get('.style-module--shipping-form--1Na8q > [data-testid=opt-form-with-error] > form > :nth-child(3) > .Label-module--label--2JSVv > .TextInput-module--input-wrapper--Kd-BG > .TextInput-module--input--1_OT7').type('10436 Oakford Rd')
    cy.get('.style-module--shipping-form--1Na8q > [data-testid=opt-form-with-error] > form > .opt-form-with-error__city > .Label-module--label--2JSVv > .TextInput-module--input-wrapper--Kd-BG > .TextInput-module--input--1_OT7').type('Oakford')
    cy.get('.style-module--shipping-form--1Na8q > [data-testid=opt-form-with-error] > form > .opt-form-with-error__state > .style-module--container--3k0fT > [data-testid=state]').select('IL')
    cy.get('.style-module--shipping-form--1Na8q > [data-testid=opt-form-with-error] > form > .opt-form-with-error__zip > .Label-module--label--2JSVv > .TextInput-module--input-wrapper--Kd-BG > .TextInput-module--input--1_OT7').type('62673')
    cy.get('.style-module--shipping-form--1Na8q > [data-testid=opt-form-with-error] > form > :nth-child(9) > .opt-form-cancel-save > :nth-child(2) > [data-testid=btn-change-email]').click()

    cy.wait(8000)
    cy.get('[data-testid="btn-billing"]').click({force:true})
    cy.get(':nth-child(1) > .card-template').click()
    
    cy.get('.style-module--payment-method-form--3finD > [data-testid=opt-form-with-error] > form > .opt-form-with-error__l-right-10 > .Label-module--label--2JSVv > .TextInput-module--input-wrapper--Kd-BG > [data-testid=first-name]').type('EddyBill')
    cy.wait(2000)
    cy.get('.style-module--payment-method-form--3finD > [data-testid=opt-form-with-error] > form > .opt-form-with-error__l-left-10 > .Label-module--label--2JSVv > .TextInput-module--input-wrapper--Kd-BG > [data-testid=last-name]').type('SanchezBill')
    cy.wait(2000)
    cy.get('.style-module--payment-method-form--3finD > [data-testid=opt-form-with-error] > form > :nth-child(3) > .Label-module--label--2JSVv > .TextInput-module--input-wrapper--Kd-BG > [data-testid=address-line]').type('90 Lodge Rd')
    cy.get('.style-module--payment-method-form--3finD > [data-testid=opt-form-with-error] > form > .opt-form-with-error__city > .Label-module--label--2JSVv > .TextInput-module--input-wrapper--Kd-BG > [data-testid=city]').type('Poquoson')
    cy.get('.style-module--payment-method-form--3finD > [data-testid=opt-form-with-error] > form > .opt-form-with-error__state > .style-module--container--3k0fT > [data-testid=state]').select('IL')

    cy.getWithinIframe('[name="cardnumber"]').click({ force: true })
    cy.getWithinIframe('[name="cardnumber"]').type('4242424242424242')
    cy.getWithinIframe('[name="exp-date"]').type('0923')
    cy.getWithinIframe('[name="cvc"]').type('344')

    cy.get('.style-module--payment-method-form--3finD > [data-testid=opt-form-with-error] > form > .opt-form-with-error__zip > .Label-module--label--2JSVv > .TextInput-module--input-wrapper--Kd-BG > [data-testid=zip]').type('62673')
    cy.get('.style-module--payment-method-form--3finD > [data-testid=opt-form-with-error] > form > .opt-form-with-error__zip > .Label-module--label--2JSVv > .TextInput-module--input-wrapper--Kd-BG > [data-testid=zip]').blur()
    cy.wait(5000)

    cy.get('.style-module--payment-method-form--3finD > [data-testid=opt-form-with-error] > form > :nth-child(9) > .opt-form-cancel-save > :nth-child(2) > [data-testid=btn-change-email]').click({force:true})
    cy.wait(5000)
    cy.get('div.row>div>button[type="submit"]').contains('Pay now').click({ force: true })
    cy.get(':nth-child(1) > .simple-radio-card > .ui > :nth-child(1) > .composable-card__top-left > .opt-custom-radio').click()
    cy.get('[data-testid="btn-create-order"]').should('contain','Pay now').focus().click({force: true})
    cy.get('.view-order-btn').click()
    cy.get('section.style-module--column--FYJDe').first().children('p').first().should('contain','Eddy')
    cy.get('section.style-module--column--FYJDe').eq(1).children('p').first().should('contain','Ed')    
  })
})