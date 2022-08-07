<template>
  <comp-header/>
  <!--start of body of Bio.html-->
  <section id="bio-body" class="container">
    <section>
      <h2>Education
        <button id="reload-data-button" @click="fetchDegrees"><img :src="reload" alt="reload data" height="15"
                                                                   width="15"></button>
      </h2>
    </section>
    <section id="education" class="education-grid-body">
      <picture class="education-grid-body-edupic">
        <img id="education-pic" :src="educationPic" alt="education picture">
      </picture>
    </section>
  </section>
  <!--end of body of Bio.html-->
  <comp-footer/>
</template>

<script>
import CompHeader from "./CompHeader";
import CompFooter from "./CompFooter";
import {fetchDegrees} from "@/assets/js/degrees";

export default {
  name: "CompEducation",
  mounted() {
    console.log("mounted called!")
    this.fetchDegrees();
  },
  data() {
    return {
      educationPic: require("@/assets/images/education.jpg"),
      reload: require("@/assets/images/refresh.svg")
    }
  },
  components: {CompFooter, CompHeader},
  methods: {
    fetchDegrees
  }
}
</script>

<style scoped>

#education {
  padding-bottom: 18em;
}

@media only screen and (max-width: 600px) {
  #education {
    padding-bottom: 0;
  }
}

</style>
