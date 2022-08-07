/**
 * clears the table by removing the element from the DOM
 */
import {addValidationMessage, clearErrors, createErrorsSection} from "@/assets/js/validations";

function clearData() {
    let table = document.getElementById("education-table");
    if (table) {
        table.remove();
    }
}

/**
 * Add the table header row which contains the headings for the table.
 * @param table the table to add the heading to.
 */
function addTableHeaderRow(table) {
    const headerRow = table.insertRow();
    const schoolHeader = document.createElement("th");
    const majorHeader = document.createElement("th");
    const typeHeader = document.createElement("th");
    const conferredYearHeader = document.createElement("th");
    const coursesTakenHeader = document.createElement("th");

    schoolHeader.innerHTML = "School";
    majorHeader.innerHTML = "Major";
    typeHeader.innerHTML = "Type";
    conferredYearHeader.innerHTML = "Conferred Year";
    coursesTakenHeader.innerHTML = "Courses Taken";

    headerRow.appendChild(schoolHeader);
    headerRow.appendChild(majorHeader);
    headerRow.appendChild(typeHeader);
    headerRow.appendChild(coursesTakenHeader);
    headerRow.appendChild(conferredYearHeader);
}

/**
 * Process the data object obtained from the fetch request to format into the table
 * and present the data in tabular form to the user
 * @param data the JSON data.
 * @param table the table used to present the data.
 */
function addTableData(data, table) {
    data["degrees"].forEach(e => {
        const dataRow = table.insertRow();
        const school = document.createElement("td");
        const major = document.createElement("td");
        const type = document.createElement("td");
        const courses = document.createElement("td");
        const conferredYear = document.createElement("td");

        school.innerHTML = e["school"];
        major.innerHTML = e["major"];
        type.innerHTML = e["type"];
        courses.innerHTML = e["coursesTaken"].reduce((a, b) => `${a}, ${b}`);
        conferredYear.innerHTML = e["conferredYear"];

        dataRow.appendChild(school);
        dataRow.appendChild(major);
        dataRow.appendChild(type);
        dataRow.appendChild(courses);
        dataRow.appendChild(conferredYear);
    })
}

/**
 * Function used to stop the loader once the fetch is complete and the data is available.
 */
function stopLoader() {
    const loader = document.getElementById("loading");
    if (loader) {
        loader.remove();
    }
}

/**
 * This function is used to format the data by clearing any errors and stopping the loader.
 * Once the cleanup is complete, it will call the necessary functions to create a table and present the data.
 * @param data the JSON data obtained using fetch API.
 */
function createEducationTable(data) {
    clearErrors();
    stopLoader();
    let table = document.createElement("table");
    table.setAttribute("id", "education-table");
    table.classList.add("tablesyle", "education-grid-body-edutable");
    let educationSection = document.getElementById("education");
    educationSection.appendChild(table);

    addTableHeaderRow(table);
    addTableData(data, table);
}

/**
 * This function shows the loader while the data is being fetched from the ptsv2 url.
 */
function showLoader() {
    const loaderImage = require("@/assets/images/loader.gif")
    clearData();
    const educationSection = document.getElementById("education");
    const pictureElement = document.createElement("picture");
    const imageElement = document.createElement("img");

    pictureElement.classList.add("education-grid-body-edutable");
    pictureElement.setAttribute("id", "loading");
    imageElement.setAttribute("id", "loader-img");
    imageElement.setAttribute("alt", "loading...");
    imageElement.src = loaderImage;

    pictureElement.appendChild(imageElement);
    educationSection.appendChild(pictureElement);
}

/**
 * error handler function. This will create an error section
 * and add it to the DOM to indicate to the user that something went wrong.
 * @param errors the error that occurred.
 */
function handleErrors(errors) {
    const errorMessage = "Something went wrong while fetching the data! Please try again after sometime!"
    console.log("errors", errors);
    stopLoader();
    let errorSection = createErrorsSection('bio-body');
    addValidationMessage(errorSection, errorMessage);
}

/**
 * This is the listener function that is called upon mouse click on the button to load the data.
 * This method will start showing the loader
 * and will use the fetch API to make a call to http://ptsv2.com/t/amshakumaraiah/post to get the JSON data.
 *
 * This function uses promise chaining to perform the check on response code
 * and process the response JSON data to present to the user.
 */
export function fetchDegrees() {
    const url = "https://ptsv2.com/t/amshakumaraiah/post";
    const options = {
        method: 'GET'
    };
    showLoader();

    fetch(url, options)
        .then(response => {
            if (response.status === 200) {
                return response;
            } else {
                throw "Response code was not 200";
            }
        })
        .then(response => response.text())
        .then(data => JSON.parse(data))
        .then(json => createEducationTable(json))
        .catch(errors => {
            handleErrors(errors);
        });
}


