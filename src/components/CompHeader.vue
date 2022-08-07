<template>
  <header id="pageheader">
    <nav>
      <h1 class="float-left"><a id="myname" href="#/">Amsha Kumaraiah</a></h1>
      <ul class="float-right">
        <li><span><a href="#/">Home</a></span></li>
        <li><span><a href="#/education">Education Details</a></span></li>
        <li><span><a href="#/profession">Professional Background</a></span></li>
        <li><span><a href="#/interests">Interests & Hobbies</a></span></li>
        <li><span><a href="#/gallery">Gallery</a></span></li>
      </ul>
      <section class="header-collapsable-menu">
        <span id="header-menu"><a @click="isMenuDisplayed=!isMenuDisplayed"><img :src="menuIcon" alt="menu-icon"></a></span>
        <aside v-if="isMenuDisplayed" id="menu">
          <ul>
            <li><span><a href="#/">Home</a></span></li>
            <li><span><a href="#/education">Education Details</a></span></li>
            <li><span><a href="#/profession">Professional Background</a></span></li>
            <li><span><a href="#/interests">Interests & Hobbies</a></span></li>
            <li><span><a href="#/gallery">Gallery</a></span></li>
          </ul>
        </aside>
      </section>

    </nav>
  </header>
</template>

<script>
export default {
  name: "CompHeader",
  data() {
    return {
      menuIcon: require('@/assets/images/menu.svg'),
      isMenuDisplayed: false,
    }
  }
}
</script>

<style scoped>
#header-menu {
  cursor: pointer;
}
</style>
