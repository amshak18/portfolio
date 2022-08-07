<template>
  <!--using the HTML5 FOOTER element to logically separate the footer from the rest of the document-->
  <footer id="pagefooter">
    <section class="grid-footer">
        <span class="linkedin"> <a href="https://www.linkedin.com/in/amshakumaraiah/"><img :src="linkedinLogo"
                                                                                           height="25"
                                                                                           width="25"
                                                                                           alt="logo of linkedin"></a></span>
      <span class="github"> <a href="https://github.com/amshak18"> <img :src="githubLogo" height="25" width="25"
                                                                        alt="logo of github"></a></span>
      <span class="gmail"><a href="mailto:amshak@bu.edu"><img :src="gmailLogo" height="25" width="25"
                                                              alt="logo of gmail"></a></span>
      <span class="facebook"><a href="https://www.facebook.com/amsha.kumaraiah/"><img :src="facebookLogo" height="25"
                                                                                      width="25"
                                                                                      alt="logo of facebook"></a></span>
      <span class="instagram"><a href="https://www.instagram.com/amsha_kumaraiah/"><img :src="instagramLogo"
                                                                                        height="25"
                                                                                        width="25"
                                                                                        alt="logo of instagram"></a></span>
      <span class="contact">
        <comp-contact/>
      </span>
    </section>

  </footer>
</template>

<script>
import CompContact from "@/components/CompContact";
export default {
  name: "CompFooter",
  components: {CompContact},
  data() {
    return {
      linkedinLogo: require("@/assets/images/linkedin.svg"),
      githubLogo: require("@/assets/images/github.png"),
      gmailLogo: require("@/assets/images/gmail.png"),
      facebookLogo: require("@/assets/images/facebook.png"),
      instagramLogo: require("@/assets/images/instagram.png"),
      contactIcon: require("@/assets/images/email-icon.svg"),
      closeModal: require("@/assets/images/close-modal.svg")
    }
  }
}
</script>

<style scoped>

</style>
