import { faker } from "@faker-js/faker";
import { INVALID_EMAIL_REGEX, ERROR_BORDER_COLOR, EMAIL_ERROR_MESSAGES } from './constants';
import registrationPage from '../pages/registrationPage'

Cypress.Commands.add('clickButtonByType', (type) => {
    registrationPage.getButtonByType(type)
        .should('be.visible')
        .click();
})

Cypress.Commands.add('closeModalIfVisible', () => {
    registrationPage.elements.modalSignInDiscount()
        .should('exist')
        .then(modal => {
            if (modal.is(':visible')) {
                cy.wrap(modal).find('button').click()
            }
    })
})

Cypress.Commands.add('typeEmail', (isValid, rule) => {
    let emailValue = isValid? faker.internet.email() : faker.helpers.fromRegExp(INVALID_EMAIL_REGEX[rule]);
    registrationPage.elements.emailInput().clear().type(emailValue).blur();
});

Cypress.Commands.add('isEmailFieldValidated', () => {
    registrationPage.elements.emailInput()
        .siblings('div')
        .should("have.css", "border-color", ERROR_BORDER_COLOR)
})

Cypress.Commands.add('isEmailErrorMessageDisplayed', (message) => {
    registrationPage.elements.emailErrorMessage()
        .should('be.visible')
        .and("have.text", message);
})
