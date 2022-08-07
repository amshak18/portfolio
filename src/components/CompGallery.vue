<template>
  <comp-header/>
  <section class="gallery">
    <picture>
      <img class="gallery-nav" :src="previous" @mousedown="reverseRotateImage" alt="">
    </picture>

    <section class="outer-container">
      <section class="card">
        <section class="card-container card-container-header">
          <h2>{{ imageGallery[0].title }}</h2>
        </section>
        <picture>
          <img class="gallery-image" :src="imageGallery[0].image" alt="{{imageName}}">
        </picture>
        <section class="card-container">
          <p id="funFact">{{ imageGallery[0].description }}</p>
        </section>
      </section>

    </section>

    <picture>
      <img class="gallery-nav" :src="next" @mousedown="rotateImage" alt="">
    </picture>

  </section>
  <comp-footer/>
</template>

<script>
import CompHeader from "./CompHeader";
import CompFooter from "./CompFooter";

export default {
  name: "CompGallery",
  data() {
    return {
      imageGallery: [
        {
          title: "India",
          description: "A beautiful landscape on the Hills of Karnataka, India",
          image: require("@/assets/images/india/india1.jpeg"),
        },
        {
          title: "India",
          description: "A picturesque scene of a famous pilgrimage destination - Dharmasthala, Karnataka, India",
          image: require("@/assets/images/india/india2.jpeg"),
        },
        {
          title: "New York",
          description: "Standing tall, the statue of liberty on the Liberty Island",
          image: require("@/assets/images/new-york/ny1.jpeg"),
        },
        {
          title: "New York",
          description: "A view of the breathtaking New York Skyline",
          image: require("@/assets/images/new-york/ny2.jpeg"),
        },
        {
          title: "New York",
          description: "The iconic Brookline Bridge where P. T Barnum brought his elephants to get the people to trust the bridge again!",
          image: require("@/assets/images/new-york/ny3.jpeg"),
        },
        {
          title: "New York",
          description: "Another view of the Brooklyn Bridge",
          image: require("@/assets/images/new-york/ny4.jpeg"),
        },
        {
          title: "New York",
          description: "Times Square. As busy as it gets!",
          image: require("@/assets/images/new-york/ny5.jpeg"),
        },
        {
          title: "Cape Cod",
          description: "The beautiful beach to relax at Cape Cod, MA",
          image: require("@/assets/images/cape-cod/capecod1.jpeg"),
        },
        {
          title: "Cape Cod",
          description: "Another relaxing view of the beach in Cape Cod. ",
          image: require("@/assets/images/cape-cod/capecod2.jpeg"),
        },
        {
          title: "Maldives",
          description: "A wonderful way to spend holidays at the beach in the Maldives island",
          image: require("@/assets/images/maldives/maldives1.jpeg"),
        },
        {
          title: "Maldives",
          description: "Another view of the beach in Maldives",
          image: require("@/assets/images/maldives/maldives2.jpeg"),
        },
        {
          title: "Maldives",
          description: "Sunset at the beach in Maldives.",
          image: require("@/assets/images/maldives/maldives3.jpeg"),
        }
      ],
      previous: require("@/assets/images/previous.svg"),
      next: require("@/assets/images/next.svg"),
      imageName: 'Macaw',
    }
  },
  methods: {
    rotateImage() {
      this.imageGallery.push(this.imageGallery.shift())
    },
    reverseRotateImage() {
      this.imageGallery.unshift(this.imageGallery.pop())
    },
    randomFact() {
      const factElement = document.getElementById("funFact");
      factElement.innerHTML = this.interestingFacts[Math.floor(Math.random() * this.interestingFacts.length)];
    }
  },
  components: {CompHeader, CompFooter}
}
</script>

<style scoped>
.gallery-nav {
  width: 30px;
  height: 30px;
  cursor: pointer;
}

.gallery-image {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

p {
  text-align: left;
}

.card {
  box-shadow: 0 4px 8px rgb(0, 0, 0, 0.4);
  border-radius: 5px;
  width: 70%;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;
  text-align: center;
}

.card-container {
  display: flex;
  flex-direction: column;
  padding: 3px;
  align-items: center;
}

.card-container-header {
  text-align: center;
}
h2 {
  text-shadow: none;
}

.outer-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.gallery {
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>
