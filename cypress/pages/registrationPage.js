import { 
    SUBMIT_EMAIL_BUTTON_TEXT,
    CREATE_ACCOUNT_BUTTON_TEXT,
    REGISTER_BUTTON_TEXT
 } from "../support/constants";

class RegistrationPage {
    elements = {
        emailInput: () => cy.get('input[id="username"]'),
        passwordInput: () => cy.get('input[id="new_password"]'),
        confirmPasswordInput: () => cy.get('input[id="confirmed_password"]'),
        emailErrorMessage: () => cy.get('[id="username-note"][role="alert"]'),
        passwordErrorMessage: () => cy.get('[id="new_password-note"][role="alert"]'),
        modalSignInDiscount: () => cy.get('[role="dialog"][aria-modal="true"]'),
        closeModalSignInDiscount: () => cy.get('[role="dialog"][aria-modal="true"]').find('button'),
        signUpButton: () => cy.get('[data-testid="header-sign-up-button"]'),
        submitButtonByText: (text) => cy.contains('button[type="submit"]', text),
    }

    getButtonByType(buttonType) {
        switch (buttonType) {
            case REGISTER_BUTTON_TEXT:
                return this.elements.signUpButton();
            case SUBMIT_EMAIL_BUTTON_TEXT:
                return this.elements.submitButtonByText(SUBMIT_EMAIL_BUTTON_TEXT);
            case CREATE_ACCOUNT_BUTTON_TEXT:
                return this.elements.submitButtonByText(CREATE_ACCOUNT_BUTTON_TEXT);
            default:
                throw new Error(`Button type ${buttonType} is not defined`);
        }
    };
}

export default new RegistrationPage();
