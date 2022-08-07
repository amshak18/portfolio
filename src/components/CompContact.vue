<template>
  <input type="checkbox" @click="clearOldMessages" id="modal">
  <label for="modal" class="modal-button">Contact Me</label>
  <label for="modal" class="modal-background"></label>
  <section id="contact-modal" class="modal">
    <section id="modal-header" class="modal-header">
      <h3>Contact me</h3>
      <label for="modal">
        <img
            :src="closeModal"
            width="16" height="16" alt="">
      </label>
    </section>
    <section id="modal-content">
      <form id="modal-body" @submit="submitMessage" @reset="clearOldMessages">
        <label for="contactFirstName">First Name: </label>
        <input type="text" v-model="firstName" id="contactFirstName">

        <label for="contactLastName">Last Name: </label>
        <input type="text" v-model="lastName" id="contactLastName">

        <label for="contactEmailId">Email Id </label>
        <input type="email" v-model="emailId" id="contactEmailId">

        <label for="contactPhoneNumber">Contact Number: </label>
        <input type="text" v-model="phoneNumber" id="contactPhoneNumber">

        <label for="contactMessage">Message </label>
        <textarea v-model="message" id="contactMessage"> </textarea>

        <section id="submitSection">
          <input type="submit">
          <input type="reset">
        </section>
      </form>

    </section>
  </section>
</template>

<script>

import {
  addValidationMessage,
  clearErrors,
  clearSuccessMessages, clearWarnings,
  createErrorsSection,
  createSuccessSection
} from "@/assets/js/validations";
import {validateInputs} from "@/assets/js/formValidator";

export default {
  name: "CompContact",
  unmounted() {
    clearSuccessMessages();
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      emailId: "",
      phoneNumber: "",
      message: "",
      closeModal: require("@/assets/images/close-modal.svg"),
      successCounter: 0
    }
  },
  methods: {
    prepareHeaders: function () {
      const xMasterKey = "$2b$10$AVfrOsiXtI.XAjlwL18MceAZBq/6QkF5Q5B0MJ8MEhKyXf3q9IDHS";
      const xBinPrivate = "true";
      const xCollectionId = "62eea40a5c146d63ca61ea9d";
      const contentType = "application/json";
      const headers = new Headers();
      headers.append("Content-Type", contentType);
      headers.append("X-Master-Key", xMasterKey);
      headers.append("X-Bin-Private", xBinPrivate);
      headers.append("X-Collection-Id", xCollectionId);
      headers.append("X-Bin-Name", this.emailId);

      return headers;
    },
    prepareBody: function () {
      return JSON.stringify({
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.emailId,
        phone: this.phoneNumber,
        message: this.message
      })
    },
    validateForm: function () {
      return validateInputs(this.firstName, this.lastName, this.emailId, this.phoneNumber, this.message, 'contactFirstName', 'contactLastName', 'contactEmailId', 'contactPhoneNumber', 'contactMessage')
    },
    handleErrors: function (errors) {
      const errorMessage = "Something went wrong while fetching the data! Please try again after sometime!"
      console.log("errors", errors);
      let errorSection = createErrorsSection('modal-content');
      addValidationMessage(errorSection, errorMessage);
    },
    handleSuccess: function (response) {
      clearSuccessMessages();
      const successMessage = `${++this.successCounter} ${this.successCounter > 1 ? 'messages' : 'message'} sent.`
      console.log(`${successMessage} ${response}`);
      let successSection = createSuccessSection('contact-modal', 'modal-content');
      addValidationMessage(successSection, successMessage);
    },
    submitMessage: function (event) {
      const baseUrl = "https://api.jsonbin.io/v3";
      const bin = "/b"
      const headers = this.prepareHeaders();
      const body = this.prepareBody()
      const requestOptions = {
        method: 'POST',
        headers,
        body
      }
      clearWarnings('contactPhoneNumber')
      clearErrors('contactFirstName', 'contactLastName', 'contactPhoneNumber', 'contactEmailId', 'contactMessage');
      if (this.validateForm()) {
        fetch(`${baseUrl}${bin}`, requestOptions)
            .then(response => this.handleSuccess(response))
            .catch(error => this.handleErrors(error));
      }
      event.preventDefault();
    },
    clearOldMessages: function () {
      this.successCounter = 0
      this.firstName = "";
      this.lastName = "";
      this.emailId = "";
      this.phoneNumber = "";
      this.message = "";
      clearSuccessMessages();
      clearWarnings('contactPhoneNumber');
      clearErrors('contactFirstName', 'contactLastName', 'contactPhoneNumber', 'contactEmailId', 'contactMessage');
    }
  }
}
</script>

<style scoped>
section {
  padding: 0;
}

textarea {
  max-height: inherit;
  max-width: inherit;
}

input[type=submit] {
  all: unset;
  display: inline-block;
  padding: 10px;
  background-color: rgba(117, 71, 255);
  color: rgba(211, 194, 255);
  width: 40%;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 10px;
  text-align: center;
}

input[type=reset] {
  all: unset;
  display: inline-block;
  padding: 10px;
  background-color: rgba(211, 194, 255);
  color: blueviolet;
  width: 40%;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 10px;
  text-align: center;
}
</style>
