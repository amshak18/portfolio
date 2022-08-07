/**
 * This function will clear any validation styles added by the validation functions to the input elements.
 */
function clearTextInputStyles(...elementIds) {
    if (elementIds.length > 0) {
        elementIds.forEach(elementId => {
            const element = document.getElementById(elementId);
            if (element) {
                element.removeAttribute("style")
            }
        });
    }
}

/**
 * This function will clear all the validation messages by removing <section> with id = "errors".
 * This function is needed when the form is reset or
 * when the form is submitted again so that previous error messages are erased.
 */
export function clearErrors(...elementIds) {
    let errorSection = document.getElementById("errors");
    if (errorSection) {
        errorSection.remove();
    }
    clearTextInputStyles(...elementIds);
}

export function clearWarnings(...elementIds) {
    let errorSection = document.getElementById("warning");
    if (errorSection) {
        errorSection.remove();
    }
    clearTextInputStyles(...elementIds);
}

export function clearSuccessMessages() {
    let successSection = document.getElementById("success");
    if (successSection) {
        successSection.remove();
    }
}

/**
 * This function adds a validation message by adding a <p> element and then adding a
 * text node with the given error message
 * @param section the section where the error message needs to be placed.
 * @param text the actual error message
 */
export function addValidationMessage(section, text) {
    let validationParagraph = document.createElement("p");
    let validationText = document.createTextNode(text);
    validationParagraph.appendChild(validationText);
    section.appendChild(validationParagraph);
}

/**
 * The common function used to create all the error, warning and success sections.
 * @param sectionName the name of the section being created. Error, warning or success
 * @param parentElementId the parent element id where the section needs to be placed.
 * @param insertBeforeElementId the element before which this section needs to be placed.
 * @returns {HTMLElement} the fully built out section.
 */
function createSection(sectionName, parentElementId = "app", insertBeforeElementId) {
    let parent = document.getElementById(parentElementId);
    let section = document.getElementById(sectionName);
    if (!section) {
        section = document.createElement("section");
        section.setAttribute("id", sectionName);
    }
    parent.insertBefore(section, [...parent.children].filter(n => n.id === insertBeforeElementId)[0]);
    section.scrollIntoView({behavior: "smooth"});
    return section;
}

/**
 * This method creates a warning section inside the body of the DOM.
 * If there is no <section> with id = "errors", it will create a new section.
 * If there already exists an error section with id = "errors" it will return that <section> HTMLElement object.
 * Also, before returning the object, it will scroll to the error section so that the users can see the error message.
 * @param parentElementId the parent element the section needs to be under
 * @param insertBeforeElementId the element before which this section needs to be placed.
 * @returns {HTMLElement} the success section with validation messages.
 */
export function createErrorsSection(parentElementId, insertBeforeElementId) {
    return createSection("errors", parentElementId, insertBeforeElementId);
}

/**
 * This method creates a success section inside the body of the DOM.
 * If there is no <section> with id = "success", it will create a new section.
 * If there already exists a success section with id = "success" it will return that <section> HTMLElement object.
 * Also, before returning the object, it will scroll to the success section so that the users can see the error message.
 * @param parentElementId the parent element the section needs to be under
 * @param insertBeforeElementId the element before which this section needs to be placed.
 * @returns {HTMLElement} the success section with validation messages.
 */
export function createSuccessSection(parentElementId, insertBeforeElementId) {
    return createSection("success", parentElementId, insertBeforeElementId);
}

/**
 * This method creates a warning section inside the body of the DOM.
 * If there is no <section> with id = "warning", it will create a new section.
 * If there already exists a warning section with id = "warning" it will return that <section> HTMLElement object.
 * Also, before returning the object, it will scroll to the warning section so that the users can see the error message.
 * @param parentElementId the parent element the section needs to be under
 * @param insertBeforeElementId the element before which this section needs to be placed.
 * @returns {HTMLElement} the success section with validation messages.
 */
export function createWarningSection(parentElementId, insertBeforeElementId) {
    return createSection("warning", parentElementId, insertBeforeElementId);
}

/**
 * This function adds a background style to the given HTMLElement
 * with a background color of red to indicate the errored section.
 * @param element the element that needs to be styled for error.
 */
export function highlightError(element) {
    element.style.borderColor = "red";
}

/**
 * This function adds a background style to the given HTMLElement
 * with a background color of red to indicate the warning section.
 * @param element the element that needs to be styled for error.
 */
export function highlightWarning(element) {
    element.style.borderColor = "darkorange";
}
