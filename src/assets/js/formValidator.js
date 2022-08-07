import {
    addValidationMessage,
    createErrorsSection,
    createWarningSection,
    highlightError,
    highlightWarning
} from "@/assets/js/validations";

/**
 * This function is to verify the firstName and the lastName.
 * It will qualify the input as valid if the length is greater than 2 and contains only alphabets.
 * @param name the name that needs to be validated.
 * @returns {boolean} True if name is valid. False otherwise.
 */
function isValidName(name) {
    const pattern = /^[A-Za-z]+$/;
    return name !== null && name !== "" && !!name.match(pattern) && name.length > 2;
}

/**
 * This function will validate the first name and last name and
 * adds any validation message if necessary by calling the appropriate functions
 * @param firstName the first name the user entered.
 * @param lastName the last name the user entered.
 * @param firstNameElementId the element id of firstName
 * @param lastNameElementId the element id of lastName
 * @returns {boolean} True only if both the firstName and the lastName are valid. False otherwise.
 */
function validateFirstNameLastName(firstName, lastName, firstNameElementId, lastNameElementId) {
    const isvalidFistName = isValidName(firstName);
    const isValidLastName = isValidName(lastName);
    const firstNameErrorText = `First Name ${firstName} entered is not valid. Only characters allowed are: a-z and A-Z and make sure you enter atleast 3 characters.`;
    const lastNameErrorText = `Last Name ${lastName} entered is not valid. Only characters allowed are: a-z and A-Z and make sure you enter atleast 3 characters.`;

    if (!isvalidFistName || !isValidLastName) {
        let errorSection = createErrorsSection('contact-modal', 'modal-content');
        if (!isvalidFistName) {
            highlightError(document.getElementById(firstNameElementId));
            addValidationMessage(errorSection, firstNameErrorText);
        }
        if (!isValidLastName) {
            highlightError(document.getElementById(lastNameElementId));
            addValidationMessage(errorSection, lastNameErrorText);
        }
    }
    return isvalidFistName && isValidLastName;
}

/**
 * Function to validate email the user entered
 * @param emailId the email the user entered
 * @param emailElementId the element id of the emailId
 * @returns {*} true if the email id is of the correct format. False otherwise.
 */
function validateEmailId(emailId, emailElementId) {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isValidEmail = emailId.match(
        emailRegex
    );
    if (!isValidEmail) {
        let errorSection = createErrorsSection('contact-modal', 'modal-content');
        const errorMessage = `Email id provided is not in an expected format. Please enter a proper email id`
        highlightError(document.getElementById(emailElementId));
        addValidationMessage(errorSection, errorMessage);
    }
    return isValidEmail;
}

/**
 *  function to validate phone number
 * @param phoneNumber the phone number user entered
 * @param phoneElementId the element id of the phoneNumber
 * @returns {boolean} true if it is a valid phone number. False otherwise.
 */
function validatePhone(phoneNumber, phoneElementId) {
    let isValidPhoneNumber = phoneNumber.toString().length === 10;
    if (phoneNumber.toString().length === 0) {
        let warningSection = createWarningSection('contact-modal', 'modal-content');
        const warningMessage = `Phone number not provided!`
        highlightWarning(document.getElementById(phoneElementId));
        addValidationMessage(warningSection, warningMessage);
        isValidPhoneNumber = true;
    } else if (!isValidPhoneNumber) {
        let errorSection = createErrorsSection('contact-modal', 'modal-content');
        const errorMessage = `Phone number provided is not 10 digits!`
        highlightError(document.getElementById(phoneElementId));
        addValidationMessage(errorSection, errorMessage);
    }
    return isValidPhoneNumber;
}

/**
 * funtion to validate the message entered by the user
 * @param message the message user entered
 * @param messageElementId the element id of the message
 * @returns {boolean} true as this is only warning if the user does not any message
 */
function validateMessage(message, messageElementId) {
    const isValidMessage = message.length > 0;
    if (!isValidMessage) {
        let errorSection = createWarningSection('contact-modal', 'modal-content');
        const errorMessage = `You have not entered any message!`
        highlightWarning(document.getElementById(messageElementId));
        addValidationMessage(errorSection, errorMessage);
    }
    return true;
}

/**
 * This function validates all the user inputs by calling the appropriate functions.
 * @param firstName the firstname the user entered.
 * @param lastName the lastname the user entered.
 * @param email the email of the user
 * @param phoneNumber the phone number of the user
 * @param message the message entered by the user
 * @param firstNameElementId the element id of firstName
 * @param lastNameElementId the element id of lastName
 * @param emailElementId the element id of email
 * @param phoneElementId the element id of phoneNumber
 * @param messageElementId the element id of message
 * @returns {boolean} True only if all the user inputs are valid. False otherwise.
 */
export function validateInputs(firstName, lastName, email, phoneNumber, message, firstNameElementId, lastNameElementId, emailElementId, phoneElementId, messageElementId) {
    const isValidName = validateFirstNameLastName(firstName, lastName, firstNameElementId, lastNameElementId);
    const isValidEmail = validateEmailId(email, emailElementId);
    const isValidPhone = validatePhone(phoneNumber, phoneElementId);
    const isValidMessage = validateMessage(message, messageElementId);

    return isValidName && isValidEmail && isValidPhone && isValidMessage
}

