<template>
  <comp-header/>
  <!--start of body of Index.html-->
  <section id="index-body" class="container index-grid-body">
    <section class="index-grid-body-aboutme">
      <h2>About Me</h2>
    </section>
    <picture class="index-grid-body-pic center">
      <img :src="profilePicture" alt="Picture of Amsha Kumaraiah">
    </picture>
    <article class="index-grid-body-content1">
      <p>
        I am a software professional with 8 years of experience in Agile development methodologies. I have worked on
        high paced customer-centric projects. During this time I have led and worked on projects to completion.
        This has brought me praises for my quality of work. Having worked for the industry for quite some time, I
        decided to pursue my Masters education so that I can enhance my skills and become a better engineer overall.
      </p>
    </article>
    <article class="index-grid-body-content2">
      <p>
        During my Masters program, I have taken courses that are highly impacting and helps me progress my career.
        Few of the courses I have taken includes Business Data communication and Networks, Database implementation
        for business, Agile Software Development, Information Systems Design and Analysis, Web Application
        development
        and Data Mining. These courses are helping me learn more about software and application development and
        helping
        me focus more towards becoming a better Software Engineer. With all these experiences and new skills I am
        acquiring,
        I am looking forward to use them in a job that can benefit from my skills and provides me the opportunity to
        sharpen and
        train my skills!
      </p>
    </article>
    <section class="index-grid-body-resume">
      <comp-resume/>
    </section>
  </section>
  <!--end of body of Index.html-->
  <comp-footer/>
</template>

<script>
import CompHeader from "@/components/CompHeader";
import CompFooter from "@/components/CompFooter";
import CompResume from "@/components/CompResume";

export default {
  name: "CompHome",
  data() {
    return {
      profilePicture: require("@/assets/images/amsha.jpg")
    }
  },
  components: {CompResume, CompFooter, CompHeader}
}
</script>

<style scoped>

</style>
