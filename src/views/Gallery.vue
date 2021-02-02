<template>
  <div class="home">
    <!-- <Grid v-if="images && !searchImages" v-bind:images="images" /> -->
    <!-- <Grid v-else v-bind:images="searchImages" /> -->
    <Search />
    <Grid />
    <Card />

    <button @click="getInitialImages">get data</button>
  </div>
</template>

<script>
// @ is an alias to /src
import Grid from "@/components/Grid.vue";
import Search from "@/components/Search.vue";
import Card from "@/components/Card.vue";

export default {
  name: "Gallery",
  components: {
    Grid,
    Search,
    Card,
  },
  data: function () {
    return {
      images: [],
      searchImages: [],
    };
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
