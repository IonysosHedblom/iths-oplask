<template>
  <div class="home">
    <!-- <Grid v-if="images && !searchImages" v-bind:images="images" /> -->
    <!-- <Grid v-else v-bind:images="searchImages" /> -->
    <Search :page="page"/>
    <Grid v-bind:images="images" />

    <button @click="getInitialImages">get data</button>
    <div>
      <button @click="previousPage">Previous</button>
      
      <button @click="nextPage">Next</button>
    </div>
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
    return {
      page: 1,
    };
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
    nextPage(){
      if(this.page == this.$root.images[0].length-1){

        this.page = 1
      } else {

        this.page ++
      }
    },
    previousPage(){
      if(this.page > 1){
        
        this.page --
      } else {
        this.page = this.$root.images[0].length-1
      }
    }

  },
};
</script>

<style  scoped>
 .home{
   max-width: 1500px;
   width: 70%;
   margin: 0 auto;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
 }
</style>
