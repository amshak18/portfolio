<template>
  <comp-header/>
  <!--start of body of Interests.html-->
  <section id="interestsSection" class="container">
    <section>
      <h2>Interests and Hobbies</h2>
    </section>
    <section>
      <p id="interests">Some of my interests and hobbies include :</p>
      <!--unordered list describing the hobbies-->
      <section id="tabs">
        <ul id="hobbies">
          <li><a @click="display('crafts')">Crafts</a></li>
          <li><a @click="display('travelling')">Travelling</a></li>
          <li><a @click="display('cycling')">Cycling</a></li>
        </ul>
      </section>
      <article v-if="isCraftsDisplayed" id="crafts" class="tab-content">
        <p id="quilling">Lately, I was doing some quilling work. One of my recent work is displayed below:</p>
        <!--       including HTML5 images-->
        <picture>
          <source :srcset="craftsImageOne"/>
          <img class="craft" :src="craftsImageOne" alt="image showing craft">
        </picture>
        <picture>
          <source :srcset="craftsImageTwo"/>
          <img class="craft" :src="craftsImageTwo" alt="image showing another craft">
        </picture>
      </article>
      <article v-if="isTravellingDisplayed" id="travelling" class="tab-content">
        <p id="travel">
          I love travelling to different places, gain new experiences and explore nature. Recently, I went for whale watching in Boston.
          Here's a small clip of it:
        </p>
        <!-- adding HTML5 video-->
        <section id="videocontainer">
          <video id="livevideo" :src="interestsVideo"
                 controls>your browser does not support video tag</video>
        </section>
      </article>
      <article v-if="isCyclingDisplayed" id="cycling" class="tab-content">
        <p id="cycle">
          One of my other hobbies include cycling. Outdoor cycling is my way to go!
          Here's one of the related videos:
        </p>
        <!--embedding youtube video using an iframe-->
        <iframe src="https://www.youtube.com/embed/MRmtDjuehhk"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
      </article>
    </section>
  </section>
  <!--end of body of Interests.html-->
  <comp-footer/>
</template>

<script>
import CompHeader from "./CompHeader";
import CompFooter from "./CompFooter";

export default {
  name: "CompInterests",
  components: {CompFooter, CompHeader},
  data () {
    return {
      craftsImageOne: require("@/assets/images/1.jpeg"),
      craftsImageTwo: require("@/assets/images/2.jpeg"),
      interestsVideo: require("@/assets/video/3.mp4"),
      isCraftsDisplayed: true,
      isTravellingDisplayed: false,
      isCyclingDisplayed: false
    }
  },
  methods: {
    display(id) {
      switch (id) {
        case "crafts":
          this.isCraftsDisplayed=true;
          this.isCyclingDisplayed=false;
          this.isTravellingDisplayed=false;
          break;
        case "travelling":
          this.isCraftsDisplayed=false;
          this.isCyclingDisplayed=false;
          this.isTravellingDisplayed=true;
          break;
        case "cycling":
          this.isCraftsDisplayed=false;
          this.isCyclingDisplayed=true;
          this.isTravellingDisplayed=false;
          break;
        default:
      }
    }
  }
}
</script>

<style scoped>
#interestsSection{
  text-align: center;
}
</style>
