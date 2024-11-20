export const ERROR_BORDER_COLOR = "rgb(212, 17, 30)";

export const EMAIL_ERROR_MESSAGES = {
  enterEmailMessage: "Enter your email address",
  checkEmailMessage: "Make sure the email address you entered is correct. ",
};

export const INVALID_EMAIL_REGEX = {
    "missed @": /[a-z]{5,20}.[a-z]{5,20}/,
    "period is missed in domain": /[a-z]{5,20}@[a-z]{5,20}/,
    "@ at the start of email": /@[a-z]{5,20}@[a-z]{5,20}.com/,
    "@ at the end of email": /[a-z]{5,20}@[a-z]{5,20}.com@/,
    "multiple @ in email": /[a-z]{5,10}@[a-z]{2,10}@@[a-z]{3,10}.com/,
    "domain extension length is less than 2": /[a-z]{5,10}[a-z]{2,10}@[a-z]{3,10}.c/
};

export const REGISTER_BUTTON_TEXT = 'Register';
export const CREATE_ACCOUNT_BUTTON_TEXT = 'Create account';
export const SUBMIT_EMAIL_BUTTON_TEXT = 'Continue with email';
