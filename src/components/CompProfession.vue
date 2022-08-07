<template>
  <comp-header/>
  <!--start of body of Bio.html-->
  <section id="bio-body" class="container">
    <section id="experience">
      <h2>
        Professional Experience
      </h2>
      <section id="experience-grid" class="grid-experience">
        <picture id="experience-pic" class="grid-experience-pic">
          <img id="work" :src="workPic" height="100" width="100" alt="work image">
        </picture>
        <section id="experience-details" class="grid-experience-details">
          <!--    ordered list defining the professional experience chronologically-->
          <ol id="professions-list">
            <li>
              <b class="experience-name">Tata Consultancy Services</b><br/>
              <em class="position">IT Analyst <small class="duration">(July 2019 - Jan 2022)</small></em><br/>
              <p id="tcs-responsibilities">Responsibilities:</p>
              <ul class="clients-list">
                <li>
                  Client - Glaxosmith Kline <br/>
                  Implementation & Support project for pharmaceutical client GSK to develop efficient EHS solutions
                  for the Vaccines department with advanced user interfaces.
                  <br/><em class="pill">Tech used:</em> SAP ECC 6.0 with EHP 8 and SAP S/4 HANA
                </li>
              </ul>
              <br/>
              <br/>
            </li>
            <li>
              <b class="experience-name">Accenture Solutions Pvt. Ltd.</b><br/>
              <em class="position">Application Development Senior Analyst <small class="duration">(Jan 2014 - July 2019)</small></em><br/>
              <p id="accenture-responsibilities">Responsibilities:</p>
              <ul class="clients-list">
                <li >
                  Client - Rio Tinto <br/>
                  Automation and development of efficient Industrial management & hygiene solutions for mining client
                  Rio
                  Tinto and designing customer specific applications.
                  <br/><em class="pill">Tech used:</em> SAP ECC 6.0 with EHP 6.0, Web Dynpro and Sencha based enhancements
                  <br/>
                  <br/>
                </li>
                <li>
                  Client - Hewlett Packard <br/>
                  Migration project with HP to migrate ERP solutions from Oracle to SAP.
                  <br/><em class="pill">Tech used:</em> SAP R/3 ECC 6.0
                </li>
              </ul>
            </li>
          </ol>
        </section>
      </section>
    </section>
  </section>
  <!--end of body of Bio.html-->
  <comp-footer/>
</template>

<script>
import CompHeader from "./CompHeader";
import CompFooter from "./CompFooter";

export default {
  name: "CompProfession",
  data() {
    return {
      workPic: require("@/assets/images/work.png")
    }
  },
  components: {CompFooter, CompHeader}
}
</script>

<style scoped>

</style>
