<template>
  <input type="checkbox" id="resume-modal">
  <label for="resume-modal" class="modal-button">Download Resume</label>
  <label for="resume-modal" class="modal-background"></label>
  <section class="modal">
    <section id="resume-modal-header" class="modal-header">
      <h3>Resume</h3>
      <label for="resume-modal">
        <img
            :src="closeModal"
            width="16" height="16" alt="">
      </label>
    </section>
    <section id="resume-body">
      <iframe src="../assets/pdf/Resume.pdf"></iframe>
    </section>
  </section>
</template>

<script>
export default {
  name: "CompResume",
  data() {
    return {
      closeModal: require("@/assets/images/close-modal.svg"),
      resume: require("@/assets/pdf/Resume.pdf")
    }
  }
}
</script>

<style scoped>
section {
  padding: 0;
}

#resume-body {
  display: block;
  align-items: center;
}
.modal {
  width: 70%;
  height: 70%;
}

iframe {
  height: 30vmax;
  width: 65vmax;

}

@media only screen and (max-width: 600px) {
  iframe {
    height: 20vmax;
    width: 20vmax;

  }
}

</style>
