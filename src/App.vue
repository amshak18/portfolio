<script setup>
import CompGallery from "./components/CompGallery";
import CompHome from "./components/CompHome";
import CompEducation from "./components/CompEducation";
import CompProfession from "./components/CompProfession";
import CompInterests from "./components/CompInterests";
import {computed, ref} from "vue";
import CompContact from "@/components/CompContact";

const routes = {
  '': CompHome,
  '/': CompHome,
  '/education': CompEducation,
  '/profession': CompProfession,
  '/interests': CompInterests,
  '/gallery': CompGallery,
  '/contact-me': CompContact
}

const currentPath = ref(window.location.hash);

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/']
})

</script>

<template>
  <component :is="currentView"/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
