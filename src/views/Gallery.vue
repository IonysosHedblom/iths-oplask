<template>
  <div class="home">
    <!-- <Grid v-if="images && !searchImages" v-bind:images="images" /> -->
    <!-- <Grid v-else v-bind:images="searchImages" /> -->
    <Search @inputData="getData" :page="page" />
    <Grid v-bind:images="images" />

    <div class="buttons">
      <button @click="previousPage">Previous</button>
      <button @click="nextPage">Next</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Grid from "@/components/Grid.vue";
import Search from "@/components/Search.vue";
import * as api from "@/api";

export default {
  name: "Gallery",
  components: {
    Grid,
    Search,
  },
  data: function () {
    return {
      page: 1,
      inputData: "",
    };
  },
  computed: {
    images() {
      return this.$root.images[0];
    },
  },
  methods: {
    getData(value) {
      this.inputData = value;
    },
    async searchTest() {
      this.$root.images = [];
      const data = await api.getDataBySearch(this.inputData, this.page);
      this.$root.images.push(data.results);
    },
    nextPage() {
      if (this.page == this.$root.images[0].length - 1) {
        this.page = 1;
        this.searchTest();
      } else {
        this.page++;
        this.searchTest();
      }
    },
    previousPage() {
      if (this.page == 1) {
        this.page = this.$root.images[0].length - 1;
        this.searchTest();
      } else {
        this.page--;
        this.searchTest();
      }
    },
    async loadInitialImages() {
      const data = await api.getInitialImages();
      this.$root.images.push(data);
    },
  },
  created() {
    this.loadInitialImages();
  },
};
</script>

<style  scoped>
.home {
  max-width: 1500px;
  width: 70%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.buttons {
  margin: 50px 0;
}
</style>
