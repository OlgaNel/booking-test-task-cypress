/// <reference types="cypress" />
import { 
    REGISTER_BUTTON_TEXT,
    EMAIL_ERROR_MESSAGES,
    SUBMIT_EMAIL_BUTTON_TEXT
 } from '../../support/constants';
 import registrationPage from '../../pages/registrationPage'


describe('Registration', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('Verify email field is validated if leave it empty and click to continue', () => {
        cy.clickButtonByType(REGISTER_BUTTON_TEXT);

        cy.clickButtonByType(SUBMIT_EMAIL_BUTTON_TEXT);

        //check field of email is highlighted
        cy.isEmailFieldValidated();

        cy.isEmailErrorMessageDisplayed(EMAIL_ERROR_MESSAGES.enterEmailMessage)
        registrationPage.elements.emailInput().should('not.be.focused');
    })


    it('Verify email field is validated if user enters invalid email format', () => {

        cy.closeModalIfVisible();

        cy.clickButtonByType(REGISTER_BUTTON_TEXT);

    // type invalid email - 'missed @'
        cy.typeEmail(false, 'missed @');

        cy.clickButtonByType(SUBMIT_EMAIL_BUTTON_TEXT)

        cy.isEmailFieldValidated();

    //'Check email' error message is displayed for email field
        cy.isEmailErrorMessageDisplayed(EMAIL_ERROR_MESSAGES.checkEmailMessage)

        registrationPage.elements.emailInput().should('not.be.focused');

    // type invalid email - 'period is missed in domain'
        cy.typeEmail(false, 'period is missed in domain');

        cy.clickButtonByType(SUBMIT_EMAIL_BUTTON_TEXT)

        cy.isEmailFieldValidated();

        cy.isEmailErrorMessageDisplayed(EMAIL_ERROR_MESSAGES.checkEmailMessage)

    // type invalid email - '@ at the start of email'
        cy.typeEmail(false, '@ at the start of email');

        cy.clickButtonByType(SUBMIT_EMAIL_BUTTON_TEXT)

        cy.isEmailFieldValidated();

        cy.isEmailErrorMessageDisplayed(EMAIL_ERROR_MESSAGES.checkEmailMessage)

    // type invalid email - '@ at the end of email'
        cy.typeEmail(false, '@ at the end of email');

        cy.clickButtonByType(SUBMIT_EMAIL_BUTTON_TEXT)

        cy.isEmailFieldValidated();

        cy.isEmailErrorMessageDisplayed(EMAIL_ERROR_MESSAGES.checkEmailMessage)
    
    // type invalid email - 'multiple @ in email'
        cy.typeEmail(false, 'multiple @ in email');

        cy.clickButtonByType(SUBMIT_EMAIL_BUTTON_TEXT)

        cy.isEmailFieldValidated();

        cy.isEmailErrorMessageDisplayed(EMAIL_ERROR_MESSAGES.checkEmailMessage)

    // type invalid email - 'domain extension length is less than 2'
        cy.typeEmail(false, 'domain extension length is less than 2');

        cy.clickButtonByType(SUBMIT_EMAIL_BUTTON_TEXT)

        cy.isEmailFieldValidated();

        cy.isEmailErrorMessageDisplayed(EMAIL_ERROR_MESSAGES.checkEmailMessage)

    })
})