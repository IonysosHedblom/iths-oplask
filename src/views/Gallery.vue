<template>
  <div class="wrapper">
    <search @submit="search" />
    <lightbox />
    <ul>
      <li v-for="(image, index) in images" :key="index">
        <Card :image="image" />
      </li>
    </ul>
  </div>
</template>

<script>
import Card from "../components/Card.vue";
import Lightbox from "../components/Lightbox.vue";
import Search from "../components/Search.vue";
import * as api from "@/api";

export default {
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
    async search() {
      this.$root.images = [];
      const data = await api.getDataBySearch(this.inputData, this.page);
      this.$root.images.push(data.results);
    },
  },
  components: { Card, Search, Lightbox },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.nav {
  color: #000;
  cursor: pointer;
}

ul {
  display: grid;
  gap: 15px;
  grid-template-columns: 270px 270px 270px 270px;
  grid-auto-rows: 350px;
}
li {
  display: grid;
  list-style: none;
}
</style>