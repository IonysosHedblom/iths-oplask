<template>
  <form>
    <label for="search">Search for images...</label>
    <input name="search" v-model="inputData" type="text" />
    <button @click.prevent="search">CLICK</button>
    <ul>
      <li v-for="(image, index) in this.$root.images[0]" :key="index">
        {{ image.description }}
      </li>
    </ul>
  </form>
</template>

<script>
import * as api from "@/api";
export default {
  name: "Search",
  data: function () {
    return {
      inputData: "",
      page: 1,
    };
  },
  methods: {
    async search() {
      const data = await api.getDataBySearch(this.inputData, this.page);
      this.$root.images.push(data.results);
    },
    images() {
      return this.$root.randomtest;
    },
  },
};
</script>

<style scoped>
</style>