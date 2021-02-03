<template>
  <div class="home">
    <!-- <Grid v-if="images && !searchImages" v-bind:images="images" /> -->
    <!-- <Grid v-else v-bind:images="searchImages" /> -->
    <Search />
    <Grid v-bind:images="images" />

    <button @click="getInitialImages">get data</button>
  </div>
</template>

<script>
// @ is an alias to /src
import Grid from "@/components/Grid.vue";
import Search from "@/components/Search.vue";

export default {
  name: "Gallery",
  components: {
    Grid,
    Search,
  },
  data: function () {
    return {};
  },
  computed: {
    images() {
      return this.$root.images[0];
    },
  },
  methods: {
    getInitialImages() {
      // const images = this.$root.getInitialImages();
      // this.images.push(images);
      this.$root.getInitialImages();
    },
    // getSearchImages() {
    //   this.searchImages.push();
    // }
  },
};
</script>

<style  scoped>
 .home{
   max-width: 1500px;
   width: 100%;
   margin: 0 auto;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
 }
</style>
