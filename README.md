# Amsha Kumaraiah
## CS601 Project

This project is a portfolio website of [Amsha Kumaraiah](https://www.linkedin.com/in/amshakumaraiah/) that gives information about me, my education, professional background, my hobbies/interests and provides a gallery with images taken from some of the places I have travelled accross the world!

The goal of this project is to showcase the learning and understanding of the concepts learned during the summer term for CS601 course.

This project demonstrates the skills in:

- HTML5
- CSS3
  - Uses Grid and Flex Layouts to order elements on the DOM.
- JavaScript (Including ES6)
- Vue.js

The entire project has been created as a vue project. Global style sheets that render for all the applications are available under `src/assets/css` and these style sheets are:

- `styles.css`
    - This stylesheet includes global styles and media queries for different screen sizes.
- `modal.css`
    - This stylesheet includes styles for modal displays used to display the contact form and the resume.
- `formStyles.css`
    - This stylesheet includes styles for any forms that are used in the app.
- `degrees.css`
    - This stylesheet includes styles for the education component that dynamically updates the table entry.

Also, available globally are the JavaScript files that provide utilities for the application. These files reside under `src/assets/js` and these files are:

- `degrees.js`
    - This file provides the functionality to fetch the degrees using the `fetch` API
- `formValidator.js`
    - This file provides the necessary functions to validate user inputs after the user clicks on the submit button on a form.
- `validations.js`
    - This file provides necessary functions to add any validations such as errors, warnings and success messages. So that, they can be displayed to the user.

All the components used are developed using the [Vue Framework](https://vuejs.org/). These componets reside under `src/components`
## Project setup
```  
npm install  
```  

### Compiles and hot-reloads for development
```  
npm run serve  
```  

### Compiles and minifies for production
```  
npm run build  
```  

### Lints and fixes files
```  
npm run lint  
```  

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
